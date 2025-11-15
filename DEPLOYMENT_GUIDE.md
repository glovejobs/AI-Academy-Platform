# Quick Deployment Guide: Supabase + Render

**Total Cost**: $0/month (MVP) → $32/month (Production)

This guide will get your AI Academy Platform backend deployed in ~30 minutes.

---

## Why Supabase + Render?

**Perfect for Small Teams**:
- ✅ $0 to start (free tiers for both)
- ✅ Zero infrastructure management
- ✅ Auto-deploy on git push
- ✅ Built-in backups and SSL
- ✅ Easy to scale when needed
- ✅ Proven stack (used by 100,000+ apps)

**Comparison with Alternatives**:

| Option | Free Tier | Paid Tier | Best For |
|--------|-----------|-----------|----------|
| **Supabase + Render** ⭐ | $0 | $32/mo | PostgreSQL, great DX, easy scaling |
| Neon + Railway | $0 | $29/mo | Very cost-conscious, serverless DB |
| PlanetScale + Vercel | $0 | $59/mo | MySQL is okay, prefer Vercel |
| Fly.io | $0 | $20/mo | More control, comfortable with DevOps |

**Recommendation**: Stick with Supabase + Render. It's the easiest path and scales well.

---

## Step-by-Step Deployment

### Part 1: Setup Supabase (Database) - 10 minutes

#### 1.1 Create Supabase Project

```bash
# Go to https://supabase.com
# Click "Start your project" → Sign up with GitHub
# Click "New project"
# - Organization: Create new or select existing
# - Name: ai-academy-platform
# - Database Password: (generate strong password - save it!)
# - Region: Choose closest to your users
# - Pricing Plan: Free
# Click "Create new project" (takes ~2 minutes to provision)
```

#### 1.2 Get Connection String

```bash
# In Supabase Dashboard:
# 1. Click on "Project Settings" (gear icon in sidebar)
# 2. Click "Database" in left sidebar
# 3. Scroll to "Connection string" section
# 4. Select "URI" tab
# 5. Copy the connection string (looks like this):
#    postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
# 6. Replace [YOUR-PASSWORD] with the password you created
```

#### 1.3 Update Local .env File

```bash
# Edit your .env file:
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.xxxxx.supabase.co:5432/postgres

# Important: Replace YOUR_PASSWORD and xxxxx with your actual values!
```

#### 1.4 Install Dependencies (if not done)

```bash
npm install
# or
pnpm install
```

#### 1.5 Push Database Schema to Supabase

```bash
# This will create all 20+ tables in your Supabase database
pnpm drizzle-kit push

# You should see output like:
# ✓ Pushing schema to database
# ✓ Created table: users
# ✓ Created table: student_profiles
# ✓ Created table: parent_profiles
# ... (all 20+ tables)
```

#### 1.6 Verify Tables in Supabase

```bash
# Go back to Supabase Dashboard
# Click "Table Editor" in sidebar
# You should see all your tables:
# - users
# - student_profiles
# - parent_profiles
# - bootcamps
# - cohorts
# - enrollments
# - etc.
```

✅ **Checkpoint**: Your database is now set up and ready!

---

### Part 2: Deploy Backend to Render - 15 minutes

#### 2.1 Push Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Backend implementation complete"

# Create GitHub repo (go to github.com → New repository)
# Name: AI-Academy-Platform (or your preferred name)
# Make it private (recommended)
# Don't initialize with README (you already have code)

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

#### 2.2 Create Render Account

```bash
# Go to https://render.com
# Click "Get Started"
# Sign up with GitHub (easiest - auto-connects repos)
```

#### 2.3 Create Web Service on Render

```bash
# In Render Dashboard:
# 1. Click "New +" button → "Web Service"
# 2. Connect your GitHub repository (if not auto-connected)
# 3. Select your AI-Academy-Platform repo
# 4. Configure the service:

Name: ai-academy-api
Environment: Node
Region: Oregon (US West) or Frankfurt (Europe) - choose closest to users
Branch: main
Root Directory: (leave blank)
Build Command: npm install && npm run build
Start Command: npm start
```

