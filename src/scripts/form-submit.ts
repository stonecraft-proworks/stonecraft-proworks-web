/**
 * Envio por fetch a `form.action` (Formspree u otro endpoint que acepte
 * JSON). El visitante no sale de la pagina: se muestra un mensaje de exito
 * o de error en `[data-form-status]`.
 *
 * Se registra DESPUES de bindFormValidation: si la validacion ya cancelo el
 * evento (hay campos invalidos) aqui no se hace nada.
 */

const EMAIL_FALLBACK = 'Something went wrong. Please try again or email us directly.';

export function bindFormSubmit(form: HTMLFormElement, successMessage: string): void {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!status || !submit || !form.action) return;

  const show = (message: string, kind: 'success' | 'error') => {
    status.textContent = message;
    status.dataset.kind = kind;
    status.hidden = false;
  };

  form.addEventListener('submit', async (event) => {
    if (event.defaultPrevented) return;
    event.preventDefault();

    submit.disabled = true;
    status.hidden = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        show(successMessage, 'success');
      } else {
        show(EMAIL_FALLBACK, 'error');
      }
    } catch {
      show(EMAIL_FALLBACK, 'error');
    } finally {
      submit.disabled = false;
    }
  });
}
