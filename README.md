# 🎉 Professional Portfolio Website

A full-stack portfolio with interactive bots, real-time view tracking, and smooth animations.

**Developer**: Patel Shubham  
**Email**: patelshubham09123@gmail.com  
**Location**: Kadi, Gujarat

---

## ✨ Features

✅ **Modern Design** - Black/white minimalist theme with glassmorphism  
✅ **3 Interactive Bots:**
  - 💬 **Contact Bot** - Save messages directly  
  - 🤖 **Chat Bot** - Smart keyword responses  
  - 🔗 **Redirect Bot** - Keyword → URL mapping  
✅ **Real-time View Counter** - Track total & active users  
✅ **Smooth Animations** - Scroll parallax & transitions  
✅ **Mobile Responsive** - Works on all devices  
✅ **Built with React + Node.js** - Fast, scalable, modern stack

---

## 🚀 DEPLOY TO PRODUCTION

### **Step 1: Push to GitHub**
```bash
cd e:\pro\portfoll
git add .
git commit -m "Initial portfolio with bots"
git remote add origin https://github.com/patelshubham00123/portfolio.git
git branch -M main
git push -u origin main
```

### **Step 2: Deploy Frontend → Vercel**
1. Go to **https://vercel.com** → Sign in with GitHub
2. Click **New Project** → Select `portfolio` repo
3. Settings:
   - **Framework**: Vite
   - **Root Directory**: frontend
   - **Env**: `VITE_API_URL = https://your-railway-url`
4. Click **Deploy** ✅

### **Step 3: Deploy Backend → Railway**
1. Go to **https://railway.app** → Sign in with GitHub
2. Click **New Project** → **Deploy from GitHub repo**
3. Select your `portfolio` repo
4. Settings:
   - **Root Directory**: backend
   - **Env vars**:
     - `PORT: 5000`
     - `NODE_ENV: production`
     - `FRONTEND_URL: https://your-vercel-url`
5. Click **Deploy** ✅

**That's it! Your portfolio is LIVE! 🎉**

---

## 🔧 Local Development

### **Prerequisites**
- Node.js 16+ ([download](https://nodejs.org))
- Git

### **Quick Start**
```bash
# Frontend (Terminal 1)
cd frontend
npm install
npm run dev  # http://localhost:3000

# Backend (Terminal 2)
cd backend
npm install
npm run dev  # http://localhost:5000
```

---

## ⚙️ Customize Bots

### **Chat Bot - Add Responses**
Edit `backend/routes/bots.js`:
```javascript
const responses = {
  'your keyword': 'Your response',
  'game': 'I love gaming!',
}
```

### **Redirect Bot - Add Keywords**
Edit `data.json`:
```json
"bots": {
  "keywords": {
    "mynewkeyword": {"app": "App Name", "link": "https://..."}
  }
}
```

### **Contact Bot - Add Greetings**
Edit `frontend/src/components/BotPanel.jsx`:
```javascript
const greetings = [
  "Custom message 1 🎉",
  "Custom message 2 💬"
]
```

---

## 📁 Project Structure

```
portfolio/
├── frontend/              # React Vite app
│   ├── src/components/    # All UI components
│   ├── .env              # Local settings
│   ├── .env.production   # Production settings
│   └── vite.config.js
├── backend/              # Express API
│   ├── routes/           # API endpoints
│   ├── data/             # JSON storage
│   └── .env.production   # Production settings
├── data.json             # Portfolio content
├── vercel.json           # Vercel config
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite + Framer Motion
- **Backend**: Node.js + Express
- **Hosting**: Vercel (frontend) + Railway (backend)
- **Code**: GitHub

---

## 📞 Contact

📧 Email: patelshubham09123@gmail.com  
📍 Location: Kadi, Gujarat

---

**Made with ❤️ by Patel Shubham**
- **Projects**: Clickable cards with tags
- **Skills**: Frontend, Backend, Tools by category
- **Work**: Current roles + app links (Instagram, GitHub, Twitter, LinkedIn, Discord)
- **View Counter**: Real-time visitor stats

## 🛠️ Tech Stack

**Frontend**: React, Vite, Framer Motion  
**Backend**: Node.js, Express, CORS  
**Styling**: CSS-in-JS (minimalist, responsive)  
**Data**: JSON-based, no database required (upgrade to MongoDB/Firebase later)

## 📊 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/data` | Get portfolio data |
| POST | `/api/views` | Track page view |
| GET | `/api/stats` | Get view stats |
| POST | `/api/bots/contact` | Save contact form |
| POST | `/api/bots/chat` | Chat bot response |
| POST | `/api/bots/redirect` | Smart redirect |

## 🌐 Deployment

- **Frontend**: Vercel, Netlify (build: `npm run build`)
- **Backend**: Railway, Heroku, AWS

Update `.env.production` with your backend URL before deploying.

## 📝 Customization

Edit `data.json` to change:
- Your name, email, location
- Projects, skills, hobbies
- Bot keywords for redirect feature
- App links (Instagram, GitHub, etc.)

## 📞 Contact

📧 Email: patelshubham00123@gmail.com  
📍 Location: Kadi, Gujarat

---

**Ready to start?** Follow the [SETUP_GUIDE.md](SETUP_GUIDE.md)! 🎉
