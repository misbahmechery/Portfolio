/* ==========================================================================
   PROJECT DATA & DETAILED CONTENT DATABASE
   ========================================================================== */

const projectsData = {
  "project-0": {
    id: "project-0",
    number: "№ 00",
    title: "PROJECT 0: DREAM DESK",
    subtitle: "Custom Ergonomic Workspace Design & Physical Fabrication",
    category: "CAD DESIGN | 3D MODELLING | WOODCRAFT",
    status: "COMPLETED",
    timeline: "2026",
    role: "Lead Designer, 3D Modeller & Fabricator",
    tools: ["Blender", "CAD Software", "Woodworking Tools", "3D Rendering"],
    heroImage: "",
    externalLink: "https://github.com/misbahmechery/Dream-Desk",
    externalLinkLabel: "GITHUB REPOSITORY ↗",
    overview: `
      <p>
        The <strong>Dream Desk</strong> project was born out of a desire to create a bespoke, functional workspace tailored specifically to ergonomic needs and room geometry. As my first end-to-end design and fabrication endeavor, the goal was to take an initial conceptual sketch, model and simulate it in 3D CAD software, and translate the virtual geometry into a finished physical desk.
      </p>
      <p>
        The design focuses on clean lines, modular cable management, robust load distribution, and a warm natural wood finish that blends minimalist aesthetic with structural durability.
      </p>
    `,
    highlights: [
      { label: "PRECISION CAD", desc: "Full 1:1 scale parametric 3D CAD modeling with precise joinery tolerances." },
      { label: "PHOTOREAL RENDERS", desc: "Lighting and material simulation in Blender prior to cutting any lumber." },
      { label: "DURABLE BUILD", desc: "Reinforced undercarriage support engineered for heavy desktop hardware." },
      { label: "ERGONOMICS", desc: "Optimized desk height and leg clearance calculated for posture comfort." }
    ],
    process: [
      {
        step: "01",
        title: "RESEARCH & CONCEPTUAL SKETCHING",
        text: "Analyzed spatial constraints of the room, required surface area for dual displays and peripherals, and sketched multiple form factors exploring angled leg braces versus box frames."
      },
      {
        step: "02",
        title: "3D MODELLING & TOLERANCE TESTING IN CAD & BLENDER",
        text: "Transferred conceptual sketches into CAD to model every joint, screw placement, and bevel. Used Blender for realistic texture mapping and lighting simulation to validate the wood grain appearance."
      },
      {
        step: "03",
        title: "MATERIAL SELECTION & PREPARATION",
        text: "Selected high-grade hardwood lumber based on tensile strength, weight, and warp resistance. Measured, planed, and sanded all pieces to achieve smooth tactile surfaces."
      },
      {
        step: "04",
        title: "FABRICATION & FINAL ASSEMBLY",
        text: "Executed precision cuts, dowel/screw pocket joinery, and structural reinforcement. Applied protective sealants and natural stain to bring out the natural wood character."
      }
    ],
    specs: [
      { key: "Project Type", value: "Physical Product & 3D CAD Design" },
      { key: "Primary Material", value: "Treated Hardwood / Reinforced Bracing" },
      { key: "Software Stack", value: "Blender 4.x, CAD Design Tools" },
      { key: "Hardware & Joinery", value: "Pocket Hole Screws, Wood Glue, Steel Brackets" },
      { key: "Finish", value: "Hand-rubbed Satin Protective Stain" },
      { key: "Discipline", value: "Production Engineering & Ergonomics" }
    ],
    learnings: `
      Working on this project bridged the crucial gap between <em>virtual computer-aided design</em> and <em>real-world physical manufacturing tolerances</em>. It reinforced the importance of accounting for material expansion, tool kerf, and structural load distribution in engineering design.
    `
  },

  "project-1": {
    id: "project-1",
    number: "№ 01",
    title: "PROJECT 1: UPCOMING DESIGN",
    subtitle: "Experimental Mechanical / CAD Prototype",
    category: "PRODUCT DESIGN / RAPID PROTOTYPING",
    status: "IN DEVELOPMENT",
    timeline: "2026",
    role: "Engineering Student & Concept Designer",
    tools: ["CAD", "Blender", "3D Printing"],
    heroImage: "",
    externalLink: "#",
    externalLinkLabel: "DOCUMENTATION COMING SOON",
    overview: `
      <p>
        An upcoming exploration into mechanical modeling and physical prototyping combining parametric CAD tools with creative design principles.
      </p>
      <p>
        Detailed documentation, renders, technical drawings, and progress logs will be published here as milestones are completed.
      </p>
    `,
    highlights: [
      { label: "PARAMETRIC CAD", desc: "Modular design components built for rapid iteration." },
      { label: "PROTOTYPING", desc: "Iterative physical testing and dimensional verification." }
    ],
    process: [
      {
        step: "01",
        title: "PROBLEM IDENTIFICATION",
        text: "Formulating design constraints, user requirements, and functional objectives."
      },
      {
        step: "02",
        title: "DIGITAL PROTOTYPING",
        text: "Creating 3D digital models and running preliminary stress simulations."
      }
    ],
    specs: [
      { key: "Status", value: "Phase 1 Conceptual Design" },
      { key: "Target Output", value: "Functional 3D CAD Model & Physical Prototype" },
      { key: "Tools", value: "CAD, Blender, Prototyping Hardware" }
    ],
    learnings: `
      Currently in development. Stay tuned for updates!
    `
  }
};

