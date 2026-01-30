# Guía Rápida de SEO Técnico para Desarrolladores

Esta guía está pensada para que tengas siempre a mano los conceptos clave del SEO técnico. Aquí aprenderás de forma sencilla cómo configurar tu web para que Google y las redes sociales la entiendan perfectamente.

---

## 1. Robots: Controlando a los buscadores

Los "robots" (o arañas) son los programas de los buscadores que recorren internet. Tenemos dos formas de darles órdenes:

### A. El archivo `robots.txt` (El Portero del Edificio)
**Ubicación:** En la raíz del sitio (ej: `tusitio.com/robots.txt`).
**Función:** Decide quién entra al sitio y a qué carpetas tiene prohibido pasar.

**Ejemplo:**
```plaintext
User-agent: *          <-- Aplica a TODOS los robots
Allow: /               <-- Tienen permiso para entrar a todo el sitio
Disallow: /privado/    <-- (Opcional) Prohibido entrar a la carpeta "privado"

# Es buena práctica indicar aquí dónde está el mapa
Sitemap: https://estudiolaunes.com.ar/sitemap.xml
```

### B. La etiqueta `<meta name="robots">` (El Guía de la Habitación)
**Ubicación:** En el `<head>` de cada archivo HTML.
**Función:** Una vez que el robot entró a una página específica, le dice qué hacer con ella.

**Ejemplo:**
```html
<meta name="robots" content="index, follow">
```
*   **index:** "Guarda esta página en tu base de datos (índice) para mostrarla en búsquedas".
*   **noindex:** "No muestres esta página en Google" (útil para páginas de 'gracias' o admin).
*   **follow:** "Sigue los enlaces que hay aquí para descubrir otras páginas".
*   **nofollow:** "No sigas los enlaces de esta página".

---

## 2. Sitemap.xml (El Mapa Turístico)

**Ubicación:** Generalmente en la raíz (`tusitio.com/sitemap.xml`).
**Función:** Es una lista en formato XML de todas las páginas que quieres que Google encuentre.

**¿Por qué es necesario?**
A veces los robots no encuentran todas las páginas si no están bien enlazadas entre sí. El Sitemap es como entregarles un mapa turístico para asegurarse de que visiten todos los puntos de interés, incluso los más escondidos.

**Ejemplo:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://estudiolaunes.com.ar/</loc>
      <lastmod>2024-05-16</lastmod> <!-- Fecha de última modificación -->
   </url>
   <!-- Aquí irían otras páginas internas si las tuvieras -->
</urlset>
```
*   **Tip:** Existen generadores online (como xml-sitemaps.com) que crean este archivo automáticamente.

---

## 3. Canonical (La Etiqueta de "Original")

**Ubicación:** En el `<head>` del HTML.
**Función:** Evita penalizaciones por **contenido duplicado**.

Para Google, estas son páginas distintas:
1. `estudiolaunes.com.ar`
2. `www.estudiolaunes.com.ar`
3. `www.estudiolaunes.com.ar/index.html`

Si Google ve tres páginas idénticas, divide la reputación entre las tres. La etiqueta `canonical` le dice cuál es la versión oficial.

**Ejemplo:**
```html
<link rel="canonical" href="https://estudiolaunes.com.ar/">
```
**Traducción:** "Google, no importa por cuál de las variantes hayas entrado, la URL que debes posicionar y a la que debes sumar la reputación es esta".

---

## 4. Open Graph (Redes Sociales)

**Ubicación:** En el `<head>` del HTML.
**Función:** Son la "tarjeta de presentación" de tu web en redes sociales.

Cuando compartes un link en WhatsApp, Facebook o LinkedIn, estas plataformas buscan estas etiquetas para armar la vista previa con imagen y texto.

**Ejemplo:**
```html
<meta property="og:type" content="website">
<meta property="og:title" content="Estudio Jurídico | Launes & Asociados">
<meta property="og:description" content="Asesoramiento legal integral...">
<meta property="og:image" content="https://www.estudiolaunes.com.ar/imagenes/logoyletras.png">
```
*   **og:title:** El título en negrita de la tarjeta.
*   **og:description:** El texto descriptivo debajo.
*   **og:image:** La imagen que se muestra (Crucial para llamar la atención).

---

## 5. Twitter Cards (Etiquetas Específicas)

Aunque Twitter puede leer las etiquetas Open Graph, tiene sus propias etiquetas ("Twitter Cards") que te permiten mayor control, como definir si la imagen se ve pequeña o grande.

**Ejemplo:**
```html
<meta property="twitter:card" content="summary_large_image"> <!-- Tarjeta con imagen grande -->
<meta property="twitter:title" content="Estudio Jurídico | Launes & Asociados">
<meta property="twitter:description" content="Asesoramiento legal integral...">
<meta property="twitter:image" content="https://www.estudiolaunes.com.ar/imagenes/logoyletras.png">
```

---

## 6. Otras Meta Etiquetas Clave

Además de las anteriores, estas son fundamentales para el navegador y Google:

*   **Description:** `<meta name="description" content="...">`
    *   Es el resumen (aprox. 160 caracteres) que aparece en los resultados de Google bajo el título. Vital para convencer al usuario de entrar.
*   **Keywords:** `<meta name="keywords" content="...">`
    *   Lista de palabras clave separadas por comas.
*   **Author:** `<meta name="author" content="...">`
    *   Indica quién creó la página (persona o empresa). Aunque no afecta directamente el ranking, es útil para dar crédito y transparencia.
*   **Viewport:** `<meta name="viewport" content="width=device-width, initial-scale=1">`
    *   Indispensable para que el sitio sea "Responsive" y se adapte a celulares.

---

## 7. Flujo de Trabajo: Desarrollo (GitHub) vs. Producción

Es común desarrollar la web en un entorno de prueba (como GitHub Pages) antes de subirla al hosting oficial. Para evitar que Google indexe tu web a medio terminar, sigue este flujo:

### Paso 1: En Desarrollo (GitHub)
Mientras trabajas, bloquea los robots para que no guarden esta versión.
```html
<!-- Desplegada en Github -->
<meta name="robots" content="noindex, nofollow">
```

### Paso 2: En Producción (Hosting Oficial)
Cuando subas la web a tu dominio final, permite la entrada a Google.
```html
<!-- Desplegada en Hosting Oficial -->
<meta name="robots" content="index, follow">
```

### ¿Qué pasa con las URLs (Canonical y Redes)?
**Déjalas apuntando siempre al dominio oficial.**
Aunque estés en GitHub, configura tu `canonical`, `og:url` y `twitter:url` con la dirección final (ej: `https://estudiolaunes.com.ar`).
*   **¿Por qué?** Al tener `noindex` en desarrollo, Google ignora esas etiquetas, así que no generan error. Cuando pases a producción, ya tendrás todo configurado correctamente sin tener que editar línea por línea.

