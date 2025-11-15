# Backend Setup Guide

## Prerequisites

- Node.js 20+
- PostgreSQL 15+
- pnpm (or npm)

## Installation Steps

### 1. Install Dependencies

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install project dependencies
pnpm install

# Or with npm
npm install
```

### 2. Database Setup

**Option A: Local PostgreSQL**

```bash
# Install PostgreSQL (macOS with Homebrew)
brew install postgresql@15
brew services start postgresql@15

# Create database
createdb ai_academy

# Or using psql
psql postgres
CREATE DATABASE ai_academy;
\q
```

**Option B: Use a cloud database** (Supabase, Neon, AWS RDS)

Get your connection string and update `.env` file.

### 3. Environment Variables

Update the `.env` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://localhost:5432/ai_academy

# Server
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# JWT Secret (change this in production!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Optional: External Services (for future features)
OPENAI_API_KEY=your-openai-key
STRIPE_SECRET_KEY=your-stripe-key
```

### 4. Run Database Migrations

```bash
# Generate migration files
pnpm drizzle-kit generate

# Push schema to database
pnpm drizzle-kit push

# Or migrate
pnpm drizzle-kit migrate
```

### 5. Start Development Server

```bash
# Start both frontend and backend
pnpm dev

# Backend will run on http://localhost:3000
# Frontend will run on http://localhost:5173
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `GET /api/auth/me` - Get current user

### Student APIs
- `GET /api/students/dashboard` - Get student dashboard
- `GET /api/students/projects` - Get student projects
- `POST /api/students/projects/:id/submit` - Submit project
- `GET /api/students/progress` - Get progress tracking
- `GET /api/students/achievements` - Get achievements
- `GET /api/students/rewards` - Get rewards

### Parent APIs
- `GET /api/parents/dashboard` - Get parent dashboard
- `GET /api/parents/children` - Get all children
- `GET /api/parents/progress/:studentId` - Get child progress

## Testing the Backend

### Using curl

```bash
# Health check
curl http://localhost:3000/api/ping

# Register user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@test.com",
    "password": "Test1234!",
    "firstName": "Test",
    "lastName": "Student",
    "role": "student",
    "dateOfBirth": "2008-01-01"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@test.com",
    "password": "Test1234!"
  }'

# Use the returned accessToken for authenticated requests
curl http://localhost:3000/api/students/dashboard \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Using the Frontend

The frontend is already configured to use the API client at `client/lib/api-client.ts`.

Example usage in a component:

```typescript
import apiClient from '@/lib/api-client';

// Login
const response = await apiClient.login('student@test.com', 'Test1234!');

// Get dashboard data
const dashboard = await apiClient.getStudentDashboard();
```

## Database Schema

The database includes 20+ tables:

- **Users & Profiles**: users, student_profiles, parent_profiles, teacher_profiles
- **Programs**: bootcamps, cohorts, enrollments
- **Content**: lessons, projects, project_submissions
- **Classes**: class_sessions, attendance
- **Gamification**: achievements, student_achievements, rewards
- **Communication**: ai_conversations, notifications, messages
- **Analytics**: activity_logs, progress_snapshots

## Next Steps

### Phase 1 - Core Features (Completed ✅)
- ✅ Database schema
- ✅ Authentication system
- ✅ Student API endpoints
- ✅ Parent API endpoints
- ✅ Frontend API client

### Phase 2 - Additional Features (TODO)
- [ ] Teacher/Mentor API endpoints
- [ ] Admin API endpoints
- [ ] WebSocket server for real-time features
- [ ] File upload to S3
- [ ] AI Assistant integration (OpenAI/Claude)
- [ ] Stripe payment integration
- [ ] Email notifications (SendGrid)
- [ ] Automated rewards system

### Phase 3 - Advanced Features (TODO)
- [ ] Zoom API integration for live classes
- [ ] Greenlight API for teen banking
- [ ] Video generation pipeline
- [ ] Advanced analytics
- [ ] Progress snapshots
- [ ] Achievement automation
- [ ] Background jobs & cron tasks

## Troubleshooting

### Database Connection Issues

```bash
# Check if PostgreSQL is running
pg_isready

# Check database exists
psql -l | grep ai_academy

# Test connection
psql postgresql://localhost:5432/ai_academy
```

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### TypeScript Errors

```bash
# Run type checking
pnpm typecheck

# Or
npm run typecheck
```

## Managed Hosting Options (For Small Teams)

### Recommended Stack: Supabase + Render

**Best for**: Small teams, MVP/early-stage, minimal DevOps overhead

#### Database: Supabase (PostgreSQL)

**Free Tier Includes**:
- 500MB database storage
- 2GB bandwidth
- Unlimited API requests
- Built-in auth (optional, you already have JWT)
- Real-time subscriptions
- Auto-generated REST API
- Storage for file uploads

**Pricing**:
- **Free**: $0/month (great for MVP)
- **Pro**: $25/month (8GB database, 50GB bandwidth)
- **Team**: $599/month (when you scale)

**Setup Steps**:
1. Create account at https://supabase.com
2. Create new project → Get your connection string
3. Update `.env`: `DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres`
4. Run migrations: `pnpm drizzle-kit push`

**Pros**:
- ✅ PostgreSQL (matches your schema)
- ✅ Built-in backups and point-in-time recovery
- ✅ Easy to scale when needed
- ✅ Great developer experience
- ✅ Built-in file storage (can replace S3)

**Cons**:
- ⚠️ Free tier has 500MB limit (may need upgrade as you grow)
- ⚠️ Auto-pauses after 1 week of inactivity on free tier

#### Server Hosting: Render

**Free Tier Includes**:
- 750 hours/month (enough for 1 service 24/7)
- Auto-deploy from GitHub
- Free SSL certificates
- Automatic HTTPS

