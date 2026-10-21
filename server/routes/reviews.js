const express = require('express');
const router = express.Router();
const { getDb } = require('../db');
const { requireAuth } = require('@clerk/express');

router.get('/submission/:submissionId', (req, res) => {
  const db = getDb();
  const review = db.prepare('SELECT * FROM reviews WHERE submission_id = ?').get(req.params.submissionId);
  if (!review) return res.status(404).json({ error: 'Review not found' });
  res.json({
    ...review,
    ratings: JSON.parse(review.ratings || '{}'),
    strengths: JSON.parse(review.strengths || '[]'),
    improvements: JSON.parse(review.improvements || '[]'),
    verified_skills: JSON.parse(review.verified_skills || '[]')
  });
});

router.post('/', requireAuth(), (req, res) => {
  const userId = req.auth.userId;
  const db = getDb();
  const mentor = db.prepare('SELECT id FROM users WHERE clerk_id = ?').get(userId);
  if (!mentor) return res.status(404).json({ error: 'Mentor not found' });

  const { submissionId, ratings, strengths, improvements, overallComments, verifiedSkills, requestRevision } = req.body;
  const id = 'rev-' + Date.now();

  db.prepare(`INSERT INTO reviews (id, submission_id, mentor_id, ratings, strengths, improvements, overall_comments, verified_skills, status, request_revision, review_date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'completed', ?, ?)`).run(
    id, submissionId, mentor.id,
    JSON.stringify(ratings || {}),
    JSON.stringify(strengths || []),
    JSON.stringify(improvements || []),
    overallComments,
    JSON.stringify(verifiedSkills || []),
    requestRevision ? 1 : 0,
    new Date().toISOString().split('T')[0]
  );

  // Update submission status
  const newStatus = requestRevision ? 'revision-requested' : 'reviewed';
  db.prepare('UPDATE submissions SET status = ? WHERE id = ?').run(newStatus, submissionId);

  res.json(db.prepare('SELECT * FROM reviews WHERE id = ?').get(id));
});

module.exports = router;
