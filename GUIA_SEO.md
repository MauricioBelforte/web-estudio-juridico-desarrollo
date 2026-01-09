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
Sitemap: https://www.estudiolaunes.com.ar/sitemap.xml
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
      <loc>https://www.estudiolaunes.com.ar/</loc>
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
<link rel="canonical" href="https://www.estudiolaunes.com.ar/">
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

## Resumen de Implementación

1.  **Crear `robots.txt`** en la raíz: Para permitir el acceso y declarar el sitemap.
2.  **Crear `sitemap.xml`** en la raíz: Listando tus URLs importantes.
3.  **En el HTML (`<head>`):**
    *   **Esenciales:** `<title>`, `<meta name="description">`, `<meta name="viewport">`.
    *   **Indexación:** `<meta name="robots">`, `<link rel="canonical">`.
    *   **Información:** `<meta name="author">`, `<meta name="keywords">`.
    *   **Redes Sociales (Open Graph):** `og:type`, `og:title`, `og:description`, `og:image`, `og:url`.
    *   **Twitter Cards:** `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.

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
Aunque estés en GitHub, configura tu `canonical`, `og:url` y `twitter:url` con la dirección final (ej: `https://www.estudiolaunes.com.ar`).
*   **¿Por qué?** Al tener `noindex` en desarrollo, Google ignora esas etiquetas, así que no generan error. Cuando pases a producción, ya tendrás todo configurado correctamente sin tener que editar línea por línea.

---

## Plantilla HTML Base (Boilerplate SEO)

Aquí tienes un esqueleto HTML listo para copiar y pegar, con todas las etiquetas mencionadas anteriormente implementadas:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <!-- VIEWPORT: Indispensable para móviles -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- BÁSICOS SEO -->
    <title>Título de la Página | Tu Marca</title>
    <meta name="description" content="Descripción atractiva de la página para los resultados de búsqueda (aprox. 160 caracteres).">
    <meta name="keywords" content="palabra1, palabra2, servicio clave">
    <meta name="author" content="Nombre del Autor o Empresa">

    <!-- ROBOTS: Indexación -->
    <meta name="robots" content="index, follow">

    <!-- CANONICAL: URL original de esta página específica -->
    <link rel="canonical" href="https://www.tusitio.com/pagina-actual/">

    <!-- OPEN GRAPH (Facebook, WhatsApp, LinkedIn) -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.tusitio.com/pagina-actual/">
    <meta property="og:title" content="Título Atractivo para Redes">
    <meta property="og:description" content="Descripción optimizada para compartir en redes.">
    <meta property="og:image" content="https://www.tusitio.com/imagenes/imagen-para-compartir.jpg">

    <!-- TWITTER CARDS -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Título para Twitter">
    <meta name="twitter:description" content="Descripción para Twitter.">
    <meta name="twitter:image" content="https://www.tusitio.com/imagenes/imagen-para-compartir.jpg">
</head>
<body>
    <!-- Tu contenido aquí -->
</body>
</html>
```