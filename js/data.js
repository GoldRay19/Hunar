/* ============================================================
   PROJECT HUNAR — Data Layer
   Sample data + localStorage persistence
   ============================================================ */

window.HUNAR = window.HUNAR || {};

HUNAR.Data = (function () {
  'use strict';

  const STORAGE_KEY = 'hunar_app_data';
  const DATA_VERSION = '1.0.0';

  // ── Sample Users ──────────────────────────────────────────
  const sampleUsers = [];

  // ── Sample Challenges ─────────────────────────────────────
  const sampleChallenges = [];

  // ── Sample Submissions ────────────────────────────────────
  const sampleSubmissions = [
    {
      id: 'sub-1',
      userId: 'student-1',
      challengeId: 'ch-1',
      title: 'Jaipur Water Watch — A Community Water Quality Dashboard',
      problemStatement: 'In many areas of Jaipur, residents don\'t have easy access to information about their local water quality. Government data exists but is buried in PDF reports that are hard to find and understand. I wanted to create a simple dashboard that makes this information visual and accessible.',
      solution: 'I built a responsive web dashboard that displays water quality data for different zones in Jaipur. It uses color-coded indicators to show whether water quality is safe, moderate, or concerning based on WHO guidelines. Users can click on different zones to see detailed readings.',
      process: 'I started by researching water quality parameters from the Central Pollution Control Board website. I then created sample data based on typical readings for Jaipur. I sketched wireframes on paper first, then built the interface using HTML, CSS, and JavaScript. For the charts, I used Chart.js library. I tested on three different phones to make sure it worked on mobile.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'VS Code', 'Chrome DevTools'],
      challengesFaced: 'The hardest part was understanding what the water quality parameters actually mean and how to make them understandable for non-technical people. I also struggled with making the charts look good on small screens. I had to redesign the layout twice.',
      outcomes: 'The dashboard shows data for 5 zones with pH, dissolved oxygen, and turbidity readings. It includes a trend chart showing changes over 6 months. I shared it with my college environmental club and they want to use it for their awareness campaign.',
      reflections: 'This project taught me that data visualization is as much about understanding the domain as it is about coding. I learned to think about who will actually use what I build and what questions they need answered. I want to learn more about connecting this to real-time sensor data in the future.',
      evidence: [
        { type: 'link', url: 'https://github.com/priya-demo/jaipur-water-watch', label: 'GitHub Repository' },
        { type: 'link', url: '#demo', label: 'Live Demo (simulated)' }
      ],
      status: 'reviewed',
      submittedDate: '2026-08-20',
      skills: ['Web Development', 'Data Visualization', 'Research', 'Environmental Awareness', 'UI Design']
    },
    {
      id: 'sub-2',
      userId: 'student-1',
      challengeId: 'ch-5',
      title: 'Hands of Tradition — The Story of Laxmi Devi, Block Printer',
      problemStatement: 'Traditional block printing is a dying art in Sanganer, Jaipur. Many artisans struggle to find customers and their stories go untold. I wanted to document one artisan\'s story to raise awareness about this beautiful craft and the challenges these artisans face.',
      solution: 'I created a multimedia story featuring Laxmi Devi, a 62-year-old block printer who learned the craft from her mother-in-law. The story combines her personal narrative with photographs of her workshop, her tools, and her finished products. It highlights both the beauty of the craft and the economic challenges she faces.',
      process: 'I visited Laxmi Devi\'s workshop three times over two weeks. First visit was to introduce myself, explain the project, and get her consent. Second visit was for the main interview and photography. Third visit was to show her the draft and get her feedback and approval. I wrote the narrative in both English and Hindi.',
      tools: ['Smartphone camera', 'Google Docs', 'Canva'],
      challengesFaced: 'Building trust was the biggest challenge. Laxmi Devi was initially hesitant because she had been exploited before by someone who promised to help but never delivered. I had to be patient and genuine. Language was also a challenge as she speaks primarily Rajasthani.',
      outcomes: 'The completed story has been shared with 150+ people through social media and my college newspaper. Two local craft organizations have reached out to feature her work. Laxmi Devi told me she felt seen and respected through the process.',
      reflections: 'This experience changed how I think about storytelling. It\'s not about me, it\'s about the person whose story I\'m telling. I learned the importance of consent, respect, and following through on commitments. I also realized how much traditional knowledge we\'re at risk of losing.',
      evidence: [
        { type: 'link', url: '#story', label: 'Published Story (simulated)' }
      ],
      status: 'reviewed',
      submittedDate: '2026-09-05',
      skills: ['Storytelling', 'Photography', 'Interviewing', 'Empathy', 'Writing', 'Cultural Awareness']
    },
    {
      id: 'sub-3',
      userId: 'student-2',
      challengeId: 'ch-3',
      title: 'Clean Campus Initiative — Waste Mapping of MS University',
      problemStatement: 'Our university campus has a growing waste management problem. Bins overflow regularly, certain areas are consistently littered, and there\'s no systematic understanding of waste patterns. Without data, it\'s hard to propose effective solutions to the administration.',
      solution: 'I conducted a comprehensive waste audit of the main campus, covering 15 buildings and all outdoor common areas. I created a detailed map showing waste hotspots, bin locations, and categorized waste types. I then presented findings with specific recommendations to the campus environment committee.',
      process: 'Over 5 days, I systematically walked through every building and outdoor area during different times of day. I used a checklist I created based on waste management research. I photographed over 60 locations and categorized each by waste type and severity. I used Google Maps to plot the data.',
      tools: ['Smartphone', 'Google Maps', 'Google Sheets', 'Canva', 'PowerPoint'],
      challengesFaced: 'Some people were suspicious of me photographing waste and I had to explain my project multiple times. I also underestimated how long the fieldwork would take — it was exhausting walking the entire campus in the heat. Categorizing mixed waste was harder than I expected.',
      outcomes: 'The audit identified 8 critical waste hotspots and found that 40% of bins were inadequately placed. The campus environment committee accepted 3 of my 5 recommendations and has committed to adding 12 new bins. I was invited to present at the monthly faculty meeting.',
      reflections: 'This project taught me that real-world data collection is messy and time-consuming but incredibly valuable. I understood why waste management is a systems problem, not just a behavior problem. I want to follow up in 3 months to see if the changes make a difference.',
      evidence: [
        { type: 'link', url: '#map', label: 'Waste Map (simulated)' },
        { type: 'link', url: '#presentation', label: 'Committee Presentation (simulated)' }
      ],
      status: 'pending',
      submittedDate: '2026-10-01',
      skills: ['Field Research', 'Data Collection', 'Environmental Science', 'Mapping', 'Communication', 'Problem Solving']
    }
  ];

  // ── Sample Reviews ────────────────────────────────────────
  const sampleReviews = [
    {
      id: 'rev-1',
      submissionId: 'sub-1',
      mentorId: 'mentor-1',
      ratings: {
        problemUnderstanding: 4,
        creativity: 4,
        implementation: 3,
        evidenceQuality: 4,
        reflection: 5
      },
      strengths: [
        'Excellent understanding of the real-world problem and its local context',
        'Good research on water quality parameters',
        'Thoughtful mobile-responsive design',
        'Strong reflection showing genuine learning'
      ],
      improvements: [
        'Consider adding data source attribution and methodology notes',
        'The trend analysis could include seasonal patterns',
        'Try connecting with the actual CPCB data API for real data',
        'Add accessibility features like alt text and keyboard navigation'
      ],
      overallComments: 'This is a promising project that shows real initiative and problem-solving ability. Priya has demonstrated both technical skills and environmental awareness. The dashboard is functional and visually clean. With real data integration and improved accessibility, this could become a genuinely useful community tool.',
      status: 'completed',
      reviewDate: '2026-08-28',
      verifiedSkills: ['Web Development', 'Data Visualization', 'Research', 'Environmental Awareness']
    },
    {
      id: 'rev-2',
      submissionId: 'sub-2',
      mentorId: 'mentor-2',
      ratings: {
        problemUnderstanding: 5,
        creativity: 5,
        implementation: 4,
        evidenceQuality: 5,
        reflection: 5
      },
      strengths: [
        'Exceptional sensitivity and respect for the artisan\'s perspective',
        'Thorough three-visit approach that built genuine trust',
        'Bilingual presentation shows cultural awareness',
        'Clear evidence of real-world impact through shares and organizational interest'
      ],
      improvements: [
        'Could include more technical details about the block printing process',
        'Consider creating a short video to complement the written story',
        'Explore sustainable business models that could help artisans like Laxmi Devi',
        'Think about scalability — could this become a series documenting multiple artisans?'
      ],
      overallComments: 'One of the most thoughtful and impactful projects I\'ve reviewed. Priya demonstrated exceptional empathy, persistence, and ethical awareness. The fact that the artisan felt respected is perhaps the most important outcome. This kind of work — centering the voice of the subject — is exactly what responsible storytelling looks like.',
      status: 'completed',
      reviewDate: '2026-09-15',
      verifiedSkills: ['Storytelling', 'Photography', 'Interviewing', 'Empathy', 'Writing', 'Cultural Awareness']
    }
  ];

  // ── Sample Achievements ───────────────────────────────────
  const sampleAchievements = [
    {
      id: 'ach-1',
      userId: 'student-1',
      title: 'First Challenge Completed',
      description: 'Completed your first challenge and received mentor feedback',
      icon: '🌱',
      earnedDate: '2026-08-28',
      category: 'milestone'
    },
    {
      id: 'ach-2',
      userId: 'student-1',
      title: 'Storyteller',
      description: 'Completed a challenge in the Creativity category',
      icon: '✍️',
      earnedDate: '2026-09-15',
      category: 'category'
    },
    {
      id: 'ach-3',
      userId: 'student-1',
      title: 'Community Impact',
      description: 'Your project reached over 100 people',
      icon: '🌍',
      earnedDate: '2026-09-20',
      category: 'impact'
    },
    {
      id: 'ach-4',
      userId: 'student-1',
      title: 'Five-Star Reflection',
      description: 'Received a 5-star rating for project reflection',
      icon: '⭐',
      earnedDate: '2026-09-15',
      category: 'quality'
    }
  ];

  // ── Data Management ───────────────────────────────────────

  function getDefaultData() {
    return {
      version: DATA_VERSION,
      currentUserId: null,
      currentRole: 'student',
      users: [...sampleUsers],
      challenges: [...sampleChallenges],
      submissions: [...sampleSubmissions],
      reviews: [...sampleReviews],
      achievements: [...sampleAchievements],
      notifications: []
    };
  }

  let appData = null;

  function loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.version === DATA_VERSION) {
          appData = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn('HUNAR: Failed to load data from localStorage, using defaults.', e);
    }
    appData = getDefaultData();
    saveData();
  }

  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
      console.warn('HUNAR: Failed to save data to localStorage.', e);
    }
  }

  function resetData() {
    appData = getDefaultData();
    saveData();
  }

  // ── Accessors ─────────────────────────────────────────────

  function getCurrentUser() {
    return appData.users.find(u => u.id === appData.currentUserId) || null;
  }

  function getCurrentRole() {
    return appData.currentRole;
  }

  function switchRole(role) {
    appData.currentRole = role;
    // Keep the same user ID — only the role view changes
    saveData();
  }

  function setCurrentUser(userData) {
    // userData: { id, name, email, role, initials, avatarColor, bio, location, joinDate }
    const existing = appData.users.find(u => u.id === userData.id);
    if (existing) {
      Object.assign(existing, userData);
    } else {
      appData.users.push(userData);
    }
    appData.currentUserId = userData.id;
    appData.currentRole = userData.role || 'student';
    saveData();
  }

  function getUser(id) {
    return appData.users.find(u => u.id === id);
  }

  function setChallenges(challenges) {
    appData.challenges = challenges.map(c => ({
      id: c.id,
      title: c.title,
      description: c.description,
      category: c.category,
      difficulty: c.difficulty,
      objectives: typeof c.objectives === 'string' ? JSON.parse(c.objectives) : (c.objectives || []),
      suggestedSteps: typeof c.suggested_steps === 'string' ? JSON.parse(c.suggested_steps) : (c.suggested_steps || []),
      deliverables: typeof c.deliverables === 'string' ? JSON.parse(c.deliverables) : (c.deliverables || []),
      estimatedDuration: c.estimated_duration,
      skills: typeof c.skills === 'string' ? JSON.parse(c.skills) : (c.skills || []),
      participantCount: c.participant_count,
      status: c.status
    }));
    saveData();
  }

  function getChallenges(filters = {}) {
    let results = [...appData.challenges];
    if (filters.category && filters.category !== 'all') {
      results = results.filter(c => c.category.toLowerCase() === filters.category.toLowerCase());
    }
    if (filters.difficulty && filters.difficulty !== 'all') {
      results = results.filter(c => c.difficulty.toLowerCase() === filters.difficulty.toLowerCase());
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      results = results.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.skills.some(s => s.toLowerCase().includes(q))
      );
    }
    return results;
  }

  function getChallenge(id) {
    return appData.challenges.find(c => c.id === id);
  }

  function getSubmissions(filters = {}) {
    let results = [...appData.submissions];
    if (filters.userId) {
      results = results.filter(s => s.userId === filters.userId);
    }
    if (filters.status) {
      results = results.filter(s => s.status === filters.status);
    }
    if (filters.challengeId) {
      results = results.filter(s => s.challengeId === filters.challengeId);
    }
    return results.sort((a, b) => new Date(b.submittedDate) - new Date(a.submittedDate));
  }

  function getSubmission(id) {
    return appData.submissions.find(s => s.id === id);
  }

  function addSubmission(submission) {
    submission.id = 'sub-' + Date.now();
    submission.userId = appData.currentUserId;
    submission.status = 'pending';
    submission.submittedDate = new Date().toISOString().split('T')[0];
    submission.revisionCount = 0;
    appData.submissions.push(submission);
    saveData();
    return submission;
  }

  function updateSubmission(id, updates) {
    const sub = appData.submissions.find(s => s.id === id);
    if (!sub) return null;
    Object.assign(sub, updates);
    sub.updatedDate = new Date().toISOString().split('T')[0];
    saveData();
    return sub;
  }

  function getReviews(filters = {}) {
    let results = [...appData.reviews];
    if (filters.submissionId) {
      results = results.filter(r => r.submissionId === filters.submissionId);
    }
    if (filters.mentorId) {
      results = results.filter(r => r.mentorId === filters.mentorId);
    }
    return results;
  }

  function getReview(id) {
    return appData.reviews.find(r => r.id === id);
  }

  function getReviewForSubmission(submissionId) {
    return appData.reviews.find(r => r.submissionId === submissionId);
  }

  function addReview(review) {
    review.id = 'rev-' + Date.now();
    review.mentorId = appData.currentUserId;
    review.status = 'completed';
    review.reviewDate = new Date().toISOString().split('T')[0];
    appData.reviews.push(review);

    // Update submission status
    const sub = appData.submissions.find(s => s.id === review.submissionId);
    if (sub) {
      sub.status = 'reviewed';
      if (review.requestRevision) {
        sub.status = 'revision-requested';
        sub.revisionCount = (sub.revisionCount || 0) + 1;
      }
    }

    saveData();
    return review;
  }

  function updateReview(id, updates) {
    const review = appData.reviews.find(r => r.id === id);
    if (!review) return null;
    Object.assign(review, updates);
    saveData();
    return review;
  }

  function getAchievements(userId) {
    return appData.achievements.filter(a => a.userId === (userId || appData.currentUserId));
  }

  function getSkillsForUser(userId) {
    const uid = userId || appData.currentUserId;
    const userSubmissions = getSubmissions({ userId: uid });
    const skillMap = {};

    userSubmissions.forEach(sub => {
      const review = getReviewForSubmission(sub.id);
      (sub.skills || []).forEach(skill => {
        if (!skillMap[skill]) {
          skillMap[skill] = { name: skill, sources: [], verified: false, count: 0 };
        }
        skillMap[skill].count++;
        skillMap[skill].sources.push(sub.title);
        if (review && review.verifiedSkills && review.verifiedSkills.includes(skill)) {
          skillMap[skill].verified = true;
        }
      });
    });

    return Object.values(skillMap);
  }

  function getNotifications(userId) {
    return appData.notifications.filter(n => n.userId === (userId || appData.currentUserId));
  }

  function markNotificationRead(id) {
    const notif = appData.notifications.find(n => n.id === id);
    if (notif) {
      notif.read = true;
      saveData();
    }
  }

  function getUnreadCount() {
    return appData.notifications.filter(
      n => n.userId === appData.currentUserId && !n.read
    ).length;
  }

  function updateUserProfile(updates) {
    const user = getCurrentUser();
    Object.assign(user, updates);
    saveData();
  }

  // ── Achievement Awarding ───────────────────────────────────

  function checkAndAwardAchievements(userId) {
    const uid = userId || appData.currentUserId;
    const subs = getSubmissions({ userId: uid });
    const reviews = getReviews({ mentorId: undefined }).filter(r => {
      const sub = getSubmission(r.submissionId);
      return sub && sub.userId === uid;
    });
    const existing = getAchievements(uid).map(a => a.type);
    const newAchievements = [];

    const addIf = (type, title, description, icon, category) => {
      if (!existing.includes(type)) {
        newAchievements.push({
          id: 'ach-' + Date.now() + '-' + type,
          userId: uid,
          title,
          description,
          icon,
          earnedDate: new Date().toISOString().split('T')[0],
          category
        });
      }
    };

    // First submission reviewed
    const reviewedSubs = subs.filter(s => s.status === 'reviewed' || s.status === 'revision-requested');
    if (reviewedSubs.length > 0) {
      addIf('first-review', 'First Feedback Received', 'You received your first mentor review', '💬', 'milestone');
    }

    // First challenge completed
    if (subs.length >= 1) {
      addIf('first-challenge', 'First Challenge Completed', 'You submitted your first project', '🌱', 'milestone');
    }

    // Five projects submitted
    if (subs.length >= 5) {
      addIf('five-projects', 'Five Projects Strong', 'You have submitted 5 projects', '💪', 'milestone');
    }

    // Ten projects
    if (subs.length >= 10) {
      addIf('ten-projects', 'HUNAR Veteran', 'You have submitted 10 projects', '🏆', 'milestone');
    }

    // Category completions
    const categories = new Set();
    subs.forEach(s => {
      const ch = getChallenge(s.challengeId);
      if (ch) categories.add(ch.category);
    });
    if (categories.has('Technology')) addIf('category-tech', 'Tech Explorer', 'Completed a challenge in Technology', '💻', 'category');
    if (categories.has('Sustainability')) addIf('category-green', 'Green Champion', 'Completed a challenge in Sustainability', '🌿', 'category');
    if (categories.has('Education')) addIf('category-edu', 'Education Advocate', 'Completed a challenge in Education', '📚', 'category');
    if (categories.has('Community Development')) addIf('category-community', 'Community Builder', 'Completed a challenge in Community Development', '🏡', 'category');
    if (categories.has('Creativity')) addIf('category-creative', 'Creative Mind', 'Completed a challenge in Creativity', '🎨', 'category');
    if (categories.has('Entrepreneurship')) addIf('category-entrepreneur', 'Future Founder', 'Completed a challenge in Entrepreneurship', '🚀', 'category');

    // All six categories
    if (categories.size >= 6) {
      addIf('all-categories', 'Renaissance Student', 'Completed challenges in all 6 categories', '🌈', 'category');
    }

    // High reflection rating (5 stars)
    reviews.forEach(r => {
      if (r.ratings.reflection === 5) {
        addIf('five-star-reflection-' + r.id, 'Five-Star Reflection', 'Received a 5-star rating for project reflection', '⭐', 'quality');
      }
    });

    // Verified skills count
    const skills = getSkillsForUser(uid);
    const verifiedCount = skills.filter(s => s.verified).length;
    if (verifiedCount >= 3) {
      addIf('three-verified', 'Skill Verifier', 'You have 3 or more mentor-verified skills', '✅', 'skill');
    }
    if (verifiedCount >= 5) {
      addIf('five-verified', 'Truly Skilled', 'You have 5 or more mentor-verified skills', '🏅', 'skill');
    }

    // Impact: project reached 100+ people (check outcomes for keywords)
    subs.forEach(s => {
      const outcomeText = (s.outcomes || '').toLowerCase();
      if (outcomeText.match(/100\+|100 people|reached \d+|shared with \d+/)) {
        addIf('impact-reaching', 'Community Impact', 'Your project reached over 100 people', '🌍', 'impact');
      }
    });

    // Save new achievements
    if (newAchievements.length > 0) {
      appData.achievements.push(...newAchievements);
      saveData();
    }

    return newAchievements;
  }

  // ── Public Portfolio ───────────────────────────────────────

  function getPublicPortfolio(userId) {
    const uid = userId || appData.currentUserId;
    const user = getUser(uid);
    if (!user) return null;

    const subs = getSubmissions({ userId: uid });
    const reviews = getReviews({ mentorId: undefined }).filter(r => {
      const sub = getSubmission(r.submissionId);
      return sub && sub.userId === uid;
    });
    const skills = getSkillsForUser(uid);
    const achievements = getAchievements(uid);
    const stats = getStudentStats(uid);

    return {
      user: {
        name: user.name,
        bio: user.bio,
        location: user.location,
        initials: user.initials,
        avatarColor: user.avatarColor,
        joinDate: user.joinDate
      },
      stats,
      skills,
      achievements,
      projects: subs.map(sub => {
        const ch = getChallenge(sub.challengeId);
        const review = reviews.find(r => r.submissionId === sub.id);
        return {
          id: sub.id,
          title: sub.title,
          category: ch ? ch.category : 'Unknown',
          status: sub.status,
          submittedDate: sub.submittedDate,
          problemStatement: sub.problemStatement,
          solution: sub.solution,
          process: sub.process,
          tools: sub.tools,
          outcomes: sub.outcomes,
          reflections: sub.reflections,
          evidence: sub.evidence,
          review: review ? {
            ratings: review.ratings,
            strengths: review.strengths,
            improvements: review.improvements,
            overallComments: review.overallComments,
            verifiedSkills: review.verifiedSkills,
            reviewDate: review.reviewDate,
            mentor: getUser(review.mentorId) ? getUser(review.mentorId).name : 'Mentor'
          } : null
        };
      })
    };
  }

  // ── Statistics ────────────────────────────────────────────

  function getStudentStats(userId) {
    const uid = userId || appData.currentUserId;
    const subs = getSubmissions({ userId: uid });
    const reviewed = subs.filter(s => s.status === 'reviewed');
    const skills = getSkillsForUser(uid);
    const achievements = getAchievements(uid);

    return {
      challengesExplored: subs.length,
      projectsSubmitted: subs.length,
      projectsReviewed: reviewed.length,
      pendingReviews: subs.filter(s => s.status === 'pending').length,
      skillsDemonstrated: skills.length,
      verifiedSkills: skills.filter(s => s.verified).length,
      achievements: achievements.length,
      categories: [...new Set(subs.map(s => {
        const ch = getChallenge(s.challengeId);
        return ch ? ch.category : 'Unknown';
      }))]
    };
  }

  function getMentorStats() {
    const reviews = getReviews({ mentorId: appData.currentUserId });
    const pendingSubs = appData.submissions.filter(s => s.status === 'pending');
    return {
      totalReviews: reviews.length,
      pendingReviews: pendingSubs.length,
      thisMonth: reviews.filter(r => {
        const d = new Date(r.reviewDate);
        const now = new Date();
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      }).length,
      studentsHelped: [...new Set(reviews.map(r => {
        const sub = getSubmission(r.submissionId);
        return sub ? sub.userId : null;
      }).filter(Boolean))].length
    };
  }

  // ── Initialize ────────────────────────────────────────────
  loadData();

  return {
    getCurrentUser,
    getCurrentRole,
    switchRole,
    setCurrentUser,
    getUser,
    getChallenges,
    setChallenges,
    getChallenge,
    getSubmissions,
    getSubmission,
    addSubmission,
    updateSubmission,
    getReviews,
    getReview,
    getReviewForSubmission,
    addReview,
    updateReview,
    getAchievements,
    getSkillsForUser,
    getNotifications,
    markNotificationRead,
    getUnreadCount,
    updateUserProfile,
    getStudentStats,
    getMentorStats,
    resetData,
    saveData,
    checkAndAwardAchievements,
    getPublicPortfolio
  };
})();
