/**
 * Imagenes generadas con IA para el segmento COMMERCIAL (acordado con el
 * cliente el 2026-09-13: residencial espera fotografia real; comercial se
 * resuelve con visualizaciones IA). Se marcan en pantalla como tal: no son
 * obra ejecutada y no se presentan como si lo fueran.
 *
 * Viven en src/assets (no en public/) para que astro:assets las sirva en
 * WebP responsivo. Cuando llegue fotografia real de un proyecto comercial
 * se sustituye la entrada correspondiente sin tocar componentes.
 */
import type { ImageMetadata } from 'astro';

import hero from '../assets/commercial/hero.jpg';
import svcCommercialExterior from '../assets/commercial/service-commercial-exterior-improvements.jpg';
import svcPaver from '../assets/commercial/service-paver-installation.jpg';
import svcCleaning from '../assets/commercial/service-cleaning-sealing-restoration.jpg';
import svcVeneer from '../assets/commercial/service-stone-veneer-architectural-surfaces.jpg';
import svcOutdoorLiving from '../assets/commercial/service-outdoor-living-spaces.jpg';
import svcPoolDeck from '../assets/commercial/service-pool-deck-transformations.jpg';
import prjPlaza from '../assets/commercial/project-retail-plaza-entrance.jpg';
import prjPoolDeck from '../assets/commercial/project-condominium-pool-deck.jpg';
import prjCampus from '../assets/commercial/project-office-campus-walkway.jpg';
import prjRestaurant from '../assets/commercial/project-restaurant-patio.jpg';
import prjCommunity from '../assets/commercial/project-community-entrance.jpg';
import prjHotel from '../assets/commercial/project-hotel-courtyard.jpg';

export interface MediaImage {
  src: ImageMetadata;
  alt: string;
}

export interface ProjectImage extends MediaImage {
  /** Pie por TIPO de proyecto, nunca nombre ni ubicacion inventados. */
  caption: string;
}

export const commercialMedia = {
  hero: {
    src: hero,
    alt: 'Commercial plaza entrance with large-format pavers and palms at golden hour',
  } satisfies MediaImage,

  /** Por slug de servicio. Solo los del grid comercial de portada. */
  services: {
    'commercial-exterior-improvements': {
      src: svcCommercialExterior,
      alt: 'Renovated office building entry with new pavers and stone veneer wall',
    },
    'paver-installation': {
      src: svcPaver,
      alt: 'Retail center walkway with precisely laid large-format pavers',
    },
    'cleaning-sealing-restoration': {
      src: svcCleaning,
      alt: 'Commercial paver surface half restored and sealed, half weathered',
    },
    'stone-veneer-architectural-surfaces': {
      src: svcVeneer,
      alt: 'Commercial building entrance clad in stacked stone veneer at dusk',
    },
    'outdoor-living-spaces': {
      src: svcOutdoorLiving,
      alt: 'Condominium courtyard with pavers, seating walls and pergola',
    },
    'pool-deck-transformations': {
      src: svcPoolDeck,
      alt: 'Resort-style condominium pool deck with light stone pavers',
    },
  } satisfies Record<string, MediaImage>,

  projects: [
    { src: prjPlaza, caption: 'Retail plaza entrance', alt: 'Retail plaza entry walkway with inlaid paver medallion' },
    { src: prjPoolDeck, caption: 'Condominium pool deck', alt: 'Condominium pool deck with travertine-look pavers and cabanas' },
    { src: prjCampus, caption: 'Office campus walkway', alt: 'Office campus pedestrian path with banded pavers and seating walls' },
    { src: prjRestaurant, caption: 'Restaurant patio', alt: 'Restaurant dining terrace with pavers, pergola and string lights' },
    { src: prjCommunity, caption: 'Community entrance', alt: 'Gated community entry drive with paver apron and stone monument walls' },
    { src: prjHotel, caption: 'Hotel courtyard', alt: 'Boutique hotel courtyard with stone fountain and pavers' },
  ] satisfies ProjectImage[],
};

export function commercialServiceImage(slug: string): MediaImage | undefined {
  return (commercialMedia.services as Record<string, MediaImage>)[slug];
}