---

## 8. Imágenes y Atributo Alt

**Ubicación:** En la etiqueta `<img>`.
**Función:** Describe el contenido de la imagen para Google y usuarios con lectores de pantalla.

Google no puede "ver" las imágenes como un humano, por lo que necesita el texto alternativo para entender su contenido. Además, es crucial para la accesibilidad web.

**Ejemplo:**
```html
<a href="https://www.instagram.com/estudiolaunes" target="_blank"><img src="imagenes/instagram.png" alt="Instagram"></a>
```

---

## 9. Optimización de Rendimiento y Core Web Vitals (NUEVO)

Google no solo se fija en el contenido, sino también en la **experiencia del usuario** al navegar tu web. Las "Core Web Vitals" son métricas que miden la velocidad de carga, la interactividad y la estabilidad visual. Mejorarlas puede darte un impulso en los rankings.

### A. Datos Estructurados (Schema.org) - El DNI de tu negocio

**Función:** Es un código (normalmente JSON-LD) que le explica a Google de qué trata tu negocio de forma estructurada. No es solo texto, es un "Servicio Legal" con dirección, teléfono, etc. Esto es **crucial** para el SEO local y para aparecer en fichas de negocio enriquecidas.

**Ubicación:** En el `<head>` del HTML, dentro de una etiqueta `<script type="application/ld+json">`.

**Ejemplo (para un estudio jurídico):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Estudio Jurídico Launes & Asociados",
  "image": "https://estudiolaunes.com.ar/imagenes/logoyletras.png",
  "url": "https://estudiolaunes.com.ar/",
  "telephone": "+54 9 11 2450-2746",
  "description": "Asesoramiento legal integral a empresas y particulares en Argentina y Uruguay."
}
</script>
```

### B. Evitar Saltos en el Diseño (CLS - Cumulative Layout Shift)

**El Problema:** La página carga y, de repente, los elementos (texto, botones) se mueven porque una imagen acaba de aparecer. Esto es molesto y Google lo penaliza.

**La Solución:** Siempre especifica el ancho (`width`) y alto (`height`) de tus imágenes en el HTML. El navegador reservará ese espacio y evitará que el diseño "salte".

```html
<img src="imagenes/logo.png" alt="Logo del Estudio" width="50" height="50">
```

### C. Carga Rápida de Imágenes (Lazy Loading)

**El Problema:** Tu página intenta cargar todas las imágenes a la vez, incluso las que están al final (como en el footer). Esto ralentiza la carga inicial.

**La Solución:** Usa el atributo `loading="lazy"` para las imágenes que no son visibles al principio. El navegador las cargará solo cuando el usuario se acerque a ellas.

```html
<img src="imagenes/whatsapp.png" alt="WhatsApp" width="50" height="50" loading="lazy">
```

### D. Optimizar la Carga de Fuentes (LCP - Largest Contentful Paint)

**El Problema:** El navegador espera a descargar una fuente personalizada (`@font-face`) antes de mostrar el texto, lo que deja partes de la página en blanco por un momento.

**La Solución:** Agrega `font-display: swap;` a tu declaración `@font-face` en el CSS. Esto le dice al navegador que muestre el texto con una fuente de sistema inmediatamente y la cambie por la tuya cuando termine de descargar.

```css
@font-face {
    font-family: 'Felixti';
    src: url('../fuentes/Felixti.woff2') format('woff2');
    font-display: swap; /* <--- Agrega esto */
}
```

---

## 10. Estrategia H1 con Imágenes (Visually Hidden)

**El Problema:** A veces el diseño requiere que el título principal sea un logotipo o una imagen compleja (SVG), pero Google necesita texto real en una etiqueta `<h1>` para entender de qué trata la página.

**La Solución:** Usar la técnica "Visually Hidden". Esto oculta el texto a los ojos del usuario (para no romper el diseño) pero lo deja visible para Google y lectores de pantalla.

```html
<!-- Texto para Google (Oculto visualmente) -->
<h1 class="visually-hidden">Estudio Jurídico Launes & Asociados - Abogados en Argentina y Uruguay</h1>

<!-- Imagen para el Usuario (Visible) -->
<div class="titulo-principal">
    <svg>...</svg> <!-- O tu etiqueta <img> -->
</div>
```