#### 2.4 Configure Environment Variables

```bash
# Scroll down to "Environment Variables" section
# Click "Add Environment Variable" for each:

DATABASE_URL = postgresql://postgres:YOUR_PASSWORD@db.xxxxx.supabase.co:5432/postgres
JWT_SECRET = (generate a random string - use password generator)
NODE_ENV = production
FRONTEND_URL = http://localhost:5173
PORT = 3000

# Important:
# - Use your actual Supabase connection string for DATABASE_URL
# - Generate a strong random string for JWT_SECRET (32+ characters)
# - You'll update FRONTEND_URL later when you deploy frontend
```

#### 2.5 Select Free Plan

```bash
# Scroll down to "Instance Type"
# Select "Free" ($0/month)
# Note: Free tier spins down after 15min inactivity (30s cold start)
# For production, use "Starter" ($7/month) for always-on service
```

#### 2.6 Deploy!

```bash
# Click "Create Web Service"
# Render will:
# 1. Clone your repo
# 2. Run npm install
# 3. Run npm run build
# 4. Start your server
# 5. Assign you a URL like: https://ai-academy-api.onrender.com

# This takes ~3-5 minutes
# Watch the logs to see progress
```

#### 2.7 Test Your Deployment

```bash
# Once deploy is complete, test the health endpoint:
curl https://YOUR-APP.onrender.com/api/ping

# Should return:
# {"success":true,"message":"pong","timestamp":"2024-..."}

# Test user registration:
curl -X POST https://YOUR-APP.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test1234!",
    "firstName": "Test",
    "lastName": "User",
    "role": "student",
    "dateOfBirth": "2008-01-01"
  }'

# Should return user data with tokens
```

✅ **Checkpoint**: Your backend is now live and accessible!

---

### Part 3: Connect Frontend - 5 minutes

#### 3.1 Update Frontend Environment Variables

```bash
# Create/update .env file in your project root:
VITE_API_URL=https://YOUR-APP.onrender.com/api

# Replace YOUR-APP with your actual Render app name
```

#### 3.2 Test API Client

```typescript
// In your React app, try logging in:
import { apiClient } from '@/lib/api-client';

const response = await apiClient.login('test@example.com', 'Test1234!');
console.log(response);
// Should return user data and tokens
```

#### 3.3 Deploy Frontend (Optional - Vercel)

```bash
# If using Vercel for frontend:
# 1. Push frontend to GitHub
# 2. Go to vercel.com
# 3. Import your repository
# 4. Add environment variable:
#    VITE_API_URL = https://YOUR-APP.onrender.com/api
# 5. Deploy

# Update FRONTEND_URL in Render:
# - Go to Render Dashboard
# - Select your web service
# - Environment → Edit FRONTEND_URL
# - Set to: https://your-frontend.vercel.app
# - Save (will auto-redeploy)
```

✅ **Done!** Your full-stack app is now deployed!

---

## What You Get with Free Tier

**Supabase Free**:
- ✅ 500MB database (enough for ~1000 students)
- ✅ 2GB bandwidth
- ✅ Automatic backups (7 days retention)
- ✅ Up to 500MB file storage (for future features)
- ⚠️ Auto-pauses after 7 days of inactivity (restarts instantly on access)

**Render Free**:
- ✅ 750 hours/month (more than enough for 1 service)
- ✅ Free SSL certificate (HTTPS)
- ✅ Auto-deploy on git push
- ⚠️ Spins down after 15min inactivity (~30s cold start)
- ⚠️ 512MB RAM limit

**Total Cost**: $0/month ✨

---

## When to Upgrade

### Upgrade to Paid Tier When:

**Supabase Pro ($25/month)** - Upgrade when:
- You exceed 500MB database size (~1000+ users)
- Need more than 2GB bandwidth
- Want longer backup retention (30 days)
- Need better support

**Render Starter ($7/month)** - Upgrade when:
- Cold starts become annoying for users (30s wait)
- You need always-on service
- Getting regular traffic (no spin-down)

**Total Paid**: $32/month for production-ready service

---

## Troubleshooting

### Database Connection Fails

