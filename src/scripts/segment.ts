/**
 * Estado de segmento (Residential / Commercial) compartido por el selector
 * de entrada y la franja del hero. Un solo sitio donde se escribe.
 *
 * El intercambio de contenido es puramente CSS: las dos variantes se
 * renderizan en el servidor y se oculta la que no toca segun
 * `html[data-segment]`. Sin fetch, sin parpadeo y con fallback sin JS.
 */

export type SegmentId = 'residential' | 'commercial';

const STORAGE_KEY = 'sc-segment';

export function isSegmentId(value: string | null | undefined): value is SegmentId {
  return value === 'residential' || value === 'commercial';
}

export function setSegment(id: SegmentId): void {
  const root = document.documentElement;
  root.dataset.segment = id;
  root.dataset.segmentChosen = 'true';
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Storage bloqueado (modo privado): la eleccion vale para esta pagina.
  }
}

/** Conecta cualquier boton con [data-segment-choice] dentro de `scope`. */
export function bindSegmentChoices(scope: ParentNode, afterChoice?: () => void): void {
  scope.querySelectorAll<HTMLElement>('[data-segment-choice]').forEach((el) => {
    el.addEventListener('click', () => {
      const choice = el.dataset.segmentChoice;
      if (isSegmentId(choice)) {
        setSegment(choice);
        afterChoice?.();
      }
    });
  });
}
