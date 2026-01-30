# Guía Rápida de SEO Técnico para Desarrolladores

Esta guía está pensada para que tengas siempre a mano los conceptos clave del SEO técnico. Aquí aprenderás de forma sencilla cómo configurar tu web para que Google y las redes sociales la entiendan perfectamente.

---

## 1. HTML Semántico: La Base de Todo

Antes de escribir una sola línea de contenido, la estructura de tu página debe tener sentido. El HTML semántico utiliza etiquetas que describen su propio significado tanto para el navegador como para el desarrollador y, lo más importante, para Google. No es lo mismo usar un `<div>` que usar un `<header>`.

**¿Por qué es crucial para el SEO?**
Google utiliza estas etiquetas para entender la estructura y el propósito de cada parte de tu página. Un `<nav>` contiene la navegación principal, un `<main>` el contenido central, y un `<footer>` el pie de página. Usar estas etiquetas correctamente (`<header>`, `<footer>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`) le da a Google un mapa claro de tu sitio, mejorando su capacidad para indexarlo correctamente.

**Ejemplo:**

**Mal (no semántico):**
```html
<div id="header">...</div>
<div id="main-content">
  <div class="article">...</div>
</div>
<div id="footer">...</div>
```

**Bien (semántico):**
```html
<header>...</header>
<main>
  <article>...</article>
</main>
<footer>...</footer>
```
---
## 2. Jerarquía de Encabezados: El Esqueleto de tu Contenido

Una vez que la estructura es semántica, la jerarquía del contenido debe ser lógica y clara. Los encabezados (`<h1>`, `<h2>`, `<h3>`, etc.) no son solo para cambiar el tamaño del texto; le dicen a Google cuál es la importancia y la relación de cada sección.

-   **Un solo `<h1>` por página:** Es el título principal y debe resumir el contenido de toda la página. Solo puede haber uno.
-   **Orden lógico:** La estructura debe ser como el índice de un libro. No saltes niveles (por ejemplo, de un `<h1>` a un `<h3>`). Lo correcto es `<h1>` -> `<h2>` -> `<h3>`.
-   **Palabras clave:** Usa tus palabras clave de forma natural en los encabezados, especialmente en el `<h1>` y los `<h2>`.

### Caso Especial: Cuando el `<h1>` es una Imagen (Técnica Visually Hidden)

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
---

## 3. Meta Etiquetas Esenciales: El ADN de tu página

Antes de dar órdenes a los robots, debemos definir la identidad de nuestra página. Estas etiquetas van en el `<head>` y son la primera impresión que Google y los usuarios tienen de tu sitio.

*   **Title:** `<title>Título de la Página</title>`
    *   Es el texto que aparece en la pestaña del navegador y el título principal (en azul) en los resultados de Google. Es el factor SEO más importante en la página. Debe ser descriptivo y único.

*   **Description:** `<meta name="description" content="...">`
    *   Es el resumen (aprox. 160 caracteres) que aparece en los resultados de Google bajo el título. No afecta directamente el ranking, pero es vital para convencer al usuario de hacer clic.

*   **Keywords:** `<meta name="keywords" content="...">`
    *   Lista de palabras clave separadas por comas. Aunque Google le da menos importancia que antes, sigue siendo útil para organizar los temas de la página.

*   **Author:** `<meta name="author" content="...">`
    *   Indica quién creó la página (persona o empresa). Aporta transparencia.

*   **Viewport:** `<meta name="viewport" content="width=device-width, initial-scale=1">`
    *   Indispensable para que el sitio sea "Responsive" y se adapte correctamente a dispositivos móviles.

---

## 4. Robots y Flujo de Trabajo: Indicando el Camino a Google

Ahora que la página tiene su identidad, le diremos a los "robots" (o arañas) de los buscadores cómo deben comportarse. Esto es crucial para evitar que Google indexe versiones de prueba.

### A. El archivo `robots.txt` (El Portero del Edificio)
**Ubicación:** En la raíz del sitio (ej: `tusitio.com/robots.txt`).
**Función:** Da órdenes generales a los robots. Decide quién entra al sitio y a qué carpetas tiene prohibido pasar.

