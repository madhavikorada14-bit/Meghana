/**
 * K. Madhavi Portfolio - Interactive Frontend Logic
 * Features: Typewriter, Scroll Reveal, Ambient Canvas, Responsive Navigation,
 * Progress Bar Animation, Form Handling, Back-to-top.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Preloader removal
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (preloader) {
        preloader.classList.add('hidden');
      }
    }, 450);
  });

  // Typewriter Effect
  initTypewriter();

  // Mobile Navigation
  initMobileNav();

  // Scroll Reveal & Active Links
  initScrollEffects();

  // Ambient Starfield / Particle Background
  initAmbientCanvas();

  // Contact Form Handling (honest, transparent UX)
  initContactForm();

  // Back to Top Button
  initBackToTop();
});

/* -------------------------------------------------------------
 * 1. Typewriter Effect
 * ------------------------------------------------------------- */
function initTypewriter() {
  const words = [
    'Aspiring Software Developer',
    'MCA Student',
    'Python Programmer',
    'Core Java Enthusiast'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedEl = document.getElementById('typed-text');
  if (!typedEl) return;

  const typingSpeed = 100;
  const deletingSpeed = 45;
  const pauseEnd = 1800;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typedEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* -------------------------------------------------------------
 * 2. Mobile Navigation Toggle
 * ------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.classList.remove('open');
    });
  });
}

/* -------------------------------------------------------------
 * 3. Scroll Reveal & Active Section Highlighting
 * ------------------------------------------------------------- */
function initScrollEffects() {
  const reveals = document.querySelectorAll('.reveal');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const progressFills = document.querySelectorAll('.progress-fill');

  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.88;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('active');
      }
    });

    // Animate progress bars once skills section enters viewport
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const rect = skillsSection.getBoundingClientRect();
      if (rect.top < triggerBottom && rect.bottom >= 0) {
        progressFills.forEach((fill) => {
          const target = fill.style.getPropertyValue('--target-width');
          if (target) {
            fill.style.width = target;
          }
        });
      }
    }

    // Highlight current nav item
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', checkReveal, { passive: true });
  checkReveal(); // initial trigger
}

/* -------------------------------------------------------------
 * 4. Ambient Particle Canvas
 * ------------------------------------------------------------- */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(width > 768 ? 45 : 20, 50);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: i % 2 === 0 ? 'rgba(6, 182, 212, 0.45)' : 'rgba(168, 85, 247, 0.4)'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

/* -------------------------------------------------------------
 * 5. Contact Form Handler
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  const notif = document.getElementById('formNotification');
  if (!form || !notif) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const subject = document.getElementById('msgSubject').value.trim();
    const message = document.getElementById('msgContent').value.trim();

    // Prepare default mailto link to guarantee genuine email delivery
    const mailtoUrl = `mailto:madhavikorada14@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${subject}] from ${name}`
    )}&body=${encodeURIComponent(
      `Hi K. Madhavi,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Portfolio Website`
    )}`;

    notif.className = 'form-notification success';
    notif.innerHTML = `
      <strong>Thank you, ${name}!</strong><br/>
      Opening your default email app to deliver this inquiry directly to <code>madhavikorada14@gmail.com</code>.
    `;
    notif.style.display = 'block';

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  });
}

/* -------------------------------------------------------------
 * 6. Back to Top Button
 * ------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

