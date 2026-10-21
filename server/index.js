require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const { initDb } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database
initDb();

// Check if Clerk is configured with real keys
const clerkPk = process.env.CLERK_PUBLISHABLE_KEY || '';
const clerkSk = process.env.CLERK_SECRET_KEY || '';
const clerkConfigured = clerkPk.startsWith('pk_') && clerkPk.length > 20 && 
  !clerkPk.includes('your_key_here') &&
  clerkSk.startsWith('sk_') && clerkSk.length > 20 && 
  !clerkSk.includes('your_key_here');

// Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000', credentials: true }));
app.use(express.json({ limit: '10mb' }));

if (clerkConfigured) {
  const { clerkMiddleware } = require('@clerk/express');
  app.use(clerkMiddleware());
  console.log('Clerk authentication enabled');
} else {
  console.log('Clerk not configured - running in demo mode (no auth required)');
  app.use((req, res, next) => {
    req.auth = { userId: 'student-1' };
    next();
  });
}

// Serve static files
app.use(express.static('.'));

// Config endpoint (for frontend)
app.get('/api/config', (req, res) => {
  res.json({
    clerkPublishableKey: clerkConfigured ? clerkPk : null,
    clerkEnabled: clerkConfigured
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', clerkEnabled: clerkConfigured, timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/challenges', require('./routes/challenges'));
app.use('/api/submissions', require('./routes/submissions'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/achievements', require('./routes/achievements'));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`HUNAR server running on http://localhost:${PORT}`);
});