**Ejemplo:**
```plaintext
User-agent: *          <-- Aplica a TODOS los robots
Allow: /               <-- Tienen permiso para entrar a todo el sitio

# Es buena práctica indicar aquí dónde está el mapa del sitio
Sitemap: https://puertosprimemeat.ar/sitemap.xml
```

### B. La etiqueta `<meta name="robots">` (La Orden para cada Página)
**Ubicación:** En el `<head>` de cada archivo HTML.
**Función:** Da la orden específica para ESA página. Aquí es donde manejamos el flujo de desarrollo y producción.

**Flujo de Trabajo Correcto (Método GitHub):**

Para facilitar el cambio entre el entorno de desarrollo (GitHub) y el de producción (hosting oficial), dejaremos ambas etiquetas en el código. La que no se usa, quedará comentada.

**Por defecto (para desarrollo en GitHub):**
Deja activa la etiqueta `noindex` para bloquear a Google.
```html
<!-- Desplegada en Github (Bloquea a Google) -->
<meta name="robots" content="noindex, nofollow">

<!-- Desplegada en Hosting Oficial (Permite a Google) - DESCOMENTAR AL SUBIR -->
<!-- <meta name="robots" content="index, follow"> -->
```
*   **noindex:** "No muestres esta página en los resultados de Google".
*   **nofollow:** "No sigas los enlaces de esta página".

**Paso 2: En Producción (Hosting Oficial)**
Cuando subas la web a tu dominio final, permite la entrada a Google para que la posicione.
```html
<!-- Desplegada en Hosting Oficial -->
<meta name="robots" content="index, follow">
```
*   **index:** "Guarda esta página en tu índice para mostrarla en búsquedas".
*   **follow:** "Sigue los enlaces que hay aquí para descubrir otras páginas".

**Importante:** Las otras etiquetas como `canonical` y `og:url` siempre deben apuntar al dominio de producción final, incluso cuando estás en desarrollo. El `noindex` evitará cualquier problema.

---

## 5. Sitemap.xml (El Mapa Turístico)

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

## 6. Canonical (La Etiqueta de "Original")

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

## 7. Open Graph (Redes Sociales)

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

## 8. Twitter Cards (Etiquetas Específicas)

Aunque Twitter puede leer las etiquetas Open Graph, tiene sus propias etiquetas ("Twitter Cards") que te permiten mayor control, como definir si la imagen se ve pequeña o grande.

**Ejemplo:**
```html
<meta property="twitter:card" content="summary_large_image"> <!-- Tarjeta con imagen grande -->
<meta property="twitter:title" content="Estudio Jurídico | Launes & Asociados">
<meta property="twitter:description" content="Asesoramiento legal integral...">
<meta property="twitter:image" content="https://www.estudiolaunes.com.ar/imagenes/logoyletras.png">
```

---

## 9. Imágenes y Atributo Alt

**Ubicación:** En la etiqueta `<img>`.
**Función:** Describe el contenido de la imagen para Google y usuarios con lectores de pantalla.

Google no puede "ver" las imágenes como un humano, por lo que necesita el texto alternativo para entender su contenido. Además, es crucial para la accesibilidad web.

**Ejemplo:**
```html
<a href="https://www.instagram.com/estudiolaunes" target="_blank"><img src="imagenes/instagram.png" alt="Instagram"></a>
```

---

## 10. Optimización de Rendimiento y Core Web Vitals (NUEVO)

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

## 11. Accesibilidad y SEO: El Atributo `aria-label`

**Ubicación:** En etiquetas de enlace (`<a>`) o botones (`<button>`) que no tienen texto visible.
**Función:** Proporciona una descripción textual para elementos que son puramente visuales, como un ícono.

