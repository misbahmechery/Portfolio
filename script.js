const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTools = document.getElementById("modalTools");
const modalImage = document.getElementById("modalImage");
const modalLink = document.getElementById("modalLink");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title || "PROJECT";
    const description = card.dataset.description || "";
    const tools = card.dataset.tools || "";
    const link = card.dataset.link || "#";
    const image = card.dataset.image || "";

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalTools.textContent = tools ? `TOOLS: ${tools}` : "";

    modalImage.innerHTML = "";
    if (image) {
      const img = document.createElement("img");
      img.src = image;
      img.alt = title;
      modalImage.appendChild(img);
    } else {
      modalImage.innerHTML = `<div class="placeholder" style="height:230px"><span>${title.replace(" ", "<br>")}</span><i>✦</i></div>`;
    }

    if (link && link !== "#") {
      modalLink.href = link;
      modalLink.style.display = "inline-block";
    } else {
      modalLink.removeAttribute("href");
      modalLink.style.display = "none";
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

/*
  SOCIAL LINKS:
  Replace the # values below with your real links.

  Example:
  document.querySelector('[data-link="github"]').href = "https://github.com/yourname";
*/
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