```bash
# Check your connection string:
# 1. Correct password?
# 2. Correct project reference?
# 3. Database URL has no spaces?

# Test connection:
psql "postgresql://postgres:PASSWORD@db.xxxxx.supabase.co:5432/postgres"

# If connection works but app doesn't:
# - Check DATABASE_URL in Render environment variables
# - Ensure you saved changes and redeployed
```

### Render Build Fails

```bash
# Common issues:
# 1. Missing package.json scripts:
#    - Ensure "build" script exists
#    - Ensure "start" script exists

# 2. TypeScript errors:
#    - Run locally: npm run build
#    - Fix any type errors

# 3. Environment variables:
#    - Ensure all required vars are set in Render
```

### 404 Errors on API Calls

```bash
# Check:
# 1. API URL is correct (includes /api prefix)
# 2. CORS is configured properly (check FRONTEND_URL)
# 3. Routes are registered in server/index.ts

# Test endpoint directly:
curl https://your-app.onrender.com/api/ping
```

### Cold Start is Too Slow (Free Tier)

```bash
# Free tier spins down after 15min inactivity
# Solutions:
# 1. Upgrade to Starter ($7/month) for always-on
# 2. Use a ping service to keep it warm (UptimeRobot, etc.)
# 3. Accept the tradeoff for $0/month cost
```

---

## Next Steps

### Immediate (Week 1):
- ✅ Deploy backend to Render
- ✅ Setup Supabase database
- ✅ Test all auth endpoints
- ✅ Connect frontend to backend
- 📝 Create test users for each role (student, parent, teacher)

### Short-term (Week 2-4):
- 📝 Implement teacher/mentor endpoints
- 📝 Implement admin endpoints
- 📝 Add file upload (use Supabase Storage)
- 📝 Setup email notifications (SendGrid free tier)

### Mid-term (Month 2-3):
- 📝 Add AI assistant integration (OpenAI API)
- 📝 Implement payment processing (Stripe)
- 📝 Setup monitoring (Sentry free tier)
- 📝 Add analytics (PostHog free tier)

### Long-term (Month 4+):
- 📝 Zoom API integration for live classes
- 📝 Background jobs (BullMQ)
- 📝 Advanced features from PRD
- 📝 Scale to paid tiers as user base grows

---

## Cost Projection

| Phase | Users | Cost/Month | What You Get |
|-------|-------|------------|--------------|
| MVP | 0-100 | $0 | Free tiers (Supabase + Render) |
| Launch | 100-1K | $32 | Pro database + Always-on server |
| Growth | 1K-10K | $50-100 | Better performance + CDN |
| Scale | 10K+ | $500+ | Enterprise features + AWS migration |

---

## Support Resources

**Supabase**:
- Docs: https://supabase.com/docs
- Community: https://github.com/supabase/supabase/discussions
- Status: https://status.supabase.com

**Render**:
- Docs: https://render.com/docs
- Community: https://community.render.com
- Status: https://status.render.com

**Your Backend**:
- Setup Guide: BACKEND_SETUP.md
- API Documentation: See PRD documents
- Database Schema: server/db/schema.ts

---

## Quick Commands Reference

```bash
# Local Development
npm install              # Install dependencies
npm run dev             # Start dev server (port 3000)
pnpm drizzle-kit push   # Push schema to database
pnpm drizzle-kit studio # Open database viewer

# Deployment
git add .
git commit -m "Update backend"
git push origin main    # Auto-deploys to Render

# Testing
curl https://your-app.onrender.com/api/ping
curl -X POST https://your-app.onrender.com/api/auth/register -H "Content-Type: application/json" -d '{"email":"test@test.com","password":"Test1234!","firstName":"Test","lastName":"User","role":"student"}'

# Database
psql "$DATABASE_URL"    # Connect to database
```

---

**You're all set!** 🎉

Your backend is now deployed and ready to handle:
- ✅ User authentication (JWT)
- ✅ Student dashboard and progress tracking
- ✅ Parent monitoring
- ✅ Project submissions
- ✅ Achievements and rewards
- ✅ All 20+ database tables

**Next**: Start building out the remaining features from your PRD!
