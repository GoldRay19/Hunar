/* ============================================================
   PROJECT HUNAR — Main Application
   Router, Icons, Components, Views, Event Handlers
   ============================================================ */

window.HUNAR = window.HUNAR || {};

// ═══════════════════════════════════════════════════════════
// ICONS (inline SVGs)
// ═══════════════════════════════════════════════════════════

HUNAR.Icons = {
  dashboard: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  compass: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  folder: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>',
  user: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  star: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  map: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
  clipboard: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  settings: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
  search: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  bell: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',
  plus: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  chevronRight: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>',
  clock: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  users: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  award: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  send: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  eye: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  check: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  arrowLeft: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  spark: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  menu: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  share: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  trendUp: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  filter: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  externalLink: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  home: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  edit: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  refresh: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.34L23 10"/></svg>',
  globe: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
  verified: '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 1.8 3-.2 1 2.8 2.4 1.5-1.5 2.9.5 3.3L12 22l-4.4-1.7.5-3.3L4 14.8l2.4-1.5 1-2.8 3-.2L12 2z"/><path d="M9 16.2l-2.5-2.5L5 15.2l4 4 8-8-1.4-1.4-5.6 5.6z" fill="white"/></svg>',
  lock: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>',
  trendDown: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>',
  graduation: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/><path d="M5 18l7-6 7 6"/><path d="M12 3v18"/></svg>'
};


// ═══════════════════════════════════════════════════════════
// UTILITY HELPERS
// ═══════════════════════════════════════════════════════════

HUNAR.Utils = {
  formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  },
  timeAgo(dateStr) {
    const now = new Date();
    const d = new Date(dateStr);
    const diff = Math.floor((now - d) / 1000);
    if (diff < 60) return 'just now';
    if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
    if (diff < 2592000) return Math.floor(diff / 86400) + 'd ago';
    return HUNAR.Utils.formatDate(dateStr);
  },
  escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },
  categoryBannerClass(category) {
    const map = { 'Technology': 'tech', 'Sustainability': 'sustainability', 'Education': 'education', 'Community Development': 'community', 'Creativity': 'creativity', 'Entrepreneurship': 'entrepreneurship' };
    return map[category] || '';
  },
  categoryBadgeClass(category) {
    const map = { 'Technology': 'badge-blue', 'Sustainability': 'badge-green', 'Education': 'badge-amber', 'Community Development': 'badge-rose', 'Creativity': 'badge-purple', 'Entrepreneurship': 'badge-orange' };
    return map[category] || 'badge-slate';
  },
  difficultyClass(difficulty) {
    return (difficulty || '').toLowerCase();
  },
  statusBadge(status) {
    const map = { pending: { class: 'badge-amber', label: 'Pending Review' }, reviewed: { class: 'badge-green', label: 'Reviewed' }, 'in-progress': { class: 'badge-blue', label: 'In Progress' }, draft: { class: 'badge-slate', label: 'Draft' }, 'revision-requested': { class: 'badge-rose', label: 'Revision Requested' } };
    const s = map[status] || { class: 'badge-slate', label: status };
    return `<span class="badge ${s.class}">${s.label}</span>`;
  },
  renderStars(rating, max = 5) {
    let html = '';
    for (let i = 1; i <= max; i++) {
      html += `<span style="color:${i <= rating ? '#f59e0b' : '#e2e8f0'}; font-size:1.1rem;">★</span>`;
    }
    return html;
  }
};


// ═══════════════════════════════════════════════════════════
// TOAST NOTIFICATION SYSTEM
// ═══════════════════════════════════════════════════════════

HUNAR.Toast = {
  container: null,
  init() {
    this.container = document.getElementById('toast-container');
  },
  show(message, type = 'info', duration = 4000) {
    if (!this.container) this.init();
    const icons = { success: '✓', error: '✗', warning: '⚠', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || 'ℹ'}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close" aria-label="Dismiss notification">&times;</button>
    `;
    toast.querySelector('.toast-close').addEventListener('click', () => this.dismiss(toast));
    this.container.appendChild(toast);
    setTimeout(() => this.dismiss(toast), duration);
  },
  dismiss(toast) {
    toast.style.animation = 'fadeOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }
};


// ═══════════════════════════════════════════════════════════
// MODAL SYSTEM
// ═══════════════════════════════════════════════════════════

HUNAR.Modal = {
  show(title, bodyHtml, footerHtml = '') {
    const overlay = document.getElementById('modal-overlay');
    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-label="${HUNAR.Utils.escapeHtml(title)}">
        <div class="modal-header">
          <h2>${title}</h2>
          <button class="modal-close" aria-label="Close dialog">&times;</button>
        </div>
        <div class="modal-body">${bodyHtml}</div>
        ${footerHtml ? `<div class="modal-footer">${footerHtml}</div>` : ''}
      </div>
    `;
    overlay.classList.add('active');
    overlay.querySelector('.modal-close').addEventListener('click', () => HUNAR.Modal.hide());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) HUNAR.Modal.hide(); });
    // Trap focus
    const firstBtn = overlay.querySelector('button');
    if (firstBtn) firstBtn.focus();
  },
  hide() {
    document.getElementById('modal-overlay').classList.remove('active');
  }
};


// ═══════════════════════════════════════════════════════════
// ROUTER
// ═══════════════════════════════════════════════════════════

HUNAR.Router = (function () {
  const routes = {};
  let currentRoute = '';

  function register(path, handler) {
    routes[path] = handler;
  }

  function navigate(hash) {
    if (window.location.hash === hash) {
      resolve();
    } else {
      window.location.hash = hash;
    }
  }

  function resolve() {
    const hash = window.location.hash.slice(1) || '/';
    const parts = hash.split('/').filter(Boolean);
    let handler = null;
    let params = {};

    // Try exact match first
    if (routes[hash]) {
      handler = routes[hash];
    } else {
      // Try pattern matching (e.g., /challenge/:id)
      for (const [pattern, h] of Object.entries(routes)) {
        const patternParts = pattern.split('/').filter(Boolean);
        if (patternParts.length !== parts.length) continue;
        let match = true;
        const p = {};
        for (let i = 0; i < patternParts.length; i++) {
          if (patternParts[i].startsWith(':')) {
            p[patternParts[i].slice(1)] = parts[i];
          } else if (patternParts[i] !== parts[i]) {
            match = false;
            break;
          }
        }
        if (match) {
          handler = h;
          params = p;
          break;
        }
      }
    }

    if (handler) {
      currentRoute = hash;
      handler(params);
      updateSidebarActive(hash);
      window.scrollTo(0, 0);
    } else {
      // Default to landing or dashboard
      const role = HUNAR.Data.getCurrentRole();
      navigate(role === 'student' ? '/dashboard' : '/mentor');
    }
  }

  function updateSidebarActive(hash) {
    document.querySelectorAll('.sidebar-link').forEach(link => {
      const href = link.getAttribute('data-route');
      if (href && hash.startsWith(href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function getCurrentRoute() { return currentRoute; }

  return { register, navigate, resolve, getCurrentRoute };
})();


// ═══════════════════════════════════════════════════════════
// VIEWS
// ═══════════════════════════════════════════════════════════

HUNAR.Views = {};

// ── Landing Page ────────────────────────────────────────────

HUNAR.Views.landing = function () {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="landing-page">
      <nav class="landing-nav" id="landing-nav">
        <div class="landing-nav-brand">
          <div class="sidebar-brand-icon">H</div>
          HUNAR
        </div>
        <div class="landing-nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#challenges-preview">Challenges</a>
          <button class="btn btn-primary btn-sm" onclick="HUNAR.App.requireAuthAndContinue('student')">Get Started</button>
        </div>
      </nav>

      <section class="hero">
        <div class="hero-content">
          <div class="hero-badge">🌱 Open Platform for All Students</div>
          <h1>Project <span class="gradient-text">HUNAR</span></h1>
          <p class="tagline">Beyond Marks. Beyond Barriers.<br>Discover your strengths through real-world challenges, build an evidence-based portfolio, and let your abilities speak louder than grades.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" onclick="HUNAR.App.requireAuthAndContinue('student')">Start as Student</button>
            <button class="btn btn-secondary" onclick="HUNAR.App.requireAuthAndContinue('mentor')">Enter as Mentor</button>
          </div>
        </div>
      </section>

      <section class="landing-section" id="features">
        <div class="landing-section-header">
          <h2>What Makes HUNAR Different</h2>
          <p>We focus on what you can do, not just what you scored.</p>
        </div>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-card-icon" style="background:var(--green-100);color:var(--green-600);">🎯</div>
            <h3>Real-World Challenges</h3>
            <p>Solve genuine problems in technology, sustainability, education, community development, creativity, and entrepreneurship.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-icon" style="background:#dbeafe;color:#2563eb;">📁</div>
            <h3>Evidence-Based Portfolio</h3>
            <p>Document your work with real evidence — code, photos, documents, reflections — and build a portfolio that showcases your journey.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-icon" style="background:#ede9fe;color:#7c3aed;">🧠</div>
            <h3>AI-Assisted Skill Mapping</h3>
            <p>Our system analyzes your work and suggests demonstrated skills, linked to actual evidence from your projects.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-icon" style="background:#fef3c7;color:#d97706;">👩‍🏫</div>
            <h3>Mentor Feedback</h3>
            <p>Receive constructive, structured feedback from mentors who review your work and verify your demonstrated skills.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-icon" style="background:#ffe4e6;color:#e11d48;">🌍</div>
            <h3>Inclusive by Design</h3>
            <p>Built for students from all backgrounds, including underserved and tier-2/tier-3 communities. Your potential has no zip code.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-icon" style="background:#ffedd5;color:#ea580c;">📈</div>
            <h3>Learning Journey</h3>
            <p>Track your growth, discover new interests, and get personalized recommendations for your next challenge.</p>
          </div>
        </div>
      </section>

      <section class="landing-section" id="how-it-works" style="background: var(--slate-50); border-radius: var(--radius-xl); padding: var(--space-16) var(--space-8);">
        <div class="landing-section-header">
          <h2>How It Works</h2>
          <p>Your journey from discovery to demonstrated ability</p>
        </div>
        <div class="steps-grid">
          <div class="step-card">
            <h3>Discover</h3>
            <p>Browse real-world challenges across multiple domains that interest you.</p>
          </div>
          <div class="step-card">
            <h3>Work</h3>
            <p>Solve the problem, document your process, and gather evidence of your work.</p>
          </div>
          <div class="step-card">
            <h3>Submit</h3>
            <p>Share your solution with a detailed project submission including evidence and reflections.</p>
          </div>
          <div class="step-card">
            <h3>Get Feedback</h3>
            <p>Mentors review your work and provide constructive, structured feedback.</p>
          </div>
          <div class="step-card">
            <h3>Grow</h3>
            <p>Identify your demonstrated skills, earn achievements, and discover your next challenge.</p>
          </div>
        </div>
      </section>

      <section class="landing-section" id="challenges-preview">
        <div class="landing-section-header">
          <h2>Explore Challenges</h2>
          <p>Here are some real-world problems waiting for your unique perspective.</p>
        </div>
        <div class="grid-challenges">
          ${HUNAR.Data.getChallenges().slice(0, 3).map(ch => renderChallengeCard(ch)).join('')}
        </div>
        <div class="text-center mt-8">
          <button class="btn btn-primary btn-lg" onclick="HUNAR.App.requireAuthAndContinue('student')">View All Challenges →</button>
        </div>
      </section>

      <footer class="landing-footer">
        <div class="landing-footer-content">
          <div>
            <h4 style="font-size:1.1rem;">Project HUNAR</h4>
            <p style="color:var(--slate-400);font-size:var(--font-size-sm);line-height:1.7;margin-top:var(--space-2);">Beyond Marks. Beyond Barriers.<br>An open platform empowering students to discover, demonstrate, and develop their real-world abilities.</p>
          </div>
          <div>
            <h4>Platform</h4>
            <a href="#" onclick="HUNAR.App.requireAuthAndContinue('student');return false;">Challenges</a>
            <a href="#" onclick="HUNAR.App.requireAuthAndContinue('mentor');return false;">For Mentors</a>
            <a href="#how-it-works">How It Works</a>
          </div>
          <div>
            <h4>About</h4>
            <a href="#">Our Mission</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div class="landing-footer-bottom">
          <span>© 2026 Project HUNAR. All rights reserved.</span>
          <span>Built with ❤️ for students everywhere</span>
        </div>
      </footer>
    </div>
  `;

  // Sticky nav scroll effect
  const nav = document.getElementById('landing-nav');
  const observer = new IntersectionObserver(
    ([entry]) => { nav.classList.toggle('scrolled', !entry.isIntersecting); },
    { threshold: 0.8 }
  );
  const hero = document.querySelector('.hero');
  if (hero) observer.observe(hero);
};


// ── App Shell (Sidebar + Main) ──────────────────────────────

function renderAppShell(contentHtml, pageTitle = '', breadcrumbs = []) {
  const user = HUNAR.Data.getCurrentUser();
  if (!user) return;
  const role = HUNAR.Data.getCurrentRole();
  const unread = HUNAR.Data.getUnreadCount();

  const studentNav = `
    <div class="sidebar-section-title">Main</div>
    <button class="sidebar-link" data-route="/" onclick="showLandingPage()">
      <span class="sidebar-icon">🏠</span> Home
    </button>
    <button class="sidebar-link" data-route="/dashboard" onclick="HUNAR.Router.navigate('/dashboard')">
      <span class="icon">${HUNAR.Icons.dashboard}</span> Dashboard
    </button>
    <button class="sidebar-link" data-route="/about" onclick="HUNAR.Router.navigate('/about')">
      <span class="sidebar-icon">ℹ️</span> About
    </button>
    <button class="sidebar-link" data-route="/faq" onclick="HUNAR.Router.navigate('/faq')">
      <span class="sidebar-icon">❓</span> FAQ
    </button>
    <button class="sidebar-link" data-route="/help" onclick="HUNAR.Router.navigate('/help')">
      <span class="sidebar-icon">🆘</span> Help
    </button>
    <button class="sidebar-link" data-route="/learning" onclick="HUNAR.Router.navigate('/learning')">
      <span class="sidebar-icon">📚</span> Learning Hub
    </button>
    <button class="sidebar-link" data-route="/challenges" onclick="HUNAR.Router.navigate('/challenges')">
      <span class="icon">${HUNAR.Icons.compass}</span> Challenges
    </button>
    <button class="sidebar-link" data-route="/projects" onclick="HUNAR.Router.navigate('/projects')">
      <span class="icon">${HUNAR.Icons.folder}</span> My Projects
      ${HUNAR.Data.getSubmissions({userId: user.id, status: 'pending'}).length ? `<span class="badge">${HUNAR.Data.getSubmissions({userId: user.id, status: 'pending'}).length}</span>` : ''}
    </button>
    <div class="sidebar-section-title">Growth</div>
    <button class="sidebar-link" data-route="/profile" onclick="HUNAR.Router.navigate('/profile')">
      <span class="icon">${HUNAR.Icons.user}</span> HUNAR Profile
    </button>
    <button class="sidebar-link" data-route="/journey" onclick="HUNAR.Router.navigate('/journey')">
      <span class="icon">${HUNAR.Icons.map}</span> Learning Journey
    </button>
    <button class="sidebar-link" data-route="/skills" onclick="HUNAR.Router.navigate('/skills')">
      <span class="icon">${HUNAR.Icons.star}</span> Skill Map
    </button>
  `;

  const mentorNav = `
    <div class="sidebar-section-title">Mentor</div>
    <button class="sidebar-link" data-route="/mentor" onclick="HUNAR.Router.navigate('/mentor')">
      <span class="icon">${HUNAR.Icons.clipboard}</span> Review Dashboard
      ${HUNAR.Data.getSubmissions({status:'pending'}).length ? `<span class="badge">${HUNAR.Data.getSubmissions({status:'pending'}).length}</span>` : ''}
    </button>
    <button class="sidebar-link" data-route="/mentor/history" onclick="HUNAR.Router.navigate('/mentor/history')">
      <span class="icon">${HUNAR.Icons.folder}</span> Review History
    </button>
    <div class="sidebar-section-title">Explore</div>
    <button class="sidebar-link" data-route="/challenges" onclick="HUNAR.Router.navigate('/challenges')">
      <span class="icon">${HUNAR.Icons.compass}</span> All Challenges
    </button>
  `;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="app-layout">
      <button class="sidebar-toggle-btn" id="sidebar-toggle" aria-label="Toggle sidebar menu">
        ${HUNAR.Icons.menu}
      </button>
      <div class="sidebar-overlay" id="sidebar-overlay"></div>

      <aside class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation">
        <div class="sidebar-brand">
          <div class="sidebar-brand-icon">H</div>
          <div class="sidebar-brand-text">
            <h2>HUNAR</h2>
            <span>Beyond Marks. Beyond Barriers.</span>
          </div>
        </div>

        <div class="role-switcher">
          <button class="role-switcher-btn ${role === 'student' ? 'active' : ''}" onclick="HUNAR.App.switchRole('student')">Student</button>
          <button class="role-switcher-btn ${role === 'mentor' ? 'active' : ''}" onclick="HUNAR.App.switchRole('mentor')">Mentor</button>
        </div>

        <nav class="sidebar-nav">
          ${role === 'student' ? studentNav : mentorNav}
          <div class="sidebar-section-title" style="margin-top:auto;">System</div>
          <button class="sidebar-link" data-route="/settings" onclick="HUNAR.Router.navigate('/settings')">
            <span class="icon">${HUNAR.Icons.settings}</span> Settings
          </button>
          <button class="sidebar-link" onclick="showRoleSelectionScreen()">
            <span class="icon">${HUNAR.Icons.home}</span> Switch Role
          </button>
          <button class="sidebar-link" onclick="if(window.Clerk){window.Clerk.signOut().then(()=>{window._clerkUser=null;localStorage.removeItem('hunar_app_data');location.reload();})}" style="color:#ef4444;">
            <span class="icon">${HUNAR.Icons.x}</span> Sign Out
          </button>
        </nav>

        <div class="sidebar-user">
          <div class="sidebar-user-avatar" style="background:${user.avatarColor || 'var(--green-600)'};">${user.initials}</div>
          <div class="sidebar-user-info">
            <div class="sidebar-user-name">${HUNAR.Utils.escapeHtml(user.name)}</div>
            <div class="sidebar-user-role">${role === 'student' ? 'Student' : 'Mentor'}</div>
          </div>
        </div>
      </aside>

      <main class="main-content" id="main-content">
        <header class="top-bar">
          <div>
            ${breadcrumbs.length ? `<div class="top-bar-breadcrumb">${breadcrumbs.map((b, i) =>
              i < breadcrumbs.length - 1
                ? `<a href="#${b.route}">${b.label}</a><span class="separator">/</span>`
                : `<span>${b.label}</span>`
            ).join('')}</div>` : ''}
            <div class="top-bar-title">${pageTitle}</div>
          </div>
          <div class="top-bar-actions">
            <div class="top-bar-search">
              <span class="search-icon">${HUNAR.Icons.search}</span>
              <input type="search" placeholder="Search challenges, skills..." id="global-search" aria-label="Search">
            </div>
            <button class="btn btn-icon btn-ghost" id="theme-toggle-btn" aria-label="Toggle dark mode" onclick="HUNAR.App.toggleTheme()">
              🌙
            </button>
            <button class="btn btn-icon btn-ghost" id="notifications-btn" aria-label="View notifications" style="position:relative;">
              ${HUNAR.Icons.bell}
              ${unread > 0 ? `<span style="position:absolute;top:4px;right:4px;width:8px;height:8px;background:var(--color-error);border-radius:50%;"></span>` : ''}
            </button>
          </div>
        </header>

        <div class="page-content" id="page-content" role="main">
          ${contentHtml}
        </div>
      </main>
    </div>
  `;

  // Bind sidebar toggle
  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('active');
  });
  document.getElementById('sidebar-overlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');
  });

  // Bind global search
  document.getElementById('global-search').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = e.target.value.trim();
      if (q) HUNAR.Router.navigate('/challenges?search=' + encodeURIComponent(q));
    }
  });

  // Bind notifications
  document.getElementById('notifications-btn').addEventListener('click', () => {
    showNotifications();
  });

  // Update active sidebar link
  const route = HUNAR.Router.getCurrentRoute();
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('data-route');
    if (href && route.startsWith(href)) link.classList.add('active');
  });
}

