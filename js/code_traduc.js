/* ============================================================
   i18n.js — Bascule de langue FR / EN pour le portfolio
   Ajoute simplement des attributs data-i18n="clé" sur un élément
   HTML pour qu'il soit traduit automatiquement.
   ============================================================ */

(function () {
  "use strict";

  const translations = {
    fr: {
      "nav.accueil": "Accueil",
      "nav.apropos": "À propos",
      "nav.stack": "Stack",
      "nav.projets": "Projets",
      "nav.parcours": "Parcours",
      "nav.contact": "Contact",

      "header.cta": "Disponible pour missions",

      "hero.eyebrow": "Développeur Full-Stack — Douala, Cameroun",
      "hero.title1": "Je conçois des systèmes",
      "hero.title2": "du serveur à l'écran.",
      "hero.lede": "Étudiant en Master&nbsp;1 Développement d'Applications à l'Université de Douala, je construis des plateformes complètes — API robustes, interfaces soignées, applications mobiles et briques d'intelligence artificielle.",
      "hero.cta1": "Voir mes projets",
      "hero.cta2": "Me contacter",

      "apropos.title": "Du cahier des charges<br>à la mise en production.",
      "apropos.p1": "Je m'appelle <strong>Freddy Roland Hinkamma</strong>. Je conçois des applications complètes en tant que développeur full-stack : back-end Laravel, front-end Angular, et micro-services Python/FastAPI pour les fonctionnalités d'intelligence artificielle.",
      "apropos.p2": "Mon approche est méthodique — modélisation UML, conception de bases de données, architecture logicielle — avant d'écrire la moindre ligne de code. J'aime les projets qui résolvent un vrai problème métier, du recrutement à la gestion de stock.",
      "apropos.p3": "Je dirige également l'équipe de formation du <strong>Digital&nbsp;Bootcamp</strong>, dont la mission est d'initier les apprenants aux outils du numérique à travers des formations pratiques.",
      "apropos.fact1label": "Localisation",
      "apropos.fact1value": "Douala, Cameroun",
      "apropos.fact2label": "Formation",
      "apropos.fact2value": "Master 1 — Développement d'Applications, Univ. de Douala",
      "apropos.fact3label": "Disponibilité",
      "apropos.fact3value": "Missions freelance &amp; projets professionnels",
      "apropos.fact4label": "Langues",
      "apropos.fact4value": "Français, Anglais technique",

      "stack.eyebrow": "Stack technique",
      "stack.title": "Cinq couches, un seul système.",
      "stack.intro": "Comme dans une coupe technique de bâtiment, chaque couche de mon stack a un rôle précis et s'articule avec les autres. Survolez une couche pour en voir le détail.",
      "stack.l01.name": "Interface",
      "stack.l01.detail": "Composants, signals, routing et gestion d'état réactive pour des interfaces rapides et maintenables.",
      "stack.l02.name": "Serveur",
      "stack.l02.detail": "API sécurisées, authentification, ressources structurées, pagination et limitation de débit.",
      "stack.l03.name": "Données",
      "stack.l03.detail": "Modélisation Merise/UML, schémas normalisés, requêtes optimisées.",
      "stack.l04.name": "Intelligence",
      "stack.l04.detail": "Micro-services d'analyse et de recommandation branchés sur le reste du système.",

      "projets.title": "Sélection de projets.",
      "projets.voirdetail": "Voir le détail",
      "projets.p1.status": "Projet de groupe",
      "projets.p1.desc": "Marketplace mettant en relation artisans et clients, enrichie de recommandations par apprentissage automatique et d'un système de gamification.",
      "projets.p1.l1": "Modélisation UML complète (cas d'usage, classes, séquences)",
      "projets.p1.l2": "Recommandations d'artisans par apprentissage automatique",
      "projets.p1.l3": "Système de badges et de points pour fidéliser les utilisateurs",
      "projets.p2.status": "PROJET PERSO",
      "projets.p2.desc": "API REST bancaire +INTERFACE — authentification Sanctum, ressources structurées, pagination et limitation de débit pour un usage en production.",
      "projets.p2.l1": "Authentification par jetons avec Laravel Sanctum",
      "projets.p2.l2": "API Resources pour structurer les réponses JSON",
      "projets.p2.l3": "Pagination et limitation de débit pour la production",
      "projets.p3.desc": "Solution SaaS intelligente de gestion de stock, conçue avec une modélisation UML complète et un dossier de conception détaillé.",
      "projets.p3.l1": "Cahier des charges et dossier de conception avec 26 diagrammes de séquence",
      "projets.p3.l2": "Suivi des stocks en temps réel avec alertes de seuil",
      "projets.p3.l3": "Architecture pensée pour un usage multi-entreprises (SaaS)",

      "parcours.title": "Repères.",
      "parcours.t1.h": "Licence en informatique",
      "parcours.t1.p": "Université de Douala. Licence académique en système embarqué et intelligent",
      "parcours.t2.h": "Master 1, Développement d'Applications",
      "parcours.t2.p": "Université de Douala. Approfondissement de l'architecture logicielle, du génie logiciel et des méthodes numériques appliquées.",
      "parcours.t3.date": "En cours",
      "parcours.t3.h": "Responsable — Équipe de formation Digital Bootcamp",
      "parcours.t3.p": "Je dirige l'équipe de formation du Digital Bootcamp, dont l'objectif est d'initier les apprenants aux outils du numérique. Nous proposons principalement des formations pratiques (HTML, CSS, JavaScript) destinées aux lycéens.",
      "parcours.figcaption": "FIG. 02 — PREUVE TERRAIN, DIGITAL BOOTCAMP",

      "contact.title": "Discutons de votre projet.",
      "contact.intro": "Ouvert aux missions freelance et aux opportunités professionnelles. Laissez-moi un message, je réponds rapidement.",
      "contact.form.name": "Nom",
      "contact.form.nameph": "Votre nom",
      "contact.form.email": "E-mail",
      "contact.form.message": "Message",
      "contact.form.messageph": "Décrivez votre projet...",
      "contact.form.submit": "Envoyer le message",

      "footer.rights": "Freddy Hinkamma — Tous droits réservés.",
      "footer.note": "Conçu &amp; codé à Douala."
    },

    en: {
      "nav.accueil": "Home",
      "nav.apropos": "About",
      "nav.stack": "Stack",
      "nav.projets": "Projects",
      "nav.parcours": "Journey",
      "nav.contact": "Contact",

      "header.cta": "Available for work",

      "hero.eyebrow": "Full-Stack Developer — Douala, Cameroon",
      "hero.title1": "I design systems",
      "hero.title2": "from the server to the screen.",
      "hero.lede": "Master's&nbsp;1 student in Application Development at the University of Douala, I build complete platforms — robust APIs, polished interfaces, mobile apps and AI-powered building blocks.",
      "hero.cta1": "View my projects",
      "hero.cta2": "Get in touch",

      "apropos.title": "From specifications<br>to production deployment.",
      "apropos.p1": "My name is <strong>Freddy Roland Hinkamma</strong>. I design complete applications as a full-stack developer: Laravel back-end, Angular front-end, and Python/FastAPI micro-services for AI features.",
      "apropos.p2": "My approach is methodical — UML modeling, database design, software architecture — before writing a single line of code. I love projects that solve a real business problem, from recruitment to stock management.",
      "apropos.p3": "I also lead the training team of the <strong>Digital&nbsp;Bootcamp</strong>, whose mission is to introduce learners to digital tools through hands-on training.",
      "apropos.fact1label": "Location",
      "apropos.fact1value": "Douala, Cameroon",
      "apropos.fact2label": "Education",
      "apropos.fact2value": "Master's 1 — Application Development, Univ. of Douala",
      "apropos.fact3label": "Availability",
      "apropos.fact3value": "Freelance work &amp; professional projects",
      "apropos.fact4label": "Languages",
      "apropos.fact4value": "French, Technical English",

      "stack.eyebrow": "Tech stack",
      "stack.title": "Five layers, one system.",
      "stack.intro": "Like a technical cross-section of a building, each layer of my stack has a precise role and fits together with the others. Hover a layer to see the detail.",
      "stack.l01.name": "Interface",
      "stack.l01.detail": "Components, signals, routing and reactive state management for fast, maintainable interfaces.",
      "stack.l02.name": "Server",
      "stack.l02.detail": "Secure APIs, authentication, structured resources, pagination and rate limiting.",
      "stack.l03.name": "Data",
      "stack.l03.detail": "Merise/UML modeling, normalized schemas, optimized queries.",
      "stack.l04.name": "Intelligence",
      "stack.l04.detail": "Analysis and recommendation micro-services connected to the rest of the system.",

      "projets.title": "Selected projects.",
      "projets.voirdetail": "View details",
      "projets.p1.status": "Group project",
      "projets.p1.desc": "Marketplace connecting artisans and clients, enhanced with machine-learning recommendations and a gamification system.",
      "projets.p1.l1": "Complete UML modeling (use case, class, sequence diagrams)",
      "projets.p1.l2": "Artisan recommendations via machine learning",
      "projets.p1.l3": "Badge and points system to build user loyalty",
      "projets.p2.status": "PERSONAL PROJECT",
      "projets.p2.desc": "Banking REST API + interface — Sanctum authentication, structured resources, pagination and rate limiting for production use.",
      "projets.p2.l1": "Token-based authentication with Laravel Sanctum",
      "projets.p2.l2": "API Resources to structure JSON responses",
      "projets.p2.l3": "Pagination and rate limiting for production",
      "projets.p3.desc": "Smart SaaS stock management solution, built with complete UML modeling and a detailed design document.",
      "projets.p3.l1": "Specifications and design document with 26 sequence diagrams",
      "projets.p3.l2": "Real-time stock tracking with threshold alerts",
      "projets.p3.l3": "Architecture designed for multi-tenant (SaaS) use",

      "parcours.title": "Milestones.",
      "parcours.t1.h": "Bachelor's Degree in Computer Science",
      "parcours.t1.p": "University of Douala. Academic degree in embedded and intelligent systems",
      "parcours.t2.h": "Master's 1, Application Development",
      "parcours.t2.p": "University of Douala. Deep dive into software architecture, software engineering and applied numerical methods.",
      "parcours.t3.date": "Ongoing",
      "parcours.t3.h": "Lead — Digital Bootcamp Training Team",
      "parcours.t3.p": "I lead the Digital Bootcamp training team, whose goal is to introduce learners to digital tools. We mainly offer hands-on training (HTML, CSS, JavaScript) for high school students.",
      "parcours.figcaption": "FIG. 02 — FIELD PROOF, DIGITAL BOOTCAMP",

      "contact.title": "Let's talk about your project.",
      "contact.intro": "Open to freelance work and professional opportunities. Leave me a message, I reply quickly.",
      "contact.form.name": "Name",
      "contact.form.nameph": "Your name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.messageph": "Describe your project...",
      "contact.form.submit": "Send message",

      "footer.rights": "Freddy Hinkamma — All rights reserved.",
      "footer.note": "Designed &amp; built in Douala."
    }
  };

  const STORAGE_KEY = "portfolio-lang";
  const root = document.documentElement;
  const toggleBtn = document.getElementById("lang-toggle");

  function getPreferredLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
    const browserLang = (navigator.language || "fr").slice(0, 2);
    return browserLang === "en" ? "en" : "fr";
  }

  function applyLang(lang) {
    const dict = translations[lang] || translations.fr;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    root.setAttribute("lang", lang);
    root.dataset.lang = lang;
    if (toggleBtn) {
      toggleBtn.setAttribute("data-active", lang);
      toggleBtn.setAttribute(
        "aria-label",
        lang === "fr" ? "Switch to English" : "Passer en français"
      );
    }
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    const lang = getPreferredLang();
    applyLang(lang);

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const current = root.dataset.lang === "en" ? "en" : "fr";
        applyLang(current === "fr" ? "en" : "fr");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
