const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Add GSAP to head
html = html.replace(
  '</title>',
  '</title>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>'
);

// 2. Modify Hero CSS
const oldHeroCss = `  /* ---- HERO ---- */
  #home {
    min-height: 100vh;
    padding-top: 68px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: linear-gradient(135deg, var(--white) 0%, var(--cream) 50%, var(--beige) 100%);
    overflow: hidden;
    position: relative;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 3rem 4rem 5rem;
    animation: fadeSlideUp 1s ease forwards;
    opacity: 0;
  }

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-tag {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--rose-dark);
    font-weight: 400;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .hero-tag::before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background: var(--rose-dark);
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(44px, 5vw, 68px);
    font-weight: 400;
    line-height: 1.1;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
  }
  .hero-title em { font-style: italic; color: var(--rose-dark); }

  .hero-sub {
    font-size: 15px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.7;
    max-width: 400px;
    margin-bottom: 2.5rem;
  }

  .hero-btns {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-primary {
    background: var(--charcoal);
    color: var(--white);
    padding: 14px 32px;
    font-family: var(--font-body);
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    display: inline-block;
  }
  .btn-primary:hover { background: var(--charcoal-soft); transform: translateY(-1px); }

  .btn-outline {
    background: transparent;
    color: var(--text-dark);
    padding: 13px 32px;
    font-family: var(--font-body);
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: 1px solid var(--stone-dark);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
    display: inline-block;
  }
  .btn-outline:hover { border-color: var(--charcoal); color: var(--charcoal); transform: translateY(-1px); }

  .hero-right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 1.2s ease 0.3s forwards;
    opacity: 0;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .hero-frame {
    width: 380px;
    height: 500px;
    position: relative;
  }

  .hero-img-box {
    width: 100%;
    height: 100%;
    background: linear-gradient(160deg, var(--stone) 0%, var(--beige) 60%, var(--rose) 100%);
    position: relative;
    overflow: hidden;
  }

  .hero-img-box::before {
    content: '';
    position: absolute;
    inset: 20px;
    border: 1px solid rgba(201,169,154,0.4);
    z-index: 1;
  }

  .hero-img-box::after {
    content: 'Fifa Collection';
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-display);
    font-size: 13px;
    letter-spacing: 0.15em;
    color: rgba(44,44,42,0.5);
    text-transform: uppercase;
    z-index: 2;
  }

  .hero-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.12;
    background-image:
      repeating-linear-gradient(45deg, var(--rose-dark) 0, var(--rose-dark) 1px, transparent 0, transparent 50%),
      repeating-linear-gradient(-45deg, var(--rose-dark) 0, var(--rose-dark) 1px, transparent 0, transparent 50%);
    background-size: 20px 20px;
  }

  .hero-frame-deco {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 120px;
    height: 120px;
    border-top: 2px solid var(--rose);
    border-right: 2px solid var(--rose);
  }

  .hero-frame-deco2 {
    position: absolute;
    bottom: -15px;
    left: -15px;
    width: 120px;
    height: 120px;
    border-bottom: 2px solid var(--gold);
    border-left: 2px solid var(--gold);
  }

  .hero-scroll {
    position: absolute;
    bottom: 2.5rem;
    left: 5rem;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-light);
    animation: fadeSlideUp 1s ease 0.6s forwards;
    opacity: 0;
  }
  .hero-scroll-line {
    width: 40px;
    height: 1px;
    background: var(--text-light);
    animation: expandLine 1.5s ease 1.5s forwards;
    transform-origin: left;
    transform: scaleX(0);
  }
  @keyframes expandLine {
    to { transform: scaleX(1); }
  }`;

const newHeroCss = `  /* ---- HERO ---- */
  #home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0; /* GSAP will fade this in */
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(28, 27, 24, 0.4);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 0 2rem;
    max-width: 800px;
    margin-top: 68px; /* account for navbar */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-tag {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--white);
    font-weight: 500;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    opacity: 0;
  }
  .hero-tag::before, .hero-tag::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: rgba(255,255,255,0.5);
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(52px, 8vw, 96px);
    font-weight: 400;
    line-height: 1.05;
    color: var(--white);
    margin-bottom: 1.5rem;
    opacity: 0;
  }
  .hero-title em { font-style: italic; color: var(--rose); }

  .hero-sub {
    font-size: 16px;
    font-weight: 300;
    color: rgba(255,255,255,0.9);
    line-height: 1.7;
    max-width: 500px;
    margin-bottom: 3rem;
    opacity: 0;
  }

  .hero-btns {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    opacity: 0;
  }

  .btn-primary {
    background: var(--white);
    color: var(--charcoal);
    padding: 15px 36px;
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }
  .btn-primary:hover { background: var(--beige); transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

  .btn-outline {
    background: transparent;
    color: var(--white);
    padding: 14px 36px;
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: 1px solid rgba(255,255,255,0.5);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }
  .btn-outline:hover { border-color: var(--white); background: rgba(255,255,255,0.1); transform: translateY(-2px); }

  .hero-scroll {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.7);
    z-index: 2;
    opacity: 0;
  }
  .hero-scroll-line {
    width: 1px;
    height: 40px;
    background: rgba(255,255,255,0.5);
  }`;
html = html.replace(oldHeroCss, newHeroCss);


// 3. Update Hero HTML
const oldHeroHtml = `<section id="home">
  <div class="hero-left">
    <div class="hero-tag">New Arrivals 2025</div>
    <h1 class="hero-title">Timeless<br><em>Pakistani</em><br>Elegance</h1>
    <p class="hero-sub">Discover our curated collection of premium suits, lawns &amp; formals — crafted for the modern woman who values heritage.</p>
    <div class="hero-btns">
      <a href="#collections" class="btn-primary">Shop Collections</a>
      <a href="#about" class="btn-outline">Our Story</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-frame">
      <div class="hero-img-box">
        <div class="hero-pattern"></div>
      </div>
      <div class="hero-frame-deco"></div>
      <div class="hero-frame-deco2"></div>
    </div>
  </div>
  <div class="hero-scroll">
    <div class="hero-scroll-line"></div>
    Scroll to explore
  </div>
</section>`;