function showNotifications() {
  const notifs = HUNAR.Data.getNotifications();
  const body = notifs.length === 0
    ? '<div class="empty-state"><div class="empty-state-icon">🔔</div><h3>No notifications</h3><p>You\'re all caught up!</p></div>'
    : notifs.map(n => `
        <div class="activity-item" style="cursor:pointer;${n.read ? 'opacity:0.6;' : ''}" onclick="HUNAR.Data.markNotificationRead('${n.id}')">
          <div class="activity-icon" style="background:${n.type === 'review' ? 'var(--green-100)' : n.type === 'achievement' ? '#fef3c7' : '#dbeafe'};">
            ${n.type === 'review' ? '✓' : n.type === 'achievement' ? '🏆' : '🔔'}
          </div>
          <div class="activity-content">
            <div class="activity-title">${HUNAR.Utils.escapeHtml(n.message)}</div>
            <div class="activity-time">${HUNAR.Utils.formatDate(n.date)}</div>
          </div>
        </div>
      `).join('');

  HUNAR.Modal.show('Notifications', body);
}


// ── Challenge Card Component ────────────────────────────────

function renderChallengeCard(ch) {
  const estimatedDuration = ch.estimatedDuration || ch.estimated_duration || '';
  const participantCount = ch.participantCount || ch.participant_count || 0;
  const skills = ch.skills || [];
  return `
    <article class="challenge-card" onclick="HUNAR.Router.navigate('/challenge/${ch.id}')" tabindex="0" role="button"
      aria-label="Challenge: ${HUNAR.Utils.escapeHtml(ch.title)}"
      onkeydown="if(event.key==='Enter')HUNAR.Router.navigate('/challenge/${ch.id}')">
      <div class="challenge-card-banner ${HUNAR.Utils.categoryBannerClass(ch.category)}"></div>
      <div class="challenge-card-body">
        <div class="challenge-card-category">${HUNAR.Utils.escapeHtml(ch.category)}</div>
        <h3 class="challenge-card-title">${HUNAR.Utils.escapeHtml(ch.title)}</h3>
        <p class="challenge-card-desc">${HUNAR.Utils.escapeHtml(ch.description)}</p>
        <div class="challenge-card-meta">
          <span class="badge badge-difficulty ${HUNAR.Utils.difficultyClass(ch.difficulty)}">${ch.difficulty}</span>
          <span class="meta">${HUNAR.Icons.clock} ${estimatedDuration}</span>
          <span class="meta">${HUNAR.Icons.users} ${participantCount} students</span>
        </div>
      </div>
      <div class="challenge-card-footer">
        <div class="challenge-card-skills">
          ${skills.slice(0, 3).map(s => `<span class="skill-tag">${HUNAR.Utils.escapeHtml(s)}</span>`).join('')}
          ${skills.length > 3 ? `<span class="badge badge-slate">+${skills.length - 3}</span>` : ''}
        </div>
      </div>
    </article>
  `;
}


HUNAR.Views.dashboard = async function () {
  const user = HUNAR.Data.getCurrentUser();
  if (!user) { showRoleSelectionScreen(); return; }

  // Render shell with loading state
  const loadingContent = `
    <div class="page-header">
      <h1>Welcome back, ${HUNAR.Utils.escapeHtml(user.name.split(' ')[0])} 👋</h1>
      <p class="subtitle">Here's your learning journey overview. Keep exploring, keep growing.</p>
    </div>
    <div style="text-align:center;padding:3rem;color:var(--text-muted);">Loading your data…</div>
  `;
  renderAppShell(loadingContent, 'Dashboard', [{ label: 'Dashboard', route: '/dashboard' }]);

  // Fetch data from API
  let submissions = [], achievements = [], allChallenges = [];
  try { submissions = await HUNAR.API.getSubmissions() || []; } catch(e) {}
  try { achievements = await HUNAR.API.getAchievements() || []; } catch(e) {}
  try {
    allChallenges = await HUNAR.API.getChallenges() || [];
    HUNAR.Data._cachedChallenges = allChallenges;
  } catch(e) {}

  const recentSubs = submissions.slice(0, 3);
  const stats = {
    projectsSubmitted: submissions.length,
    projectsReviewed: submissions.filter(s => s.status === 'reviewed').length,
    pendingReviews: submissions.filter(s => s.status === 'pending').length,
    skillsDemonstrated: [...new Set(submissions.flatMap(s => { try { return JSON.parse(s.skills || '[]'); } catch(e){ return s.skills || []; } }))].length
  };

  const content = `
    <div class="page-header">
      <h1>Welcome back, ${HUNAR.Utils.escapeHtml(user.name.split(' ')[0])} 👋</h1>
      <p class="subtitle">Here's your learning journey overview. Keep exploring, keep growing.</p>
    </div>

    <!-- Stats -->
    <div class="grid-stats mb-8">
      <div class="stat-card">
        <div class="stat-card-icon green">🎯</div>
        <div class="stat-card-value">${stats.projectsSubmitted}</div>
        <div class="stat-card-label">Projects Submitted</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon blue">✅</div>
        <div class="stat-card-value">${stats.projectsReviewed}</div>
        <div class="stat-card-label">Reviews Received</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon amber">⏳</div>
        <div class="stat-card-value">${stats.pendingReviews}</div>
        <div class="stat-card-label">Pending Reviews</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon purple">⭐</div>
        <div class="stat-card-value">${stats.skillsDemonstrated}</div>
        <div class="stat-card-label">Skills Demonstrated</div>
      </div>
    </div>

    <div class="grid-2">
      <!-- Recent Projects -->
      <div class="section-card">
        <div class="section-card-header">
          📂 Recent Projects
          <a href="#/projects" class="btn btn-sm btn-ghost" style="margin-left:auto;">View All →</a>
        </div>
        <div class="section-card-body">
          ${recentSubs.length === 0
            ? `<div class="empty-state" style="padding:var(--space-8) 0;"><div class="empty-state-icon">📝</div><h3>No projects yet</h3><p>Start a challenge and submit your first project!</p><button class="btn btn-primary btn-sm" onclick="HUNAR.Router.navigate('/challenges')">Browse Challenges</button></div>`
            : recentSubs.map(sub => {
              const submittedDate = sub.submitted_date || sub.submittedDate || '';
              const challengeId = sub.challenge_id || sub.challengeId || '';
              const ch = (allChallenges || []).find(c => c.id === challengeId);
              return `
                <div class="activity-item" style="cursor:pointer;" onclick="HUNAR.Router.navigate('/project/${sub.id}')">
                  <div class="activity-icon" style="background:var(--green-100);color:var(--green-600);">📄</div>
                  <div class="activity-content">
                    <div class="activity-title">${HUNAR.Utils.escapeHtml(sub.title)}</div>
                    <div class="activity-time">${ch ? ch.category + ' · ' : ''}${HUNAR.Utils.statusBadge(sub.status)} · ${HUNAR.Utils.formatDate(submittedDate)}</div>
                  </div>
                </div>
              `;
            }).join('')
          }
        </div>
      </div>

      <!-- Achievements -->
      <div class="section-card">
        <div class="section-card-header">
          🏆 Achievements
          <span class="badge badge-green" style="margin-left:auto;">${achievements.length} earned</span>
        </div>
        <div class="section-card-body">
          ${achievements.length === 0
            ? `<div class="empty-state" style="padding:var(--space-8) 0;"><div class="empty-state-icon">🏅</div><h3>No achievements yet</h3><p>Complete challenges and get reviewed to earn achievements!</p></div>`
            : achievements.slice(0, 5).map(a => `
              <div class="activity-item">
                <div class="activity-icon" style="background:#fef3c7;font-size:1.3rem;">${a.icon || '🏅'}</div>
                <div class="activity-content">
                  <div class="activity-title">${HUNAR.Utils.escapeHtml(a.title)}</div>
                  <div class="activity-time">${HUNAR.Utils.escapeHtml(a.description || '')} · ${HUNAR.Utils.formatDate(a.earned_date || a.earnedDate || '')}</div>
                </div>
              </div>
            `).join('')
          }
        </div>
      </div>
    </div>

    <!-- Browse Challenges CTA -->
    ${allChallenges.length > 0 ? `
      <div class="mt-8">
        <div class="flex-between mb-4">
          <h2>Explore Challenges</h2>
          <a href="#/challenges" class="btn btn-ghost btn-sm">View All →</a>
        </div>
        <div class="grid-challenges">
          ${allChallenges.slice(0, 3).map(ch => renderChallengeCard(ch)).join('')}
        </div>
      </div>
    ` : ''}
  `;

  renderAppShell(content, 'Dashboard', [{ label: 'Dashboard', route: '/dashboard' }]);
};



HUNAR.Views.challenges = async function () {
  const categories = ['All', 'Technology', 'Sustainability', 'Education', 'Community Development', 'Creativity', 'Entrepreneurship'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const content = `
    <div class="page-header">
      <h1>Discover Challenges</h1>
      <p class="subtitle">Find real-world problems that match your interests. Every challenge is an opportunity to learn, create, and demonstrate your abilities.</p>
    </div>

    <div class="filter-bar" id="filter-bar">
      <div class="search-input">
        <span class="icon" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);">${HUNAR.Icons.search}</span>
        <input type="search" placeholder="Search by title, description, or skill..." id="challenge-search" aria-label="Search challenges">
      </div>
      <select class="form-select" id="filter-category" style="width:auto;min-width:160px;" aria-label="Filter by category">
        ${categories.map(c => `<option value="${c.toLowerCase()}">${c}</option>`).join('')}
      </select>
      <select class="form-select" id="filter-difficulty" style="width:auto;min-width:140px;" aria-label="Filter by difficulty">
        ${difficulties.map(d => `<option value="${d.toLowerCase()}">${d}</option>`).join('')}
      </select>
    </div>

    <div class="grid-challenges" id="challenges-grid">
      <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted);">Loading challenges…</div>
    </div>

    <div class="empty-state hidden" id="no-results">
      <div class="empty-state-icon">🔍</div>
      <h3>No challenges found</h3>
      <p>Try adjusting your search or filters.</p>
      <button class="btn btn-secondary btn-sm" onclick="document.getElementById('challenge-search').value='';document.getElementById('filter-category').value='all';document.getElementById('filter-difficulty').value='all';HUNAR.App.filterChallenges();">Clear Filters</button>
    </div>
  `;

  renderAppShell(content, 'Challenges', [{ label: 'Dashboard', route: '/dashboard' }, { label: 'Challenges', route: '/challenges' }]);

  // Load challenges from API
  try {
    const challenges = await HUNAR.API.getChallenges();
    // Store in data layer for detail views
    HUNAR.Data._cachedChallenges = challenges;
    const grid = document.getElementById('challenges-grid');
    const noResults = document.getElementById('no-results');
    if (grid) {
      if (challenges.length === 0) {
        grid.classList.add('hidden');
        if (noResults) noResults.classList.remove('hidden');
      } else {
        grid.innerHTML = challenges.map(ch => renderChallengeCard(ch)).join('');
      }
    }
  } catch (e) {
    const grid = document.getElementById('challenges-grid');
    if (grid) grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--color-error);">Failed to load challenges. Please try again.</div>`;
  }

  // Bind filter events
  const searchEl = document.getElementById('challenge-search');
  const catEl = document.getElementById('filter-category');
  const diffEl = document.getElementById('filter-difficulty');
  if (searchEl) searchEl.addEventListener('input', HUNAR.App.filterChallenges);
  if (catEl) catEl.addEventListener('change', HUNAR.App.filterChallenges);
  if (diffEl) diffEl.addEventListener('change', HUNAR.App.filterChallenges);

  // Check for search param
  const hash = window.location.hash;
  const searchMatch = hash.match(/search=([^&]+)/);
  if (searchMatch && searchEl) {
    searchEl.value = decodeURIComponent(searchMatch[1]);
    HUNAR.App.filterChallenges();
  }
};



// ── Challenge Detail ────────────────────────────────────────

