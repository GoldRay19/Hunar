const express = require('express');
const router = express.Router();
const { getDb } = require('../db');
const { createToken, verifyToken } = require('../jwt');
const crypto = require('crypto');

// Register
router.post('/register', (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }
    // Only allow .edu email addresses
    if (!email.toLowerCase().endsWith('.edu') && !email.toLowerCase().endsWith('.edu.in') && !email.toLowerCase().endsWith('.ac.in')) {
      return res.status(400).json({ error: 'Only institutional .edu email addresses are allowed. Personal emails (Gmail, etc.) are not permitted.' });
    }
    const db = getDb();
    const existing = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (existing) {
      return res.status(409).json({ error: 'Email already registered' });
    }
    const id = 'user-' + Date.now();
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    const initials = (name || '').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    db.prepare('INSERT INTO users (id, name, email, role, join_date, initials, password_hash) VALUES (?, ?, ?, ?, ?, ?, ?)').run(
      id, name, email, role || 'student', new Date().toISOString().split('T')[0], initials, hash
    );
    const user = db.prepare('SELECT id, name, email, role, initials, bio, location, join_date FROM users WHERE id = ?').get(id);
    const token = createToken({ userId: id, email, role: role || 'student' });
    res.json({ user, token });
  } catch (e) {
    console.error('Register error:', e);
    res.status(500).json({ error: e.message });
  }
});

// Login
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const db = getDb();
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    if (user.password_hash !== hash) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = createToken({ userId: user.id, email: user.email, role: user.role });
    const { password_hash, ...safeUser } = user;
    res.json({ user: safeUser, token });
  } catch (e) {
    console.error('Login error:', e);
    res.status(500).json({ error: e.message });
  }
});

// Get current user (JWT)
router.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  const payload = verifyToken(token);
  if (!payload) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
  const db = getDb();
  const user = db.prepare('SELECT id, name, email, role, initials, bio, location, join_date, portfolio_public, avatar_color FROM users WHERE id = ?').get(payload.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

module.exports = router;