Google valora cada vez más la accesibilidad. Un sitio accesible es un sitio bien estructurado. El `aria-label` es crucial por dos razones:
1.  **Accesibilidad:** Permite que los usuarios con lectores de pantalla entiendan qué hace un botón o a dónde lleva un enlace de ícono.
2.  **SEO:** Le da a Google el "texto ancla" que le falta a un enlace de ícono, ayudándole a entender el contexto y el propósito del enlace.

**Ejemplo:**
Un enlace que solo contiene un ícono de Instagram es invisible para Google.

**Mal:**
```html
<!-- Google y los lectores de pantalla no saben qué es esto -->
<a href="https://www.instagram.com/puertosprimemeat" target="_blank">
    <svg>...</svg>
</a>
```

**Bien:**
```html
<!-- Ahora Google y los lectores de pantalla entienden que este enlace lleva a Instagram -->
<a href="https://www.instagram.com/puertosprimemeat" target="_blank" aria-label="Instagram de Puertos Prime Meat">
    <svg>...</svg>
</a>
```

---

## 12. URLs SEO-Friendly: El Camino Correcto

**Ubicación:** En la estructura de carpetas y nombres de archivo.
**Función:** Las URLs son la primera impresión que Google tiene de qué trata una página. Una URL clara y descriptiva ayuda tanto a Google como a los usuarios a entender el contenido.

**¿Por qué importa?**
Google utiliza la URL como parte de su análisis. Si la URL contiene palabras clave relacionadas con el contenido, es una señal positiva. Además, los usuarios confían más en URLs limpias y legibles.

**Ejemplo:**

**Mal (confuso):**
```
https://estudiolaunes.com.ar/pagina.php?id=123&cat=servicios
https://estudiolaunes.com.ar/index.php?p=derecho-civil
```

**Bien (descriptivo y limpio):**
```
https://estudiolaunes.com.ar/servicios/derecho-civil/
https://estudiolaunes.com.ar/blog/como-redactar-un-testamento/
```

**Reglas de oro:**
- Usa guiones `-` para separar palabras, nunca guiones bajos `_` o espacios
- Incluye palabras clave relevantes cuando tenga sentido
- Mantén las URLs cortas y descriptivas (máximo 75 caracteres)
- Usa siempre minúsculas
- Evita parámetros de consulta (`?id=`, `&cat=`) siempre que sea posible
- Una vez que publiques una URL, no la cambies sin redirigir (301) la antigua a la nueva

---

## 13. Investigación de Palabras Clave y Estrategia

**Ubicación:** En todo el contenido (títulos, descripción, encabezados, párrafos).
**Función:** Conectar tu web con lo que la gente realmente busca en Google.

**¿Por qué es crucial?**
De nada sirve tener un contenido perfecto si nadie lo busca. Google necesita entender que tu página responde a las búsquedas de los usuarios. Las palabras clave son el puente entre lo que escribes y lo que buscan.

**¿Cómo hacerlo?**

1. **Identifica tu palabra clave principal:** La más importante para la página (ej: "abogado de derecho laboral en Buenos Aires")
2. **Agrupa palabras relacionadas (LSI keywords):** Variaciones naturales (ej: "abogado laboral", "asesor derecho del trabajo")
3. **Densidad natural:** No repitas obsesivamente. Usa entre 1-2% del total de palabras. Si tu artículo tiene 1000 palabras, menciona la palabra clave 10-20 veces de forma natural.
4. **Ubicación estratégica:**
   - `<h1>` (título principal)
   - Primeros 100 caracteres del contenido
   - `<h2>` y `<h3>` (subtítulos)
   - `<meta description>`
   - URL y nombre del archivo

**Ejemplo:**
Si tu palabra clave es "asesoría legal empresarial", úsala así:

```html
<title>Asesoría Legal Empresarial | Launes & Asociados</title>
<meta name="description" content="Asesoría legal empresarial integral para PYMES y grandes empresas en Argentina">
<h1>Asesoría Legal Empresarial para tu Empresa</h1>
<h2>¿Qué incluye nuestro servicio de asesoría legal?</h2>
<p>Nuestro equipo de abogados especializados en asesoría legal empresarial...</p>
```

