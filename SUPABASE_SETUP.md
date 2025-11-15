# How to Get Your Supabase Connection String

## Step-by-Step Guide (5 minutes)

### Step 1: Create Supabase Account

1. Go to **https://supabase.com**
2. Click **"Start your project"** (top right)
3. Sign up with:
   - GitHub (recommended - easiest)
   - or Email

### Step 2: Create a New Project

1. After signing in, you'll see the dashboard
2. Click **"New project"** button
3. Fill in the form:

```
Organization: (Create new or select existing)
Project Name: ai-academy-platform
Database Password: [CLICK "Generate a password" - SAVE THIS PASSWORD!]
Region: (Choose closest to your users)
  - US East (Virginia) - for US East Coast
  - US West (Oregon) - for US West Coast
  - Europe (Frankfurt) - for Europe
  - Asia Pacific (Singapore) - for Asia
Pricing Plan: Free
```

4. Click **"Create new project"**
5. Wait ~2 minutes while Supabase provisions your database ⏳

### Step 3: Get Your Connection String

Once your project is ready (green checkmark appears):

#### Option A: Direct Connection String (Recommended)

1. In the left sidebar, click **⚙️ Project Settings** (gear icon at bottom)
2. Click **"Database"** in the left menu
3. Scroll down to **"Connection string"** section
4. You'll see multiple tabs - click the **"URI"** tab
5. Copy the connection string - it looks like this:

```
postgresql://postgres:[YOUR-PASSWORD]@db.abcdefghijklmnop.supabase.co:5432/postgres
```

6. **IMPORTANT**: Replace `[YOUR-PASSWORD]` with the password you generated in Step 2
   - If you forgot it, scroll up and click "Reset database password"

#### Option B: Connection Pooler (For Production - Later)

For now, use Option A (Direct Connection). You can switch to connection pooler later when you have more traffic.

### Step 4: Update Your .env File

1. Open your project's `.env` file
2. Replace the DATABASE_URL line:

```env
DATABASE_URL=postgresql://postgres:YOUR_ACTUAL_PASSWORD@db.abcdefghijklmnop.supabase.co:5432/postgres
```

**Example** (with fake values):
```env
# OLD (replace this):
DATABASE_URL=postgresql://localhost:5432/ai_academy

# NEW (your actual Supabase connection):
DATABASE_URL=postgresql://postgres:MyS3cur3P@ssw0rd@db.xyzabcdefghijk.supabase.co:5432/postgres
```

### Step 5: Test Your Connection

```bash
# Install dependencies if not done
npm install

# Push your database schema to Supabase
pnpm drizzle-kit push

# You should see output like:
# ✓ Pushing schema to database...
# ✓ Created table: users
# ✓ Created table: student_profiles
# ✓ Created table: parent_profiles
# ✓ Created table: bootcamps
# ... (all 20+ tables)
```

### Step 6: Verify in Supabase Dashboard

1. Go back to Supabase dashboard
2. Click **"Table Editor"** in the left sidebar
3. You should see all your tables:
   - users
   - student_profiles
   - parent_profiles
   - teacher_profiles
   - bootcamps
   - cohorts
   - enrollments
   - lessons
   - projects
   - project_submissions
   - class_sessions
   - attendance
   - achievements
   - student_achievements
   - rewards
   - ai_conversations
   - notifications
   - messages
   - activity_logs
   - progress_snapshots

✅ **Success!** Your database is now set up and connected!

---

## Common Issues & Solutions

### Issue 1: "Password authentication failed"

**Problem**: Wrong password in connection string

**Solution**:
```bash
# Go to Supabase Dashboard
# Project Settings → Database
# Scroll to top → Click "Reset database password"
# Generate new password and update your .env file
```

### Issue 2: "Connection timeout"

**Problem**: Firewall or network issue

**Solution**:
```bash
# Check your internet connection
# Try from different network (mobile hotspot)
# Check Supabase status: https://status.supabase.com
```

### Issue 3: "Database does not exist"

**Problem**: Wrong database name in connection string

**Solution**:
```bash
# Supabase default database is always "postgres"
# Your connection string should end with: /postgres
# NOT /ai_academy or anything else
```

