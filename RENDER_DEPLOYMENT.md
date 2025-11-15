# Deploy to Render.com - Step-by-Step Guide

## 🚀 Quick Deployment (15 minutes)

### Prerequisites
- ✅ Supabase database is set up (Done!)
- ✅ Backend code is ready (Done!)
- ✅ GitHub account
- ✅ Render.com account (free)

---

## Step 1: Push Code to GitHub (5 minutes)

### 1.1 Initialize Git (if not done)

```bash
# Check if git is initialized
git status

# If not initialized:
git init
git add .
git commit -m "Backend implementation complete with Supabase integration"
```

### 1.2 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `AI-Academy-Platform` (or your choice)
3. **Keep it Private** (recommended for now)
4. **DON'T** initialize with README (you already have code)
5. Click "Create repository"

### 1.3 Push to GitHub

```bash
# Add remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/AI-Academy-Platform.git

# Push code
git branch -M main
git push -u origin main
```

**✅ Checkpoint**: Your code is now on GitHub!

---

## Step 2: Create Render Account (2 minutes)

1. Go to https://render.com
2. Click **"Get Started"**
3. Sign up with GitHub (easiest - auto-connects)
4. Authorize Render to access your GitHub repos

**✅ Checkpoint**: You're logged into Render!

---

## Step 3: Deploy Backend to Render (5 minutes)

### 3.1 Create New Web Service

1. In Render Dashboard, click **"New +"** → **"Web Service"**
2. Connect your GitHub repository:
   - If not connected: Click "Connect GitHub" → Select your repo
   - If already connected: Select `AI-Academy-Platform` from the list
3. Click **"Connect"**

### 3.2 Configure Service

Fill in these settings:

**Basic Settings**:
```
Name: ai-academy-api
Region: Oregon (US West)
Branch: main
Root Directory: (leave blank)
Runtime: Node
```

**Build Settings**:
```
Build Command: npm install && npm run build:server
Start Command: npm start
```

**Instance Type**:
```
Plan: Free ($0/month)
```

### 3.3 Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these 4 variables:

1. **DATABASE_URL**
   ```
   Key: DATABASE_URL
   Value: postgresql://postgres.kngwmwouascrirmhzyka:2Z936xwNUBEJNL19@aws-0-us-west-2.pooler.supabase.com:6543/postgres
   ```

2. **JWT_SECRET**
   ```
   Key: JWT_SECRET
   Value: (Click "Generate" button - Render will create a secure random string)
   ```

3. **NODE_ENV**
   ```
   Key: NODE_ENV
   Value: production
   ```

