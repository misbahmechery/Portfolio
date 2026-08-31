/* ==========================================================================
   NAMEPLATE FLIP CARD + PORTRAIT EYE REVEAL
   Click MISBAH → flip nameplate, swap portrait from NOEYES → YESEYES (and back)
   ========================================================================== */

const nameplateFlip  = document.getElementById("nameplateFlip");
const portraitImg    = document.getElementById("portraitImg");
const portraitLabel  = document.getElementById("portraitLabel");
const portraitHint   = document.getElementById("portraitHint");

const IMG_NO_EYES  = "media/NOEYES.png";
const IMG_YES_EYES = "media/YESEYES.png";

if (nameplateFlip) {
  const toggle = () => {
    const revealed = nameplateFlip.classList.toggle("is-flipped");

    // Swap the portrait below
    if (portraitImg) {
      // Small fade-swap so the transition feels smooth
      portraitImg.classList.add("portrait-swapping");
      setTimeout(() => {
        portraitImg.src = revealed ? IMG_YES_EYES : IMG_NO_EYES;
        portraitImg.alt = revealed ? "Misbah — Eyes revealed" : "Misbah — Portrait";
        portraitImg.classList.remove("portrait-swapping");
      }, 180);
    }

    // Update caption label
    if (portraitLabel) {
      portraitLabel.textContent = revealed ? "REVEALED" : "INCOGNITO";
    }

    // Hide the hint arrow permanently after first interaction
    if (portraitHint) {
      portraitHint.style.opacity = "0";
      portraitHint.style.pointerEvents = "none";
    }
  };

  nameplateFlip.addEventListener("click", toggle);
  nameplateFlip.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
}

/* ==========================================================================
   PROJECT THUMBNAIL ENHANCER & REDIRECTION
   ========================================================================== */

function initProjectThumbnails() {
  document.querySelectorAll(".project-card").forEach(card => {
    const thumb = card.querySelector(".project-thumb");
    if (!thumb) return;

    const imageSrc = card.dataset.image;
    const title = card.dataset.title || "PROJECT";
    const tools = card.dataset.tools || "";

    // If card has an image data attribute and no <img> is present, inject it
    if (imageSrc && !thumb.querySelector("img")) {
      thumb.classList.remove("placeholder");
      thumb.innerHTML = `
        <img src="${imageSrc}" alt="${title}" class="thumb-img" />
        <div class="thumb-overlay">
          <div class="thumb-corner tl" aria-hidden="true"></div>
          <div class="thumb-corner tr" aria-hidden="true"></div>
          <div class="thumb-corner bl" aria-hidden="true"></div>
          <div class="thumb-corner br" aria-hidden="true"></div>
          <div class="thumb-grain" aria-hidden="true"></div>
          <div class="thumb-badge">
            <span class="thumb-badge-icon">✦</span>
            <span class="thumb-badge-text">VIEW PROJECT ↗</span>
          </div>
          ${tools ? `<div class="thumb-tag">${tools.split("/")[0].trim()}</div>` : ""}
        </div>
      `;
    } else if (!thumb.querySelector(".thumb-overlay")) {
      // If image is already in HTML, ensure overlay components exist
      const overlay = document.createElement("div");
      overlay.className = "thumb-overlay";
      overlay.innerHTML = `
        <div class="thumb-corner tl" aria-hidden="true"></div>
        <div class="thumb-corner tr" aria-hidden="true"></div>
        <div class="thumb-corner bl" aria-hidden="true"></div>
        <div class="thumb-corner br" aria-hidden="true"></div>
        <div class="thumb-grain" aria-hidden="true"></div>
        <div class="thumb-badge">
          <span class="thumb-badge-icon">✦</span>
          <span class="thumb-badge-text">VIEW PROJECT ↗</span>
        </div>
        ${tools ? `<div class="thumb-tag">${tools.split("/")[0].trim()}</div>` : ""}
      `;
      thumb.appendChild(overlay);
    }
  });
}

// Initialize thumbnail overlays
initProjectThumbnails();

/* ==========================================================================
   PROJECT REDIRECTION & MODAL FALLBACK
   ========================================================================== */

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTools = document.getElementById("modalTools");
const modalImage = document.getElementById("modalImage");
const modalLink = document.getElementById("modalLink");

function openModal(card) {
  if (!modal) return;
  const title = card.dataset.title || "PROJECT";
  const description = card.dataset.description || "";
  const tools = card.dataset.tools || "";
  const link = card.dataset.link || "#";
  const image = card.dataset.image || "";

  if (modalTitle) modalTitle.textContent = title;
  if (modalDescription) modalDescription.textContent = description;
  if (modalTools) modalTools.textContent = tools ? `TOOLS: ${tools}` : "";

  if (modalImage) {
    modalImage.innerHTML = "";
    if (image) {
      const img = document.createElement("img");
      img.src = image;
      img.alt = title;
      img.className = "modal-preview-img";
      modalImage.appendChild(img);
    } else {
      modalImage.innerHTML = `<div class="placeholder modal-placeholder"><span>${title.replace(" ", "<br>")}</span><i>✦</i></div>`;
    }
  }

  if (modalLink) {
    if (link && link !== "#") {
      modalLink.href = link;
      modalLink.textContent = "VIEW FULL PROJECT PAGE ↗";
      modalLink.style.display = "inline-block";
    } else {
      modalLink.removeAttribute("href");
      modalLink.style.display = "none";
    }
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Project card click: Redirect directly to the project's dedicated page
document.querySelectorAll(".project-card").forEach(card => {
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "link");

  card.addEventListener("click", () => {
    const link = card.dataset.link;
    if (link && link !== "#") {
      window.location.href = link;
    } else {
      openModal(card);
    }
  });

  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const link = card.dataset.link;
      if (link && link !== "#") {
        window.location.href = link;
      } else {
        openModal(card);
      }
    }
  });
});

document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal && modal.classList.contains("open")) {
    closeModal();
  }
});

/* ==========================================================================
   SOCIAL LINKS
   ========================================================================== */

const socialLinks = {
  github: "https://github.com/misbahmechery",
  instagram: "https://www.instagram.com/intmisbah/",
  linkedin: "https://www.linkedin.com/in/misbah-m-57767b346/",
  email: "mailto:misbahmechery@gmail.com"
};

Object.entries(socialLinks).forEach(([name, url]) => {
  const link = document.querySelector(`[data-link="${name}"]`);
  if (link && url) link.href = url;
});
