# StoneCraft ProWorks — sitio web

Astro + Tailwind CSS v4 + TypeScript estricto. Sitio estatico, sin CMS ni CRM
en esta fase.

## Comandos

    npm run dev        servidor de desarrollo
    npm run build      build de produccion en dist/
    npm run preview    sirve el build
    npm run typecheck  astro check

## Fuentes de verdad

1. `../01_Brand/09-Brand-Guidelines` manda en color y tipografia.
2. `../02_Brief-Referencias/*.pdf` manda en estructura.
3. `../02_Brief-Referencias/Stonecraft Website Boceto.jpeg` manda en
   informacion y diseno visual.

## Pendientes bloqueantes

Todo lo pendiente esta marcado en el codigo, nunca inventado.

**Version publica vs. interna** (acordado 2026-10-13, `src/data/flags.ts`):
el publico nunca ve huecos.

    npm run dev                                huecos visibles (checklist interna)
    npm run build                              version publica, sin huecos
    PUBLIC_SHOW_PENDING=true npm run build     build de revision con huecos

En la version publica: hero, intro y CTA usan fotografia real ya entregada
como sustituto (`residentialMedia.standIns`); las tarjetas de servicio sin
foto se quitan de la portada; `/materials` sale del menu, la portada y el
sitemap (vuelve sola al cargar el primer paver); "Watch Our Story" y la
seccion del video en `/about` no se muestran.

**Antes/despues de potencial** (pedido del cliente 2026-10-13): casa de la tia
de Nicolas tal como esta hoy (foto real) frente a una edicion IA de la misma
foto con pavers (Nano Banana Pro). 4 pares en
`residentialMedia.visualizedBeforeAfter`, mostrados bajo el Before & After
real con `src/components/CompareSlider.astro` y la etiqueta
"After: AI visualization". Numero de casa, placa y matricula difuminados.
Originales sin difuminar en `../04_Assets-Web-Optimizados/proyecto-tia-nicolas/`.

- **Fotografia y video** — `src/components/MediaSlot.astro` marca cada hueco
  con el asset exacto que falta. El marcado final del `<video>` del hero ya
  esta escrito y comentado en `src/components/Hero.astro`.
  Segmento **Commercial** resuelto con visualizaciones IA (acordado el
  2026-09-13): manifiesto en `src/data/media.ts`, archivos en
  `src/assets/commercial/`, etiqueta "AI visualization" en pantalla via
  `src/components/AiImage.astro`. Residencial, `/services`, intro,
  before/after y CTA siguen con hueco hasta recibir fotografia real.
- **Datos de contacto** — `src/data/site.ts`. Falta el telefono (y demas datos
  de contacto, etc.): sin el, la barra movil Call/Text/WhatsApp no se
  renderiza.
- **Redes sociales** — `src/data/site.ts`. Faltan las URLs de las redes.
- **Formulario de contacto de la parte Commercial** — desarrollado (2026-09-30): bloque
  `src/components/CommercialInquiry.astro` en la portada, visible solo en el segmento
  Commercial, con un boton que abre el formulario en un `<dialog>`. Sin JS el boton es
  un enlace a `/contact`. Validacion compartida en `src/scripts/form-validation.ts`.
  Su envio depende de `site.formEndpoint` (ver abajo). Sin verificar en navegador:
  el build local esta bloqueado por una politica de Application Control de Windows.
- **Catalogo de pavers** — estructura desarrollada (2026-09-30) dentro de
  `/materials`: `src/components/PaverCatalog.astro`, datos en
  `src/data/pavers.ts` (array `pavers` VACIO a proposito), filtros por
  style/color/finish derivados de los datos (`src/scripts/paver-filter.ts`,
  mejora progresiva). Sin contenido muestra la lista de entregables
  (`catalogChecklist`) y huecos. Falta que el cliente entregue productos,
  fotos, taxonomia y confirmacion de marcas. Sin verificar con datos reales.
- **Destino del formulario** — `site.formEndpoint`. Mientras sea `null` el
  envio queda deshabilitado con aviso visible y se ofrece el correo.
- **Marcas de fabricante** — no se reproduce ninguna hasta confirmar
  autorizacion y recibir los archivos.
- **Tercer segmento** — si se aprueba "Custom Spaces", se anade una entrada
  a `src/data/segments.ts`.

## Decisiones que conviene no deshacer sin medir

- La regla de intercambio por segmento vive FUERA de `@layer` en
  `src/styles/global.css`: los estilos scoped de Astro no estan capados y
  ganarian a la regla.
- Warm Taupe sobre Warm Cream mide 2.69:1. Solo para acentos graficos,
  nunca para texto ni botones.
- La franja del hero lleva fondo solido: con transparencia el contraste
  dependia del fotograma del video.
