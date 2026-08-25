# Misbah — Retro Portfolio

A simple one-page portfolio using only HTML, CSS and JavaScript.

## Files

- `index.html` — page structure and project cards
- `style.css` — old-school paper / scrapbook styling
- `script.js` — project popups and social links

## Adding a project

Open `index.html` and copy any `.project-card`.

Change:

- `data-title`
- `data-description`
- `data-tools`
- `data-link`
- `data-image`

For an image, put it inside an `assets` folder and use something like:

`data-image="assets/dream-desk.jpg"`

Then replace the placeholder inside the card with:

```html
<div class="project-thumb">
  <img src="assets/dream-desk.jpg" alt="Dream Desk" />
</div>
```

## Adding links

Open `script.js` and replace the `#` values in `socialLinks` with your GitHub, Instagram, LinkedIn, portfolio, and email.

No framework or build process is required. Open `index.html` directly in a browser.
