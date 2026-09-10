/* ==========================================================================
   PROJECT DATA & DETAILED CONTENT DATABASE
   ========================================================================== */

const projectsData = {
  "project-0": {
    id: "project-0",
    number: "00",
    title: "PROJECT 0: DREAM DESK",
    subtitle: "Custom Desk For productivity",
    category: "CAD DESIGN | 3D MODELLING | WOODCRAFT",
    status: "COMPLETED",
    timeline: "2026",
    role: "Lead Designer",
    tools: ["Blender ", "Woodworking Tools "],
    heroImage: "media/Project0/desk.jpeg",
    heroAlt: "Dream Desk Hero Image",
    externalLink: "https://github.com/misbahmechery/Dream-Desk",
    externalLinkLabel: "GITHUB REPOSITORY ↗",
    overview: `
      <p>
        The Dream Desk is a custom-built L-shaped workstation designed for studying, coding, 3D modeling, and creative work. I designed it to be spacious, practical, and organized, with integrated storage and a clean modern look. The design will also be open-sourced so others can build and customize it.</p>
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
        text: "My Dream Desk is a custom-built L-shaped workstation designed for studying, coding, 3D modeling, and creative work. I designed it to be spacious, practical, and organized, with integrated storage and a clean modern look. The design will also be open-sourced so others can build and customize it."
      },
      {
        step: "02",
        title: "3D MODELLING & TOLERANCE TESTING IN CAD & BLENDER",
        text: "Using Blender and CAD tools, I created a precise 1:1 scale 3D model of the desk. This included modeling every joint, screw placement, and bevel. I used Blender to create photorealistic renders with realistic wood grain textures and lighting, ensuring the final physical desk would match the digital design."
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
    title: "PORTABLE RECHARGEABLE LIGHT",
    subtitle: "A 150 cm portable rechargeable LED light designed to provide long, flexible illumination without relying on a permanent power connection.",
    category: "PRODUCT DESIGN | 3D PRINTING | ELECTRONICS",
    status: "COMPLETED PROTOTYPE",
    timeline: "2026",
    role: "Lead Designer & Fabricator",
    tools: ["3D Printing (PLA)", "18650 Li-ion Battery", "TP4056 USB-C", "MT3608 Boost", "Soldering", "CAD"],
    heroImage: "media/Led/Led_.JPG",
    heroAlt: "Portable Rechargeable Light 150 cm illuminated above desk",
    externalLink: "https://github.com/misbahmechery",
    externalLinkLabel: "OPEN SOURCE PROJECT ↗",
    overview: `
      <p>
        This project started with a simple requirement: I wanted a long LED light that was rechargeable and easy to move or mount without being tied down by an unsightly permanent power cord. Instead of adapting a commercial off-the-shelf product to fit those needs, I designed and built a custom modular lighting system from scratch.
      </p>
      <p>
        The final system combines a high-density 5V flexible LED strip, a removable 3D-printed Li-ion power pack with integrated USB-C charging, regulated DC-DC step-up circuitry, and an ultra-clean magnetic docking system on a wooden slab backing.
      </p>
      
      <div class="power-flow-box">
        <div class="power-flow-title">⚡ SYSTEM ARCHITECTURE & POWER FLOW</div>
        <div class="power-flow-steps">
          <span class="power-flow-node">3.7V Li-ion Battery</span>
          <span class="power-flow-arrow">→</span>
          <span class="power-flow-node">TP4056 Charge & Protection</span>
          <span class="power-flow-arrow">→</span>
          <span class="power-flow-node">Master Power Switch</span>
          <span class="power-flow-arrow">→</span>
          <span class="power-flow-node">MT3608 5V Boost Converter</span>
          <span class="power-flow-arrow">→</span>
          <span class="power-flow-node">150 cm 5V LED Strip</span>
        </div>
      </div>

      <p>
        <strong>Two Primary Modular Assemblies:</strong><br>
        <strong>1. LED Light Assembly:</strong> A 150 cm, 5V LED strip forms the linear lighting element mounted securely to a natural wooden slab. It provides broad, diffused desk illumination without requiring permanent wall drilling.<br>
        <strong>2. Removable Power Module:</strong> A self-contained, 3D-printed power brick housing the 18650 Li-ion battery, USB-C TP4056 charging and protection board, MT3608 step-up boost converter, hardware power switch, and quick-disconnect DC wiring harness. The entire power unit detaches effortlessly so it can be recharged at any standard USB-C port.
      </p>
      <p>
        <strong>Magnetic Quick-Release:</strong> High-strength N35 neodymium magnets are integrated into the mounting system, allowing the light bar to snap firmly into place or detach instantly for maintenance, repositioning, or storage.
      </p>
    `,
    highlights: [
      { label: "150 CM LINEAR COVERAGE", desc: "Long continuous form-factor providing expansive, shadow-free illumination across entire desk surfaces." },
      { label: "DETACHABLE POWER PACK", desc: "Self-contained Li-ion power brick with USB-C charging that detaches for convenient standalone recharging." },
      { label: "N35 MAGNETIC DOCKING", desc: "Rare-earth neodymium magnets provide clean, toolless mounting and repositioning without screws." },
      { label: "3D-PRINTED CHASSIS", desc: "Custom parametric enclosure printed at TinkerSpace Calicut with dedicated component bays and non-destructive snap lid." },
      { label: "CLEAN 5V BOOST REGULATION", desc: "Dedicated MT3608 DC-DC step-up stage regulates single-cell battery voltage to stable 5V output." },
      { label: "DESIGNED FOR REPAIRABILITY", desc: "100% serviceable architecture — any cell, board, or switch can be replaced without breaking the assembly." }
    ],
    process: [
      {
        step: "01",
        title: "IDENTIFYING THE REQUIREMENT & CONSTRAINTS",
        text: "Defined the design criteria: 150 cm wide illumination, rechargeable cordless freedom, toolless magnetic detachment, clean visual aesthetic, and fully serviceable modular components."
      },
      {
        step: "02",
        title: "ELECTRONICS SELECTION & BENCHTOP TESTING",
        text: "Selected single-cell 18650 Li-ion battery chemistry, a TP4056 USB-C charging and protection board, an MT3608 DC-DC boost converter, and a 5V LED strip. Tested current draw and voltage drop across the 150 cm length."
      },
      {
        step: "03",
        title: "PROTOTYPING & MOUNTING MECHANISM",
        text: "Explored magnetic latching geometry using N35 neodymium disc magnets along a guide rail. Paired the LED track with a solid wooden slab backing for structural rigidity, thermal dissipation, and organic warmth."
      },
      {
        step: "04",
        title: "3D CAD MODELING & ENCLOSURE PRINTING",
        text: "Engineered a custom partitioned enclosure in CAD tailored to the battery, charging module, and boost PCB. Fabricated the chassis and faceplate in PLA at TinkerSpace Calicut with precise cutouts for the USB-C port and power switch."
      },
      {
        step: "05",
        title: "WIRING, SOLDERING & MECHANICAL INTEGRATION",
        text: "Soldered battery leads, TP4056 input/output terminals, DW01A protection circuits, rocker switch, and MT3608 boost regulator. Routed internal wiring through channels and terminated with a quick-disconnect DC plug."
      },
      {
        step: "06",
        title: "POWER FLOW REGULATION & THERMAL VALIDATION",
        text: "Validated boost converter output under sustained 5V LED load. Tested power cutoff to ensure zero phantom parasitic drain when switched off, and verified safe operating temperatures during extended runtimes."
      },
      {
        step: "07",
        title: "FINAL PRODUCT & OPEN-SOURCE PREPARATION",
        text: "Assembled all components into the finished portable rechargeable light. Documented the wiring schematics, CAD files, 3D print STLs, and Bill of Materials for open-source community sharing."
      }
    ],
    gallery: [
      {
        title: "Assembled Light in Operation",
        badge: "Physical Build",
        desc: "The 150 cm linear light bar suspended over the study desk, casting wide, glare-free illumination across laptop and workspace.",
        img: "media/Led/Led_.JPG"
      },
      {
        title: "Internal Electronics Chassis",
        badge: "3D Print & PCB",
        desc: "Custom 3D-printed enclosure tray housing the 18650 Li-ion cell, TP4056 USB-C charging module, and MT3608 boost converter.",
        img: "media/Led/Electronic_components_assembly.JPG"
      },
      {
        title: "Removable Battery Power Module",
        badge: "Enclosure Specimen",
        desc: "Assembled power brick featuring the TinkerHub 'Be Kind Be Curious' emblem, quick-disconnect DC cable, and snap-fit lid.",
        img: "media/Led/rechargeble_battery.JPG"
      },
      {
        title: "N35 Magnetic Mounting Track",
        badge: "Mounting Specimen",
        desc: "N35 neodymium magnet mounted along the metal track, enabling instant toolless attachment and repositioning.",
        img: "media/Led/magnetucMount.JPG"
      },
      {
        title: "TP4056 USB-C Charging Board",
        badge: "Component / IC",
        desc: "5V/1A USB-C battery charging module with built-in DW01A/FS8205A overcharge and overdischarge protection.",
        img: "media/Led/components/tp4056.jpg"
      },
      {
        title: "MT3608 DC-DC Step-Up Converter",
        badge: "Component / Step-Up",
        desc: "Adjustable 2A boost converter regulating variable 3.0V–4.2V battery voltage up to a constant 5.0V output for the LEDs.",
        img: "media/Led/components/mt3608_boost.jpg"
      },
      {
        title: "18650 3.7V Li-ion Rechargeable Cell",
        badge: "Component / Power",
        desc: "High-energy-density cylindrical lithium-ion cell providing stored power for portable, cordless illumination.",
        img: "media/Led/components/18650_battery.jpg"
      },
      {
        title: "N35 Neodymium Disc Magnets",
        badge: "Hardware / Mounting",
        desc: "High-power rare-earth axial magnets providing strong shear and tensile hold on steel surfaces without drilling.",
        img: "media/Led/components/n35_magnets.jpg"
      }
    ],
    specs: [
      { key: "Light Length", value: "150 cm" },
      { key: "LED Operating Voltage", value: "5V DC Regulated" },
      { key: "LED Element", value: "5V High-Density Flexible LED Strip" },
      { key: "Battery Chemistry", value: "Single-Cell 3.7V Li-ion (18650 Form Factor)" },
      { key: "Charging Interface", value: "USB-C (TP4056 1A with Overcharge/Overdischarge Protection)" },
      { key: "Voltage Regulation", value: "MT3608 DC-DC Step-Up Boost Converter (3.7V → 5.0V)" },
      { key: "Power Isolation", value: "Master Mechanical Switch (Upstream of Boost Stage)" },
      { key: "Mounting Mechanism", value: "N35 Neodymium Rare-Earth Magnets + Metal Rail" },
      { key: "Primary Enclosure", value: "Custom 3D-Printed PLA with Serviceable Snap Lid" },
      { key: "Mounting Substrate", value: "Natural Solid Wooden Slab Backing" },
      { key: "Interconnect Wiring", value: "Quick-Disconnect JST / DC Power Harness" },
      { key: "Design Philosophy", value: "Modular, Non-Destructive Disassembly & Open Source" },
      { key: "Fabrication Hub", value: "TinkerSpace, Calicut" },
      { key: "Status", value: "Completed Prototype // Open Source Release" }
    ],
    learnings: `
      <p>
        Building the Portable Rechargeable Light provided hands-on experience solving real-world electrical and mechanical design challenges:
      </p>
      <ul>
        <li>
          <em>Managing Boost Converter Quiescent Drain:</em> Bench testing revealed that keeping the DC-DC boost converter connected directly to the Li-ion battery resulted in continuous idle current draw, slowly draining the cell even when the light was turned off. Placing the mechanical master switch upstream between the battery and the boost converter completely eliminated parasitic drain.
        </li>
        <li>
          <em>Voltage Regulation Across Long Strips:</em> Maintaining a uniform 5.0V across a 150 cm run required careful wire gauge sizing (22 AWG) and proper soldering at the power injection points to avoid noticeable luminance drop along the strip length.
        </li>
        <li>
          <em>Designing for Non-Destructive Disassembly:</em> Rather than gluing the enclosure shut, the 3D-printed chassis was engineered with friction-fit retaining walls and a serviceable snap lid. This allows swapping individual components (such as battery cells or boost boards) without rebuilding the entire lamp.
        </li>
        <li>
          <em>Magnetic Alignment & Shear Tolerance:</em> Selecting N35 neodymium magnets and calculating the required contact surface area ensured that the light bar holds firmly against gravity while still detaching smoothly with a single hand.
        </li>
      </ul>
      <p style="margin-top: 14px; font-size: 11.5px; opacity: .85;">
        <strong>Credits & Acknowledgments:</strong> Designed and built by Misbah M. Special thanks to <em>TinkerSpace, Calicut</em> for providing workspace, tools, 3D printing, and electronics fabrication support; and to YouTube and ChatGPT for technical references and circuit design discussions.
      </p>
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
          <img src="${project.heroImage}" alt="${project.heroAlt || project.title}" class="proj-hero-img" />
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

  // Hardware & Component Gallery
  const galleryPanel = document.getElementById("projGalleryPanel");
  const galleryGrid = document.getElementById("projGalleryGrid");
  const specsLabel = document.getElementById("projSpecsLabel");
  const learningsLabel = document.getElementById("projLearningsLabel");

  if (galleryPanel && galleryGrid) {
    if (project.gallery && project.gallery.length > 0) {
      galleryPanel.style.display = "block";
      galleryGrid.innerHTML = project.gallery
        .map(
          item => `
          <div class="gallery-card">
            <div class="gallery-card-thumb">
              <img src="${item.img}" alt="${item.title}" class="gallery-card-img" loading="lazy" />
              <div class="gallery-card-badge">${item.badge || "SPECIMEN"}</div>
            </div>
            <div class="gallery-card-meta">
              <div class="gallery-card-title">${item.title}</div>
              <div class="gallery-card-desc">${item.desc}</div>
            </div>
          </div>
        `
        )
        .join("");
      if (specsLabel) specsLabel.textContent = "05 // SPECIFICATIONS & DATA";
      if (learningsLabel) learningsLabel.textContent = "06 // KEY LEARNINGS";
    } else {
      galleryPanel.style.display = "none";
      if (specsLabel) specsLabel.textContent = "04 // SPECIFICATIONS & DATA";
      if (learningsLabel) learningsLabel.textContent = "05 // KEY LEARNINGS";
    }
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

  // Pagination / Next & Prev Project Links
  const nextBtn = document.getElementById("nextProjectLink");
  const prevBtn = document.getElementById("prevProjectLink");
  const projectKeys = Object.keys(projectsData);
  const currentIndex = projectKeys.indexOf(projectId);

  if (nextBtn) {
    const nextIndex = (currentIndex + 1) % projectKeys.length;
    const nextKey = projectKeys[nextIndex];
    nextBtn.href = `project.html?id=${nextKey}`;
    const titleSpan = nextBtn.querySelector(".nav-proj-title");
    if (titleSpan) titleSpan.textContent = projectsData[nextKey].title;
  }

  if (prevBtn) {
    const prevIndex = (currentIndex - 1 + projectKeys.length) % projectKeys.length;
    const prevKey = projectKeys[prevIndex];
    prevBtn.href = `project.html?id=${prevKey}`;
    const titleSpan = prevBtn.querySelector(".nav-proj-title");
    if (titleSpan) titleSpan.textContent = projectsData[prevKey].title;
  }
}

// Auto-run on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderProjectPage);
} else {
  renderProjectPage();
}

