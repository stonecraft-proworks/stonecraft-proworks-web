/**
 * Los 8 servicios. Nombres y descripciones LITERALES de la seccion 3 del
 * brief. No reescribir sin aprobacion del cliente.
 */

export interface Service {
  slug: string;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: 'paver-installation',
    name: 'Paver Installation',
    description:
      'Driveways, patios, walkways and exterior surfaces installed with precision.',
  },
  {
    slug: 'pool-deck-transformations',
    name: 'Pool Deck Transformations',
    description:
      'Elegant, durable pool surroundings designed for South Florida living.',
  },
  {
    slug: 'outdoor-living-spaces',
    name: 'Outdoor Living Spaces',
    description:
      'Patios, entertainment areas and complete exterior environments.',
  },
  {
    slug: 'outdoor-kitchens',
    name: 'Outdoor Kitchens',
    description:
      'Functional and sophisticated outdoor spaces designed for gathering.',
  },
  {
    slug: 'cleaning-sealing-restoration',
    name: 'Cleaning, Sealing & Restoration',
    description:
      'Professional maintenance that protects and renews exterior surfaces.',
  },
  {
    slug: 'stone-veneer-architectural-surfaces',
    name: 'Stone Veneer & Architectural Surfaces',
    description:
      'Premium stone finishes for walls, facades and architectural details.',
  },
  {
    slug: 'pergolas-exterior-features',
    name: 'Pergolas & Exterior Features',
    description:
      'Complementary structures that add shade, function and architectural character.',
  },
  {
    slug: 'commercial-exterior-improvements',
    name: 'Commercial Exterior Improvements',
    description:
      'Professional surface and outdoor-construction solutions for commercial properties.',
  },
];

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
