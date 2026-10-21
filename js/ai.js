/* ============================================================
   PROJECT HUNAR — AI Simulation Module
   Simulates skill suggestion, challenge recommendations, and
   feedback analysis. Clearly labeled as simulation.
   ============================================================ */

window.HUNAR = window.HUNAR || {};

HUNAR.AI = (function () {
  'use strict';

  // ── Skill Keyword Map ─────────────────────────────────────
  const skillKeywords = {
    'Web Development': ['html', 'css', 'javascript', 'website', 'web', 'dashboard', 'responsive', 'frontend', 'react', 'vue', 'app', 'interface', 'ui'],
    'Data Visualization': ['chart', 'graph', 'data', 'visualization', 'dashboard', 'plot', 'analytics', 'statistics'],
    'Research': ['research', 'study', 'survey', 'analysis', 'investigate', 'literature', 'data collection', 'findings'],
    'Problem Solving': ['solved', 'solution', 'challenge', 'overcome', 'approach', 'debug', 'fix', 'resolve', 'iterate'],
    'Communication': ['presented', 'shared', 'explained', 'wrote', 'document', 'report', 'audience', 'feedback', 'stakeholder'],
    'UI Design': ['design', 'wireframe', 'prototype', 'layout', 'user interface', 'mockup', 'figma', 'sketch', 'responsive'],
    'Programming': ['code', 'programming', 'python', 'javascript', 'algorithm', 'function', 'api', 'database', 'git'],
    'Storytelling': ['story', 'narrative', 'interview', 'documentary', 'writing', 'creative writing', 'blog', 'article'],
    'Photography': ['photo', 'photograph', 'camera', 'image', 'visual', 'documentation', 'shoot'],
    'Empathy': ['empathy', 'understand', 'perspective', 'listen', 'respect', 'dignity', 'consent', 'trust', 'sensitive'],
    'Critical Thinking': ['analyze', 'evaluate', 'compare', 'assess', 'reasoning', 'evidence', 'argument', 'logic'],
    'Teamwork': ['team', 'collaborate', 'together', 'group', 'partner', 'peer', 'collective'],
    'Leadership': ['lead', 'organize', 'coordinate', 'initiative', 'mentor', 'guide', 'manage'],
    'Environmental Awareness': ['environment', 'sustainability', 'waste', 'water', 'pollution', 'green', 'ecology', 'conservation', 'climate'],
    'Business Planning': ['business', 'plan', 'market', 'revenue', 'customer', 'startup', 'entrepreneur', 'product'],
    'Financial Literacy': ['finance', 'budget', 'saving', 'investment', 'money', 'income', 'expense'],
    'Cultural Awareness': ['culture', 'tradition', 'artisan', 'heritage', 'community', 'local', 'indigenous'],
    'Self-Learning': ['learned', 'self-taught', 'online course', 'tutorial', 'practice', 'curiosity', 'explore'],
    'Project Management': ['plan', 'timeline', 'milestone', 'deadline', 'organize', 'schedule', 'scope'],
    'Accessibility Awareness': ['accessibility', 'disability', 'inclusive', 'wheelchair', 'screen reader', 'a11y', 'barrier']
  };

  // ── Skill Suggestion Engine ───────────────────────────────

  function analyzeText(text) {
    if (!text) return [];
    const lower = text.toLowerCase();
    const results = [];

    for (const [skill, keywords] of Object.entries(skillKeywords)) {
      const matchedKeywords = keywords.filter(kw => lower.includes(kw));
      if (matchedKeywords.length > 0) {
        const confidence = Math.min(0.95, 0.4 + (matchedKeywords.length * 0.12));
        results.push({
          skill,
          confidence: Math.round(confidence * 100),
          matchedKeywords,
          source: 'ai-suggested'
        });
      }
    }

    return results.sort((a, b) => b.confidence - a.confidence);
  }

  function suggestSkills(submission) {
    const combinedText = [
      submission.title || '',
      submission.problemStatement || '',
      submission.solution || '',
      submission.process || '',
      submission.challengesFaced || '',
      submission.outcomes || '',
      submission.reflections || '',
      (submission.tools || []).join(' ')
    ].join(' ');

    const suggestions = analyzeText(combinedText);

    return suggestions.map(s => ({
      ...s,
      evidence: generateEvidenceExplanation(s.skill, s.matchedKeywords, submission)
    }));
  }

  function generateEvidenceExplanation(skill, keywords, submission) {
    const explanations = {
      'Web Development': `Your submission mentions web technologies (${keywords.slice(0, 3).join(', ')}), suggesting hands-on web development experience.`,
      'Data Visualization': `Your project involves data presentation through ${keywords.slice(0, 2).join(' and ')}, indicating data visualization skills.`,
      'Research': `Your work demonstrates research ability through ${keywords.slice(0, 2).join(' and ')} activities described in your process.`,
      'Problem Solving': `Your reflection on challenges and solutions shows problem-solving through ${keywords.slice(0, 2).join(' and ')}.`,
      'Communication': `Your project includes evidence of communication skills: ${keywords.slice(0, 2).join(', ')}.`,
      'Empathy': `Your approach shows empathy through ${keywords.slice(0, 2).join(' and ')}, indicating strong interpersonal awareness.`,
      'Environmental Awareness': `Your project demonstrates environmental awareness through engagement with ${keywords.slice(0, 2).join(' and ')}.`,
      'Storytelling': `Your narrative approach using ${keywords.slice(0, 2).join(' and ')} demonstrates storytelling ability.`,
      'Critical Thinking': `Your ${keywords.slice(0, 2).join(' and ')} approach shows analytical and critical thinking skills.`
    };

    return explanations[skill] || `Based on keywords found in your submission (${keywords.slice(0, 3).join(', ')}), this skill appears relevant to your work.`;
  }

  // ── Challenge Recommendations ─────────────────────────────

  function recommendChallenges(userId) {
    const submissions = HUNAR.Data.getSubmissions({ userId });
    const allChallenges = HUNAR.Data.getChallenges();
    const completedIds = new Set(submissions.map(s => s.challengeId));

    // Gather user's demonstrated skills and interests
    const userSkills = new Set();
    const userCategories = new Set();

    submissions.forEach(sub => {
      (sub.skills || []).forEach(s => userSkills.add(s.toLowerCase()));
      const ch = HUNAR.Data.getChallenge(sub.challengeId);
      if (ch) userCategories.add(ch.category);
    });

    const user = HUNAR.Data.getUser(userId);
    if (user && user.interests) {
      user.interests.forEach(i => userCategories.add(i));
    }

    // Score remaining challenges
    const scored = allChallenges
      .filter(ch => !completedIds.has(ch.id))
      .map(ch => {
        let score = 0;
        let reasons = [];

        // Category match
        if (userCategories.has(ch.category)) {
          score += 3;
          reasons.push(`Matches your interest in ${ch.category}`);
        }

        // Skill overlap
        const overlap = ch.skills.filter(s => userSkills.has(s.toLowerCase()));
        if (overlap.length > 0) {
          score += overlap.length * 2;
          reasons.push(`Builds on your existing skills: ${overlap.join(', ')}`);
        }

        // New skills opportunity
        const newSkills = ch.skills.filter(s => !userSkills.has(s.toLowerCase()));
        if (newSkills.length > 0) {
          score += newSkills.length;
          reasons.push(`Opportunity to develop: ${newSkills.slice(0, 3).join(', ')}`);
        }

        return { challenge: ch, score, reasons };
      })
      .sort((a, b) => b.score - a.score);

    return scored.slice(0, 4);
  }

  // ── Feedback Summary ──────────────────────────────────────

  function summarizeFeedback(userId) {
    const submissions = HUNAR.Data.getSubmissions({ userId });
    const strengths = [];
    const improvements = [];
    const ratingTotals = { problemUnderstanding: 0, creativity: 0, implementation: 0, evidenceQuality: 0, reflection: 0 };
    let reviewCount = 0;

    submissions.forEach(sub => {
      const review = HUNAR.Data.getReviewForSubmission(sub.id);
      if (review) {
        reviewCount++;
        (review.strengths || []).forEach(s => strengths.push(s));
        (review.improvements || []).forEach(i => improvements.push(i));
        Object.keys(ratingTotals).forEach(key => {
          ratingTotals[key] += (review.ratings[key] || 0);
        });
      }
    });

    if (reviewCount === 0) {
      return {
        hasData: false,
        message: 'No mentor reviews yet. Submit projects and get feedback to see your analysis here.'
      };
    }

    const avgRatings = {};
    Object.keys(ratingTotals).forEach(key => {
      avgRatings[key] = Math.round((ratingTotals[key] / reviewCount) * 10) / 10;
    });

    // Identify strongest and weakest areas
    const sorted = Object.entries(avgRatings).sort((a, b) => b[1] - a[1]);
    const strongestArea = sorted[0];
    const growthArea = sorted[sorted.length - 1];

    return {
      hasData: true,
      reviewCount,
      avgRatings,
      topStrengths: strengths.slice(0, 4),
      topImprovements: improvements.slice(0, 4),
      strongestArea: { name: formatRatingLabel(strongestArea[0]), score: strongestArea[1] },
      growthArea: { name: formatRatingLabel(growthArea[0]), score: growthArea[1] },
      summary: `Based on ${reviewCount} mentor review${reviewCount > 1 ? 's' : ''}, your strongest area is ${formatRatingLabel(strongestArea[0])} (${strongestArea[1]}/5). Consider focusing on ${formatRatingLabel(growthArea[0])} for further growth.`
    };
  }

  function formatRatingLabel(key) {
    const labels = {
      problemUnderstanding: 'Problem Understanding',
      creativity: 'Creativity & Originality',
      implementation: 'Implementation Quality',
      evidenceQuality: 'Evidence Quality',
      reflection: 'Reflection & Self-Awareness'
    };
    return labels[key] || key;
  }

  // ── Description Improvement Hints ─────────────────────────

  function getWritingHints(text, field) {
    const hints = [];
    if (!text || text.length < 20) {
      hints.push({ type: 'warning', message: `Your ${field} is too short. Aim for at least 50 words to provide meaningful detail.` });
      return hints;
    }

    if (text.length < 100) {
      hints.push({ type: 'info', message: `Consider expanding your ${field}. More detail helps mentors understand your work better.` });
    }

    if (field === 'reflections' && !text.toLowerCase().match(/learn|realize|understand|discover|improve|next time|future/)) {
      hints.push({ type: 'tip', message: 'Strong reflections often mention what you learned, what you would do differently, and what you plan to explore next.' });
    }

    if (field === 'problemStatement' && !text.toLowerCase().match(/because|impact|affect|need|lack|challenge|problem/)) {
      hints.push({ type: 'tip', message: 'Try explaining why this problem matters — who does it affect and what happens if it\'s not solved?' });
    }

    if (field === 'solution' && !text.toLowerCase().match(/built|created|designed|implemented|developed|used/)) {
      hints.push({ type: 'tip', message: 'Describe what you actually built or created. Use concrete action verbs.' });
    }

    if (field === 'outcomes' && !text.toLowerCase().match(/\d+|people|users|shared|feedback|result|impact/)) {
      hints.push({ type: 'tip', message: 'Include specific, measurable outcomes where possible (e.g., "shared with 50 people" or "received feedback from 3 experts").' });
    }

    return hints;
  }

  // ── Public API ────────────────────────────────────────────
  return {
    suggestSkills,
    recommendChallenges,
    summarizeFeedback,
    getWritingHints,
    formatRatingLabel,
    DISCLAIMER: 'AI features in this prototype are simulated using keyword matching. In production, these would use a properly secured AI service with server-side API keys.'
  };
})();