const newHeroHtml = `<section id="home">
  <video class="hero-video" autoplay loop muted playsinline>
    <source src="Video/19791932-hd_1080_1920_30fps.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>
  
  <div class="hero-content">
    <div class="hero-tag">New Arrivals 2025</div>
    <h1 class="hero-title">Timeless<br><em>Pakistani</em><br>Elegance</h1>
    <p class="hero-sub">Discover our curated collection of premium suits, lawns &amp; formals — crafted for the modern woman who values heritage.</p>
    <div class="hero-btns">
      <a href="#collections" class="btn-primary">Shop Collections</a>
      <a href="#about" class="btn-outline">Our Story</a>
    </div>
  </div>

  <div class="hero-scroll">
    <div class="hero-scroll-line"></div>
    Scroll
  </div>
</section>`;
html = html.replace(oldHeroHtml, newHeroHtml);


// 4. Update Product Images and Card classes for GSAP
html = html.replace(
  '<div class="product-img-inner p1">\n          <div class="hero-pattern" style="opacity:0.08"></div>\n          <span class="prod-label">Lawn Collection</span>\n        </div>',
  '<img src="Photots/19c0461258951eee706a503a28441e7b.jpg" class="product-img-inner" style="object-fit:cover;">'
);
html = html.replace(
  '<div class="product-img-inner p2">\n          <div class="hero-pattern" style="opacity:0.08"></div>\n          <span class="prod-label">Chiffon Series</span>\n        </div>',
  '<img src="Photots/72c82cd0705b97203a6d006ebf9d54ed.jpg" class="product-img-inner" style="object-fit:cover;">'
);
html = html.replace(
  '<div class="product-img-inner p3">\n          <div class="hero-pattern" style="opacity:0.08"></div>\n          <span class="prod-label">Silk Luxe</span>\n        </div>',
  '<img src="Photots/CS07-Crimson-Summer_in_the_Meadows_-_D1A-2.webp" class="product-img-inner" style="object-fit:cover; object-position: top;">'
);
html = html.replace(
  '<div class="product-img-inner p4">\n          <div class="hero-pattern" style="opacity:0.08"></div>\n          <span class="prod-label">Formal Edit</span>\n        </div>',
  '<img src="Photots/pexels-dhanno-29413568.jpg" class="product-img-inner" style="object-fit:cover;">'
);
html = html.replace(
  '<div class="product-img-inner p5">\n          <div class="hero-pattern" style="opacity:0.08"></div>\n          <span class="prod-label">Summer Lawn</span>\n        </div>',
  '<img src="Photots/pexels-dhanno-33210490.jpg" class="product-img-inner" style="object-fit:cover;">'
);
html = html.replace(
  '<div class="product-img-inner p6">\n          <div class="hero-pattern" style="opacity:0.08"></div>\n          <span class="prod-label">Silk Bridal</span>\n        </div>',
  '<img src="Photots/pexels-dhanno-34933696.jpg" class="product-img-inner" style="object-fit:cover;">'
);

// Product Image CSS update for hover effect
const oldCardCss = `  .product-img {
    width: 100%;
    aspect-ratio: 3/4;
    position: relative;
    overflow: hidden;
  }

  .product-img-inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }`;

const newCardCss = `  .product-img {
    width: 100%;
    aspect-ratio: 3/4;
    position: relative;
    overflow: hidden;
  }

  .product-img-inner {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .product-card:hover .product-img-inner {
    transform: scale(1.05);
  }`;
html = html.replace(oldCardCss, newCardCss);


// 5. Update About Image
const oldAboutHtml = `      <div class="about-img-main">
        <div class="hero-pattern" style="opacity:0.07"></div>
      </div>`;
const newAboutHtml = `      <img src="Photots/pexels-dhanno-33300910.jpg" class="about-img-main" style="object-fit:cover;">`;
html = html.replace(oldAboutHtml, newAboutHtml);

// 6. Add GSAP logic at the end before </body>
const scriptIndex = html.lastIndexOf('</body>');
const gsapScript = `
  // ---- GSAP ANIMATIONS ----
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Load Animation
    const tl = gsap.timeline();
    tl.to(".hero-video", { opacity: 1, duration: 1.5, ease: "power2.inOut" })
      .to(".hero-tag", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .to(".hero-title", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
      .to(".hero-sub", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .to(".hero-btns", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .to(".hero-scroll", { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.2");

    // Start elements slightly transformed
    gsap.set([".hero-tag", ".hero-title", ".hero-sub", ".hero-btns"], { y: 30 });

    // Collection Scroll Animation
    gsap.utils.toArray('.product-card').forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0 },
        { 
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out"
        }
      );
    });

    // About Section
    gsap.fromTo(".about-left",
      { x: -50, opacity: 0 },
      { scrollTrigger: { trigger: "#about", start: "top 75%" }, x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(".about-right",
      { x: 50, opacity: 0 },
      { scrollTrigger: { trigger: "#about", start: "top 75%" }, x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Banner and Footer
    gsap.fromTo(".wa-banner",
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: ".wa-banner", start: "top 90%" }, y: 0, opacity: 1, duration: 0.8 }
    );
  });
`;
html = html.substring(0, scriptIndex) + gsapScript + html.substring(scriptIndex);


fs.writeFileSync('index.html', html);
console.log('Update complete');