**Herramientas útiles:** Google Keyword Planner (gratis), Ubersuggest, SEMrush, Ahrefs.

---

## 14. Internal Linking (Enlaces Internos): Conecta tu Sitio

**Ubicación:** En el contenido, navegación y footer.
**Función:** Guiar tanto a Google como a los usuarios hacia las páginas más importantes de tu sitio.

**¿Por qué es fundamental?**
Google utiliza los enlaces internos para:
1. Descubrir nuevas páginas
2. Entender la jerarquía del sitio (qué páginas son más importantes)
3. Transferir "autoridad" (pagerank) de una página a otra

Un site bien enlazado internamente mejora significativamente el SEO.

**Ejemplo:**

**Mal (sin enlaces internos):**
```html
<p>Nuestro equipo está formado por abogados especializados. Contáctanos hoy.</p>
```

**Bien (con enlace interno estratégico):**
```html
<p>Nuestro equipo está formado por <a href="/equipo/">abogados especializados en derecho laboral</a>. 
<a href="/contacto/">Contáctanos hoy</a> para una consulta gratuita.</p>
```

**Reglas de oro:**
- Enlaza usando texto descriptivo (anchor text), no "haz clic aquí"
- Enlaza desde páginas de autoridad (como la home) hacia páginas nuevas o importantes
- 3-5 enlaces internos por página es suficiente; más es spam
- Enlaza páginas relacionadas entre sí (contexto relevante)
- Usa siempre el anchor text natural, que contenga palabras clave cuando sea posible

---

## 15. HTTPS/SSL: La Seguridad que Google Recompensa

**Ubicación:** En la configuración del servidor/hosting.
**Función:** Proteger los datos de los usuarios y ganar la confianza de Google.

**¿Por qué importa?**
Google ha confirmado que HTTPS es un factor de ranking. Además, los navegadores modernos marcan los sitios HTTP como "No seguro" con una advertencia roja. Los usuarios no confían en eso.

**¿Cómo saberlo?**
- URL comienza con `https://` (no `http://`)
- Hay un candadito verde en la barra de direcciones del navegador
- El navegador no muestra advertencia de "Sitio no seguro"

**Pasos:**
1. Obtén un certificado SSL. Muchos hostings modernos ofrecen Let's Encrypt gratis
2. Configura tu dominio para usar HTTPS
3. Redirige todo el tráfico HTTP a HTTPS con una regla 301
4. Actualiza tu canonical tag y Open Graph tags para usar `https://`

**Ejemplo de redirección en .htaccess (Apache):**
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 16. Google Search Console y Google Analytics: Los Datos Son Poder

**Ubicación:** Configuración externa (no en el código HTML, aunque necesitas código de verificación).
**Función:** Monitorear la salud de tu sitio en Google y entender cómo los usuarios interactúan con él.

**Google Search Console (GSC):**
Es tu línea directa con Google. Te muestra:
- Qué palabras clave te traen visitas
- Cuántas impresiones tienes en Google
- Click-through rate (CTR)
- Problemas de indexación
- Oportunidades de mejora

**Google Analytics:**
Rastrea cómo se comportan los usuarios en tu sitio:
- De dónde vienen
- Cuánto tiempo pasan
- Qué páginas visitan
- Tasa de rebote
- Conversiones

**¿Cómo configurar?**
Ambas requieren un código de verificación en tu HTML:

```html
<!-- Google Search Console -->
<meta name="google-site-verification" content="tu-codigo-aqui">

<!-- Google Analytics (agregalo antes del cierre de </head>) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Sin estos datos, trabajas a ciegas. Es obligatorio para cualquier estrategia SEO seria.

---

## 17. Contenido de Calidad y Profundidad

**Ubicación:** En el `<body>` de la página.
**Función:** Proporcionar valor real a los usuarios y ganar la confianza de Google.

**¿Por qué Google lo premia?**
Google ha mejorado enormemente su capacidad para detectar contenido de calidad. Ya no es solo sobre palabras clave; es sobre utilidad, originalidad y profundidad.

**Reglas de contenido de calidad:**

1. **Longitud:** Para artículos importantes, 1000+ palabras es ideal. Para landing pages, 500+ palabras mínimo.
2. **Originalidad:** Nada de copiar contenido. Google lo detecta.
3. **Profundidad:** No hagas respuestas superficiales. Explora el tema a fondo.
4. **Actualización:** Mantén el contenido actualizado. Un artículo de 2020 sobre leyes que cambiaron pierde valor.
5. **Autoridad:** Cita fuentes, incluye datos, referencias legales. Eso te hace más creíble.

**Ejemplo:**

**Malo (superficial):**
```
El derecho laboral es importante. Los empleados tienen derechos. 
Las empresas tienen obligaciones. Contáctenos para más información.
```

**Bueno (profundo y útil):**
```
El derecho laboral en Argentina está regulado por la Ley de Contrato de Trabajo 20.744. 
Esto significa que:

1. El empleador debe proporcionar un ambiente seguro (Art. 75)
2. El trabajador tiene derecho a vacaciones pagas (Art. 150)
3. La jornada máxima es de 8 horas diarias (Art. 196)

Además, según el último fallo de la Cámara Nacional de Apelaciones del Trabajo 
en 2024, las empresas deben... [continúa con información específica y útil]
```

---

## 18. Schema.org y Breadcrumbs: Estructura Explícita para Google

**Ubicación:** En el `<head>` del HTML, dentro de etiquetas `<script type="application/ld+json">`.
**Función:** Decirle a Google exactamente qué tipo de información contiene tu página, de forma estructurada.

**¿Por qué?**
Los datos estructurados ayudan a Google a mostrar "rich snippets" (fragmentos enriquecidos) en los resultados de búsqueda, lo que aumenta el CTR y la confianza del usuario.

**Breadcrumbs (Migas de Pan):**
Muestran la ruta de navegación del usuario. Útil para sitios con estructura profunda.

**Ejemplo de Breadcrumb Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://estudiolaunes.com.ar"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Servicios",
    "item": "https://estudiolaunes.com.ar/servicios"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Derecho Civil",
    "item": "https://estudiolaunes.com.ar/servicios/derecho-civil"
  }]
}
</script>
```

También puedes mostrar visualmente estos breadcrumbs en el HTML:
```html
<nav aria-label="breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/servicios">Servicios</a></li>
    <li><a href="/servicios/derecho-civil">Derecho Civil</a></li>
  </ol>
</nav>
```

---

## 19. Mobile-First Indexing: Prioridad en Móvil

**Ubicación:** En la estructura HTML y CSS.
**Función:** Asegurar que tu sitio funciona perfectamente en móviles, porque Google lo prioriza.

**¿Por qué?**
Google ahora indexa principalmente la versión móvil de los sitios, no la desktop. Si tu móvil es pobre, tu ranking será pobre.

**Checklist Mobile-First:**

1. **Responsive Design:** El sitio se adapta a cualquier tamaño de pantalla
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```

2. **Velocidad móvil:** Las páginas cargan rápido en 4G (no solo Wi-Fi)
   - Optimiza imágenes
   - Minifica CSS y JavaScript
   - Usa un CDN

3. **Texto legible:** El texto debe ser legible sin zoom
   - Fuentes mínimo 16px
   - Espaciado adecuado entre líneas

4. **Botones accesibles:** Los botones y enlaces deben ser fáciles de tocar
   - Mínimo 44x44px de área táctil

5. **Sin Flash ni Java:** Los navegadores móviles no los soportan

6. **Prueba:** Usa el Mobile-Friendly Test de Google para verificar

---

## 20. Meta Robots Avanzado: Control Granular

**Ubicación:** En el `<head>` de cada página HTML.
**Función:** Dar órdenes muy específicas a Google sobre cómo indexar cada página.

**Recordatorio básico:**
```html
<!-- Desarrollo (Bloquea Google) -->
<meta name="robots" content="noindex, nofollow">

