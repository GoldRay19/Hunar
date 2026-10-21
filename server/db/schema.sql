-- Project HUNAR Database Schema

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  clerk_id TEXT UNIQUE,
  name TEXT NOT NULL,
  email TEXT,
  role TEXT DEFAULT 'student',
  bio TEXT,
  interests TEXT,
  location TEXT,
  join_date TEXT,
  portfolio_public INTEGER DEFAULT 0,
  avatar_color TEXT,
  initials TEXT,
  password_hash TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS challenges (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  difficulty TEXT,
  objectives TEXT,
  suggested_steps TEXT,
  deliverables TEXT,
  estimated_duration TEXT,
  skills TEXT,
  participant_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active',
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS submissions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  challenge_id TEXT NOT NULL,
  title TEXT NOT NULL,
  problem_statement TEXT,
  solution TEXT,
  process TEXT,
  tools TEXT,
  challenges_faced TEXT,
  outcomes TEXT,
  reflections TEXT,
  evidence TEXT,
  skills TEXT,
  status TEXT DEFAULT 'pending',
  revision_count INTEGER DEFAULT 0,
  submitted_date TEXT,
  updated_date TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (challenge_id) REFERENCES challenges(id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY,
  submission_id TEXT NOT NULL,
  mentor_id TEXT NOT NULL,
  ratings TEXT,
  strengths TEXT,
  improvements TEXT,
  overall_comments TEXT,
  verified_skills TEXT,
  status TEXT DEFAULT 'completed',
  request_revision INTEGER DEFAULT 0,
  review_date TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (submission_id) REFERENCES submissions(id),
  FOREIGN KEY (mentor_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS achievements (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  earned_date TEXT,
  category TEXT,
  type TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS notifications (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  message TEXT,
  type TEXT,
  read INTEGER DEFAULT 0,
  date TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
