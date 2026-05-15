# Portfolio Website

Professional portfolio website for **Patel Shubham** - Developer, Video Editor, Gamer & PC Technician

## 🎯 Features

✨ **Modern Design**: Black/white minimalist with glassmorphism accents  
🎬 **Scroll-Triggered Hero**: Dynamic video background that responds to scroll  
🤖 **3 Smart Bots**: Contact, Chat, and Smart Redirect (keyword-based)  
📊 **Real-Time View Tracking**: Total views + currently viewing visitors  
🎨 **Responsive Design**: Mobile-first, works on all devices  
⚡ **Built with React + Node.js**: Fast, scalable, modern stack  

## 🚀 Quick Start

```bash
# 1. Install backend dependencies
cd backend
npm install
npm run dev

# 2. Install frontend dependencies (in new terminal)
cd frontend
npm install
npm run dev

# 3. Open browser
http://localhost:3000
```

**📖 Full Setup Guide**: See [SETUP_GUIDE.md](SETUP_GUIDE.md)

## 📁 Structure

```
frontend/  → React app (port 3000)
backend/   → Express API (port 5000)
data.json  → Portfolio content
```

## 🤖 Bot Features

- **Contact Bot 💬**: Save contact form submissions
- **Chat Bot 🤖**: Keyword-based responses ("What do you do?", "Tell me about yourself")
- **Redirect Bot 🔗**: Smart keyword matching (type "nfs" → NFS game link, "code" → GitHub, etc.)

## 📊 Sections

- **Profile**: Bio, email, location
- **Hobbies**: Gaming, Video Editing, PC Building (with time spent)
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

📧 Email: patelshubham09123@gmail.com  
📍 Location: Kadi, Gujarat

---

**Ready to start?** Follow the [SETUP_GUIDE.md](SETUP_GUIDE.md)! 🎉
