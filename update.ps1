$content = Get-Content -Path "index.html" -Raw -Encoding UTF8

$newHtml = @"
  <!-- FOOTER -->
  <footer class="luxury-footer">
    <div class="lf-main-grid">
      <!-- Brand Section -->
      <div class="lf-brand-section">
        <div class="lf-logo">
          <img src="Photots/logo.png" alt="FIFA Collection Logo" style="height:32px; border-radius:50%">
          <span>FIFA Collection</span>
        </div>
        <p class="lf-tagline">Elegance, redefined. Premium suits and ladies wear, curated with love from the heart of South Asian fashion.</p>
        
        <div class="lf-ig-grid-container">
          <p class="lf-ig-title">Follow us @fifacollection88</p>
          <div class="lf-ig-grid">
            <img src="Photots/logo.png" alt="Product preview 1" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <img src="Photots/logo.png" alt="Product preview 2" onerror="this.style.display='none'">
            <img src="Photots/logo.png" alt="Product preview 3" onerror="this.style.display='none'">
            <img src="Photots/logo.png" alt="Product preview 4" onerror="this.style.display='none'">
          </div>
        </div>
        
        <div class="lf-social-row">
          <a href="https://www.instagram.com/fifacollection88/#" target="_blank" class="lf-social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a href="#" class="lf-social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Accordions -->
      <div class="lf-accordions">
        <div class="lf-accordion open">
          <button class="lf-accordion-header" role="button" aria-expanded="true" aria-controls="panel-shop" onclick="toggleAccordion(this)">
            SHOP
            <svg class="lf-chevron" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <div id="panel-shop" class="lf-accordion-content">
            <ul>
              <li><a href="#collections">Lawn Suits</a></li>
              <li><a href="#collections">Chiffon Sets</a></li>
              <li><a href="#collections">Silk Wear</a></li>
              <li><a href="#collections">Formal Wear</a></li>
            </ul>
          </div>
        </div>
        
        <div class="lf-accordion">
          <button class="lf-accordion-header" role="button" aria-expanded="false" aria-controls="panel-help" onclick="toggleAccordion(this)">
            HELP
            <svg class="lf-chevron" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <div id="panel-help" class="lf-accordion-content">
            <ul>
              <li><a href="https://wa.me/917291045422?text=Hi%20FIFA%20Collection,%20I'm%20interested%20in%20your%20products" target="_blank">WhatsApp Order</a></li>
              <li><a href="#contact">Custom Orders</a></li>
              <li><a href="#contact">Size Guide</a></li>
              <li><a href="#contact">Returns & Exchange</a></li>
              <li><a href="#contact">Shipping Info</a></li>
            </ul>
          </div>
        </div>

        <div class="lf-accordion">
          <button class="lf-accordion-header" role="button" aria-expanded="false" aria-controls="panel-about" onclick="toggleAccordion(this)">
            ABOUT US
            <svg class="lf-chevron" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <div id="panel-about" class="lf-accordion-content">
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#contact">Store Location</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="lf-newsletter">
        <div class="lf-newsletter-text">
          <h3>Join the Inner Circle</h3>
          <p>Be the first to know about new collections, exclusive offers, and styling tips.</p>
        </div>
        <form onsubmit="handleNewsletterSubmit(event)">
          <div class="lf-form-row">
            <input type="email" id="lf-email-input" class="lf-input" placeholder="Enter your email" required>
            <button type="submit" class="lf-submit" id="lf-submit-btn">Subscribe</button>
          </div>
          <span class="lf-privacy">We respect your privacy. Unsubscribe anytime.</span>
          <span class="lf-msg" id="lf-msg"></span>
        </form>
      </div>
    </div>

    <!-- Trust Badges -->
    <div class="lf-trust-row">
      <div class="lf-trust-badge">
        <div class="lf-trust-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <span class="lf-trust-label">Secure Payments</span>
      </div>
      <div class="lf-trust-badge">
        <div class="lf-trust-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </div>
        <span class="lf-trust-label">Cash on Delivery</span>
      </div>
      <div class="lf-trust-badge">
        <div class="lf-trust-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
        </div>
        <span class="lf-trust-label">Free Shipping</span>
      </div>
      <div class="lf-trust-badge">
        <div class="lf-trust-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        </div>
        <span class="lf-trust-label">Easy Returns</span>
      </div>
      
      <div class="lf-payments">
        Visa &middot; Mastercard &middot; UPI &middot; Paytm &middot; COD
      </div>
    </div>

    <!-- Contact Info -->
    <div class="lf-contact-bar">
      <a href="https://wa.me/917291045422?text=Hi%20FIFA%20Collection,%20I'm%20interested%20in%20your%20products" class="lf-wa-link" target="_blank">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Order on WhatsApp: +91-7291045422
      </a>
      <p class="lf-location">New Delhi, India</p>
    </div>

    <!-- Copyright -->
    <div class="lf-copyright-bar">
      <span class="lf-copy-text">© 2025 FIFA Collection. All rights reserved.</span>
      <span class="lf-copy-links">
        <a href="#">Privacy Policy</a> &middot; <a href="#">Terms of Service</a>
      </span>
    </div>
  </footer>
"@

$newJs = @"
  <script>
    // Footer Accordion Logic
    function toggleAccordion(btn) {
      if(window.innerWidth >= 768) return; // disabled on desktop grid
      const accordion = btn.parentElement;
      const isOpen = accordion.classList.contains('open');
      
      // Close all
      document.querySelectorAll('.lf-accordion').forEach(acc => {
        acc.classList.remove('open');
        acc.querySelector('.lf-accordion-header').setAttribute('aria-expanded', 'false');
      });
      
      // Open clicked if it was closed
      if (!isOpen) {
        accordion.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    }

    // Newsletter Form Logic
    function handleNewsletterSubmit(e) {
      e.preventDefault();
      const input = document.getElementById('lf-email-input');
      const btn = document.getElementById('lf-submit-btn');
      const msg = document.getElementById('lf-msg');
      const email = input.value;
      
      // Reset msg
      msg.className = 'lf-msg';
      msg.innerText = '';
      
      // Validation
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+`$/)) {
        msg.classList.add('error');
        msg.innerText = 'Please enter a valid email address.';
        return;
      }
      
      // Loading State
      const originalText = btn.innerText;
      btn.innerText = 'Subscribing...';
      btn.style.opacity = '0.7';
      btn.disabled = true;
      
      // Mock API call
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.opacity = '1';
        btn.disabled = false;
        input.value = '';
        msg.classList.add('success');
        msg.innerText = 'Thank you for joining the inner circle!';
      }, 1500);
    }
  </script>
</body>
"@

$content = $content -replace '(?s)<!-- FOOTER -->.*?</footer>', $newHtml
$content = $content -replace '</body>', $newJs

Set-Content -Path "index.html" -Value $content -Encoding UTF8
