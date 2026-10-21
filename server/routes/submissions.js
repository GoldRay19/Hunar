const express = require('express');
const router = express.Router();
const { getDb } = require('../db');
const { requireAuth } = require('@clerk/express');

router.get('/', requireAuth(), (req, res) => {
  const userId = req.auth.userId;
  const db = getDb();
  const user = db.prepare('SELECT id FROM users WHERE clerk_id = ?').get(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const subs = db.prepare('SELECT * FROM submissions WHERE user_id = ? ORDER BY submitted_date DESC').all(user.id);
  res.json(subs.map(s => ({
    ...s,
    tools: JSON.parse(s.tools || '[]'),
    evidence: JSON.parse(s.evidence || '[]'),
    skills: JSON.parse(s.skills || '[]')
  })));
});

router.get('/:id', (req, res) => {
  const db = getDb();
  const sub = db.prepare('SELECT * FROM submissions WHERE id = ?').get(req.params.id);
  if (!sub) return res.status(404).json({ error: 'Submission not found' });
  res.json({
    ...sub,
    tools: JSON.parse(sub.tools || '[]'),
    evidence: JSON.parse(sub.evidence || '[]'),
    skills: JSON.parse(sub.skills || '[]')
  });
});

router.post('/', requireAuth(), (req, res) => {
  const userId = req.auth.userId;
  const db = getDb();
  const user = db.prepare('SELECT id FROM users WHERE clerk_id = ?').get(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { challengeId, title, problemStatement, solution, process, tools, challengesFaced, outcomes, reflections, evidence, skills } = req.body;
  const id = 'sub-' + Date.now();

  db.prepare(`INSERT INTO submissions (id, user_id, challenge_id, title, problem_statement, solution, process, tools, challenges_faced, outcomes, reflections, evidence, skills, status, submitted_date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?)`).run(
    id, user.id, challengeId, title, problemStatement, solution, process,
    JSON.stringify(tools || []), challengesFaced, outcomes, reflections,
    JSON.stringify(evidence || []), JSON.stringify(skills || []),
    new Date().toISOString().split('T')[0]
  );

  res.json(db.prepare('SELECT * FROM submissions WHERE id = ?').get(id));
});

router.put('/:id', requireAuth(), (req, res) => {
  const userId = req.auth.userId;
  const db = getDb();
  const user = db.prepare('SELECT id FROM users WHERE clerk_id = ?').get(userId);
  const sub = db.prepare('SELECT * FROM submissions WHERE id = ? AND user_id = ?').get(req.params.id, user.id);
  if (!sub) return res.status(404).json({ error: 'Submission not found' });

  const { title, problemStatement, solution, process, tools, challengesFaced, outcomes, reflections } = req.body;
  db.prepare(`UPDATE submissions SET title = ?, problem_statement = ?, solution = ?, process = ?, tools = ?, challenges_faced = ?, outcomes = ?, reflections = ?, status = 'pending', updated_date = ? WHERE id = ?`).run(
    title, problemStatement, solution, process,
    JSON.stringify(tools || []), challengesFaced, outcomes, reflections,
    new Date().toISOString().split('T')[0], req.params.id
  );

  res.json(db.prepare('SELECT * FROM submissions WHERE id = ?').get(req.params.id));
});

module.exports = router;
