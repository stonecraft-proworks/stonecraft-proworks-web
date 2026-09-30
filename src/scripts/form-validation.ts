/**
 * Validacion de formularios compartida (consulta general y comercial).
 *
 * Es la validacion nativa del navegador (required, type=email) mas un
 * resumen de errores anunciado con aria-live, porque el mensaje nativo no
 * siempre lo lee el lector de pantalla.
 */

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export function bindFormValidation(form: HTMLFormElement, errorBox: HTMLElement): void {
  form.addEventListener('submit', (event) => {
    const invalid = Array.from(form.querySelectorAll<Field>('input, select, textarea')).filter(
      (field) => !field.checkValidity(),
    );

    form.querySelectorAll('[aria-invalid]').forEach((field) => {
      field.removeAttribute('aria-invalid');
    });

    if (invalid.length === 0) {
      errorBox.hidden = true;
      errorBox.textContent = '';
      return;
    }

    event.preventDefault();

    const list = document.createElement('ul');
    invalid.forEach((field) => {
      field.setAttribute('aria-invalid', 'true');
      const label = form.querySelector(`label[for="${field.id}"]`);
      const name = label?.textContent?.trim() ?? field.name;
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${field.id}`;
      link.textContent = `${name}: ${field.validationMessage}`;
      link.addEventListener('click', (e) => {
        e.preventDefault();
        field.focus();
      });
      item.appendChild(link);
      list.appendChild(item);
    });

    errorBox.textContent = '';
    const heading = document.createElement('p');
    heading.textContent = 'Please review the following:';
    errorBox.appendChild(heading);
    errorBox.appendChild(list);
    errorBox.hidden = false;
    invalid[0]?.focus();
  });
}