### Issue 4: Can't find connection string

**Problem**: Looking in wrong place

**Solution**:
```bash
# Correct path:
# 1. Click ⚙️ (gear icon) in left sidebar
# 2. Click "Database" (NOT "API" or "General")
# 3. Scroll to "Connection string" section
# 4. Click "URI" tab (NOT "JDBC" or others)
```

---

## Visual Reference

### Where to Find Each Step:

**Dashboard Home**:
```
┌─────────────────────────────────────┐
│ [New project]  [Your projects ▼]   │
│                                     │
│  Your Projects                      │
│  • ai-academy-platform  ●●●        │
│    └─ Status: Active ✓              │
└─────────────────────────────────────┘
```

**Left Sidebar Navigation**:
```
┌──────────────────┐
│ 🏠 Home          │
│ 📊 Table Editor  │ ← Verify tables here
│ 🔐 Authentication│
│ 📁 Storage       │
│ 🔌 API Docs      │
│ ...              │
│ ⚙️ Settings      │ ← Click here first!
│   └─ Database    │ ← Then click this
└──────────────────┘
```

**Database Settings Page**:
```
┌─────────────────────────────────────┐
│ Database Settings                   │
│                                     │
│ Database Password                   │
│ [Reset database password]           │
│                                     │
│ Connection Info                     │
│ Host: db.xxx.supabase.co           │
│ Port: 5432                          │
│ Database: postgres                  │
│                                     │
│ Connection string                   │
│ [Postgres] [JDBC] [URI] [golang]   │ ← Click URI
│                                     │
│ postgresql://postgres:[password]... │ ← Copy this
└─────────────────────────────────────┘
```

---

## Security Best Practices

### ✅ DO:
- Store password in `.env` file (already in `.gitignore`)
- Use strong passwords (generated by Supabase)
- Keep database password secret
- Use environment variables for all deployments

### ❌ DON'T:
- Commit `.env` file to Git
- Share password in screenshots or messages
- Use weak passwords like "password123"
- Hardcode connection string in your code

---

## Next Steps After Connection

Once your connection is working:

1. ✅ **Verify tables** in Supabase Table Editor
2. ✅ **Test locally** - Run `npm run dev` and test endpoints
3. ✅ **Add sample data** (optional) - Create test users via API
4. ✅ **Deploy to Render** - Follow DEPLOYMENT_GUIDE.md
5. ✅ **Update Render env vars** - Add same DATABASE_URL to Render

---

## Quick Connection Test

Test your connection string works:

```bash
# Using psql (if installed):
psql "postgresql://postgres:YOUR_PASSWORD@db.xxx.supabase.co:5432/postgres"

# Should connect and show:
# postgres=>

# Type \dt to list tables:
# postgres=> \dt

# You should see all 20+ tables listed
```

If you don't have `psql`, that's okay - the `drizzle-kit push` command will verify your connection.

---

## Support

**If you get stuck**:
1. Check the connection string format (no typos, correct password)
2. Verify Supabase project is "Active" (not paused)
3. Check Supabase status page: https://status.supabase.com
4. Double-check you're in the right Supabase project

**Supabase Resources**:
- Docs: https://supabase.com/docs/guides/database/connecting-to-postgres
- Community: https://github.com/supabase/supabase/discussions
- Discord: https://discord.supabase.com

---

## Your Connection String Format

For reference, here's what each part means:

```
postgresql://postgres:PASSWORD@db.PROJECT_REF.supabase.co:5432/postgres
│          │        │        │                          │     │
│          │        │        │                          │     └─ Database name (always "postgres")
│          │        │        │                          └─ Port (always 5432 for PostgreSQL)
│          │        │        └─ Supabase host (unique to your project)
│          │        └─ Your database password
│          └─ Username (always "postgres" for Supabase)
└─ Protocol (always "postgresql")
```

**Your actual values**:
- `PASSWORD`: The one you generated/saved in Step 2
- `PROJECT_REF`: Something like "abcdefghijklmnop" (unique to your project)

Everything else stays the same!

---

✅ **You're ready!** Once you have your connection string in `.env`, run `pnpm drizzle-kit push` to create your tables.
