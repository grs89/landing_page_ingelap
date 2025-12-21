# ngelap.com.co — Landing page

Proyecto estático: landing para servicios de instalaciones eléctricas, CCTV, control de acceso, detección de incendio y cableado estructurado.

Cómo probar localmente

1. Abrir en el navegador:

```bash
open index.html
```

2. Alternativamente, servir con un servidor simple (recomendado para CORS/asset testing):

```bash
# Python 3
python3 -m http.server 8000
# y abrir http://localhost:8000
```

Archivos clave
- `index.html` — página principal
- `styles.css` — estilos
- `script.js` — interactividad ligera

Notas
- Reemplaza los datos de contacto y el número de teléfono por los reales.
- Puedo añadir imágenes, favicon y optimizar SEO si lo deseas.

SEO & verificación
- `robots.txt` permite el rastreo y apunta a `sitemap.xml`.
- `sitemap.xml` incluye las URLs principales y ayuda a acelerar la indexación.
- Añadimos meta Open Graph, Twitter Card y JSON-LD (Schema.org LocalBusiness) en `index.html`.

Verificación en buscadores

1. Añade y verifica la propiedad `https://ngelap.com.co` en Google Search Console (verificación por DNS o archivo HTML).
2. En Search Console → Sitemaps → envía `https://ngelap.com.co/sitemap.xml`.
3. Usa “URL Inspection” → “Request Indexing” para páginas nuevas.

Comprobaciones rápidas

```bash
curl -I https://ngelap.com.co
# debe devolver 200 OK y Content-Type: text/html
```

Reemplaza la URL del logo y el teléfono por los reales en `index.html`.
# Ingelap.com.co — Landing page

Proyecto estático: landing para servicios de instalaciones eléctricas, CCTV, control de acceso, detección de incendio y cableado estructurado.

Cómo probar localmente

1. Abrir en el navegador:

```bash
open index.html
```

2. Alternativamente, servir con un servidor simple (recomendado para CORS/asset testing):

```bash
# Python 3
python3 -m http.server 8000
# y abrir http://localhost:8000
```

Archivos clave
- index.html — página principal
- styles.css — estilos
- script.js — interactividad ligera

Notas
- Reemplaza los datos de contacto y el número de teléfono por los reales.
- Puedo añadir imágenes, favicon y optimizar SEO si lo deseas.