4. **FRONTEND_URL**
   ```
   Key: FRONTEND_URL
   Value: http://localhost:5173
   ```
   *(You'll update this later when you deploy frontend)*

5. **PORT** (Optional - Render sets this automatically)
   ```
   Key: PORT
   Value: 3000
   ```

### 3.4 Deploy!

1. Click **"Create Web Service"**
2. Render will now:
   - Clone your repo
   - Run `npm install`
   - Run `npm run build:server`
   - Start your server with `npm start`
   - Assign you a URL like: `https://ai-academy-api.onrender.com`

**This takes ~3-5 minutes**

Watch the deploy logs to see progress!

**✅ Checkpoint**: Your backend is deploying!

---

## Step 4: Wait for Deployment (3-5 minutes)

You'll see logs like:

```
==> Cloning from https://github.com/YOUR_USERNAME/AI-Academy-Platform...
==> Running 'npm install'
==> Running 'npm run build:server'
==> Build complete
==> Starting service with 'npm start'
==> Your service is live! 🎉
```

**✅ Checkpoint**: Deployment complete!

---

## Step 5: Test Your Deployment (2 minutes)

### 5.1 Get Your Render URL

In Render dashboard, you'll see something like:
```
https://ai-academy-api.onrender.com
```

### 5.2 Test Health Endpoint

Open in browser or use curl:
```bash
curl https://ai-academy-api.onrender.com/api/ping
```

Should return:
```json
{
  "success": true,
  "message": "pong",
  "timestamp": "2025-..."
}
```

### 5.3 Test Registration

```bash
curl -X POST https://ai-academy-api.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@render.com",
    "password": "Test1234!",
    "firstName": "Render",
    "lastName": "Test",
    "role": "student",
    "dateOfBirth": "2010-01-01"
  }'
```

Should return user data with tokens!

**✅ Checkpoint**: Your API is working on Render!

---

## Step 6: Update Frontend Config (1 minute)

Update your frontend `.env` file:

```env
# Change from:
VITE_API_URL=http://localhost:3000/api

# To:
VITE_API_URL=https://ai-academy-api.onrender.com/api
```

**✅ Checkpoint**: Frontend configured for production API!

---

## 🎉 Deployment Complete!

Your backend is now live at: `https://ai-academy-api.onrender.com`

### Your Deployed Endpoints

- **Health**: https://ai-academy-api.onrender.com/api/ping
- **Register**: https://ai-academy-api.onrender.com/api/auth/register
- **Login**: https://ai-academy-api.onrender.com/api/auth/login
- **Dashboard**: https://ai-academy-api.onrender.com/api/students/dashboard

---

## ⚠️ Important Notes About Free Tier

### Free Tier Limitations

1. **Spins Down After 15 Minutes of Inactivity**
   - First request after sleep takes ~30 seconds (cold start)
   - This is normal for free tier!

2. **750 Hours/Month** (Enough for 1 service 24/7)

3. **Limited RAM** (512 MB)

### When to Upgrade to Paid ($7/month)

Upgrade to **Starter** plan when:
- ✅ You have regular users (cold starts annoy them)
- ✅ You need always-on service
- ✅ You're getting consistent traffic
- ✅ You're ready to launch publicly

### Cost Breakdown

```
Free: $0/month
├─ Spins down after 15min
├─ 512MB RAM
└─ Perfect for development/testing

Starter: $7/month
├─ Always-on (no spin down)
├─ 512MB RAM
├─ Better for real users
└─ What you want for launch

Standard: $25/month
├─ Always-on
├─ 2GB RAM
├─ Autoscaling
└─ Production-ready for growth
```

---

## 🔧 Post-Deployment Tasks

### Immediate

- [ ] Test all API endpoints
- [ ] Verify database connection works
- [ ] Check Render logs for errors
- [ ] Update FRONTEND_URL when you deploy frontend

### Optional (Recommended)

- [ ] Set up custom domain (Render supports this)
- [ ] Add monitoring (Render has built-in monitoring)
- [ ] Enable auto-deploy from GitHub
- [ ] Set up deploy notifications (Slack/Email)

### Security (Before Public Launch)

- [ ] Update JWT_SECRET (already done by Render)
- [ ] Enable CORS only for your frontend domain
- [ ] Add rate limiting
- [ ] Enable HTTPS only (Render does this automatically)
- [ ] Review environment variables

---

## 🐛 Troubleshooting

### Build Fails

**Error**: `npm run build:server` fails

**Solution**: Check your `package.json` has the build scripts:
```json
{
  "scripts": {
    "build:server": "vite build --config vite.config.server.ts",
    "start": "node dist/server/node-build.mjs"
  }
}
```

### Service Won't Start

**Error**: "Service failed to start"

**Check**:
1. Render logs (click "Logs" tab)
2. Ensure `DATABASE_URL` is correct
3. Verify all env variables are set

### Database Connection Error

**Error**: "Failed to connect to database"

**Solution**:
1. Check `DATABASE_URL` in Render dashboard
2. Ensure Supabase project is active
3. Test connection string locally first:
   ```bash
   psql "postgresql://postgres.kngwmwouascrirmhzyka:..."
   ```

### Cold Starts Too Slow

**Issue**: First request takes 30+ seconds

**This is normal for free tier!**

**Solutions**:
1. Accept it for development (it's free!)
2. Upgrade to Starter ($7/month) for always-on
3. Use a ping service (UptimeRobot) to keep it warm (not recommended)

---

## 📊 Monitor Your Deployment

### Render Dashboard

Access at: https://dashboard.render.com

**What you can see**:
- Live logs
- Deployment history
- Resource usage (CPU, RAM)
- Request metrics
- Service status

### Check Deployment Status

```bash
# Health check
curl https://ai-academy-api.onrender.com/api/ping

# Or open in browser:
# https://ai-academy-api.onrender.com/api/ping
```

---

## 🚀 Next Steps

### After Backend is Deployed

1. **Deploy Frontend** (Options):
   - Vercel (recommended for React)
   - Netlify
   - Render Static Site

2. **Update CORS Settings**:
   In `server/index.ts`, update:
   ```typescript
   app.use(cors({
     origin: 'https://your-frontend.vercel.app',
     credentials: true,
   }));
   ```

3. **Set Frontend URL**:
   In Render dashboard, update `FRONTEND_URL` environment variable

4. **Test End-to-End**:
   - Frontend calls backend
   - Login works
   - Tokens are saved
   - Protected routes work

---

## 💡 Pro Tips

### Auto-Deploy from GitHub

Render automatically deploys when you push to `main` branch:

```bash
git add .
git commit -m "Add new feature"
git push origin main

# Render will automatically deploy! 🎉
```

### View Live Logs

```bash
# In Render dashboard, click "Logs" tab
# Or use Render CLI (optional):
render logs -s ai-academy-api -f
```

### Rollback if Needed

In Render dashboard:
1. Click "Manual Deploy" dropdown
2. Select "Redeploy" → Choose previous successful deploy
3. Click "Deploy"

---

## 📞 Support

**Render Docs**: https://render.com/docs
**Render Status**: https://status.render.com
**Community**: https://community.render.com

**Your Services**:
- Backend: https://dashboard.render.com/web/YOUR_SERVICE_ID
- Database: https://supabase.com/dashboard/project/kngwmwouascrirmhzyka

---

**🎉 Congratulations! Your backend is now live on the internet!** 🎉

You can now access your API from anywhere at:
`https://ai-academy-api.onrender.com/api`
