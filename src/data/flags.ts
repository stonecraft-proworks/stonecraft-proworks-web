/**
 * Visibilidad de lo PENDIENTE (acordado con el cliente 2026-10-13).
 *
 * El sitio se publica antes de tener todo el material. Para que el publico
 * no vea huecos ni listas de "lo que falta", todo lo pendiente se oculta en
 * el build de produccion. El equipo lo sigue viendo:
 *
 *   npm run dev                          huecos visibles (checklist interna)
 *   npm run build                        version publica, sin huecos
 *   PUBLIC_SHOW_PENDING=true npm run build   build de revision con huecos
 *
 * Donde hay fotografia real que sirva de sustituto, el hueco oculto se
 * reemplaza por ella (prop `fallback` de MediaSlot). Donde no, la pieza
 * desaparece y el layout se recompone sin cajas vacias.
 */
import { pavers } from './pavers';

export const showPending: boolean =
  import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_PENDING === 'true';

/**
 * /materials solo tiene contenido real cuando llegue el catalogo. Mientras
 * tanto se saca del menu, de la portada y del sitemap en la version publica.
 * Al cargar el primer paver en data/pavers.ts vuelve a aparecer solo.
 */
export const showMaterials: boolean = showPending || pavers.length > 0;
