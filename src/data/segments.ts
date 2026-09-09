/**
 * Segmentacion Residential / Commercial (decision 5: dos opciones).
 *
 * Anadir un tercer segmento ("Custom Spaces" del boceto, si se aprueba)
 * es anadir una entrada mas a este array. Nada mas cambia.
 *
 * El orden de `homeServices` sigue el criterio acordado: 6 servicios en
 * portada por importancia, con el reparto que pide la seccion 3 del brief
 * (comercial destaca instalacion, restauracion, mantenimiento y superficies).
 */

export type SegmentId = 'residential' | 'commercial';

export interface Segment {
  id: SegmentId;
  label: string;
  /** Texto de apoyo del selector de entrada. */
  blurb: string;
  /** Slugs de los 6 servicios que se muestran en portada, en orden. */
  homeServices: string[];
}

export const segments: Segment[] = [
  {
    id: 'residential',
    label: 'Residential',
    blurb: 'Homes, pool decks and outdoor living.',
    homeServices: [
      'paver-installation',
      'pool-deck-transformations',
      'outdoor-living-spaces',
      'outdoor-kitchens',
      'cleaning-sealing-restoration',
      'stone-veneer-architectural-surfaces',
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial',
    blurb: 'Plazas, developments and common areas.',
    homeServices: [
      'commercial-exterior-improvements',
      'paver-installation',
      'cleaning-sealing-restoration',
      'stone-veneer-architectural-surfaces',
      'outdoor-living-spaces',
      'pool-deck-transformations',
    ],
  },
];

/** Orden por defecto cuando el visitante cierra el selector sin elegir. */
export const defaultHomeServices = segments[0]!.homeServices;

export function segmentById(id: string): Segment | undefined {
  return segments.find((s) => s.id === id);
}
