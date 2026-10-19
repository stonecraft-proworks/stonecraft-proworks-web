/**
 * Imagenes generadas con IA para el segmento COMMERCIAL (acordado con el
 * cliente el 2026-09-13: residencial espera fotografia real; comercial se
 * resuelve con visualizaciones IA). Se marcan en pantalla como tal: no son
 * obra ejecutada y no se presentan como si lo fueran.
 *
 * Residencial ya recibio su primera tanda de fotografia real (2026-09-24):
 * proyectos de piscina y patios ejecutados. No llevan etiqueta porque son
 * obra real (ver componente PhotoImage, sin el aviso "AI visualization" de
 * AiImage). Solo se etiquetan por TIPO de espacio, nunca con nombre ni
 * direccion del cliente: esos datos no se entregaron. Outdoor kitchens
 * llego el 2026-10-14. Cleaning/sealing/restoration y stone veneer siguen
 * sin fotografia propia y se quedan con el hueco marcado hasta que llegue
 * material de esas categorias.
 *
 * Limpieza de fotos (pedido del cliente 2026-10-14): en las fotos de obra se
 * quitaron con IA solo objetos que hacian ruido (maquinas de limpieza de
 * piscina, mangueras, cables, sillas apiladas, recipientes). El trabajo
 * entregado (pavers, mesones, piscinas) no se altera. Originales en
 * ../photos gallery Stone craft/.
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

import resPoolDeckBefore from '../assets/residential/pool-deck-before.jpg';
import resPoolDeckAfter from '../assets/residential/pool-deck-after.jpg';
import resLapPool from '../assets/residential/lap-pool-brick-walkway.jpg';
import resLagoonPool from '../assets/residential/lagoon-pool-waterfall.jpg';
import resOceanfrontInfinity from '../assets/residential/oceanfront-infinity-pool.jpg';
import resCabanaBar from '../assets/residential/poolside-cabana-bar.jpg';
import resResortPatio from '../assets/residential/resort-style-pool-patio.jpg';
import resModernSpa from '../assets/residential/modern-pool-spa-patio.jpg';
import resSpaFireFeature from '../assets/residential/pool-spa-fire-feature.jpg';
import resOceanfrontFountains from '../assets/residential/oceanfront-pool-fountains.jpg';
import resTravertineDeck from '../assets/residential/travertine-pool-deck.jpg';
import resRaisedSpaDeck from '../assets/residential/pool-raised-spa-deck.jpg';
import resFireBowl from '../assets/residential/rectangular-pool-fire-bowl.jpg';
import resOceanfrontPaverPatio from '../assets/residential/oceanfront-paver-patio.jpg';
import resKitchenLShaped from '../assets/residential/outdoor-kitchen-l-shaped.jpg';
import resKitchenIsland from '../assets/residential/outdoor-kitchen-island.jpg';
import resKitchenBar from '../assets/residential/outdoor-kitchen-bar-counter.jpg';
import resCoveredPatio from '../assets/residential/covered-patio-pool-deck.jpg';

import resHeroOutdoorLiving from '../assets/residential/hero-outdoor-living.jpg';
import resHeroDriveway from '../assets/residential/hero-driveway-pavers.jpg';
import resHeroInstallation from '../assets/residential/hero-paver-installation.jpg';

import vizFrontBefore from '../assets/residential/front-walkway-before.jpg';
import vizFrontAfter from '../assets/residential/front-walkway-after-ai.jpg';
import vizDrivewayBefore from '../assets/residential/driveway-before.jpg';
import vizDrivewayAfter from '../assets/residential/driveway-after-ai.jpg';
import vizBackyardBefore from '../assets/residential/backyard-before.jpg';
import vizBackyardAfter from '../assets/residential/backyard-after-ai.jpg';
import vizSidePathBefore from '../assets/residential/side-path-before.jpg';
import vizSidePathAfter from '../assets/residential/side-path-after-ai.jpg';

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

export const residentialMedia = {
  /**
   * Portada residencial (pedido del cliente 2026-10-16): la foto anterior no
   * le gustaba; quiere enfasis en outdoor living y pavers en una "casa de
   * ensueno". Imagen elegida por el cliente: piscina, cocina exterior,
   * pergola y fire pit. Es una visualizacion IA, se etiqueta como tal.
   *
   * Resumen visual en movimiento (pedido 2026-10-16, referencia
   * perfectpavers.com): las imagenes rotan con fundido y zoom lento, en este
   * orden: outdoor living, driveway, colocacion de pavers. Para sumar una
   * escena basta con anadirla a este array. Driveway e instalacion
   * generadas con IA el 2026-10-19 a partir de referencias del cliente (no se
   * usaron las fotos de referencia: son de anuncios inmobiliarios).
   */
  heroSlides: [
    {
      src: resHeroOutdoorLiving,
      alt: 'Backyard at sunset with a paver pool deck, fire pit lounge and covered outdoor kitchen',
    },
    {
      src: resHeroDriveway,
      alt: 'Modern South Florida home with a wide grey paver driveway and light border band',
    },
    {
      src: resHeroInstallation,
      alt: 'Close-up of hands setting a travertine paver onto a leveled sand bed',
    },
  ] satisfies MediaImage[],

  /** Antes/despues real de una transformacion de pool deck (2026-09-24). */
  beforeAfter: {
    before: {
      src: resPoolDeckBefore,
      alt: 'Backyard pool before the deck renovation, bare dirt and sand around the shell',
    },
    after: {
      src: resPoolDeckAfter,
      alt: 'Same pool after the deck renovation, finished in large-format grey pavers',
    },
  } satisfies { before: MediaImage; after: MediaImage },

  /**
   * Visualizacion de POTENCIAL (pedido del cliente 2026-10-13): el antes son
   * fotos reales de una casa tal como esta hoy; el despues es una edicion IA
   * de esa misma foto mostrando el trabajo con pavers. Se etiqueta como
   * "AI visualization" en pantalla (CompareSlider afterKind="ai").
   * Numero de casa, placa de la puerta y matricula difuminados en ambas.
   * Originales en 04_Assets-Web-Optimizados/proyecto-tia-nicolas/.
   */
  visualizedBeforeAfter: [
    {
      caption: 'Driveway',
      before: { src: vizDrivewayBefore, alt: 'Loose gravel driveway with two parked cars in front of the house' },
      after: { src: vizDrivewayAfter, alt: 'AI visualization of the same driveway finished in herringbone pavers with a charcoal border' },
    },
    {
      caption: 'Backyard',
      before: { src: vizBackyardBefore, alt: 'Bare dirt backyard with scattered stepping stones under a large ficus tree' },
      after: { src: vizBackyardAfter, alt: 'AI visualization of the same backyard as a travertine paver patio with a dining set and planted tree ring' },
    },
    {
      caption: 'Front walkway',
      before: { src: vizFrontBefore, alt: 'Front yard with a narrow plain concrete walkway to the entry' },
      after: { src: vizFrontAfter, alt: 'AI visualization of the same front yard with a wider travertine paver walkway and charcoal border' },
    },
    {
      caption: 'Side path',
      before: { src: vizSidePathBefore, alt: 'Side yard of loose gravel and concrete stepping stones between two fences' },
      after: { src: vizSidePathAfter, alt: 'AI visualization of the same side yard paved wall to wall with sand-colored pavers' },
    },
  ] satisfies { caption: string; before: MediaImage; after: MediaImage }[],

  /**
   * Fotografia real que ocupa huecos pendientes en la version publica (ver
   * data/flags.ts). Son obra entregada que ya vive en la galeria; se usan
   * aqui hasta que llegue el asset especifico de cada hueco.
   */
  standIns: {
    hero: {
      src: resResortPatio,
      alt: 'Resort-style pool patio with light travertine coping and palm landscaping',
    },
    intro: {
      src: resRaisedSpaDeck,
      alt: 'Pool with raised spa and travertine paver deck in a tropical yard',
    },
    cta: {
      src: resSpaFireFeature,
      alt: 'Pool and spa with lit fire bowls on a marble-look paver patio',
    },
  } satisfies Record<string, MediaImage>,

  /** Por slug de servicio. Solo donde hay fotografia real que lo represente. */
  services: {
    'pool-deck-transformations': {
      src: resTravertineDeck,
      alt: 'Curved travertine pool deck with paver steps into the water',
    },
    'outdoor-living-spaces': {
      src: resCabanaBar,
      alt: 'Covered outdoor bar and lounge with paver and turf-inlay flooring',
    },
    'paver-installation': {
      src: resOceanfrontPaverPatio,
      alt: 'Oceanfront paver patio with a checkerboard paver and turf pattern',
    },
    'pergolas-exterior-features': {
      src: resFireBowl,
      alt: 'Rectangular pool with raised spa and fire bowl on marble-look pavers',
    },
    'outdoor-kitchens': {
      src: resKitchenLShaped,
      alt: 'L-shaped outdoor kitchen with built-in grill, black granite counters and stone-look cabinets',
    },
  } satisfies Record<string, MediaImage>,

  projects: [
    { src: resLapPool, caption: 'Lap pool & paver walkway', alt: 'Brick paver walkway beside a narrow lap pool with garden statuary' },
    { src: resKitchenLShaped, caption: 'Outdoor kitchen', alt: 'L-shaped outdoor kitchen with built-in grill, black granite counters and stone-look cabinets' },
    { src: resOceanfrontInfinity, caption: 'Oceanfront pool deck', alt: 'Oceanfront infinity pool with large-format paver decking' },
    { src: resCabanaBar, caption: 'Poolside bar & lounge', alt: 'Covered poolside bar and lounge with paver and turf-inlay flooring' },
    { src: resCoveredPatio, caption: 'Pool deck & covered patio', alt: 'Marble paver pool deck beside a covered patio with stone columns and artificial turf' },
    { src: resLagoonPool, caption: 'Tropical lagoon pool', alt: 'Freeform lagoon pool with a stone waterfall and thatched-roof cabana' },
    { src: resKitchenIsland, caption: 'Outdoor kitchen & bar island', alt: 'Outdoor kitchen with grill and a black granite bar island on marble pavers' },
    { src: resResortPatio, caption: 'Resort-style pool patio', alt: 'Resort-style pool patio with light travertine coping and palm landscaping' },
    { src: resModernSpa, caption: 'Modern pool & spa patio', alt: 'Modern pool and raised spa with turf-striped paver patio' },
    { src: resKitchenBar, caption: 'Outdoor kitchen bar counter', alt: 'Outdoor kitchen bar counter in black granite with built-in grill and marble pavers' },
    { src: resSpaFireFeature, caption: 'Pool, spa & fire feature', alt: 'Pool and spa with lit fire bowls on a marble-look paver patio' },
    { src: resOceanfrontFountains, caption: 'Oceanfront pool with fountains', alt: 'Oceanfront pool with fountain jets and glass-tile waterline' },
    { src: resTravertineDeck, caption: 'Travertine pool deck', alt: 'Curved travertine pool deck with paver steps into the water' },
    { src: resRaisedSpaDeck, caption: 'Pool & raised spa deck', alt: 'Pool with raised spa and travertine paver deck in a tropical yard' },
    { src: resFireBowl, caption: 'Pool & spa with fire bowl', alt: 'Rectangular pool with raised spa and fire bowl on marble-look pavers' },
    { src: resOceanfrontPaverPatio, caption: 'Oceanfront paver patio', alt: 'Oceanfront infinity pool with a checkerboard paver and turf patio' },
  ] satisfies ProjectImage[],
};

export function residentialServiceImage(slug: string): MediaImage | undefined {
  return (residentialMedia.services as Record<string, MediaImage>)[slug];
}
