const express = require('express');
const router = express.Router();
const { getDb } = require('../db');
const { requireAuth } = require('@clerk/express');

router.get('/', requireAuth(), (req, res) => {
  const userId = req.auth.userId;
  const db = getDb();
  const user = db.prepare('SELECT id FROM users WHERE clerk_id = ?').get(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const achievements = db.prepare('SELECT * FROM achievements WHERE user_id = ? ORDER BY earned_date DESC').all(user.id);
  res.json(achievements);
});

module.exports = router;
