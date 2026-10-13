/**
 * Catalogo de pavers. Fuente unica de verdad del catalogo.
 *
 * PENDIENTE: el cliente aun no entrega el contenido. `pavers` esta vacio a
 * proposito: no se inventan productos, medidas ni colores. Mientras este
 * vacio, PaverCatalog muestra la lista de lo que falta (`catalogChecklist`).
 *
 * Para cargar un paver basta con anadir una entrada al array. Las opciones de
 * filtro se derivan de los datos (ver `filterFacets`): no hay listas de
 * estilos o colores escritas a mano que puedan desincronizarse.
 *
 * Marcas de fabricante: `manufacturer` solo debe rellenarse cuando el cliente
 * confirme distribucion autorizada (decision 12). Hasta entonces, vacio.
 */
import type { ImageMetadata } from 'astro';

export interface Paver {
  slug: string;
  /** Nombre comercial del producto tal como lo entrega el cliente. */
  name: string;
  /** Familia de estilo, ej. el cliente decide la taxonomia. */
  style: string;
  /** Color o gama de color. */
  color: string;
  /** Acabado superficial. */
  finish: string;
  /** Medida o formato, texto libre tal como viene de la ficha. */
  size?: string;
  /** Usos recomendados: driveways, pool decks, patios... */
  uses?: string[];
  manufacturer?: string;
  image: { src: ImageMetadata; alt: string };
}

/** Atributos por los que se puede filtrar. Cambiar aqui anade un grupo. */
export const filterKeys = ['style', 'color', 'finish'] as const;
export type FilterKey = (typeof filterKeys)[number];

export const filterLabels: Record<FilterKey, string> = {
  style: 'Style',
  color: 'Color',
  finish: 'Finish',
};

export const pavers: Paver[] = [];

export interface FilterFacet {
  key: FilterKey;
  label: string;
  options: string[];
}

/** Grupos de filtro con las opciones realmente presentes en `list`. */
export function filterFacets(list: Paver[] = pavers): FilterFacet[] {
  return filterKeys
    .map((key) => ({
      key,
      label: filterLabels[key],
      options: [...new Set(list.map((p) => p[key]))].sort((a, b) => a.localeCompare(b)),
    }))
    .filter((facet) => facet.options.length > 1);
}

/** Lo que el cliente debe entregar por cada paver. Sirve de checklist. */
export const catalogChecklist = [
  'Product name and the style / color / finish taxonomy to filter by',
  'One high-resolution photo per paver (swatch or installed)',
  'Size / format and recommended uses for each paver',
  'Confirmation of authorised distribution before showing any manufacturer name or logo',
];
