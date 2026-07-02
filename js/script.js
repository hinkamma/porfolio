document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. Photo du hero — affiche un cadre vide si l'image
     assets/photo.jpg n'existe pas encore
  ============================================================ */
  const heroPhotoFrame = document.getElementById('hero-photo-frame');
  const heroPhotoImg = document.getElementById('hero-photo-img');
  if (heroPhotoFrame && heroPhotoImg) {
    heroPhotoImg.addEventListener('error', () => {
      heroPhotoFrame.classList.add('img-missing');
    });
    if (heroPhotoImg.complete && heroPhotoImg.naturalWidth === 0) {
      heroPhotoFrame.classList.add('img-missing');
    }
  }

  const bootcampPhotoFrame = document.getElementById('bootcamp-photo-frame');
  const bootcampPhotoImg = document.getElementById('bootcamp-photo-img');
  if (bootcampPhotoFrame && bootcampPhotoImg) {
    bootcampPhotoImg.addEventListener('error', () => {
      bootcampPhotoFrame.classList.add('img-missing');
    });
    if (bootcampPhotoImg.complete && bootcampPhotoImg.naturalWidth === 0) {
      bootcampPhotoFrame.classList.add('img-missing');
    }
  }

  /* ============================================================
     2. Bascule clair / sombre
  ============================================================ */
  const themeToggle = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');
  const root = document.documentElement;

  function setTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      themeLabel.textContent = 'Sombre';
      themeToggle.setAttribute('aria-pressed', 'true');
    } else {
      root.removeAttribute('data-theme');
      themeLabel.textContent = 'Clair';
      themeToggle.setAttribute('aria-pressed', 'false');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  /* ============================================================
     3. Effet "terminal" — tape les lignes de présentation
  ============================================================ */
  const terminalBody = document.getElementById('terminal-body');

  const terminalLines = [
    { type: 'prompt', text: 'whoami' },
    { type: 'out',    text: 'Freddy Roland Hinkamma Sakamsou' },
    { type: 'prompt', text: 'cat stack.json' },
    { type: 'out',    text: '["Angular","Laravel","Flutter","FastAPI","PostgreSQL"]' },
    { type: 'prompt', text: 'php artisan --status' },
    { type: 'out',    text: 'Disponible pour projets freelance ✓' },
    { type: 'comment',text: '// prêt à construire votre prochain système' },
  ];

  function typeTerminal() {
    if (!terminalBody) return;
    terminalBody.innerHTML = '';
    let lineIndex = 0;

    function nextLine() {
      if (lineIndex >= terminalLines.length) {
        const cursor = document.createElement('span');
        cursor.className = 'term-cursor';
        terminalBody.appendChild(cursor);
        return;
      }

      const line = terminalLines[lineIndex];
      const row = document.createElement('div');

      if (line.type === 'prompt') {
        row.innerHTML = '<span class="term-prompt">$</span> <span class="term-line"></span>';
      } else if (line.type === 'out') {
        row.innerHTML = '<span class="term-out"></span>';
      } else {
        row.innerHTML = '<span class="term-comment"></span>';
      }
      terminalBody.appendChild(row);

      const target = row.querySelector('span:last-child');
      let charIndex = 0;
      const speed = line.type === 'prompt' ? 45 : 18;

      function typeChar() {
        if (charIndex < line.text.length) {
          target.textContent += line.text[charIndex];
          charIndex++;
          setTimeout(typeChar, speed);
        } else {
          lineIndex++;
          setTimeout(nextLine, line.type === 'prompt' ? 250 : 450);
        }
      }
      typeChar();
    }

    nextLine();
  }

  if (terminalBody) {
    const terminalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeTerminal();
          terminalObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });
    terminalObserver.observe(terminalBody);
  }

  /* ============================================================
     4. Navigation mobile
  ============================================================ */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ============================================================
     5. Lien de navigation actif au scroll
  ============================================================ */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(section => navObserver.observe(section));

  /* ============================================================
     6. Couches du stack — dépliables au clic
  ============================================================ */
  document.querySelectorAll('.stack-layer').forEach(layer => {
    layer.addEventListener('click', () => {
      const isOpen = layer.classList.toggle('is-open');
      layer.setAttribute('aria-expanded', String(isOpen));
    });
  });

  /* ============================================================
     7. Cartes projets — dépliables au clic / à la touche Entrée
  ============================================================ */
  document.querySelectorAll('.project-card').forEach(card => {
    function toggleCard() {
      const isOpen = card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', String(isOpen));
    }
    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard();
      }
    });
  });

  /* ============================================================
     8. Formulaire de contact — démo front-end uniquement
  ============================================================ */
  const contactForm = document.getElementById('contact-form');
  const formNote = document.getElementById('form-note');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formNote.textContent = "Message prêt à être envoyé — connectez ce formulaire à un back-end pour l'activer réellement.";
      formNote.style.color = 'var(--line-blue)';
      formNote.style.borderLeftColor = 'var(--line-blue)';
    });
  }

  /* ============================================================
     9. Header — ombre légère après scroll
  ============================================================ */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 40
      ? '0 10px 30px -22px rgba(15,38,69,0.35)'
      : 'none';
  });

  /* ============================================================
     10. Année dynamique dans le footer
  ============================================================ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