<!-- Producción (Permite Google) -->
<meta name="robots" content="index, follow">
```

**Pero hay más opciones avanzadas:**

```html
<!-- Index pero no sigas enlaces (es rara) -->
<meta name="robots" content="index, nofollow">

<!-- No indexes pero sigue enlaces (para páginas de categoría/tag) -->
<meta name="robots" content="noindex, follow">

<!-- Sin archivos de imagen en los resultados -->
<meta name="robots" content="index, follow, noimageindex">

<!-- No cachees esta página (para contenido dinámico) -->
<meta name="robots" content="index, follow, nocache">

<!-- No aparezca en búsquedas pero sigue enlaces -->
<meta name="robots" content="noindex, follow">
```

**Casos de uso:**

| Etiqueta | Cuándo usar |
|----------|------------|
| `noindex, nofollow` | Páginas de desarrollo, páginas privadas |
| `index, follow` | Páginas principales de contenido |
| `index, nofollow` | Páginas antiguas que no quieres que pasen autoridad |
| `noindex, follow` | Páginas de filtros, facetas, páginas de categoría duplicadas |
| `noimageindex` | Galerías donde no quieres que Google indexe imágenes |

---

## 21. Legibilidad y Formato: SEO Visible al Usuario

**Ubicación:** En la estructura y presentación visual del contenido.
**Función:** Facilitar que tanto Google como los usuarios entiendan y consuman tu contenido.

**¿Por qué importa?**
Google no solo lee el texto; también analiza cómo está presentado. Un contenido bien formateado recibe mejores rankings porque los usuarios interactúan más con él (menos rebote).

**Reglas de formato:**

1. **Párrafos cortos:** 2-4 líneas máximo. Los párrafos largos asustan a los lectores.

2. **Encabezados claros:** Usa `<h2>`, `<h3>`, `<h4>` para dividir secciones. Google entiende la jerarquía.

3. **Listas y viñetas:** Usa `<ul>` (listas sin orden) u `<ol>` (listas numeradas) cuando sea pertinente.

4. **Negritas estratégicas:** Destaca conceptos clave con `<strong>` para que tanto Google como lectores vean qué es importante.

5. **Espacios en blanco:** No hagas "bloques de texto". Respira visualmente.

6. **Palabras clave en formatos:** Si una palabra clave aparece en una negrita o encabezado, tiene más peso SEO.

**Ejemplo:**

**Malo (bloque de texto ilegible):**
```html
<p>El SEO técnico es importante porque Google necesita entender tu sitio. 
Incluye HTML semántico, meta etiquetas, velocidad de carga, imágenes optimizadas, 
URLs limpias, enlaces internos, HTTPS y muchas otras cosas. La mayoría de desarrolladores 
lo ignoran y luego sus sitios no ranking. Esto es un error porque el SEO técnico es gratis.</p>
```

**Bien (fácil de leer):**
```html
<p>El <strong>SEO técnico</strong> es importante porque Google necesita entender tu sitio.</p>

<h3>Elementos clave del SEO técnico:</h3>
<ul>
  <li>HTML semántico</li>
  <li>Meta etiquetas optimizadas</li>
  <li>Velocidad de carga rápida</li>
  <li>Imágenes optimizadas</li>
  <li>URLs limpias y descriptivas</li>
  <li>Estructura de enlaces internos</li>
  <li>HTTPS seguro</li>
</ul>

<p>La mayoría de desarrolladores ignoran esto, pero el <strong>SEO técnico es gratis</strong> 
y puede ser el diferencial que catapulte tu sitio.</p>
```

**Mejora extra: Tabla de contenidos**
Para artículos largos (1500+ palabras), agrega una tabla de contenidos al inicio:

```html
<nav>
  <h2>Contenidos del artículo</h2>
  <ul>
    <li><a href="#intro">Introducción</a></li>
    <li><a href="#tecnicas">Técnicas SEO</a></li>
    <li><a href="#conclusion">Conclusión</a></li>
  </ul>
</nav>

<h2 id="intro">Introducción al SEO</h2>
...
```

Esto mejora tanto la UX como el SEO.