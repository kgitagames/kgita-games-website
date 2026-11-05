# KGita Games website
Static HTML/CSS/JS. Open index.html or run `python3 -m http.server`. Deploy to Cloudflare Pages: no build command, output directory `/`.

## Edit content
- Copy lives in each .html file. Colors and fonts: top of css/style.css.
- Images: assets/images (hyetyn-key-art.jpg = home hero and featured game). Gallery on games.html: add a `<button data-i="N">` with an image; js/games.js picks it up. Three gallery images are hotlinked from Steam's CDN; download them into assets/images for reliability.
- About founder cards: replace assets/images/founder-*-placeholder.svg and the "Name to be added" text.

## Still needs you
1. Contact form: set `data-endpoint` on `<form id="cf">` in contact.html to a form service URL. Until then it shows an honest "not set up" error.
2. Business email and founder names/photos.
3. Facts from Steam (release date, free to play, requirements, AI disclosure) should be re-checked if the store page changes.