HUNAR.Views.challengeDetail = async function (params) {
  // Show loading shell first
  renderAppShell('<div style="text-align:center;padding:3rem;color:var(--text-muted);">Loading challenge…</div>', 'Challenge');

  let ch = (HUNAR.Data._cachedChallenges || []).find(c => c.id === params.id);
  if (!ch) {
    try {
      ch = await HUNAR.API.getChallenge(params.id);
    } catch (e) {
      renderAppShell('<div class="empty-state"><div class="empty-state-icon">❌</div><h3>Challenge not found</h3><p>This challenge doesn\'t exist or has been removed.</p><button class="btn btn-primary" onclick="HUNAR.Router.navigate(\'/challenges\')">Browse Challenges</button></div>', 'Not Found');
      return;
    }
  }
  if (!ch) {
    renderAppShell('<div class="empty-state"><div class="empty-state-icon">❌</div><h3>Challenge not found</h3><p>This challenge doesn\'t exist or has been removed.</p><button class="btn btn-primary" onclick="HUNAR.Router.navigate(\'/challenges\')">Browse Challenges</button></div>', 'Not Found');
    return;
  }

  // Normalize field names (API may return snake_case)
  ch.estimatedDuration = ch.estimatedDuration || ch.estimated_duration || '';
  ch.participantCount = ch.participantCount || ch.participant_count || 0;
  ch.suggestedSteps = ch.suggestedSteps || ch.suggested_steps || [];
  ch.objectives = ch.objectives || [];
  ch.deliverables = ch.deliverables || [];
  ch.skills = ch.skills || [];

  let existingSubmission = null;
  try {
    const subs = await HUNAR.API.getSubmissions();
    existingSubmission = (subs || []).find(s => s.challenge_id === ch.id || s.challengeId === ch.id);
  } catch (e) { /* ignore */ }

  const content = `
    <button class="btn btn-ghost mb-4" onclick="HUNAR.Router.navigate('/challenges')">${HUNAR.Icons.arrowLeft} Back to Challenges</button>

    <div class="card mb-6">
      <div class="challenge-card-banner ${HUNAR.Utils.categoryBannerClass(ch.category)}" style="height:12px;"></div>
      <div class="card-body">
        <div class="flex-gap-3 mb-4">
          <span class="badge ${HUNAR.Utils.categoryBadgeClass(ch.category)}">${ch.category}</span>
          <span class="badge badge-difficulty ${HUNAR.Utils.difficultyClass(ch.difficulty)}">${ch.difficulty}</span>
          <span class="meta">${HUNAR.Icons.clock} ${ch.estimatedDuration}</span>
          <span class="meta">${HUNAR.Icons.users} ${ch.participantCount} students</span>
        </div>
        <h1 style="font-size:var(--font-size-3xl);margin-bottom:var(--space-4);">${HUNAR.Utils.escapeHtml(ch.title)}</h1>
        <p style="color:var(--text-secondary);font-size:var(--font-size-base);line-height:1.7;max-width:800px;">${HUNAR.Utils.escapeHtml(ch.description)}</p>

        <div style="margin-top:var(--space-6);display:flex;gap:var(--space-3);flex-wrap:wrap;">
          ${existingSubmission
            ? `<button class="btn btn-secondary" onclick="HUNAR.Router.navigate('/project/${existingSubmission.id}')">View Your Submission</button>`
            : `<button class="btn btn-primary btn-lg" onclick="HUNAR.Router.navigate('/submit/${ch.id}')">Start This Challenge</button>`
          }
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="section-card">
        <div class="section-card-header">🎯 Objectives</div>
        <div class="section-card-body">
          <ul style="list-style:none;display:grid;gap:var(--space-3);">
            ${ch.objectives.map(o => `<li style="display:flex;gap:var(--space-3);align-items:flex-start;">
              <span style="color:var(--green-500);flex-shrink:0;margin-top:2px;">${HUNAR.Icons.check}</span>
              <span style="font-size:var(--font-size-sm);">${HUNAR.Utils.escapeHtml(o)}</span>
            </li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="section-card">
        <div class="section-card-header">📦 Expected Deliverables</div>
        <div class="section-card-body">
          <ul style="list-style:none;display:grid;gap:var(--space-3);">
            ${ch.deliverables.map(d => `<li style="display:flex;gap:var(--space-3);align-items:flex-start;">
              <span style="color:var(--color-info);flex-shrink:0;margin-top:2px;">📋</span>
              <span style="font-size:var(--font-size-sm);">${HUNAR.Utils.escapeHtml(d)}</span>
            </li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    <div class="section-card mt-6">
      <div class="section-card-header">📝 Suggested Steps</div>
      <div class="section-card-body">
        <div class="timeline">
          ${ch.suggestedSteps.map((step, i) => `
            <div class="timeline-item">
              <div class="timeline-dot upcoming"></div>
              <div class="timeline-content">
                <div class="timeline-title">Step ${i + 1}</div>
                <div class="timeline-desc">${HUNAR.Utils.escapeHtml(step)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="section-card mt-6">
      <div class="section-card-header">🏷️ Skills You May Demonstrate</div>
      <div class="section-card-body">
        <div style="display:flex;gap:var(--space-2);flex-wrap:wrap;">
          ${ch.skills.map(s => `<span class="skill-tag">${HUNAR.Utils.escapeHtml(s)}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  renderAppShell(content, ch.title, [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Challenges', route: '/challenges' },
    { label: ch.title, route: `/challenge/${ch.id}` }
  ]);
};




// ── Project Submission Form ─────────────────────────────────

HUNAR.Views.submit = async function (params) {
  renderAppShell('<div style="text-align:center;padding:3rem;color:var(--text-muted);">Loading…</div>', 'Submit');
  let ch = (HUNAR.Data._cachedChallenges || []).find(c => c.id === params.challengeId);
  if (!ch) {
    try { ch = await HUNAR.API.getChallenge(params.challengeId); } catch (e) {}
  }
  if (!ch) {
    renderAppShell('<div class="empty-state"><div class="empty-state-icon">❌</div><h3>Challenge not found</h3></div>', 'Error');
    return;
  }
  // Normalize
  ch.skills = ch.skills || [];


  const content = `
    <button class="btn btn-ghost mb-4" onclick="HUNAR.Router.navigate('/challenge/${ch.id}')">${HUNAR.Icons.arrowLeft} Back to Challenge</button>

    <div class="page-header">
      <h1>Submit Your Project</h1>
      <p class="subtitle">For: <strong>${HUNAR.Utils.escapeHtml(ch.title)}</strong></p>
    </div>

    <div class="notice-banner info">
      <span>ℹ️</span>
      <span>Take your time with each section. Detailed, honest responses help mentors give you better feedback. This form is saved when you submit.</span>
    </div>

    <form id="submission-form" novalidate>
      <input type="hidden" name="challengeId" value="${ch.id}">

      <div class="section-card mb-6">
        <div class="section-card-header">📝 Project Overview</div>
        <div class="section-card-body">
          <div class="form-group">
            <label class="form-label" for="sub-title">Project Title <span class="required">*</span></label>
            <input type="text" class="form-input" id="sub-title" name="title" placeholder="Give your project a descriptive title" required maxlength="120">
            <div class="form-hint">A clear, descriptive title for your project (max 120 characters)</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="sub-problem">Problem Statement <span class="required">*</span></label>
            <textarea class="form-textarea" id="sub-problem" name="problemStatement" rows="4" placeholder="What problem did you set out to solve? Why does it matter?" required></textarea>
            <div class="form-hint" id="hint-problem"></div>
          </div>
          <div class="form-group">
            <label class="form-label" for="sub-solution">Your Solution <span class="required">*</span></label>
            <textarea class="form-textarea" id="sub-solution" name="solution" rows="4" placeholder="Describe what you built or created. How does it address the problem?" required></textarea>
            <div class="form-hint" id="hint-solution"></div>
          </div>
        </div>
      </div>

      <div class="section-card mb-6">
        <div class="section-card-header">🔧 Process & Implementation</div>
        <div class="section-card-body">
          <div class="form-group">
            <label class="form-label" for="sub-process">Implementation Process <span class="required">*</span></label>
            <textarea class="form-textarea" id="sub-process" name="process" rows="4" placeholder="Walk us through your process. What steps did you follow? How did you approach the problem?" required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label" for="sub-tools">Tools & Technologies Used</label>
            <input type="text" class="form-input" id="sub-tools" name="tools" placeholder="e.g., HTML, CSS, JavaScript, Figma, Canva, Google Sheets">
            <div class="form-hint">Separate tools with commas</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="sub-challenges">Challenges Faced</label>
            <textarea class="form-textarea" id="sub-challenges" name="challengesFaced" rows="3" placeholder="What difficulties did you encounter? How did you handle them?"></textarea>
          </div>
        </div>
      </div>

      <div class="section-card mb-6">
        <div class="section-card-header">📊 Outcomes & Reflection</div>
        <div class="section-card-body">
          <div class="form-group">
            <label class="form-label" for="sub-outcomes">Outcomes & Results <span class="required">*</span></label>
            <textarea class="form-textarea" id="sub-outcomes" name="outcomes" rows="3" placeholder="What did you achieve? Include specific, measurable results where possible." required></textarea>
            <div class="form-hint" id="hint-outcomes"></div>
          </div>
          <div class="form-group">
            <label class="form-label" for="sub-reflections">Reflections & Learning <span class="required">*</span></label>
            <textarea class="form-textarea" id="sub-reflections" name="reflections" rows="4" placeholder="What did you learn? What would you do differently? What do you want to explore next?" required></textarea>
            <div class="form-hint" id="hint-reflections"></div>
          </div>
        </div>
      </div>

      <div class="section-card mb-6">
        <div class="section-card-header">🔗 Supporting Evidence</div>
        <div class="section-card-body">
          <div class="notice-banner warning mb-4">
            <span>⚠️</span>
            <span>File uploads are simulated in this prototype. In production, files would be securely stored on a server. You can add links to external evidence below.</span>
          </div>
          <div id="evidence-links">
            <div class="form-group evidence-link-row" style="display:flex;gap:var(--space-3);align-items:flex-end;">
              <div style="flex:1;">
                <label class="form-label">Link Label</label>
                <input type="text" class="form-input evidence-label" placeholder="e.g., GitHub Repository">
              </div>
              <div style="flex:2;">
                <label class="form-label">URL</label>
                <input type="url" class="form-input evidence-url" placeholder="https://...">
              </div>
              <button type="button" class="btn btn-ghost btn-icon" onclick="this.closest('.evidence-link-row').remove()" aria-label="Remove link">${HUNAR.Icons.x}</button>
            </div>
          </div>
          <button type="button" class="btn btn-secondary btn-sm mt-4" onclick="HUNAR.App.addEvidenceRow()">
            ${HUNAR.Icons.plus} Add Another Link
          </button>

          <div class="divider"></div>

          <div class="form-file-upload" id="file-drop-zone">
            <div class="upload-icon">📎</div>
            <div class="upload-text"><strong>Click to upload</strong> or drag and drop</div>
            <div class="upload-text" style="margin-top:4px;">Images, PDFs, documents (simulated in prototype)</div>
            <input type="file" id="file-upload" multiple style="display:none;" accept="image/*,.pdf,.doc,.docx">
          </div>
          <div id="uploaded-files" style="margin-top:var(--space-3);"></div>
        </div>
      </div>

      <div style="display:flex;gap:var(--space-3);justify-content:flex-end;padding:var(--space-4) 0;">
        <button type="button" class="btn btn-secondary" onclick="HUNAR.Router.navigate('/challenge/${ch.id}')">Cancel</button>
        <button type="submit" class="btn btn-primary btn-lg">${HUNAR.Icons.send} Submit Project</button>
      </div>
    </form>
  `;

  renderAppShell(content, 'Submit Project', [
    { label: 'Challenges', route: '/challenges' },
    { label: ch.title, route: `/challenge/${ch.id}` },
    { label: 'Submit', route: `/submit/${ch.id}` }
  ]);

  // Bind form
  document.getElementById('submission-form').addEventListener('submit', HUNAR.App.handleSubmission);

  // File upload zone
  const dropZone = document.getElementById('file-drop-zone');
  const fileInput = document.getElementById('file-upload');
  dropZone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => HUNAR.App.handleFileSelect(e.target.files));
  dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.borderColor = 'var(--green-400)'; });
  dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = ''; });
  dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.style.borderColor = ''; HUNAR.App.handleFileSelect(e.dataTransfer.files); });

  // Writing hints
  ['sub-problem', 'sub-solution', 'sub-outcomes', 'sub-reflections'].forEach(id => {
    const field = document.getElementById(id);
    const fieldName = id.replace('sub-', '').replace(/([A-Z])/g, ' $1').trim();
    field.addEventListener('blur', () => {
      const hints = HUNAR.AI.getWritingHints(field.value, fieldName);
      const hintEl = document.getElementById('hint-' + id.replace('sub-', ''));
      if (hintEl && hints.length > 0) {
        hintEl.innerHTML = `<span style="color:var(--color-info);">💡 ${hints[0].message}</span>`;
      }
    });
  });
};


// ── My Projects List ────────────────────────────────────────

HUNAR.Views.projects = function () {
  const user = HUNAR.Data.getCurrentUser();
  const subs = HUNAR.Data.getSubmissions({ userId: user.id });

  const content = `
    <div class="page-header">
      <h1>My Projects</h1>
      <p class="subtitle">All your project submissions in one place.</p>
      <div class="page-header-actions">
        <button class="btn btn-primary" onclick="HUNAR.Router.navigate('/challenges')">${HUNAR.Icons.plus} Start New Challenge</button>
      </div>
    </div>

    ${subs.length === 0
      ? `<div class="empty-state"><div class="empty-state-icon">📁</div><h3>No projects yet</h3><p>Start by exploring challenges and submitting your first project.</p><button class="btn btn-primary" onclick="HUNAR.Router.navigate('/challenges')">Browse Challenges</button></div>`
      : `<div style="display:grid;gap:var(--space-4);">
          ${subs.map(sub => {
            const ch = HUNAR.Data.getChallenge(sub.challengeId);
            const review = HUNAR.Data.getReviewForSubmission(sub.id);
            return `
              <div class="card" style="cursor:pointer;" onclick="HUNAR.Router.navigate('/project/${sub.id}')">
                <div class="card-body" style="display:flex;align-items:center;gap:var(--space-5);">
                  <div style="flex:1;min-width:0;">
                    <div class="flex-gap-3 mb-2">
                      ${ch ? `<span class="badge ${HUNAR.Utils.categoryBadgeClass(ch.category)}">${ch.category}</span>` : ''}
                      ${HUNAR.Utils.statusBadge(sub.status)}
                    </div>
                    <h3 style="font-size:var(--font-size-base);margin-bottom:var(--space-1);">${HUNAR.Utils.escapeHtml(sub.title)}</h3>
                    <div class="text-sm text-muted">
                      Submitted ${HUNAR.Utils.formatDate(sub.submittedDate)}
                      ${review ? ` · Reviewed by ${HUNAR.Data.getUser(review.mentorId)?.name || 'Mentor'}` : ''}
                    </div>
                  </div>
                  <div style="flex-shrink:0;color:var(--text-muted);">${HUNAR.Icons.chevronRight}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>`
    }
  `;

  renderAppShell(content, 'My Projects', [{ label: 'Dashboard', route: '/dashboard' }, { label: 'Projects', route: '/projects' }]);
};


// ── Project Detail ──────────────────────────────────────────

HUNAR.Views.projectDetail = function (params) {
  const sub = HUNAR.Data.getSubmission(params.id);
  if (!sub) {
    renderAppShell('<div class="empty-state"><div class="empty-state-icon">❌</div><h3>Project not found</h3></div>', 'Error');
    return;
  }

  const ch = HUNAR.Data.getChallenge(sub.challengeId);
  const review = HUNAR.Data.getReviewForSubmission(sub.id);
  const aiSkills = HUNAR.AI.suggestSkills(sub);

  const content = `
    <button class="btn btn-ghost mb-4" onclick="HUNAR.Router.navigate('/projects')">${HUNAR.Icons.arrowLeft} Back to Projects</button>

    <div class="flex-between mb-6" style="flex-wrap:wrap;gap:var(--space-3);">
      <div>
        <div class="flex-gap-3 mb-2">
          ${ch ? `<span class="badge ${HUNAR.Utils.categoryBadgeClass(ch.category)}">${ch.category}</span>` : ''}
          ${HUNAR.Utils.statusBadge(sub.status)}
        </div>
        <h1 style="font-size:var(--font-size-2xl);">${HUNAR.Utils.escapeHtml(sub.title)}</h1>
        <div class="text-sm text-muted mt-2">
          Submitted ${HUNAR.Utils.formatDate(sub.submittedDate)}
          ${ch ? ` · Challenge: <a href="#/challenge/${ch.id}">${HUNAR.Utils.escapeHtml(ch.title)}</a>` : ''}
        </div>
      </div>
      ${HUNAR.Data.getCurrentUser().id === sub.userId && (sub.status === 'pending' || sub.status === 'revision-requested') ? `
        <button class="btn btn-secondary" onclick="HUNAR.Router.navigate('/edit/${sub.id}')">
          ${HUNAR.Icons.edit} Edit Submission
        </button>
      ` : ''}
    </div>

    <!-- Submission Content -->
    <div class="section-card mb-6">
      <div class="section-card-header">📋 Problem Statement</div>
      <div class="section-card-body"><p style="line-height:1.7;">${HUNAR.Utils.escapeHtml(sub.problemStatement)}</p></div>
    </div>

    <div class="section-card mb-6">
      <div class="section-card-header">💡 Solution</div>
      <div class="section-card-body"><p style="line-height:1.7;">${HUNAR.Utils.escapeHtml(sub.solution)}</p></div>
    </div>

    <div class="grid-2 mb-6">
      <div class="section-card">
        <div class="section-card-header">🔧 Process</div>
        <div class="section-card-body"><p style="line-height:1.7;">${HUNAR.Utils.escapeHtml(sub.process)}</p></div>
      </div>
      <div class="section-card">
        <div class="section-card-header">⚡ Challenges Faced</div>
        <div class="section-card-body"><p style="line-height:1.7;">${HUNAR.Utils.escapeHtml(sub.challengesFaced || 'Not specified')}</p></div>
      </div>
    </div>

    <div class="submission-meta-grid mb-6">
      <div class="submission-meta-item">
        <label>Tools Used</label>
        <div class="value" style="display:flex;gap:var(--space-2);flex-wrap:wrap;margin-top:var(--space-2);">
          ${(sub.tools || []).map(t => `<span class="badge badge-slate">${HUNAR.Utils.escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="section-card mb-6">
      <div class="section-card-header">📊 Outcomes</div>
      <div class="section-card-body"><p style="line-height:1.7;">${HUNAR.Utils.escapeHtml(sub.outcomes)}</p></div>
    </div>

    <div class="section-card mb-6">
      <div class="section-card-header">🪞 Reflections</div>
      <div class="section-card-body"><p style="line-height:1.7;">${HUNAR.Utils.escapeHtml(sub.reflections)}</p></div>
    </div>

    <!-- Evidence -->
    ${(sub.evidence && sub.evidence.length > 0) ? `
      <div class="section-card mb-6">
        <div class="section-card-header">🔗 Supporting Evidence</div>
        <div class="section-card-body">
          ${sub.evidence.map(e => `
            <div class="activity-item">
              <div class="activity-icon" style="background:#dbeafe;color:#2563eb;">${HUNAR.Icons.externalLink}</div>
              <div class="activity-content">
                <div class="activity-title"><a href="${HUNAR.Utils.escapeHtml(e.url)}" target="_blank" rel="noopener">${HUNAR.Utils.escapeHtml(e.label)}</a></div>
                <div class="activity-time">${HUNAR.Utils.escapeHtml(e.url)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- AI Skill Suggestions -->
    <div class="section-card mb-6">
      <div class="section-card-header">
        🧠 AI-Suggested Skills
        <span class="badge badge-purple" style="margin-left:auto;">Simulated AI</span>
      </div>
      <div class="section-card-body">
        <div class="notice-banner warning mb-4">
          <span>⚠️</span>
          <span>These suggestions are generated by keyword analysis. They are not verified. Mentor review is required for skill verification.</span>
        </div>
        <div style="display:grid;gap:var(--space-3);">
          ${aiSkills.slice(0, 8).map(s => `
            <div style="display:flex;align-items:flex-start;gap:var(--space-3);padding:var(--space-3);background:var(--slate-50);border-radius:var(--radius-md);">
              <span class="skill-tag ai-suggested">${HUNAR.Utils.escapeHtml(s.skill)}</span>
              <div style="flex:1;">
                <div style="font-size:var(--font-size-xs);color:var(--text-secondary);">${HUNAR.Utils.escapeHtml(s.evidence)}</div>
                <div style="margin-top:var(--space-1);">
                  <div class="progress-bar" style="width:120px;height:4px;">
                    <div class="progress-bar-fill" style="width:${s.confidence}%;background:${s.confidence > 70 ? 'var(--green-500)' : 'var(--color-warning)'};"></div>
                  </div>
                  <span style="font-size:0.6875rem;color:var(--text-muted);">Confidence: ${s.confidence}%</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Mentor Review -->
    ${review ? `
      <div class="section-card mb-6" style="border-color:var(--green-300);">
        <div class="section-card-header" style="background:var(--green-50);">
          ✅ Mentor Review
          <span class="text-sm text-muted" style="margin-left:auto;">by ${HUNAR.Data.getUser(review.mentorId)?.name || 'Mentor'} · ${HUNAR.Utils.formatDate(review.reviewDate)}</span>
        </div>
        <div class="section-card-body">
          <div class="review-criteria mb-6">
            ${Object.entries(review.ratings).map(([key, val]) => `
              <div class="review-criterion">
                <div class="review-criterion-label">${HUNAR.AI.formatRatingLabel(key)}</div>
                <div>${HUNAR.Utils.renderStars(val)}</div>
              </div>
            `).join('')}
          </div>

          <h4 style="margin-bottom:var(--space-3);color:var(--green-700);">💪 Strengths</h4>
          <ul style="list-style:none;margin-bottom:var(--space-5);">
            ${(review.strengths || []).map(s => `<li style="display:flex;gap:var(--space-2);margin-bottom:var(--space-2);font-size:var(--font-size-sm);"><span style="color:var(--green-500);">✓</span>${HUNAR.Utils.escapeHtml(s)}</li>`).join('')}
          </ul>

          <h4 style="margin-bottom:var(--space-3);color:var(--color-info);">📈 Suggested Improvements</h4>
          <ul style="list-style:none;margin-bottom:var(--space-5);">
            ${(review.improvements || []).map(i => `<li style="display:flex;gap:var(--space-2);margin-bottom:var(--space-2);font-size:var(--font-size-sm);"><span style="color:var(--color-info);">→</span>${HUNAR.Utils.escapeHtml(i)}</li>`).join('')}
          </ul>

          <h4 style="margin-bottom:var(--space-3);">Overall Comments</h4>
          <p style="font-size:var(--font-size-sm);line-height:1.7;color:var(--text-secondary);">${HUNAR.Utils.escapeHtml(review.overallComments)}</p>

          ${review.verifiedSkills && review.verifiedSkills.length > 0 ? `
            <div class="divider"></div>
            <h4 style="margin-bottom:var(--space-3);color:var(--green-700);">✅ Verified Skills</h4>
            <div style="display:flex;gap:var(--space-2);flex-wrap:wrap;">
              ${review.verifiedSkills.map(s => `<span class="skill-tag verified">✓ ${HUNAR.Utils.escapeHtml(s)}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    ` : `
      <div class="section-card mb-6">
        <div class="section-card-header">⏳ Mentor Review</div>
        <div class="section-card-body">
          <div class="empty-state" style="padding:var(--space-8) 0;">
            <div class="empty-state-icon">📝</div>
            <h3>Awaiting Review</h3>
            <p>A mentor will review your submission and provide structured feedback. This typically takes 3-7 days.</p>
          </div>
        </div>
      </div>
    `}
  `;

  renderAppShell(content, sub.title, [
    { label: 'Projects', route: '/projects' },
    { label: sub.title, route: `/project/${sub.id}` }
  ]);
};


// ── HUNAR Profile ───────────────────────────────────────────

HUNAR.Views.profile = function () {
  const user = HUNAR.Data.getCurrentUser();
  const stats = HUNAR.Data.getStudentStats();
  const skills = HUNAR.Data.getSkillsForUser();
  const achievements = HUNAR.Data.getAchievements();
  const subs = HUNAR.Data.getSubmissions({ userId: user.id });
  const feedbackSummary = HUNAR.AI.summarizeFeedback(user.id);

  const content = `
    <div class="profile-header">
      <div class="profile-avatar">${user.initials}</div>
      <div class="profile-info">
        <h1>${HUNAR.Utils.escapeHtml(user.name)}</h1>
        <p class="bio">${HUNAR.Utils.escapeHtml(user.bio)}</p>
        <div class="profile-stats">
          <div class="profile-stat">
            <div class="profile-stat-value">${stats.projectsSubmitted}</div>
            <div class="profile-stat-label">Projects</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value">${stats.skillsDemonstrated}</div>
            <div class="profile-stat-label">Skills</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value">${stats.verifiedSkills}</div>
            <div class="profile-stat-label">Verified</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value">${achievements.length}</div>
            <div class="profile-stat-label">Achievements</div>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-3);align-items:flex-end;position:relative;z-index:1;">
        <button class="btn btn-secondary" onclick="HUNAR.Router.navigate('/public/${user.id}')" style="background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.2);">
          ${HUNAR.Icons.globe} View Public Portfolio
        </button>
        <span style="font-size:var(--font-size-xs);color:rgba(255,255,255,0.6);">${user.portfolioPublic ? '🌐 Public' : '🔒 Private'}</span>
      </div>
    </div>

    <div class="notice-banner info mb-6">
      <span>${HUNAR.Icons.eye}</span>
      <span>Portfolio visibility: <strong>${user.portfolioPublic ? 'Public' : 'Private'}</strong>. You can change this in <a href="#/settings">Settings</a>.</span>
    </div>

    <div class="tabs mb-6" id="profile-tabs" role="tablist">
      <button class="tab active" data-tab="skills" role="tab" aria-selected="true">Skills & Evidence</button>
      <button class="tab" data-tab="projects" role="tab">Projects</button>
      <button class="tab" data-tab="feedback" role="tab">Feedback Summary</button>
      <button class="tab" data-tab="achievements" role="tab">Achievements</button>
    </div>

    <div id="tab-content" role="tabpanel">
      ${renderProfileTabContent('skills', { user, skills, subs, achievements, feedbackSummary, stats })}
    </div>
  `;

  renderAppShell(content, 'HUNAR Profile', [{ label: 'Dashboard', route: '/dashboard' }, { label: 'Profile', route: '/profile' }]);

  // Tab switching
  document.querySelectorAll('#profile-tabs .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#profile-tabs .tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const container = document.getElementById('tab-content');
      container.innerHTML = renderProfileTabContent(tab.dataset.tab, { user, skills, subs, achievements, feedbackSummary, stats });
    });
  });
};

function renderProfileTab(tabId, data) {
  const container = document.getElementById('tab-content');
  if (!container) return;
  const { user, skills, subs, achievements, feedbackSummary, stats } = data;

  switch (tabId) {
    case 'skills':
      container.innerHTML = `
        <div class="grid-2">
          <div class="section-card">
            <div class="section-card-header">✅ Mentor-Verified Skills</div>
            <div class="section-card-body">
              ${skills.filter(s => s.verified).length === 0
                ? '<p class="text-sm text-muted">No verified skills yet. Get your projects reviewed by mentors.</p>'
                : `<div style="display:flex;flex-wrap:wrap;gap:var(--space-2);">${skills.filter(s => s.verified).map(s => `<div class="skill-tag verified" title="Demonstrated in: ${s.sources.join(', ')}">✓ ${HUNAR.Utils.escapeHtml(s.name)}${s.count > 1 ? ` (×${s.count})` : ''}</div>`).join('')}</div>`
              }
            </div>
          </div>
          <div class="section-card">
            <div class="section-card-header">🧠 All Demonstrated Skills <span class="badge badge-slate" style="margin-left:auto;">All Sources</span></div>
            <div class="section-card-body">
              ${skills.length === 0
                ? '<p class="text-sm text-muted">Submit projects to see your demonstrated skills here.</p>'
                : `<div style="display:grid;gap:var(--space-3);">${skills.map(s => {
                    const sourceLabels = [];
                    if (s.sources && s.sources.length) sourceLabels.push('Submitted');
                    if (s.aiSuggested) sourceLabels.push('AI');
                    if (s.verified) sourceLabels.push('Verified');
                    return `<div style="display:flex;justify-content:space-between;align-items:center;">
                      <span class="skill-tag ${s.verified ? 'verified' : ''}">${s.verified ? '✓' : '○'} ${HUNAR.Utils.escapeHtml(s.name)}</span>
                      <span class="text-xs text-muted">${s.count} project${s.count > 1 ? 's' : ''}${sourceLabels.length ? ' · ' + sourceLabels.join(', ') : ''}</span>
                    </div>`;
                  }).join('')}</div>`
              }
            </div>
          </div>
        </div>`;
      break;

    case 'projects':
      container.innerHTML = subs.length === 0
        ? `<div class="empty-state"><div class="empty-state-icon">📁</div><h3>No projects yet</h3><p>Complete challenges to build your portfolio.</p></div>`
        : `<div style="display:grid;gap:var(--space-4);">${subs.map(sub => {
            const ch = HUNAR.Data.getChallenge(sub.challengeId);
            return `<div class="card" style="cursor:pointer;" onclick="HUNAR.Router.navigate('/project/${sub.id}')"><div class="card-body"><div class="flex-gap-3 mb-2">${ch ? `<span class="badge ${HUNAR.Utils.categoryBadgeClass(ch.category)}">${ch.category}</span>` : ''}${HUNAR.Utils.statusBadge(sub.status)}</div><h3 style="font-size:var(--font-size-base);">${HUNAR.Utils.escapeHtml(sub.title)}</h3><p class="text-sm text-muted mt-2" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${HUNAR.Utils.escapeHtml(sub.problemStatement)}</p></div></div>`;
          }).join('')}</div>`;
      break;

    case 'feedback':
      if (!feedbackSummary.hasData) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📝</div><h3>No feedback yet</h3><p>${feedbackSummary.message}</p></div>`;
      } else {
        container.innerHTML = `
          <div class="notice-banner info mb-4"><span>🧠</span><span>This summary is generated by analyzing your mentor reviews (simulated AI).</span></div>
          <div class="section-card mb-6">
            <div class="section-card-header">📊 Overall Performance</div>
            <div class="section-card-body">
              <p class="mb-4" style="line-height:1.7;">${feedbackSummary.summary}</p>
              <div class="review-criteria">
                ${Object.entries(feedbackSummary.avgRatings).map(([key, val]) => `
                  <div class="review-criterion"><div class="review-criterion-label">${HUNAR.AI.formatRatingLabel(key)}</div><div>${HUNAR.Utils.renderStars(Math.round(val))} <span class="text-sm text-muted">${val}/5</span></div></div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="grid-2">
            <div class="section-card"><div class="section-card-header" style="color:var(--green-700);">💪 Key Strengths</div><div class="section-card-body"><ul style="list-style:none;display:grid;gap:var(--space-3);">${feedbackSummary.topStrengths.map(s => `<li style="display:flex;gap:var(--space-2);font-size:var(--font-size-sm);"><span style="color:var(--green-500);">✓</span>${HUNAR.Utils.escapeHtml(s)}</li>`).join('')}</ul></div></div>
            <div class="section-card"><div class="section-card-header" style="color:var(--color-info);">📈 Growth Areas</div><div class="section-card-body"><ul style="list-style:none;display:grid;gap:var(--space-3);">${feedbackSummary.topImprovements.map(i => `<li style="display:flex;gap:var(--space-2);font-size:var(--font-size-sm);"><span style="color:var(--color-info);">→</span>${HUNAR.Utils.escapeHtml(i)}</li>`).join('')}</ul></div></div>
          </div>`;
      }
      break;

    case 'achievements':
      container.innerHTML = achievements.length === 0
        ? `<div class="empty-state"><div class="empty-state-icon">🏅</div><h3>No achievements yet</h3><p>Complete challenges and earn reviews to unlock achievements.</p></div>`
        : `<div class="grid-3">${achievements.map(a => `
            <div class="card"><div class="card-body text-center"><div style="font-size:3rem;margin-bottom:var(--space-3);">${a.icon}</div><h3 style="font-size:var(--font-size-base);">${HUNAR.Utils.escapeHtml(a.title)}</h3><p class="text-sm text-muted mt-2">${HUNAR.Utils.escapeHtml(a.description)}</p><div class="text-xs text-muted mt-2">${HUNAR.Utils.formatDate(a.earnedDate)}</div></div></div>
          `).join('')}</div>`;
      break;
  }
}


// ── Learning Journey ────────────────────────────────────────

HUNAR.Views.journey = function () {
  const user = HUNAR.Data.getCurrentUser();
  const subs = HUNAR.Data.getSubmissions({ userId: user.id });
  const achievements = HUNAR.Data.getAchievements();
  const recommendations = HUNAR.AI.recommendChallenges(user.id);

  // Build timeline events
  const events = [];
  events.push({ date: user.joinDate, title: 'Joined HUNAR', desc: 'Started your learning journey!', type: 'milestone', icon: '🌱' });

  subs.forEach(sub => {
    events.push({ date: sub.submittedDate, title: `Submitted: ${sub.title}`, desc: `Status: ${sub.status}`, type: sub.status === 'reviewed' ? 'completed' : 'pending', icon: '📄' });
    const review = HUNAR.Data.getReviewForSubmission(sub.id);
    if (review) {
      events.push({ date: review.reviewDate, title: `Review received for "${sub.title}"`, desc: `Reviewed by ${HUNAR.Data.getUser(review.mentorId)?.name || 'Mentor'}`, type: 'completed', icon: '✅' });
    }
  });

  achievements.forEach(a => {
    events.push({ date: a.earnedDate, title: `Achievement: ${a.title}`, desc: a.description, type: 'completed', icon: a.icon });
  });

  events.sort((a, b) => new Date(a.date) - new Date(b.date));

  const content = `
    <div class="page-header">
      <h1>Learning Journey</h1>
      <p class="subtitle">Your growth timeline and path forward.</p>
    </div>

    <div class="grid-2">
      <div class="section-card">
        <div class="section-card-header">📅 Your Timeline</div>
        <div class="section-card-body">
          ${events.length <= 1
            ? `<div class="empty-state" style="padding:var(--space-8) 0;"><div class="empty-state-icon">🗺️</div><h3>Just getting started</h3><p>Complete challenges to build your journey timeline!</p></div>`
            : `<div class="timeline">${events.map(e => `
                <div class="timeline-item">
                  <div class="timeline-dot ${e.type}"></div>
                  <div class="timeline-content">
                    <div class="timeline-date">${HUNAR.Utils.formatDate(e.date)}</div>
                    <div class="timeline-title">${e.icon} ${HUNAR.Utils.escapeHtml(e.title)}</div>
                    <div class="timeline-desc">${HUNAR.Utils.escapeHtml(e.desc)}</div>
                  </div>
                </div>
              `).join('')}</div>`
          }
        </div>
      </div>

      <div>
        <div class="section-card mb-6">
          <div class="section-card-header">🧭 What's Next</div>
          <div class="section-card-body">
            ${recommendations.length === 0
              ? '<p class="text-sm text-muted">Complete more challenges to get personalized recommendations.</p>'
              : recommendations.slice(0, 3).map(r => `
                  <div class="activity-item" style="cursor:pointer;" onclick="HUNAR.Router.navigate('/challenge/${r.challenge.id}')">
                    <div class="activity-icon" style="background:var(--green-100);color:var(--green-600);">🎯</div>
                    <div class="activity-content">
                      <div class="activity-title">${HUNAR.Utils.escapeHtml(r.challenge.title)}</div>
                      <div class="activity-time">${r.reasons[0] || ''}</div>
                    </div>
                  </div>
                `).join('')
            }
          </div>
        </div>

        <div class="section-card">
          <div class="section-card-header">📊 Category Progress</div>
          <div class="section-card-body">
            ${['Technology', 'Sustainability', 'Education', 'Community Development', 'Creativity', 'Entrepreneurship'].map(cat => {
              const catSubs = subs.filter(s => { const ch = HUNAR.Data.getChallenge(s.challengeId); return ch && ch.category === cat; });
              const total = HUNAR.Data.getChallenges({ category: cat.toLowerCase() }).length;
              const pct = total > 0 ? Math.round((catSubs.length / total) * 100) : 0;
              return `
                <div style="margin-bottom:var(--space-4);">
                  <div class="flex-between mb-1">
                    <span class="text-sm font-semibold">${cat}</span>
                    <span class="text-xs text-muted">${catSubs.length}/${total}</span>
                  </div>
                  <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%;"></div></div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  renderAppShell(content, 'Learning Journey', [{ label: 'Dashboard', route: '/dashboard' }, { label: 'Journey', route: '/journey' }]);
};


// ── Skill Map ───────────────────────────────────────────────

HUNAR.Views.skills = function () {
  const skills = HUNAR.Data.getSkillsForUser();
  const user = HUNAR.Data.getCurrentUser();
  const subs = HUNAR.Data.getSubmissions({ userId: user.id });

  // Get AI suggestions from all submissions
  const allAiSuggestions = [];
  subs.forEach(sub => {
    HUNAR.AI.suggestSkills(sub).forEach(s => {
      if (!allAiSuggestions.find(x => x.skill === s.skill)) {
        allAiSuggestions.push(s);
      }
    });
  });

  const content = `
    <div class="page-header">
      <h1>Skill Map</h1>
      <p class="subtitle">A comprehensive view of your demonstrated, suggested, and verified skills.</p>
    </div>

    <div class="notice-banner info mb-6">
      <span>🧠</span>
      <span>Skills are identified from three sources: <strong>Your submissions</strong> (self-identified), <strong>AI analysis</strong> (keyword-based, simulated), and <strong>Mentor verification</strong> (reviewed). Only mentor-verified skills carry the verified badge.</span>
    </div>

    <div class="grid-stats mb-8">
      <div class="stat-card">
        <div class="stat-card-icon green">🏷️</div>
        <div class="stat-card-value">${skills.length}</div>
        <div class="stat-card-label">Total Skills</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon blue">✅</div>
        <div class="stat-card-value">${skills.filter(s => s.verified).length}</div>
        <div class="stat-card-label">Mentor Verified</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon purple">🧠</div>
        <div class="stat-card-value">${allAiSuggestions.length}</div>
        <div class="stat-card-label">AI Suggested</div>
      </div>
    </div>

    ${skills.length === 0
      ? `<div class="empty-state"><div class="empty-state-icon">🗺️</div><h3>No skills mapped yet</h3><p>Submit projects to start building your skill map.</p><button class="btn btn-primary" onclick="HUNAR.Router.navigate('/challenges')">Start a Challenge</button></div>`
      : `
        <div class="section-card mb-6">
          <div class="section-card-header">🏷️ Your Skills Overview</div>
          <div class="section-card-body">
            <div style="display:grid;gap:var(--space-4);">
              ${skills.map(s => `
                <div style="background:var(--slate-50);padding:var(--space-4);border-radius:var(--radius-md);">
                  <div class="flex-between">
                    <div class="flex-gap-3">
                      <span class="skill-tag ${s.verified ? 'verified' : ''}" style="font-size:var(--font-size-sm);">${s.verified ? '✓' : '○'} ${HUNAR.Utils.escapeHtml(s.name)}</span>
                      ${s.verified ? '<span class="badge badge-green">Verified by Mentor</span>' : '<span class="badge badge-slate">Pending Verification</span>'}
                    </div>
                    <span class="text-xs text-muted">${s.count} project${s.count > 1 ? 's' : ''}</span>
                  </div>
                  <div class="text-xs text-muted mt-2">Evidence from: ${s.sources.map(src => HUNAR.Utils.escapeHtml(src)).join(', ')}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        ${allAiSuggestions.length > 0 ? `
          <div class="section-card">
            <div class="section-card-header">🧠 AI-Identified Skills <span class="badge badge-purple" style="margin-left:auto;">Simulated</span></div>
            <div class="section-card-body">
              <div class="notice-banner warning mb-4"><span>⚠️</span><span>These are keyword-based suggestions, not verified assessments.</span></div>
              <div style="display:grid;gap:var(--space-3);">
                ${allAiSuggestions.slice(0, 12).map(s => `
                  <div style="display:flex;align-items:center;gap:var(--space-3);">
                    <span class="skill-tag ai-suggested">${HUNAR.Utils.escapeHtml(s.skill)}</span>
                    <div class="progress-bar" style="flex:1;max-width:150px;height:4px;">
                      <div class="progress-bar-fill" style="width:${s.confidence}%;background:${s.confidence > 70 ? '#8b5cf6' : '#c4b5fd'};"></div>
                    </div>
                    <span class="text-xs text-muted">${s.confidence}%</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        ` : ''}
      `
    }
  `;

  renderAppShell(content, 'Skill Map', [{ label: 'Dashboard', route: '/dashboard' }, { label: 'Skill Map', route: '/skills' }]);
};


// ── Mentor Dashboard ────────────────────────────────────────

HUNAR.Views.mentor = function () {
  const stats = HUNAR.Data.getMentorStats();
  const pendingSubs = HUNAR.Data.getSubmissions({ status: 'pending' });

  const content = `
    <div class="page-header">
      <h1>Mentor Review Dashboard</h1>
      <p class="subtitle">Review student submissions and provide constructive feedback.</p>
    </div>

    <div class="notice-banner warning mb-6">
      <span>⚠️</span>
      <span>This is a demo mentor interface. In production, mentor accounts would require proper authentication and institutional verification.</span>
    </div>

    <div class="grid-stats mb-8">
      <div class="stat-card">
        <div class="stat-card-icon amber">⏳</div>
        <div class="stat-card-value">${stats.pendingReviews}</div>
        <div class="stat-card-label">Pending Reviews</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon green">✅</div>
        <div class="stat-card-value">${stats.totalReviews}</div>
        <div class="stat-card-label">Total Reviews</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon blue">👥</div>
        <div class="stat-card-value">${stats.studentsHelped}</div>
        <div class="stat-card-label">Students Helped</div>
      </div>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        📋 Submissions Awaiting Review
        <span class="badge badge-amber" style="margin-left:auto;">${pendingSubs.length} pending</span>
      </div>
      <div class="section-card-body">
        ${pendingSubs.length === 0
          ? `<div class="empty-state" style="padding:var(--space-8) 0;"><div class="empty-state-icon">✅</div><h3>All caught up!</h3><p>No submissions are waiting for review right now.</p></div>`
          : pendingSubs.map(sub => {
              const ch = HUNAR.Data.getChallenge(sub.challengeId);
              const student = HUNAR.Data.getUser(sub.userId);
              return `
                <div class="activity-item" style="cursor:pointer;" onclick="HUNAR.Router.navigate('/mentor/review/${sub.id}')">
                  <div class="avatar" style="background:${student?.avatarColor || 'var(--green-600)'};">${student?.initials || '?'}</div>
                  <div class="activity-content" style="flex:1;">
                    <div class="activity-title">${HUNAR.Utils.escapeHtml(sub.title)}</div>
                    <div class="activity-time">
                      by ${HUNAR.Utils.escapeHtml(student?.name || 'Unknown')}
                      ${ch ? ` · ${ch.category}` : ''}
                      · Submitted ${HUNAR.Utils.formatDate(sub.submittedDate)}
                    </div>
                  </div>
                  <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();HUNAR.Router.navigate('/mentor/review/${sub.id}')">Review</button>
                </div>
              `;
            }).join('')
        }
      </div>
    </div>
  `;

  renderAppShell(content, 'Mentor Dashboard', [{ label: 'Review Dashboard', route: '/mentor' }]);
};


// ── Mentor Review Form ──────────────────────────────────────

HUNAR.Views.mentorReview = function (params) {
  const sub = HUNAR.Data.getSubmission(params.id);
  if (!sub) {
    renderAppShell('<div class="empty-state"><div class="empty-state-icon">❌</div><h3>Submission not found</h3></div>', 'Error');
    return;
  }

  const ch = HUNAR.Data.getChallenge(sub.challengeId);
  const student = HUNAR.Data.getUser(sub.userId);
  const existingReview = HUNAR.Data.getReviewForSubmission(sub.id);

  if (existingReview) {
    // Show existing review in read-only mode
    HUNAR.Views.projectDetail(params);
    return;
  }

  const ratingCriteria = [
    { key: 'problemUnderstanding', label: 'Problem Understanding', desc: 'How well does the student understand and articulate the problem?' },
    { key: 'creativity', label: 'Creativity & Originality', desc: 'How creative and original is the approach?' },
    { key: 'implementation', label: 'Implementation Quality', desc: 'How thorough and well-executed is the implementation?' },
    { key: 'evidenceQuality', label: 'Evidence Quality', desc: 'How strong and relevant is the supporting evidence?' },
    { key: 'reflection', label: 'Reflection & Self-Awareness', desc: 'How thoughtful and honest is the student\'s reflection?' }
  ];

  const content = `
    <button class="btn btn-ghost mb-4" onclick="HUNAR.Router.navigate('/mentor')">${HUNAR.Icons.arrowLeft} Back to Dashboard</button>

    <div class="page-header">
      <h1>Review Submission</h1>
      <p class="subtitle">Provide structured, constructive feedback for this student's project.</p>
    </div>

    <!-- Student Submission Summary -->
    <div class="card mb-6" style="border-color:var(--green-200);">
      <div class="card-body">
        <div class="flex-gap-3 mb-3">
          <div class="avatar" style="background:${student?.avatarColor || 'var(--green-600)'};">${student?.initials || '?'}</div>
          <div>
            <div class="font-semibold">${HUNAR.Utils.escapeHtml(student?.name || 'Student')}</div>
            <div class="text-xs text-muted">${ch ? ch.category + ' · ' : ''}Submitted ${HUNAR.Utils.formatDate(sub.submittedDate)}</div>
          </div>
        </div>
        <h2 style="font-size:var(--font-size-xl);margin-bottom:var(--space-3);">${HUNAR.Utils.escapeHtml(sub.title)}</h2>
        <p class="text-sm mb-4" style="line-height:1.6;color:var(--text-secondary);">${HUNAR.Utils.escapeHtml(sub.problemStatement)}</p>

        <details style="margin-top:var(--space-3);">
          <summary style="cursor:pointer;font-size:var(--font-size-sm);font-weight:600;color:var(--color-primary);">View Full Submission</summary>
          <div style="margin-top:var(--space-4);padding:var(--space-4);background:var(--slate-50);border-radius:var(--radius-md);">
            <h4 class="mb-2">Solution</h4>
            <p class="text-sm mb-4" style="line-height:1.6;">${HUNAR.Utils.escapeHtml(sub.solution)}</p>
            <h4 class="mb-2">Process</h4>
            <p class="text-sm mb-4" style="line-height:1.6;">${HUNAR.Utils.escapeHtml(sub.process)}</p>
            <h4 class="mb-2">Outcomes</h4>
            <p class="text-sm mb-4" style="line-height:1.6;">${HUNAR.Utils.escapeHtml(sub.outcomes)}</p>
            <h4 class="mb-2">Reflections</h4>
            <p class="text-sm" style="line-height:1.6;">${HUNAR.Utils.escapeHtml(sub.reflections)}</p>
          </div>
        </details>
      </div>
    </div>

    <!-- Review Form -->
    <form id="review-form" novalidate>
      <input type="hidden" name="submissionId" value="${sub.id}">

      <div class="section-card mb-6">
        <div class="section-card-header">⭐ Rating Criteria</div>
        <div class="section-card-body">
          <div class="review-criteria">
            ${ratingCriteria.map(c => `
              <div class="review-criterion" style="flex-direction:column;gap:var(--space-2);">
                <div class="review-criterion-label">
                  ${c.label}
                  <small>${c.desc}</small>
                </div>
                <div class="flex-gap-2">
                  ${[1,2,3,4,5].map(n => `
                    <label style="cursor:pointer;" title="${n} star${n > 1 ? 's' : ''}">
                      <input type="radio" name="rating-${c.key}" value="${n}" class="sr-only" required>
                      <span class="rating-star" data-group="rating-${c.key}" data-value="${n}" style="font-size:1.5rem;color:var(--slate-200);transition:color 0.15s;">★</span>
                    </label>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="section-card mb-6">
        <div class="section-card-header">💪 Feedback</div>
        <div class="section-card-body">
          <div class="form-group">
            <label class="form-label" for="review-strengths">Strengths <span class="required">*</span></label>
            <textarea class="form-textarea" id="review-strengths" name="strengths" rows="4" placeholder="What did the student do well? Be specific." required></textarea>
            <div class="form-hint">List specific strengths, one per line</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="review-improvements">Suggested Improvements <span class="required">*</span></label>
            <textarea class="form-textarea" id="review-improvements" name="improvements" rows="4" placeholder="What could the student improve? Be constructive and specific." required></textarea>
            <div class="form-hint">List specific, actionable suggestions, one per line</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="review-comments">Overall Comments</label>
            <textarea class="form-textarea" id="review-comments" name="overallComments" rows="3" placeholder="Any additional comments, encouragement, or guidance..."></textarea>
          </div>
        </div>
      </div>

      <div class="section-card mb-6">
        <div class="section-card-header">✅ Skill Verification</div>
        <div class="section-card-body">
          <p class="text-sm text-muted mb-4">Select the skills that this student has genuinely demonstrated through their work:</p>
          <div style="display:flex;flex-wrap:wrap;gap:var(--space-3);">
            ${(sub.skills || (ch ? ch.skills : [])).map(s => `
              <label class="form-checkbox-group">
                <input type="checkbox" class="form-checkbox" name="verifiedSkills" value="${HUNAR.Utils.escapeHtml(s)}">
                <span class="text-sm">${HUNAR.Utils.escapeHtml(s)}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="section-card mb-6">
        <div class="section-card-header">🔄 Revision Request</div>
        <div class="section-card-body">
          <label class="form-checkbox-group">
            <input type="checkbox" class="form-checkbox" id="request-revision" name="requestRevision">
            <span class="text-sm">Request the student to revise and resubmit this project</span>
          </label>
          <div class="form-hint" style="margin-left:26px;">Check this if the student needs to make significant changes before final approval.</div>
        </div>
      </div>

      <div style="display:flex;gap:var(--space-3);justify-content:flex-end;padding:var(--space-4) 0;">
        <button type="button" class="btn btn-secondary" onclick="HUNAR.Router.navigate('/mentor')">Cancel</button>
        <button type="submit" class="btn btn-primary btn-lg">✅ Submit Review</button>
      </div>
    </form>
  `;

  renderAppShell(content, 'Review Submission', [
    { label: 'Review Dashboard', route: '/mentor' },
    { label: 'Review', route: `/mentor/review/${sub.id}` }
  ]);

  // Bind star rating interactions
  document.querySelectorAll('.rating-star').forEach(star => {
    star.addEventListener('click', () => {
      const group = star.dataset.group;
      const value = parseInt(star.dataset.value);
      // Set the radio
      const radio = document.querySelector(`input[name="${group}"][value="${value}"]`);
      if (radio) radio.checked = true;
      // Update visual
      document.querySelectorAll(`.rating-star[data-group="${group}"]`).forEach(s => {
        s.style.color = parseInt(s.dataset.value) <= value ? '#f59e0b' : 'var(--slate-200)';
      });
    });
    star.addEventListener('mouseenter', () => {
      const group = star.dataset.group;
      const value = parseInt(star.dataset.value);
      document.querySelectorAll(`.rating-star[data-group="${group}"]`).forEach(s => {
        s.style.color = parseInt(s.dataset.value) <= value ? '#fbbf24' : 'var(--slate-200)';
      });
    });
    star.addEventListener('mouseleave', () => {
      const group = star.dataset.group;
      const checked = document.querySelector(`input[name="${group}"]:checked`);
      const val = checked ? parseInt(checked.value) : 0;
      document.querySelectorAll(`.rating-star[data-group="${group}"]`).forEach(s => {
        s.style.color = parseInt(s.dataset.value) <= val ? '#f59e0b' : 'var(--slate-200)';
      });
    });
  });

  // Bind review form
  document.getElementById('review-form').addEventListener('submit', HUNAR.App.handleReviewSubmission);
};


// ── Mentor Review History ───────────────────────────────────

HUNAR.Views.mentorHistory = function () {
  const mentor = HUNAR.Data.getCurrentUser();
  const reviews = HUNAR.Data.getReviews({ mentorId: mentor.id });

  const content = `
    <div class="page-header">
      <h1>Review History</h1>
      <p class="subtitle">All your past reviews.</p>
    </div>

    ${reviews.length === 0
      ? `<div class="empty-state"><div class="empty-state-icon">📋</div><h3>No reviews yet</h3><p>Start reviewing student submissions from the dashboard.</p><button class="btn btn-primary" onclick="HUNAR.Router.navigate('/mentor')">Go to Dashboard</button></div>`
      : `<div style="display:grid;gap:var(--space-4);">
          ${reviews.map(r => {
            const sub = HUNAR.Data.getSubmission(r.submissionId);
            const student = sub ? HUNAR.Data.getUser(sub.userId) : null;
            return `
              <div class="card" style="cursor:pointer;" onclick="HUNAR.Router.navigate('/project/${r.submissionId}')">
                <div class="card-body" style="display:flex;align-items:center;gap:var(--space-4);">
                  <div class="avatar" style="background:${student?.avatarColor || 'var(--green-600)'};">${student?.initials || '?'}</div>
                  <div style="flex:1;">
                    <div class="font-semibold">${sub ? HUNAR.Utils.escapeHtml(sub.title) : 'Unknown submission'}</div>
                    <div class="text-sm text-muted">by ${student ? HUNAR.Utils.escapeHtml(student.name) : 'Unknown'} · Reviewed ${HUNAR.Utils.formatDate(r.reviewDate)}</div>
                  </div>
                  <span class="badge badge-green">Completed</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>`
    }
  `;

  renderAppShell(content, 'Review History', [{ label: 'Review Dashboard', route: '/mentor' }, { label: 'History', route: '/mentor/history' }]);
};


// ── Settings ────────────────────────────────────────────────

HUNAR.Views.settings = function () {
  const user = HUNAR.Data.getCurrentUser();

  const content = `
    <div class="page-header">
      <h1>Settings</h1>
      <p class="subtitle">Manage your profile and privacy preferences.</p>
    </div>

    <div class="section-card mb-6">
      <div class="section-card-header">👤 Profile Information</div>
      <div class="section-card-body">
        <form id="settings-form">
          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" for="settings-name">Full Name</label>
              <input type="text" class="form-input" id="settings-name" value="${HUNAR.Utils.escapeHtml(user.name)}">
            </div>
            <div class="form-group">
              <label class="form-label" for="settings-email">Email</label>
              <input type="email" class="form-input" id="settings-email" value="${HUNAR.Utils.escapeHtml(user.email)}">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="settings-bio">Bio</label>
            <textarea class="form-textarea" id="settings-bio" rows="3">${HUNAR.Utils.escapeHtml(user.bio)}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label" for="settings-location">Location</label>
            <input type="text" class="form-input" id="settings-location" value="${HUNAR.Utils.escapeHtml(user.location || '')}">
          </div>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>

    <div class="section-card mb-6">
      <div class="section-card-header">🔒 Privacy</div>
      <div class="section-card-body">
        <div class="form-group">
          <label class="form-checkbox-group">
            <input type="checkbox" class="form-checkbox" id="settings-portfolio-public" ${user.portfolioPublic ? 'checked' : ''}>
            <span>Make my HUNAR Profile (portfolio) publicly visible</span>
          </label>
          <div class="form-hint" style="margin-left:26px;">When public, anyone with the link can see your completed projects, verified skills, and achievements. Your email and personal details remain private.</div>
        </div>
        <button class="btn btn-secondary" id="save-privacy-btn">Save Privacy Settings</button>
      </div>
    </div>

  `;

  renderAppShell(content, 'Settings', [{ label: 'Dashboard', route: '/dashboard' }, { label: 'Settings', route: '/settings' }]);

  // Bind settings form
  document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    HUNAR.Data.updateUserProfile({
      name: document.getElementById('settings-name').value,
      email: document.getElementById('settings-email').value,
      bio: document.getElementById('settings-bio').value,
      location: document.getElementById('settings-location').value,
      initials: document.getElementById('settings-name').value.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    });
    HUNAR.Toast.show('Profile updated successfully!', 'success');
  });

  document.getElementById('save-privacy-btn').addEventListener('click', () => {
    HUNAR.Data.updateUserProfile({
      portfolioPublic: document.getElementById('settings-portfolio-public').checked
    });
    HUNAR.Toast.show('Privacy settings saved.', 'success');
  });
};


// ═══════════════════════════════════════════════════════════
// APP CONTROLLER
// ═══════════════════════════════════════════════════════════

HUNAR.App = {
  init() {
    // Register routes
    // ── Learning Hub View ──────────────────────────────────────
HUNAR.Views.learning = function () {
  const paths = (typeof learningPaths !== 'undefined') ? learningPaths : [];
  let html = '<div class="page-header"><h1>Learning Hub</h1><p class="subtitle">Discover, learn, and grow your skills through structured modules.</p></div>';
  if (paths.length === 0) {
    html += '<div class="empty-state"><div class="empty-state-icon">📚</div><h3>No learning paths yet</h3><p>Learning content is being prepared. Check back soon!</p></div>';
    renderAppShell(html, 'Learning Hub');
    return;
  }
  html += '<div class="grid-2" style="gap:var(--space-4);">';
  paths.forEach(p => {
    html += '<div class="card"><div class="card-body">';
    html += '<h3 style="margin:0 0 0.5rem;">' + HUNAR.Utils.escapeHtml(p.title) + '</h3>';
    html += '<p class="text-sm text-muted" style="margin:0 0 0.75rem;">' + HUNAR.Utils.escapeHtml(p.description) + '</p>';
    html += '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">';
    html += '<span class="badge badge-green">' + p.category + '</span>';
    html += '<span class="badge">' + p.level + '</span>';
    html += '<span class="badge">' + (p.modules ? p.modules.length : 0) + ' modules</span>';
    html += '</div>';
    if (p.modules && p.modules.length > 0) {
      html += '<div style="margin-top:0.5rem;">';
      p.modules.forEach(m => {
        html += '<div style="padding:0.5rem 0;border-top:1px solid var(--border-color);font-size:0.85rem;">';
        html += '<strong>' + HUNAR.Utils.escapeHtml(m.title) + '</strong>';
        html += ' <span style="color:var(--text-muted);">(' + m.estimatedTime + ')</span>';
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</div></div>';
  });
  html += '</div>';
  renderAppShell(html, 'Learning Hub');
};

// Enhanced Learning Hub view with modules, lessons, video, and quiz support
HUNAR.Views.learning = function () {
  const paths = (typeof learningPaths !== 'undefined') ? learningPaths : [];
  let html = '<div class="page-header"><h1>Learning Hub</h1><p class="subtitle">Discover, learn, and grow your skills through structured modules.</p></div>';
  if (paths.length === 0) {
    html += '<div class="empty-state"><div class="empty-state-icon">📚</div><h3>No learning paths yet</h3><p>Learning content is being prepared. Check back soon!</p></div>';
    renderAppShell(html, "Learning Hub");
    return;
  }
  html += '<div class="hub-grid-horizontal">';
  paths.forEach(p => {
    html += '<div class="hub-card"><div class="card-body">';
    html += '<h3 style="margin:0 0 0.5rem;">' + HUNAR.Utils.escapeHtml(p.title) + '</h3>';
    html += '<p class="text-sm text-muted" style="margin:0 0 0.75rem;">' + HUNAR.Utils.escapeHtml(p.description) + '</p>';
    html += '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">';
    html += '<span class="badge badge-green">' + p.category + '</span>';
    html += '<span class="badge">' + p.level + '</span>';
    html += '<span class="badge">' + (p.modules ? p.modules.length : 0) + ' modules</span>';
    html += '</div>';
    if (p.modules && p.modules.length > 0) {
      html += '<div style="margin-top:0.5rem;">';
      p.modules.forEach(m => {
        html += '<div class="module-item">';
        html += '<strong>' + HUNAR.Utils.escapeHtml(m.title) + '</strong>';
        html += ' <span style="color:var(--text-muted);">(' + m.estimatedTime + ')</span>';
        if (m.lessons && m.lessons.length) {
          m.lessons.forEach(l => {
            html += '<div class="lesson-item">';
            html += '<div class="lesson-title">' + HUNAR.Utils.escapeHtml(l.title) + '</div>';
            if (l.video && l.video.embedAllowed) {
              html += '<div class="video-embed"><iframe src="https://www.youtube.com/embed/' + extractYouTubeID(l.video.url) + '" allowfullscreen></iframe></div>';
            }
            if (l.quiz && l.quiz.length) {
              html += '<button class="quiz-btn" onclick="HUNAR.Views.startQuiz(\'' + l.id + '\')">Start Quiz</button>';
            }
            html += '</div>';
          });
        }
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</div></div>';
  });
  html += '</div>';
  renderAppShell(html, "Learning Hub");
};

function extractYouTubeID(url) {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : url;
}


HUNAR.Views.about = function () {
  const html = `
    <div class="page-header"><h1>About HUNAR</h1><p class="subtitle">Beyond Marks, Beyond Barriers</p></div>
    <div class="section-card mb-6">
      <div class="section-card-body" style="line-height:1.8;">
        <h3 style="color:#1e293b;margin:0 0 0.75rem;">Our Mission</h3>
        <p style="color:#475569;margin:0 0 1.5rem;">Project HUNAR is a skill-based learning and development platform that helps students discover their real-world abilities through project-based challenges. We believe that what you can do matters more than what you scored.</p>
        <h3 style="color:#1e293b;margin:0 0 0.75rem;">What We Do</h3>
        <p style="color:#475569;margin:0 0 1.5rem;">HUNAR provides real-world challenges across technology, sustainability, education, entrepreneurship, and community development. Students submit evidence of their work, receive mentor feedback, and build verified, evidence-based portfolios.</p>
        <h3 style="color:#1e293b;margin:0 0 0.75rem;">Our Vision</h3>
        <p style="color:#475569;margin:0;">A world where every learner's abilities are recognized, verified, and celebrated — regardless of their background, grades, or circumstances.</p>
      </div>
    </div>
  `;
  renderAppShell(html, 'About');
};

HUNAR.Views.faq = function () {
  const html = `
    <div class="page-header"><h1>Frequently Asked Questions</h1><p class="subtitle">Everything you need to know about HUNAR</p></div>
    <div class="section-card mb-6">
      <div class="section-card-body">
        <details style="padding:1rem 0;border-bottom:1px solid #f1f5f9;"><summary style="font-weight:700;color:#1e293b;cursor:pointer;">Is HUNAR free?</summary><p style="color:#64748b;margin:0.75rem 0 0;line-height:1.6;">Yes, HUNAR is completely free for students. Create your account and start tackling challenges.</p></details>
        <details style="padding:1rem 0;border-bottom:1px solid #f1f5f9;"><summary style="font-weight:700;color:#1e293b;cursor:pointer;">What kind of challenges are available?</summary><p style="color:#64748b;margin:0.75rem 0 0;line-height:1.6;">Challenges span technology, education, sustainability, entrepreneurship, community development, and creativity.</p></details>
        <details style="padding:1rem 0;border-bottom:1px solid #f1f5f9;"><summary style="font-weight:700;color:#1e293b;cursor:pointer;">How are skills verified?</summary><p style="color:#64748b;margin:0.75rem 0 0;line-height:1.6;">Experienced mentors review your submissions and award verified skill badges based on demonstrated capability.</p></details>
        <details style="padding:1rem 0;"><summary style="font-weight:700;color:#1e293b;cursor:pointer;">Can I share my portfolio?</summary><p style="color:#64748b;margin:0.75rem 0 0;line-height:1.6;">Yes! Make your portfolio public and share a link with employers and collaborators.</p></details>
      </div>
    </div>
  `;
  renderAppShell(html, 'FAQ');
};

HUNAR.Views.help = function () {
  const html = `
    <div class="page-header"><h1>Help Center</h1><p class="subtitle">Get help and support</p></div>
    <div class="section-card mb-6">
      <div class="section-card-body" style="line-height:1.8;">
        <h3 style="color:#1e293b;margin:0 0 0.75rem;">Getting Started</h3>
        <p style="color:#475569;margin:0 0 1.5rem;">Create an account with your institutional email, choose a role (student or mentor), and start exploring challenges.</p>
        <h3 style="color:#1e293b;margin:0 0 0.75rem;">Submitting a Project</h3>
        <p style="color:#475569;margin:0 0 1.5rem;">Browse challenges, select one, fill in the submission form with your evidence, and submit for mentor review.</p>
        <h3 style="color:#1e293b;margin:0 0 0.75rem;">Contact Support</h3>
        <p style="color:#475569;margin:0;">Email us at support@hunar.org for any questions or issues.</p>
      </div>
    </div>
  `;
  renderAppShell(html, 'Help Center');
};

HUNAR.Router.register('/about', HUNAR.Views.about);
HUNAR.Router.register('/faq', HUNAR.Views.faq);
HUNAR.Router.register('/help', HUNAR.Views.help);

HUNAR.Router.register('/learning', HUNAR.Views.learning);

HUNAR.Router.register('/', showRoleSelectionScreen);
    HUNAR.Router.register('/dashboard', HUNAR.Views.dashboard);
    HUNAR.Router.register('/challenges', HUNAR.Views.challenges);
    HUNAR.Router.register('/challenge/:id', HUNAR.Views.challengeDetail);
    HUNAR.Router.register('/submit/:challengeId', HUNAR.Views.submit);
    HUNAR.Router.register('/edit/:submissionId', HUNAR.Views.editSubmission);
    HUNAR.Router.register('/projects', HUNAR.Views.projects);
    HUNAR.Router.register('/project/:id', HUNAR.Views.projectDetail);
    HUNAR.Router.register('/profile', HUNAR.Views.profile);
    HUNAR.Router.register('/public/:userId', HUNAR.Views.publicPortfolio);
    HUNAR.Router.register('/journey', HUNAR.Views.journey);
    HUNAR.Router.register('/skills', HUNAR.Views.skills);
    HUNAR.Router.register('/mentor', HUNAR.Views.mentor);
    HUNAR.Router.register('/mentor/review/:id', HUNAR.Views.mentorReview);
    HUNAR.Router.register('/mentor/history', HUNAR.Views.mentorHistory);
    HUNAR.Router.register('/settings', HUNAR.Views.settings);

    // Listen for hash changes
    window.addEventListener('hashchange', () => HUNAR.Router.resolve());

    // Initialize toast system
    HUNAR.Toast.init();

    // Resolve initial route — but only if there is a meaningful hash
    const initialHash = window.location.hash.slice(1);
    if (initialHash && initialHash !== '/') {
      HUNAR.Router.resolve();
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        HUNAR.Modal.hide();
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');
        const overlay = document.getElementById('sidebar-overlay');
        if (overlay) overlay.classList.remove('active');
      }
    });
  },

  enterApp(role) {
    if (!window._currentUser) {
      // Not authenticated yet — redirect to sign-in
      if (window.Clerk) {
        window.Clerk.redirectToSignIn();
      }
      return;
    }
    HUNAR.Data.switchRole(role);
    HUNAR.Router.navigate(role === 'mentor' ? '/mentor' : '/dashboard');
  },

  requireAuthAndContinue(role) {
    if (!window._currentUser) {
      location.reload();
      return;
    }
    HUNAR.Data.switchRole(role);
    HUNAR.Router.navigate(role === 'mentor' ? '/mentor' : '/dashboard');
  },

  switchRole(role) {
    if (!window._currentUser) {
      location.reload();
      return;
    }
    HUNAR.Data.switchRole(role);
    HUNAR.Router.navigate(role === 'mentor' ? '/mentor' : '/dashboard');
  },

  async filterChallenges() {
    const search = document.getElementById('challenge-search')?.value || '';
    const category = document.getElementById('filter-category')?.value || 'all';
    const difficulty = document.getElementById('filter-difficulty')?.value || 'all';
    const grid = document.getElementById('challenges-grid');
    const noResults = document.getElementById('no-results');

    try {
      const challenges = await HUNAR.API.getChallenges({ search, category, difficulty });
      HUNAR.Data._cachedChallenges = challenges;
      if (grid) {
        grid.innerHTML = challenges.map(ch => renderChallengeCard(ch)).join('');
        grid.classList.toggle('hidden', challenges.length === 0);
      }
      if (noResults) {
        noResults.classList.toggle('hidden', challenges.length > 0);
      }
    } catch (e) {
      console.warn('Filter failed:', e);
    }
  },

  handleSubmission(e) {
    e.preventDefault();
    const form = e.target;

    // Validate required fields
    const title = form.querySelector('[name="title"]').value.trim();
    const problem = form.querySelector('[name="problemStatement"]').value.trim();
    const solution = form.querySelector('[name="solution"]').value.trim();
    const process = form.querySelector('[name="process"]').value.trim();
    const outcomes = form.querySelector('[name="outcomes"]').value.trim();
    const reflections = form.querySelector('[name="reflections"]').value.trim();

    const errors = [];
    if (!title) errors.push('Project title is required');
    if (!problem) errors.push('Problem statement is required');
    if (!solution) errors.push('Solution description is required');
    if (!process) errors.push('Implementation process is required');
    if (!outcomes) errors.push('Outcomes are required');
    if (!reflections) errors.push('Reflections are required');

    if (errors.length > 0) {
      HUNAR.Toast.show(errors[0], 'error');
      // Highlight first empty required field
      const firstEmpty = form.querySelector(':invalid, .form-input:placeholder-shown[required]');
      if (firstEmpty) { firstEmpty.classList.add('error'); firstEmpty.focus(); }
      return;
    }

    // Collect tools
    const toolsRaw = form.querySelector('[name="tools"]')?.value || '';
    const tools = toolsRaw.split(',').map(t => t.trim()).filter(Boolean);

    // Collect evidence links
    const evidence = [];
    document.querySelectorAll('.evidence-link-row').forEach(row => {
      const label = row.querySelector('.evidence-label')?.value?.trim();
      const url = row.querySelector('.evidence-url')?.value?.trim();
      if (label && url) evidence.push({ type: 'link', label, url });
    });

    // Get challenge skills
    const challengeId = form.querySelector('[name="challengeId"]').value;
    const challenge = HUNAR.Data.getChallenge(challengeId);

    const submission = {
      challengeId,
      title,
      problemStatement: problem,
      solution,
      process,
      tools,
      challengesFaced: form.querySelector('[name="challengesFaced"]')?.value?.trim() || '',
      outcomes,
      reflections,
      evidence,
      skills: challenge ? challenge.skills : []
    };

    const saved = HUNAR.Data.addSubmission(submission);
    HUNAR.Data.checkAndAwardAchievements(HUNAR.Data.getCurrentUser().id);
    HUNAR.Toast.show('Project submitted successfully! 🎉', 'success');

    setTimeout(() => {
      HUNAR.Router.navigate('/project/' + saved.id);
    }, 500);
  },

  handleReviewSubmission(e) {
    e.preventDefault();
    const form = e.target;

    // Collect ratings
    const ratings = {};
    let missingRating = false;
    ['problemUnderstanding', 'creativity', 'implementation', 'evidenceQuality', 'reflection'].forEach(key => {
      const checked = form.querySelector(`input[name="rating-${key}"]:checked`);
      if (checked) {
        ratings[key] = parseInt(checked.value);
      } else {
        missingRating = true;
      }
    });

    if (missingRating) {
      HUNAR.Toast.show('Please rate all criteria before submitting.', 'error');
      return;
    }

    const strengths = form.querySelector('[name="strengths"]').value.trim();
    const improvements = form.querySelector('[name="improvements"]').value.trim();

    if (!strengths) {
      HUNAR.Toast.show('Please describe the student\'s strengths.', 'error');
      return;
    }
    if (!improvements) {
      HUNAR.Toast.show('Please provide improvement suggestions.', 'error');
      return;
    }

    // Collect verified skills
    const verifiedSkills = [];
    form.querySelectorAll('input[name="verifiedSkills"]:checked').forEach(cb => {
      verifiedSkills.push(cb.value);
    });

    const review = {
      submissionId: form.querySelector('[name="submissionId"]').value,
      ratings,
      strengths: strengths.split('\n').filter(Boolean),
      improvements: improvements.split('\n').filter(Boolean),
      overallComments: form.querySelector('[name="overallComments"]')?.value?.trim() || '',
      verifiedSkills,
      requestRevision: form.querySelector('#request-revision')?.checked || false
    };

    HUNAR.Data.addReview(review);
    HUNAR.Data.checkAndAwardAchievements(sub.userId);
    HUNAR.Toast.show('Review submitted successfully! 🎉', 'success');

    setTimeout(() => {
      HUNAR.Router.navigate('/mentor');
    }, 500);
  },

handleEditSubmission(e) {
    e.preventDefault();
    const form = e.target;
    const submissionId = form.querySelector('[name="submissionId"]').value;

    const title = form.querySelector('[name="title"]').value.trim();
    const problem = form.querySelector('[name="problemStatement"]').value.trim();
    const solution = form.querySelector('[name="solution"]').value.trim();
    const process = form.querySelector('[name="process"]').value.trim();
    const outcomes = form.querySelector('[name="outcomes"]').value.trim();
    const reflections = form.querySelector('[name="reflections"]').value.trim();

    const errors = [];
    if (!title) errors.push('Project title is required');
    if (!problem) errors.push('Problem statement is required');
    if (!solution) errors.push('Solution description is required');
    if (!process) errors.push('Implementation process is required');
    if (!outcomes) errors.push('Outcomes are required');
    if (!reflections) errors.push('Reflections are required');

    if (errors.length > 0) {
      HUNAR.Toast.show(errors[0], 'error');
      return;
    }

    const toolsRaw = form.querySelector('[name="tools"]')?.value || '';
    const tools = toolsRaw.split(',').map(t => t.trim()).filter(Boolean);

    const updates = {
      title,
      problemStatement: problem,
      solution,
      process,
      tools,
      challengesFaced: form.querySelector('[name="challengesFaced"]')?.value?.trim() || '',
      outcomes,
      reflections,
      status: 'pending'
    };

    HUNAR.Data.updateSubmission(submissionId, updates);
    HUNAR.Toast.show('Submission updated successfully! 🎉', 'success');

    setTimeout(() => {
      HUNAR.Router.navigate('/project/' + submissionId);
    }, 500);
  },

  addEvidenceRow() {
    const container = document.getElementById('evidence-links');
    const row = document.createElement('div');
    row.className = 'form-group evidence-link-row';
    row.style.cssText = 'display:flex;gap:var(--space-3);align-items:flex-end;';
    row.innerHTML = `
      <div style="flex:1;">
        <label class="form-label">Link Label</label>
        <input type="text" class="form-input evidence-label" placeholder="e.g., GitHub Repository">
      </div>
      <div style="flex:2;">
        <label class="form-label">URL</label>
        <input type="url" class="form-input evidence-url" placeholder="https://...">
      </div>
      <button type="button" class="btn btn-ghost btn-icon" onclick="this.closest('.evidence-link-row').remove()" aria-label="Remove link">${HUNAR.Icons.x}</button>
    `;
    container.appendChild(row);
  },

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('hunar_theme', next);
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) btn.textContent = next === 'dark' ? '☀️' : '🌙';
  },

  handleFileSelect(files) {
    const container = document.getElementById('uploaded-files');
    Array.from(files).forEach(file => {
      const div = document.createElement('div');
      div.className = 'flex-gap-3 mb-2';
      div.style.cssText = 'padding:var(--space-2) var(--space-3);background:var(--slate-50);border-radius:var(--radius-md);';
      div.innerHTML = `
        <span>📎</span>
        <span class="text-sm" style="flex:1;">${HUNAR.Utils.escapeHtml(file.name)} <span class="text-muted">(${(file.size / 1024).toFixed(1)} KB)</span></span>
        <span class="badge badge-amber">Simulated</span>
        <button type="button" class="btn btn-ghost btn-sm" onclick="this.parentElement.remove()">✕</button>
      `;
      container.appendChild(div);
    });
    HUNAR.Toast.show('Files added (simulated — no actual upload in prototype).', 'info');
  }
};


// ═══════════════════════════════════════════════════════════
// ROLE SELECTION VIEW (shown after login)
// ═══════════════════════════════════════════════════════════

function showRoleSelectionScreen() {
  const app = document.getElementById('app');
  const currentUser = window._currentUser || HUNAR.Data.getCurrentUser();
  const userName = currentUser ? (currentUser.name || 'there') : 'there';
  app.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#f0fdf4 0%,#ecfdf5 50%,#f8fafc 100%);padding:2rem;">
      <div style="max-width:480px;width:100%;text-align:center;">
        <div style="width:72px;height:72px;border-radius:20px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:2.2rem;font-weight:900;color:white;font-family:Inter,sans-serif;margin:0 auto 1.5rem;box-shadow:0 8px 32px rgba(16,185,129,0.25);">H</div>
        <h1 style="font-family:Inter,sans-serif;font-size:1.75rem;font-weight:800;color:#1e293b;margin:0 0 0.5rem;">Welcome, ${HUNAR.Utils.escapeHtml(userName)}!</h1>
        <p style="color:#64748b;font-size:1rem;margin:0 0 2.5rem;">How would you like to use HUNAR today?</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
          <button id="role-student-btn" onclick="HUNAR.App.enterApp('student')" style="padding:2rem 1rem;border-radius:16px;border:2px solid #e2e8f0;background:white;cursor:pointer;transition:all 0.2s;box-shadow:0 2px 8px rgba(0,0,0,0.06);" onmouseover="this.style.borderColor='#10b981';this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px rgba(16,185,129,0.15)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.transform='';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.06)'">
            <div style="font-size:2.5rem;margin-bottom:0.75rem;">🎓</div>
            <div style="font-size:1.1rem;font-weight:700;color:#1e293b;font-family:Inter,sans-serif;">I'm a Student</div>
            <div style="font-size:0.85rem;color:#64748b;margin-top:0.4rem;line-height:1.4;">Discover challenges, submit projects &amp; build your portfolio</div>
          </button>
          <button id="role-mentor-btn" onclick="HUNAR.App.enterApp('mentor')" style="padding:2rem 1rem;border-radius:16px;border:2px solid #e2e8f0;background:white;cursor:pointer;transition:all 0.2s;box-shadow:0 2px 8px rgba(0,0,0,0.06);" onmouseover="this.style.borderColor='#7c3aed';this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px rgba(124,58,237,0.15)'" onmouseout="this.style.borderColor='#e2e8f0';this.style.transform='';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.06)'">
            <div style="font-size:2.5rem;margin-bottom:0.75rem;">👩‍🏫</div>
            <div style="font-size:1.1rem;font-weight:700;color:#1e293b;font-family:Inter,sans-serif;">I'm a Mentor</div>
            <div style="font-size:0.85rem;color:#64748b;margin-top:0.4rem;line-height:1.4;">Review student projects &amp; provide expert feedback</div>
          </button>
        </div>
        <p style="color:#94a3b8;font-size:0.8rem;margin-top:1.5rem;">You can switch between roles anytime from the sidebar.</p>
        <button onclick="localStorage.removeItem('hunar_token'); window._currentUser = null; location.reload();" style="margin-top:1rem;background:none;border:none;color:#94a3b8;font-size:0.8rem;cursor:pointer;text-decoration:underline;">Sign out</button>
      </div>
    </div>
  `;
}


// ═══════════════════════════════════════════════════════════
// INITIALIZE ON DOM READY
// ═══════════════════════════════════════════════════════════

async function initApp() {
  // Apply saved theme (do NOT clear localStorage)
  const savedTheme = localStorage.getItem('hunar_theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const app = document.getElementById('app');

  // Show loading
  app.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;flex-direction:column;gap:1.5rem;background:#f8fafc;">
      <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:900;color:white;font-family:Inter,sans-serif;">H</div>
      <div style="font-family:Inter,sans-serif;color:#64748b;font-size:1rem;">Loading HUNAR…</div>
    </div>
  `;

  try {
    // Try to fetch config from API (may not be available on static hosting)
    let config = { clerkEnabled: false };
    try {
      const res = await fetch('/api/config');
      if (res.ok) config = await res.json();
    } catch (e) { /* API not available, use localStorage mode */ }

    // Check if already logged in via JWT
    const token = localStorage.getItem('hunar_token');
    if (token) {
      try {
        const user = await HUNAR.API.getCurrentUser();
        if (user) {
          window._currentUser = user;
          HUNAR.Data.setCurrentUser(user);
          // Load challenges from API if available
          try {
            const challenges = await HUNAR.API.getChallenges();
            if (challenges && challenges.length > 0) HUNAR.Data.setChallenges(challenges);
          } catch (e) { /* use localStorage */ }
          HUNAR.App.init();
          const currentRole = HUNAR.Data.getCurrentRole();
          const currentRoute = window.location.hash.slice(1);
          if (!currentRoute || currentRoute === '/' || currentRoute === '') {
            showRoleSelectionScreen();
          }
          return;
        }
      } catch (e) {
        localStorage.removeItem('hunar_token');
      }
    }

    // Not logged in — show landing page
    showLandingPage();
    return;

  } catch (e) {
    console.error('App init failed:', e);
    // Fallback to localStorage mode
    showLandingPage();
    return;
  }
}

function doSignOut() { localStorage.removeItem('hunar_token'); window._currentUser = null; location.reload(); }
function showLandingPage() {
  const app = document.getElementById('app');
  const user = window._currentUser || (typeof HUNAR !== 'undefined' && HUNAR.Data ? HUNAR.Data.getCurrentUser() : null);
  if (user) {
    const name = user.name || 'there';
    app.innerHTML = `<div style="min-height:100vh;background:linear-gradient(135deg,#f0fdf4 0%,#ecfdf5 40%,#f8fafc 100%);font-family:Inter,sans-serif;">
      <nav style="display:flex;align-items:center;justify-content:space-between;padding:1.25rem 2rem;max-width:1200px;margin:0 auto;">
        <div style="display:flex;align-items:center;gap:0.75rem;"><div style="width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:1.35rem;font-weight:900;color:white;">H</div><span style="font-weight:800;font-size:1.35rem;color:#1e293b;">HUNAR</span></div>
        <div style="display:flex;gap:0.75rem;align-items:center;"><span style="color:#64748b;font-size:0.9rem;">Welcome, <strong style="color:#059669;">${name.split(' ')[0]}</strong></span><button onclick="doSignOut()" style="padding:0.5rem 1.25rem;background:transparent;color:#059669;border:1.5px solid #059669;border-radius:8px;font-size:0.9rem;font-weight:600;cursor:pointer;">Sign Out</button></div>
      </nav>
      <div style="max-width:1200px;margin:0 auto;padding:4rem 2rem;text-align:center;">
        <h1 style="font-size:2.75rem;font-weight:800;color:#0f172a;margin:0 0 0.75rem;letter-spacing:-0.02em;">Welcome back, ${name.split(' ')[0]}</h1>
        <p style="font-size:1.1rem;color:#64748b;max-width:560px;margin:0 auto 2.5rem;line-height:1.7;">Continue your learning journey. Explore challenges, build your portfolio, and grow your skills with HUNAR.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <button onclick="HUNAR.Router.navigate('/dashboard')" style="padding:0.85rem 2.5rem;background:linear-gradient(135deg,#10b981,#059669);color:white;border:none;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(16,185,129,0.3);">Go to Dashboard</button>
          <button onclick="HUNAR.Router.navigate('/challenges')" style="padding:0.85rem 2.5rem;background:white;color:#059669;border:2px solid #059669;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;">Browse Challenges</button>
          <button onclick="HUNAR.Router.navigate('/learning')" style="padding:0.85rem 2.5rem;background:white;color:#059669;border:2px solid #059669;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;">Learning Hub</button>
        </div>
      </div>
      <div style="max-width:1000px;margin:0 auto;padding:2rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;">
        <div style="background:white;border-radius:16px;padding:1.75rem;text-align:center;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2.5rem;font-weight:900;color:#059669;margin-bottom:0.25rem;">8+</div>
          <div style="color:#64748b;font-size:0.9rem;">Real-World Challenges</div>
        </div>
        <div style="background:white;border-radius:16px;padding:1.75rem;text-align:center;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2.5rem;font-weight:900;color:#2563eb;margin-bottom:0.25rem;">6</div>
          <div style="color:#64748b;font-size:0.9rem;">Skill Categories</div>
        </div>
        <div style="background:white;border-radius:16px;padding:1.75rem;text-align:center;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2.5rem;font-weight:900;color:#7c3aed;margin-bottom:0.25rem;">∞</div>
          <div style="color:#64748b;font-size:0.9rem;">Growth Potential</div>
        </div>
        <div style="background:white;border-radius:16px;padding:1.75rem;text-align:center;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2.5rem;font-weight:900;color:#d97706;margin-bottom:0.25rem;">100%</div>
          <div style="color:#64748b;font-size:0.9rem;">Free to Use</div>
        </div>
      </div>
      <div style="max-width:1200px;margin:0 auto;padding:2rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;">
        <div style="background:white;border-radius:16px;padding:1.75rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2rem;margin-bottom:0.75rem;">🎯</div>
          <h3 style="font-size:1.1rem;font-weight:700;color:#1e293b;margin:0 0 0.5rem;">Real-World Challenges</h3>
          <p style="color:#64748b;font-size:0.9rem;line-height:1.5;margin:0;">Tackle meaningful projects that build practical skills beyond textbook knowledge.</p>
        </div>
        <div style="background:white;border-radius:16px;padding:1.75rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2rem;margin-bottom:0.75rem;">📋</div>
          <h3 style="font-size:1.1rem;font-weight:700;color:#1e293b;margin:0 0 0.5rem;">Evidence-Based Portfolios</h3>
          <p style="color:#64748b;font-size:0.9rem;line-height:1.5;margin:0;">Showcase your work with verified evidence, not just grades and certificates.</p>
        </div>
        <div style="background:white;border-radius:16px;padding:1.75rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2rem;margin-bottom:0.75rem;">👥</div>
          <h3 style="font-size:1.1rem;font-weight:700;color:#1e293b;margin:0 0 0.5rem;">Mentor Reviews</h3>
          <p style="color:#64748b;font-size:0.9rem;line-height:1.5;margin:0;">Get constructive feedback from experienced mentors who verify your skills.</p>
        </div>
      </div>
      <section style="max-width:1100px;margin:0 auto;padding:3rem 2rem;">
        <h2 style="text-align:center;font-size:2rem;font-weight:800;color:#1e293b;margin:0 0 0.5rem;">Your Learning Timeline</h2>
        <p style="text-align:center;color:#64748b;font-size:1rem;margin:0 0 2.5rem;">Track your journey from discovery to mastery</p>
        <div style="display:flex;flex-direction:column;gap:1.5rem;max-width:700px;margin:0 auto;">
          <div style="display:flex;gap:1rem;align-items:flex-start;">
            <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);color:white;font-size:1.25rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 12px rgba(16,185,129,0.25);">1</div>
            <div style="background:white;border-radius:12px;padding:1.25rem;flex:1;box-shadow:0 2px 8px rgba(0,0,0,0.04);border:1px solid #f1f5f9;">
              <h4 style="margin:0 0 0.35rem;font-size:1rem;font-weight:700;color:#1e293b;">Discover Challenges</h4>
              <p style="margin:0;color:#64748b;font-size:0.9rem;line-height:1.5;">Browse real-world challenges across technology, sustainability, education, and more.</p>
            </div>
          </div>
          <div style="display:flex;gap:1rem;align-items:flex-start;">
            <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:white;font-size:1.25rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 12px rgba(37,99,235,0.25);">2</div>
            <div style="background:white;border-radius:12px;padding:1.25rem;flex:1;box-shadow:0 2px 8px rgba(0,0,0,0.04);border:1px solid #f1f5f9;">
              <h4 style="margin:0 0 0.35rem;font-size:1rem;font-weight:700;color:#1e293b;">Learn & Practice</h4>
              <p style="margin:0;color:#64748b;font-size:0.9rem;line-height:1.5;">Follow structured learning paths, watch videos, and complete quizzes to build skills.</p>
            </div>
          </div>
          <div style="display:flex;gap:1rem;align-items:flex-start;">
            <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#6d28d9);color:white;font-size:1.25rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 12px rgba(124,58,237,0.25);">3</div>
            <div style="background:white;border-radius:12px;padding:1.25rem;flex:1;box-shadow:0 2px 8px rgba(0,0,0,0.04);border:1px solid #f1f5f9;">
              <h4 style="margin:0 0 0.35rem;font-size:1rem;font-weight:700;color:#1e293b;">Build & Submit</h4>
              <p style="margin:0;color:#64748b;font-size:0.9rem;line-height:1.5;">Apply your knowledge to real-world problems and submit evidence-based projects.</p>
            </div>
          </div>
          <div style="display:flex;gap:1rem;align-items:flex-start;">
            <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#d97706,#b45309);color:white;font-size:1.25rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 12px rgba(217,119,6,0.25);">4</div>
            <div style="background:white;border-radius:12px;padding:1.25rem;flex:1;box-shadow:0 2px 8px rgba(0,0,0,0.04);border:1px solid #f1f5f9;">
              <h4 style="margin:0 0 0.35rem;font-size:1rem;font-weight:700;color:#1e293b;">Get Reviewed & Grow</h4>
              <p style="margin:0;color:#64748b;font-size:0.9rem;line-height:1.5;">Receive mentor feedback, earn skill badges, and share your verified portfolio.</p>
            </div>
          </div>
        </div>
      </section>
      <footer style="text-align:center;padding:2rem;color:#94a3b8;font-size:0.85rem;border-top:1px solid #e2e8f0;margin-top:2rem;">
        <p style="margin:0;">© 2026 Project HUNAR — Beyond Marks, Beyond Barriers.</p>
      </footer>
    </div>`;
    return;
  }

  app.innerHTML = `
    <div style="min-height:100vh;background:linear-gradient(135deg,#f0fdf4 0%,#ecfdf5 40%,#f8fafc 100%);font-family:Inter,sans-serif;">
      <nav style="display:flex;align-items:center;justify-content:space-between;padding:1.25rem 2rem;max-width:1200px;margin:0 auto;">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <div style="width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:1.35rem;font-weight:900;color:white;">H</div>
          <span style="font-weight:800;font-size:1.35rem;color:#1e293b;">HUNAR</span>
        </div>
        <div style="display:flex;gap:0.75rem;">
          <button id="nav-signin" style="padding:0.5rem 1.25rem;background:transparent;color:#059669;border:1.5px solid #059669;border-radius:8px;font-size:0.9rem;font-weight:600;cursor:pointer;">Sign In</button>
          <button id="nav-signup" style="padding:0.5rem 1.25rem;background:linear-gradient(135deg,#10b981,#059669);color:white;border:none;border-radius:8px;font-size:0.9rem;font-weight:600;cursor:pointer;">Get Started</button>
        </div>
      </nav>
      <div style="max-width:1200px;margin:0 auto;padding:4rem 2rem;text-align:center;">
        <h1 style="font-size:3rem;font-weight:900;color:#1e293b;margin:0 0 1rem;line-height:1.1;">Beyond Marks.<br><span style="background:linear-gradient(135deg,#10b981,#059669);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Beyond Barriers.</span></h1>
        <p style="font-size:1.2rem;color:#64748b;max-width:600px;margin:0 auto 2.5rem;line-height:1.6;">Discover your real-world abilities through project-based challenges. Build evidence-based portfolios that showcase what you can actually do.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <button id="hero-signup" style="padding:0.85rem 2.5rem;background:linear-gradient(135deg,#10b981,#059669);color:white;border:none;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(16,185,129,0.3);">Start Your Journey</button>
          <button id="hero-signin" style="padding:0.85rem 2.5rem;background:white;color:#059669;border:2px solid #059669;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;">I have an account</button>
        </div>
      </div>
      <div style="max-width:1200px;margin:0 auto;padding:2rem 2rem 4rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;">
        <div style="background:white;border-radius:16px;padding:1.75rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2rem;margin-bottom:0.75rem;">🎯</div>
          <h3 style="font-size:1.1rem;font-weight:700;color:#1e293b;margin:0 0 0.5rem;">Real-World Challenges</h3>
          <p style="color:#64748b;font-size:0.9rem;line-height:1.5;margin:0;">Tackle meaningful projects that build practical skills beyond textbook knowledge.</p>
        </div>
        <div style="background:white;border-radius:16px;padding:1.75rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2rem;margin-bottom:0.75rem;">📋</div>
          <h3 style="font-size:1.1rem;font-weight:700;color:#1e293b;margin:0 0 0.5rem;">Evidence-Based Portfolios</h3>
          <p style="color:#64748b;font-size:0.9rem;line-height:1.5;margin:0;">Showcase your work with verified evidence, not just grades and certificates.</p>
        </div>
        <div style="background:white;border-radius:16px;padding:1.75rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="font-size:2rem;margin-bottom:0.75rem;">👥</div>
          <h3 style="font-size:1.1rem;font-weight:700;color:#1e293b;margin:0 0 0.5rem;">Mentor Reviews</h3>
          <p style="color:#64748b;font-size:0.9rem;line-height:1.5;margin:0;">Get constructive feedback from experienced mentors who verify your skills.</p>
        </div>
      </div>
      <footer style="text-align:center;padding:2rem;color:#94a3b8;font-size:0.85rem;border-top:1px solid #e2e8f0;">
        <p style="margin:0;">© 2026 Project HUNAR — Beyond Marks, Beyond Barriers.</p>
      </footer>
    </div>
  `;

  function showAuthForm(mode) {
    app.innerHTML = `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1.5rem;background:linear-gradient(135deg,#f0fdf4 0%,#ecfdf5 50%,#f8fafc 100%);padding:2rem;">
        <div style="width:72px;height:72px;border-radius:20px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;font-size:2.2rem;font-weight:900;color:white;font-family:Inter,sans-serif;box-shadow:0 8px 32px rgba(16,185,129,0.25);">H</div>
        <div style="text-align:center;">
          <h1 style="font-family:Inter,sans-serif;color:#1e293b;font-size:2rem;font-weight:800;margin:0 0 0.5rem;">Project HUNAR</h1>
          <p style="color:#64748b;font-size:1rem;margin:0 0 1.5rem;">Beyond Marks. Beyond Barriers.</p>
        </div>
        <div style="width:100%;max-width:380px;background:white;border-radius:16px;padding:2rem;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <div id="auth-error" style="color:#dc2626;font-size:0.85rem;margin-bottom:0.75rem;display:none;"></div>
          <div style="margin-bottom:0.75rem;">
            <label style="font-size:0.85rem;color:#64748b;display:block;margin-bottom:0.25rem;">Full Name</label>
            <input id="auth-name" type="text" placeholder="Your name" style="width:100%;padding:0.65rem 0.85rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.95rem;box-sizing:border-box;">
          </div>
          <div style="margin-bottom:0.75rem;">
            <label style="font-size:0.85rem;color:#64748b;display:block;margin-bottom:0.25rem;">Email (.edu only)</label>
            <input id="auth-email" type="email" placeholder="you@university.edu" style="width:100%;padding:0.65rem 0.85rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.95rem;box-sizing:border-box;">
          </div>
          <div style="margin-bottom:1.25rem;">
            <label style="font-size:0.85rem;color:#64748b;display:block;margin-bottom:0.25rem;">Password</label>
            <input id="auth-password" type="password" placeholder="••••••••" style="width:100%;padding:0.65rem 0.85rem;border:1px solid #e2e8f0;border-radius:8px;font-size:0.95rem;box-sizing:border-box;">
          </div>
          <div style="display:flex;gap:0.75rem;">
            <button id="btn-login" style="flex:1;padding:0.75rem;background:linear-gradient(135deg,#10b981,#059669);color:white;border:none;border-radius:8px;font-size:0.95rem;font-weight:700;cursor:pointer;">Sign In</button>
            <button id="btn-register" style="flex:1;padding:0.75rem;background:white;color:#059669;border:2px solid #059669;border-radius:8px;font-size:0.95rem;font-weight:700;cursor:pointer;">Create Account</button>
          </div>
          <p style="text-align:center;margin-top:1rem;font-size:0.85rem;"><a href="#" id="back-home" style="color:#94a3b8;text-decoration:none;">← Back to home</a></p>
        </div>
      </div>
    `;
    const errEl = document.getElementById('auth-error');
    async function doLogin() {
      const email = document.getElementById('auth-email').value;
      const password = document.getElementById('auth-password').value;
      errEl.style.display = 'none';
      try {
        const res = await HUNAR.API.login({ email, password });
        localStorage.setItem('hunar_token', res.token);
        window.location.reload();
      } catch (e) {
        errEl.textContent = e.message || 'Login failed';
        errEl.style.display = 'block';
      }
    }
    async function doRegister() {
      const name = document.getElementById('auth-name').value;
      const email = document.getElementById('auth-email').value;
      const password = document.getElementById('auth-password').value;
      errEl.style.display = 'none';
      try {
        const res = await HUNAR.API.register({ name, email, password, role: 'student' });
        localStorage.setItem('hunar_token', res.token);
        window.location.reload();
      } catch (e) {
        errEl.textContent = e.message || 'Registration failed';
        errEl.style.display = 'block';
      }
    }
    document.getElementById('btn-login').onclick = doLogin;
    document.getElementById('btn-register').onclick = doRegister;
    document.getElementById('auth-password').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') doLogin();
    });
    document.getElementById('back-home').onclick = function(e) {
      e.preventDefault();
      showLandingPage();
    };
  }

  document.getElementById('nav-signin').onclick = function() { showAuthForm('signin'); };
  document.getElementById('nav-signup').onclick = function() { showAuthForm('signup'); };
  document.getElementById('hero-signup').onclick = function() { showAuthForm('signup'); };
  document.getElementById('hero-signin').onclick = function() { showAuthForm('signin'); };
}

document.addEventListener('DOMContentLoaded', initApp);