/* ==========================================================================
   PAGE RENDERER
   ========================================================================== */

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderProjectPage() {
  const projectId = getQueryParam("id") || getQueryParam("p") || "project-0";
  const project = projectsData[projectId] || projectsData["project-0"];

  // Update Page Title
  document.title = `${project.title} — Misbah Portfolio`;

  // Title & Header Elements
  const numEl = document.getElementById("projNumber");
  const titleEl = document.getElementById("projTitle");
  const subtitleEl = document.getElementById("projSubtitle");
  const categoryEl = document.getElementById("projCategory");
  const statusEl = document.getElementById("projStatus");
  const timelineEl = document.getElementById("projTimeline");
  const roleEl = document.getElementById("projRole");
  const toolsEl = document.getElementById("projTools");
  const externalLinkEl = document.getElementById("projExternalLink");

  if (numEl) numEl.textContent = project.number;
  if (titleEl) titleEl.textContent = project.title;
  if (subtitleEl) subtitleEl.textContent = project.subtitle;
  if (categoryEl) categoryEl.textContent = project.category;
  if (statusEl) statusEl.textContent = project.status;
  if (timelineEl) timelineEl.textContent = project.timeline;
  if (roleEl) roleEl.textContent = project.role;

  if (toolsEl) {
    toolsEl.innerHTML = project.tools
      .map(tool => `<span class="proj-tool-pill">${tool}</span>`)
      .join("");
  }

  if (externalLinkEl) {
    if (project.externalLink && project.externalLink !== "#") {
      externalLinkEl.href = project.externalLink;
      externalLinkEl.textContent = project.externalLinkLabel || "VIEW REPOSITORY ↗";
      externalLinkEl.style.display = "inline-flex";
    } else {
      externalLinkEl.style.display = "none";
    }
  }

  // Hero Media Display
  const heroWrap = document.getElementById("projHeroMedia");
  if (heroWrap) {
    if (project.heroImage) {
      heroWrap.innerHTML = `
        <div class="proj-hero-frame">
          <div class="tape tape-tl" aria-hidden="true"></div>
          <div class="tape tape-tr" aria-hidden="true"></div>
          <div class="corner-bracket tl" aria-hidden="true"></div>
          <div class="corner-bracket tr" aria-hidden="true"></div>
          <div class="corner-bracket bl" aria-hidden="true"></div>
          <div class="corner-bracket br" aria-hidden="true"></div>
          <img src="${project.heroImage}" alt="${project.title}" class="proj-hero-img" />
          <div class="proj-img-caption">
            <span class="caption-icon">🞦</span>
            <span>FIG 01.0 // PHYSICAL SPECIMEN CAPTURE // ${project.title}</span>
          </div>
        </div>
      `;
    } else {
      heroWrap.innerHTML = `
        <div class="proj-hero-frame placeholder-hero">
          <div class="placeholder" style="height: 320px; font-size: 22px;">
            <span>${project.title}<br><small style="font-size: 13px; opacity: .8;">${project.subtitle}</small></span>
            <i>✦</i>
          </div>
        </div>
      `;
    }
  }

  // Overview Content
  const overviewEl = document.getElementById("projOverview");
  if (overviewEl) {
    overviewEl.innerHTML = project.overview;
  }

  // Highlights Grid
  const highlightsEl = document.getElementById("projHighlights");
  if (highlightsEl && project.highlights) {
    highlightsEl.innerHTML = project.highlights
      .map(
        h => `
        <div class="proj-highlight-card">
          <div class="highlight-label">${h.label}</div>
          <div class="highlight-desc">${h.desc}</div>
        </div>
      `
      )
      .join("");
  }

  // Process Steps
  const processEl = document.getElementById("projProcess");
  if (processEl && project.process) {
    processEl.innerHTML = project.process
      .map(
        p => `
        <div class="proj-process-step">
          <div class="step-badge">${p.step}</div>
          <div class="step-body">
            <h3 class="step-title">${p.title}</h3>
            <p class="step-text">${p.text}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Specifications Table
  const specsEl = document.getElementById("projSpecsTable");
  if (specsEl && project.specs) {
    specsEl.innerHTML = project.specs
      .map(
        s => `
        <tr>
          <th scope="row">${s.key}</th>
          <td>${s.value}</td>
        </tr>
      `
      )
      .join("");
  }

  // Learnings Section
  const learningsEl = document.getElementById("projLearnings");
  if (learningsEl) {
    learningsEl.innerHTML = project.learnings;
  }

  // Pagination / Next Project Link
  const nextBtn = document.getElementById("nextProjectLink");
  const prevBtn = document.getElementById("prevProjectLink");
  const projectKeys = Object.keys(projectsData);
  const currentIndex = projectKeys.indexOf(projectId);

  if (nextBtn) {
    const nextIndex = (currentIndex + 1) % projectKeys.length;
    const nextKey = projectKeys[nextIndex];
    nextBtn.href = `project.html?id=${nextKey}`;
    nextBtn.querySelector(".nav-proj-title").textContent = projectsData[nextKey].title;
  }

  if (prevBtn) {
    const prevIndex = (currentIndex - 1 + projectKeys.length) % projectKeys.length;
    const prevKey = projectKeys[prevIndex];
    prevBtn.href = `project.html?id=${prevKey}`;
    prevBtn.querySelector(".nav-proj-title").textContent = projectsData[prevKey].title;
  }
}

// Auto-run on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderProjectPage);
} else {
  renderProjectPage();
}
