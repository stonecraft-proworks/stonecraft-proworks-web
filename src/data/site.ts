/**
 * Datos de negocio. Fuente unica de verdad para contacto, area y redes.
 *
 * Los campos en `null` estan PENDIENTES de confirmacion del cliente.
 * No se inventan: la UI que dependa de ellos se degrada de forma visible
 * (ver MobileContactBar y ConsultationForm) en lugar de fingir que funciona.
 */
import { showMaterials } from './flags';

export interface SocialLinks {
  instagram: string | null;
  facebook: string | null;
  pinterest: string | null;
  linkedin: string | null;
  youtube: string | null;
}

export interface SiteConfig {
  name: string;
  wordmark: { primary: string; secondary: string };
  tagline: string;
  domain: string;
  url: string;
  email: string;
  region: string;
  serviceArea: string;
  licensed: boolean;
  /** PENDIENTE (decision 2): telefono principal en formato E.164, ej. '+15611234567' */
  phone: string | null;
  /** PENDIENTE (decision 2): numero de WhatsApp en formato E.164 */
  whatsapp: string | null;
  /** PENDIENTE (decision 2): direccion fisica */
  address: string | null;
  /** PENDIENTE (decision 2): URLs de redes sociales */
  social: SocialLinks;
  /**
   * PENDIENTE (decision 3): destino del formulario de consulta.
   * Sin CRM en esta fase. Cuando se decida (Formspree, endpoint propio,
   * etc.) basta con poner la URL aqui: es el unico punto a tocar.
   */
  formEndpoint: string | null;
}

export const site: SiteConfig = {
  name: 'StoneCraft ProWorks',
  wordmark: { primary: 'STONECRAFT', secondary: 'PROWORKS' },
  tagline: 'Built to last, crafted to impress.',
  domain: 'stonecraftproworks.com',
  url: 'https://stonecraftproworks.com',
  email: 'info@stonecraftproworks.com',
  region: 'South Florida',
  serviceArea: 'Palm Beach County & Surrounding Areas',
  licensed: true,
  phone: null,
  whatsapp: null,
  address: null,
  social: {
    instagram: null,
    facebook: null,
    pinterest: null,
    linkedin: null,
    youtube: null,
  },
  formEndpoint: null,
};

/** Materials sale del menu en la version publica hasta que tenga contenido. */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  ...(showMaterials ? [{ label: 'Materials', href: '/materials' }] : []),
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
