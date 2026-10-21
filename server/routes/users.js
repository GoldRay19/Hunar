const express = require('express');
const router = express.Router();
const { getDb } = require('../db');
const { requireAuth } = require('@clerk/express');

// Get current user
router.get('/me', (req, res) => {
  const db = getDb();
  // Try JWT first
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const { verifyToken } = require('../jwt');
    const payload = verifyToken(authHeader.split(' ')[1]);
    if (payload) {
      const user = db.prepare('SELECT id, name, email, role, initials, bio, interests, location, join_date, portfolio_public, avatar_color FROM users WHERE id = ?').get(payload.userId);
      if (user) return res.json(user);
    }
  }
  // Fall back to Clerk
  if (req.auth && req.auth.userId) {
    const user = db.prepare('SELECT * FROM users WHERE clerk_id = ?').get(req.auth.userId);
    if (user) return res.json(user);
  }
  res.status(401).json({ error: 'Not authenticated' });
});

// Create or update user profile (sync with Clerk)
router.post('/sync', requireAuth(), (req, res) => {
  try {
  const userId = req.auth.userId;
  const db = getDb();
  const { name, email, role } = req.body;

  const existing = db.prepare('SELECT * FROM users WHERE clerk_id = ?').get(userId);
  if (existing) {
    db.prepare('UPDATE users SET name = ?, email = ?, role = ?, updated_at = datetime("now") WHERE clerk_id = ?').run(name, email, role || existing.role, userId);
    return res.json({ ...existing, name, email, role: role || existing.role });
  }

  const id = 'user-' + Date.now();
  db.prepare('INSERT INTO users (id, clerk_id, name, email, role, join_date, initials) VALUES (?, ?, ?, ?, ?, ?, ?)').run(
    id, userId, name, email, role || 'student', new Date().toISOString().split('T')[0],
    (name || '').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
  );
  res.json(db.prepare('SELECT * FROM users WHERE id = ?').get(id));
  } catch (e) { console.error('Sync error:', e); res.status(500).json({ error: e.message }); }
});

// Update profile
router.put('/profile', requireAuth(), (req, res) => {
  const userId = req.auth.userId;
  const db = getDb();
  const { name, bio, location, portfolio_public } = req.body;

  db.prepare('UPDATE users SET name = ?, bio = ?, location = ?, portfolio_public = ?, updated_at = datetime("now") WHERE clerk_id = ?').run(
    name, bio, location, portfolio_public ? 1 : 0, userId
  );
  const user = db.prepare('SELECT * FROM users WHERE clerk_id = ?').get(userId);
  res.json(user);
});

// Get public portfolio
router.get('/portfolio/:userId', (req, res) => {
  const db = getDb();
  const user = db.prepare('SELECT id, name, bio, location, initials, avatar_color, join_date FROM users WHERE id = ? AND portfolio_public = 1').get(req.params.userId);
  if (!user) return res.status(404).json({ error: 'Portfolio not found or private' });

  const subs = db.prepare('SELECT * FROM submissions WHERE user_id = ?').all(user.id);
  const reviews = db.prepare('SELECT * FROM reviews WHERE submission_id IN (SELECT id FROM submissions WHERE user_id = ?)').all(user.id);
  const achievements = db.prepare('SELECT * FROM achievements WHERE user_id = ?').all(user.id);

  res.json({ user, submissions: subs, reviews, achievements });
});

module.exports = router;
