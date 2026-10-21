// Project HUNAR — API Client
// Replaces localStorage-based data layer with backend API calls

window.HUNAR = window.HUNAR || {};

HUNAR.API = (function () {
  const BASE = '/api';

  async function request(path, options = {}) {
    const token = localStorage.getItem('hunar_token');
    const headers = { 'Content-Type': 'application/json', ...options.headers };
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const res = await fetch(BASE + path, {
      headers,
      ...options
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: res.statusText }));
      throw new Error(err.error || 'Request failed');
    }
    return res.json();
  }

  return {
    // Health
    health: () => request('/health'),

    // Auth
    register: (data) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
    login: (data) => request('/auth/login', { method: 'POST', body: JSON.stringify(data) }),

    // Users
    getCurrentUser: () => request('/users/me'),
    syncUser: (data) => request('/users/sync', { method: 'POST', body: JSON.stringify(data) }),
    updateProfile: (data) => request('/users/profile', { method: 'PUT', body: JSON.stringify(data) }),
    getPublicPortfolio: (userId) => request('/users/portfolio/' + userId),

    // Challenges
    getChallenges: (filters = {}) => {
      const params = new URLSearchParams();
      if (filters.category && filters.category !== 'all') params.set('category', filters.category);
      if (filters.difficulty && filters.difficulty !== 'all') params.set('difficulty', filters.difficulty);
      if (filters.search) params.set('search', filters.search);
      const qs = params.toString();
      return request('/challenges' + (qs ? '?' + qs : ''));
    },
    getChallenge: (id) => request('/challenges/' + id),

    // Submissions
    getSubmissions: () => request('/submissions'),
    getSubmission: (id) => request('/submissions/' + id),
    addSubmission: (data) => request('/submissions', { method: 'POST', body: JSON.stringify(data) }),
    updateSubmission: (id, data) => request('/submissions/' + id, { method: 'PUT', body: JSON.stringify(data) }),

    // Reviews
    getReviewForSubmission: (submissionId) => request('/reviews/submission/' + submissionId).catch(() => null),
    addReview: (data) => request('/reviews', { method: 'POST', body: JSON.stringify(data) }),

    // Achievements
    getAchievements: () => request('/achievements')
  };
})();
