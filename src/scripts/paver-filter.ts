/**
 * Filtro del catalogo de pavers. Mejora progresiva: sin JS los controles
 * estan ocultos (`hidden`) y se ven todos los pavers.
 *
 * Logica: dentro de un grupo las opciones se suman (OR); entre grupos se
 * restringe (AND). Cada tarjeta lleva sus valores en data-style / data-color /
 * data-finish.
 */

export function bindPaverFilter(root: HTMLElement): void {
  const controls = root.querySelector<HTMLElement>('[data-filter-controls]');
  const cards = [...root.querySelectorAll<HTMLElement>('[data-paver]')];
  const status = root.querySelector<HTMLElement>('[data-filter-status]');
  const empty = root.querySelector<HTMLElement>('[data-filter-empty]');
  const reset = root.querySelector<HTMLButtonElement>('[data-filter-reset]');
  if (!controls || cards.length === 0) return;

  controls.hidden = false;

  const checks = [...controls.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')];

  function apply(): void {
    const active = new Map<string, Set<string>>();
    for (const box of checks) {
      if (!box.checked) continue;
      const group = box.name;
      if (!active.has(group)) active.set(group, new Set());
      active.get(group)!.add(box.value);
    }

    let visible = 0;
    for (const card of cards) {
      const show = [...active].every(([group, values]) => values.has(card.dataset[group] ?? ''));
      card.hidden = !show;
      if (show) visible += 1;
    }

    if (status) {
      status.textContent = `Showing ${visible} of ${cards.length} pavers`;
    }
    if (empty) empty.hidden = visible !== 0;
    if (reset) reset.hidden = active.size === 0;
  }

  controls.addEventListener('change', apply);
  reset?.addEventListener('click', () => {
    checks.forEach((box) => (box.checked = false));
    apply();
  });
  apply();
}
