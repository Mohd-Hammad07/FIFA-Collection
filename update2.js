const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// --- 1. Remove "Pakistani" from hero title ---
html = html.replace(
  '<h1 class="hero-title">Timeless<br><em>Pakistani</em><br>Elegance</h1>',
  '<h1 class="hero-title">Timeless<br><em>Elegance</em></h1>'
);

// --- 2. Smart Navbar CSS ---
const navCss = `    /* ---- NAVBAR ---- */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--stone);
      height: 68px;
      display: flex;
      align-items: center;
      padding: 0 2.5rem;
      justify-content: space-between;
      transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s;
    }
    nav.nav-hidden {
      transform: translateY(-100%);
    }`;
html = html.replace(/(\/\* ---- NAVBAR ---- \*\/[\s\S]*?justify-content: space-between;\s*})/, navCss);

// --- 3. Custom Cursor CSS ---
const newCss = `
    /* ---- CUSTOM CURSOR ---- */
    @media (hover: hover) and (pointer: fine) {
      body, a, button, .product-card, input, textarea {
        cursor: none !important;
      }
    }
    .custom-cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      background: var(--charcoal);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s, background 0.2s, border 0.2s;
    }
    .custom-cursor.hover {
      width: 50px;
      height: 50px;
      background: rgba(44, 44, 42, 0.05);
      border: 1px solid var(--charcoal);
      backdrop-filter: blur(2px);
    }
    .custom-cursor.hover-dark {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid var(--white);
    }

    /* ---- PRELOADER ---- */
    .preloader {
      position: fixed;
      inset: 0;
      background: var(--charcoal);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .preloader-text {
      font-family: var(--font-display);
      font-size: clamp(32px, 5vw, 48px);
      color: var(--white);
      letter-spacing: 0.05em;
      opacity: 0;
    }
    .preloader-text em {
      font-style: italic;
      color: var(--rose);
    }

    /* ---- MARQUEE ---- */
    .marquee-container {
      background: var(--charcoal);
      color: var(--white);
      padding: 1.5rem 0;
      overflow: hidden;
      display: flex;
      border-top: 1px solid rgba(255,255,255,0.1);
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .marquee-content {
      display: flex;
      white-space: nowrap;
      font-family: var(--font-body);
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      gap: 3rem;
      padding-right: 3rem;
    }
    .marquee-content .dot {
      color: var(--rose);
    }

    /* Update product image for parallax */
    .product-img {
      width: 100%;
      aspect-ratio: 3/4;
      position: relative;
      overflow: hidden;
    }
    .product-img-inner {
      width: 100%;
      height: 120%; /* Extra height for parallax */
      display: block;
      position: absolute;
      top: -10%;
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .product-card:hover .product-img-inner {
      transform: scale(1.05); /* keep zoom effect */
    }
`;

html = html.replace('/* ---- TOAST ---- */', newCss + '\n    /* ---- TOAST ---- */');


// --- 4. Add HTML elements ---
const preloaderHtml = `
  <!-- PRELOADER -->
  <div class="preloader">
    <div class="preloader-text"><em>Fifa</em> Collection</div>
  </div>

  <!-- CUSTOM CURSOR -->
  <div class="custom-cursor" id="custom-cursor"></div>
`;
html = html.replace('<body>', '<body>\n' + preloaderHtml);

const marqueeHtml = `
  <!-- MARQUEE -->
  <div class="marquee-container">
    <div class="marquee-content" id="marquee-content">
      <span>PREMIUM QUALITY</span><span class="dot">•</span>
      <span>NATIONWIDE DELIVERY</span><span class="dot">•</span>
      <span>AUTHENTIC HERITAGE</span><span class="dot">•</span>
      <span>SECURE CHECKOUT</span><span class="dot">•</span>
      <span>LUXURY FABRICS</span><span class="dot">•</span>
      <span>EXQUISITE DETAILS</span><span class="dot">•</span>
      <!-- duplicated for seamless loop -->
      <span>PREMIUM QUALITY</span><span class="dot">•</span>
      <span>NATIONWIDE DELIVERY</span><span class="dot">•</span>
      <span>AUTHENTIC HERITAGE</span><span class="dot">•</span>
      <span>SECURE CHECKOUT</span><span class="dot">•</span>
      <span>LUXURY FABRICS</span><span class="dot">•</span>
      <span>EXQUISITE DETAILS</span><span class="dot">•</span>
    </div>
  </div>
`;
html = html.replace('</section>\n\n  <!-- COLLECTIONS -->', '</section>\n' + marqueeHtml + '\n  <!-- COLLECTIONS -->');


// --- 5. Add JS ---
const existingGsapStart = `// Hero Load Animation`;
const newGsapLogic = `
  // Preloader Animation
  const preloader = document.querySelector(".preloader");
  const tlPreload = gsap.timeline({
    onComplete: () => {
      preloader.style.display = "none";
      // Hero Load Animation
      const tl = gsap.timeline();
      tl.to(".hero-video", { opacity: 1, duration: 1.5, ease: "power2.inOut" })
        .to(".hero-tag", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5")
        .to(".hero-title", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
        .to(".hero-sub", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.6")
        .to(".hero-btns", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .to(".hero-scroll", { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.2");
    }
  });

  tlPreload.to(".preloader-text", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
           .to(".preloader-text", { opacity: 0, y: -20, duration: 0.8, ease: "power2.in", delay: 0.5 })
           .to(preloader, { yPercent: -100, duration: 1, ease: "power4.inOut" });

  // Custom Cursor Logic
  const cursor = document.getElementById('custom-cursor');
  if (window.matchMedia("(hover: hover)").matches) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      gsap.set(cursor, { x: cursorX, y: cursorY });
    });

    // Hover effect
    const interactables = document.querySelectorAll('a, button, .product-card, .wa-banner');
    interactables.forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
        // Dark hover for sections with dark bg
        if(el.closest('footer') || el.closest('.marquee-container')) {
          cursor.classList.add("hover-dark");
        }
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
        cursor.classList.remove("hover-dark");
      });
    });

    // Magnetic effect for buttons
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-outline, .add-cart-btn');
    magneticBtns.forEach(btn => {
      btn.addEventListener("mousemove", function(e) {
        const rect = this.getBoundingClientRect();
        const h = rect.width / 2;
        const w = rect.height / 2;
        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - w;
        gsap.to(this, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", function(e) {
        gsap.to(this, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      });
    });
  }

  // Smart Navbar Logic
  let lastScrollY = window.scrollY;
  const nav = document.querySelector('nav');
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY) {
        nav.classList.add("nav-hidden");
      } else {
        nav.classList.remove("nav-hidden");
      }
    } else {
      nav.classList.remove("nav-hidden");
    }
    lastScrollY = window.scrollY;
  });

  // Marquee Animation
  const marquee = document.getElementById("marquee-content");
  gsap.to(marquee, {
    xPercent: -50,
    ease: "none",
    duration: 15,
    repeat: -1
  });

  // Parallax on Product Images
  gsap.utils.toArray('.product-img-inner').forEach(img => {
    gsap.fromTo(img,
      { yPercent: -5 },
      {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: img.closest('.product-card'),
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  });
`;

// Replace old Hero logic with new Preloader + Hero + Luxury logic
html = html.replace(/(\/\/ Hero Load Animation[\s\S]*?gsap\.set\(\[\"\.hero-tag\", \"\.hero-title\", \"\.hero-sub\", \"\.hero-btns\"\], { y: 30 }\);)/, newGsapLogic);

fs.writeFileSync('index.html', html);
console.log('Update2 complete');
