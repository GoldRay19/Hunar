HUNAR.Views.publicPortfolio = function (params) {
  const portfolio = HUNAR.Data.getPublicPortfolio(params.userId);
  if (!portfolio) {
    renderAppShell('<div class="empty-state"><div class="empty-state-icon">X</div><h3>Portfolio not found</h3><p>This portfolio may be private or does not exist.</p></div>', 'Not Found');
    return;
  }
  const u = portfolio.user;
  const s = portfolio.stats;
  const sk = portfolio.skills.filter(function(x){return x.verified;});
  const ach = portfolio.achievements;
  const proj = portfolio.projects;
  let html = '<div class="notice-banner info mb-6"><span>G</span><span>Public portfolio view. Only completed projects, verified skills, and achievements shown.</span></div>';
  html += '<div class="profile-header"><div class="profile-avatar">' + u.initials + '</div><div class="profile-info"><h1>' + HUNAR.Utils.escapeHtml(u.name) + '</h1><p class="bio">' + HUNAR.Utils.escapeHtml(u.bio) + '</p>';
  if (u.location) html += '<p style="color:rgba(255,255,255,0.6);font-size:var(--font-size-sm);">Location: ' + HUNAR.Utils.escapeHtml(u.location) + '</p>';
  html += '<div class="profile-stats"><div class="profile-stat"><div class="profile-stat-value">' + s.projectsSubmitted + '</div><div class="profile-stat-label">Projects</div></div>';
  html += '<div class="profile-stat"><div class="profile-stat-value">' + s.skillsDemonstrated + '</div><div class="profile-stat-label">Skills</div></div>';
  html += '<div class="profile-stat"><div class="profile-stat-value">' + s.verifiedSkills + '</div><div class="profile-stat-label">Verified</div></div>';
  html += '<div class="profile-stat"><div class="profile-stat-value">' + ach.length + '</div><div class="profile-stat-label">Achievements</div></div></div></div></div>';
  html += '<div class="section-card mb-6"><div class="section-card-header">Verified Skills</div><div class="section-card-body">';
  if (sk.length === 0) html += '<p class="text-sm text-muted">No verified skills yet.</p>';
  else html += '<div style="display:flex;flex-wrap:wrap;gap:var(--space-2);">' + sk.map(function(x){return '<span class="skill-tag verified">V ' + HUNAR.Utils.escapeHtml(x.name) + '</span>';}).join('') + '</div>';
  html += '</div></div>';
  html += '<div class="section-card mb-6"><div class="section-card-header">Projects</div><div class="section-card-body">';
  if (proj.length === 0) html += '<p class="text-sm text-muted">No projects yet.</p>';
  else html += '<div style="display:grid;gap:var(--space-4);">' + proj.map(function(p){
    return '<div class="card"><div class="card-body"><div class="flex-gap-3 mb-2"><span class="badge ' + HUNAR.Utils.categoryBadgeClass(p.category) + '">' + p.category + '</span>' + HUNAR.Utils.statusBadge(p.status) + '</div>' +
      '<h3 style="font-size:var(--font-size-base);">' + HUNAR.Utils.escapeHtml(p.title) + '</h3>' +
      '<p class="text-sm text-muted mt-2">' + HUNAR.Utils.escapeHtml(p.problemStatement) + '</p>' +
      (p.review ? '<div class="mt-4" style="padding:var(--space-3);background:var(--green-50);border-radius:var(--radius-md);"><div style="font-size:var(--font-size-xs);font-weight:600;color:var(--green-700);">Mentor Feedback</div><div style="display:flex;gap:var(--space-2);flex-wrap:wrap;margin-top:var(--space-2);">' + (p.review.verifiedSkills || []).map(function(s){return '<span class="skill-tag verified" style="font-size:0.6875rem;">V ' + HUNAR.Utils.escapeHtml(s) + '</span>';}).join('') + '</div></div>' : '') +
      '</div></div>';
  }).join('') + '</div>';
  html += '</div></div>';
  if (ach.length > 0) {
    html += '<div class="section-card mb-6"><div class="section-card-header">Achievements</div><div class="section-card-body"><div class="grid-3">';
    html += ach.map(function(a){return '<div class="card"><div class="card-body text-center"><div style="font-size:2.5rem;margin-bottom:var(--space-2);">' + a.icon + '</div><h3 style="font-size:var(--font-size-sm);">' + HUNAR.Utils.escapeHtml(a.title) + '</h3></div></div>';}).join('');
    html += '</div></div></div>';
  }
  renderAppShell(html, u.name + ' - HUNAR Portfolio', [{ label: 'Portfolio', route: '/public/' + params.userId }]);
};
