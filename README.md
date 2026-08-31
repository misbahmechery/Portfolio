# Misbah — Retro Portfolio

A clean, responsive retro portfolio using only HTML, CSS, and JavaScript.

## Files

- `index.html` — page structure and project cards
- `style.css` — old-school paper / scrapbook styling with picture overlays
- `script.js` — project thumbnail enhancer, lightboxes, and social links

## Adding a project

Open `index.html` and copy any `.project-card`.

Change the dataset attributes:
- `data-title="My Project"`
- `data-description="A short description."`
- `data-tools="Blender / CAD"`
- `data-link="https://example.com"`
- `data-image="media/your-image.jpg"`

### Card with Image:
```html
<article class="project-card"
  data-title="My Project"
  data-description="Project details here."
  data-tools="Blender / CAD"
  data-link="https://example.com"
  data-image="media/your-image.jpg">
  <div class="project-thumb">
    <img src="media/your-image.jpg" alt="My Project" class="thumb-img" />
    <div class="thumb-overlay">
      <div class="thumb-corner tl" aria-hidden="true"></div>
      <div class="thumb-corner tr" aria-hidden="true"></div>
      <div class="thumb-corner bl" aria-hidden="true"></div>
      <div class="thumb-corner br" aria-hidden="true"></div>
      <div class="thumb-grain" aria-hidden="true"></div>
      <div class="thumb-badge">
        <span class="thumb-badge-icon">✦</span>
        <span class="thumb-badge-text">VIEW PIECE</span>
      </div>
      <div class="thumb-tag">BLENDER</div>
    </div>
  </div>
  <div class="project-name">MY PROJECT</div>
</article>
```

> **Tip:** You can also simply provide `data-image="media/your-image.jpg"` and `script.js` will automatically construct the thumbnail image and overlay elements for you!

## Social Links

Open `script.js` and edit the `socialLinks` object with your URLs:
```javascript
const socialLinks = {
  github: "https://github.com/misbahmechery",
  instagram: "https://www.instagram.com/intmisbah/",
  linkedin: "https://www.linkedin.com/in/misbah-m-57767b346/",
  email: "mailto:misbahmechery@gmail.com"
};
```

Open `index.html` directly in any web browser to view the portfolio.