**Pricing**:
- **Free**: $0/month (spins down after 15min inactivity)
- **Starter**: $7/month (always-on, 512MB RAM)
- **Standard**: $25/month (2GB RAM, better performance)

**Setup Steps**:
1. Push your code to GitHub
2. Create account at https://render.com
3. Create new Web Service → Connect GitHub repo
4. Set build command: `npm install && npm run build`
5. Set start command: `npm start`
6. Add environment variables from your `.env` file

**Pros**:
- ✅ Zero DevOps - just push to GitHub
- ✅ Auto-scaling and load balancing
- ✅ Free SSL certificates
- ✅ Easy to use dashboard

**Cons**:
- ⚠️ Free tier spins down (cold starts ~30s)
- ⚠️ Need $7/month for always-on service

### Alternative Options (Comparison)

#### 1. Neon + Railway
**Database: Neon (Serverless PostgreSQL)**
- Free: 10 databases, 3GB storage, always-on
- Auto-scaling, pay only for compute time
- Better free tier than Supabase for databases
- **Cost**: $0 - $19/month

**Hosting: Railway**
- Free: $5 credit/month (limited but usable)
- Easy deployment, great DX
- **Cost**: ~$5-10/month after free credits

**Total Cost**: ~$0-29/month
**Best for**: Very cost-conscious, simple apps

#### 2. PlanetScale + Vercel
**Database: PlanetScale (MySQL)**
- Free: 5GB storage, 1 billion row reads/month
- Branching workflows (git for databases)
- **Note**: Uses MySQL, you'd need to convert schema from PostgreSQL
- **Cost**: $0 - $39/month

**Hosting: Vercel**
- Free: Generous limits for hobby projects
- **Cost**: $0 - $20/month

**Total Cost**: ~$0-59/month
**Best for**: If you're okay with MySQL instead of PostgreSQL

#### 3. Fly.io (All-in-one)
- Free: 3 shared VMs, 3GB storage
- PostgreSQL included
- More control than PaaS solutions
- **Cost**: $0 - $20/month

**Total Cost**: ~$0-20/month
**Best for**: Developers who want more control

### Recommended Setup for AI Academy Platform

**Phase 1: MVP (0-100 users)**
```
Database: Supabase Free ($0/month)
Hosting: Render Free ($0/month)
Total: $0/month
```
**Note**: Free tier will spin down after inactivity, expect 30s cold starts

**Phase 2: Launch (100-1000 users)**
```
Database: Supabase Pro ($25/month)
Hosting: Render Starter ($7/month)
Total: $32/month
```
**Benefits**: Always-on, better performance, no cold starts

**Phase 3: Growth (1000-10000 users)**
```
Database: Supabase Pro ($25/month)
Hosting: Render Standard ($25/month)
Total: $50/month
```
**Benefits**: 2GB RAM, auto-scaling, production-ready

**Phase 4: Scale (10000+ users)**
```
Database: Supabase Team ($599/month) or migrate to AWS RDS
Hosting: Multiple Render instances or AWS ECS
CDN: Cloudflare or CloudFront
Total: $600-2000/month
```

### Setup Instructions: Supabase + Render

#### Step 1: Setup Supabase Database

```bash
# 1. Create Supabase account and project
# https://supabase.com/dashboard

# 2. Get your connection string from Supabase dashboard
# Settings → Database → Connection string → URI

# 3. Update your .env file
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres

# 4. Install dependencies (if not already done)
npm install
# or
pnpm install

# 5. Push database schema to Supabase
pnpm drizzle-kit push

# 6. Verify tables were created in Supabase dashboard
# Table Editor → Should see all 20+ tables
```

#### Step 2: Deploy Backend to Render

```bash
# 1. Push your code to GitHub
git add .
git commit -m "Backend implementation complete"
git push origin main

# 2. Create Render account
# https://render.com/

# 3. Create new Web Service
# - Connect your GitHub repository
# - Name: ai-academy-api
# - Environment: Node
# - Region: Choose closest to your users
# - Branch: main
# - Build Command: npm install && npm run build
# - Start Command: npm start

# 4. Add Environment Variables in Render dashboard
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-use-random-string
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
PORT=3000

# 5. Deploy!
# Render will auto-deploy on every push to main branch
```

#### Step 3: Update Frontend API Client

```typescript
// In your .env file for frontend (Vite)
VITE_API_URL=https://your-render-app.onrender.com/api
```

#### Step 4: Test Your Deployment

```bash
# Health check
curl https://your-render-app.onrender.com/api/ping

# Register a test user
curl -X POST https://your-render-app.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test1234!",
    "firstName": "Test",
    "lastName": "User",
    "role": "student",
    "dateOfBirth": "2008-01-01"
  }'
```

### Cost Optimization Tips

1. **Start with Free Tiers**: Use Supabase Free + Render Free for MVP
2. **Monitor Usage**: Set up alerts in Supabase and Render dashboards
3. **Optimize Queries**: Use database indexes, avoid N+1 queries
4. **Cache Responses**: Add Redis later if needed (free tier on Upstash)
5. **Compress Assets**: Enable gzip compression in Express
6. **Use Cloudflare**: Free CDN to reduce bandwidth costs

### Migration Path to AWS (Future)

When you reach 10,000+ users, consider migrating to AWS:

- **ECS with Fargate** for containers
- **RDS for PostgreSQL** (managed database)
- **ElastiCache for Redis** (caching)
- **S3** for file storage
- **CloudFront** for CDN
- **CloudWatch** for monitoring

**Estimated Cost**: $200-500/month for 10K users

## Production Deployment

## Support

For questions or issues:
- Check the PRD documentation
- Review the database schema in `server/db/schema.ts`
- Check API routes in `server/routes/`
