const express = require('express');
const router = express.Router();
const { getDb } = require('../db');

router.get('/', (req, res) => {
  const db = getDb();
  const { category, difficulty, search } = req.query;
  let query = 'SELECT * FROM challenges WHERE status = ?';
  const params = ['active'];

  if (category && category !== 'all') {
    query += ' AND LOWER(category) = ?';
    params.push(category.toLowerCase());
  }
  if (difficulty && difficulty !== 'all') {
    query += ' AND LOWER(difficulty) = ?';
    params.push(difficulty.toLowerCase());
  }
  if (search) {
    query += ' AND (LOWER(title) LIKE ? OR LOWER(description) LIKE ?)';
    params.push('%' + search.toLowerCase() + '%', '%' + search.toLowerCase() + '%');
  }

  const challenges = db.prepare(query).all(...params);
  res.json(challenges.map(c => ({
    ...c,
    objectives: JSON.parse(c.objectives || '[]'),
    suggestedSteps: JSON.parse(c.suggested_steps || '[]'),
    deliverables: JSON.parse(c.deliverables || '[]'),
    skills: JSON.parse(c.skills || '[]')
  })));
});

router.get('/:id', (req, res) => {
  const db = getDb();
  const ch = db.prepare('SELECT * FROM challenges WHERE id = ?').get(req.params.id);
  if (!ch) return res.status(404).json({ error: 'Challenge not found' });
  res.json({
    ...ch,
    objectives: JSON.parse(ch.objectives || '[]'),
    suggestedSteps: JSON.parse(ch.suggested_steps || '[]'),
    deliverables: JSON.parse(ch.deliverables || '[]'),
    skills: JSON.parse(ch.skills || '[]')
  });
});

module.exports = router;
