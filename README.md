# Project HUNAR - Beyond Marks, Beyond Barriers

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure Clerk:
   - Create a Clerk application at https://dashboard.clerk.com
   - Copy your publishable and secret keys to `.env`

3. Seed the database:
   ```bash
   npm run seed
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open http://localhost:3000

## Architecture

- **Frontend:** HTML, CSS, vanilla JavaScript (in `js/`, `css/`, `index.html`)
- **Backend:** Express.js with Clerk authentication (in `server/`)
- **Database:** SQLite via better-sqlite3 (in `server/db/`)
- **Auth:** Clerk (JWT-based, server-side verification)

## API Routes

- `GET /api/health` - Health check
- `GET /api/users/me` - Current user profile
- `POST /api/users/sync` - Sync Clerk user to DB
- `PUT /api/users/profile` - Update profile
- `GET /api/users/portfolio/:userId` - Public portfolio
- `GET /api/challenges` - List challenges (with filters)
- `GET /api/challenges/:id` - Challenge detail
- `GET /api/submissions` - User submissions
- `GET /api/submissions/:id` - Submission detail
- `POST /api/submissions` - Create submission
- `PUT /api/submissions/:id` - Update submission
- `GET /api/reviews/submission/:id` - Review for submission
- `POST /api/reviews` - Create review
- `GET /api/achievements` - User achievements

## Environment Variables

See `.env.example` for required configuration.
