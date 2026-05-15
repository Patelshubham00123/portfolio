# Portfolio Website - Setup & Run Guide

## 📋 Prerequisites

Before running this project, you need to install **Node.js** (which includes npm).

### Install Node.js
- **Download**: https://nodejs.org/
- **Version**: Use LTS (Long Term Support) - currently v18.x or v20.x
- **Windows Installation**: Download the `.msi` installer and follow the setup wizard
- **Verify Installation**:
  ```bash
  node --version
  npm --version
  ```

---

## 🚀 Getting Started

### Step 1: Install Frontend Dependencies

```bash
cd e:\pro\portfoll\frontend
npm install
```

This installs: React, Vite, Framer Motion, Axios, React Icons, and dev tools.

---

### Step 2: Install Backend Dependencies

```bash
cd e:\pro\portfoll\backend
npm install
```

This installs: Express, CORS, dotenv, UUID.

---

### Step 3: Start the Backend Server

Open a **new terminal** and run:

```bash
cd e:\pro\portfoll\backend
npm run dev
```

Expected output:
```
🚀 Server running at http://localhost:5000
✅ API available at http://localhost:5000/api
```

---

### Step 4: Start the Frontend (React App)

Open **another terminal** and run:

```bash
cd e:\pro\portfoll\frontend
npm run dev
```

Expected output:
```
  VITE v4.x.x ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

---

### Step 5: Open in Browser

- **Frontend**: http://localhost:3000
- **Backend Health**: http://localhost:5000/health
- **Backend API**: http://localhost:5000/api/stats

---

## 📁 Project Structure

```
e:\pro\portfoll\
├── frontend/
│   ├── src/
│   │   ├── components/        # All React components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx       # Scroll-triggered hero
│   │   │   ├── Profile.jsx
│   │   │   ├── Hobbies.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Work.jsx       # Professions & app links
│   │   │   ├── BotPanel.jsx   # 3 bots: Contact, Chat, Redirect
│   │   │   ├── ViewCounter.jsx
│   │   │   └── Footer.jsx
│   │   ├── styles/
│   │   ├── App.jsx            # Main component
│   │   ├── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .env                   # Development config
│   └── .env.production        # Production config
│
├── backend/
│   ├── routes/
│   │   ├── api.js             # Data & view tracking endpoints
│   │   └── bots.js            # Bot handlers
│   ├── data/
│   │   ├── stats.json         # View tracking data
│   │   └── contacts.json      # Contact form submissions
│   ├── server.js              # Express server
│   ├── package.json
│   └── .env                   # Backend config
│
├── data.json                  # Portfolio content (profile, projects, skills, etc.)
├── index.html                 # (can be deleted)
├── script.js                  # (can be deleted)
└── stylle.css                 # (can be deleted)
```

---

## 🎯 Features

### ✅ Implemented

1. **Hero Section**: Scroll-triggered video background simulation with parallax effect
2. **Profile Section**: Bio, location, email
3. **Hobbies**: Gaming, Video Editing, PC Building with time spent
4. **Projects**: Clickable cards linking to GitHub/demos
5. **Skills**: Frontend, Backend, Tools organized by category
6. **Work Section**: 
   - Current professions with icons
   - App links (Instagram, GitHub, Twitter, LinkedIn, Discord)
7. **3 Smart Bots** (Bottom-right sticky panel):
   - **💬 Contact Bot**: Save contact form submissions
   - **🤖 Chat Bot**: Keyword-based responses
   - **🔗 Redirect Bot**: Smart keyword matching (type "nfs" → redirects to NFS game store, "code" → GitHub, etc.)
8. **View Counter**: Displays total views & currently viewing visitors
9. **Real-time Updates**: View counter updates every 5 seconds
10. **Black/White Minimalist Design**: Dark theme with glassmorphism accents

---

## 🤖 Bot Keywords

### Redirect Bot (type keywords in the bot panel):
- `nfs` → Need for Speed
- `gta` → GTA Rockstar Games
- `valorant` → Valorant
- `code` → GitHub
- `rdr` → Red Dead Redemption
- `ig` or `insta` → Instagram
- `twitter` → Twitter

### Chat Bot (try these messages):
- "Hi", "Hello"
- "What do you do?"
- "Tell me about yourself"
- "Skills"
- "Contact me"
- "Who are you?"

---

## 📊 API Endpoints

### Data Endpoints

**GET** `/api/data`
- Returns all portfolio data

**POST** `/api/views`
- Tracks page view & updates active viewer count

**GET** `/api/stats`
- Returns: `{ totalViews: number, currentViewing: number }`

### Bot Endpoints

**POST** `/api/bots/contact`
- Body: `{ name, email, message }`
- Saves contact to `data/contacts.json`

**POST** `/api/bots/chat`
- Body: `{ message }`
- Returns: `{ reply: string }`

**POST** `/api/bots/redirect`
- Body: `{ keyword }`
- Returns: `{ app: string, link: string }` or `{ error: string }`

---

## ⚙️ Configuration Files

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

---

## 🎨 Styling Notes

- **Colors**: Black (#000), White (#fff), Dark Gray (#1a1a1a)
- **Fonts**: Inter, Segoe UI, Roboto (web-safe fallbacks)
- **Animations**: Smooth scrolling, fade-in, slide transitions
- **Responsive**: Mobile-first design, works on all screen sizes

---

## 🚀 Deployment

### Deploy Frontend (Vercel/Netlify)

1. Build production:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `frontend/dist` folder to:
   - **Vercel**: https://vercel.com (connect GitHub repo, auto-deploy)
   - **Netlify**: https://netlify.com (drag-drop `dist` folder)

3. Update `.env.production`:
   ```env
   VITE_API_URL=https://your-backend-url.com
   ```

### Deploy Backend (Railway/Heroku)

1. Create account on **Railway.app** or **Heroku.com**
2. Connect GitHub repo
3. Set environment variables in dashboard
4. Deploy

---

## 📝 Customization

### Change Your Info
Edit `data.json`:
```json
{
  "profile": {
    "name": "Your Name",
    "email": "your-email@example.com",
    "location": "Your City, Country",
    "bio": "Your bio"
  }
}
```

### Add Projects
Add to `data.json` > `projects` array:
```json
{
  "id": 4,
  "title": "Project Name",
  "description": "Description",
  "image": "/images/projects/project.jpg",
  "link": "https://github.com/...",
  "tags": ["React", "Node.js"]
}
```

### Add Bot Keywords
Edit `data.json` > `bots.keywords`:
```json
{
  "discord": { "app": "Discord", "link": "https://discord.com" }
}
```

---

## 🐛 Troubleshooting

### Port 3000 or 5000 already in use?

**Windows - Find and kill process:**
```bash
# Find process on port 5000
netstat -ano | findstr :5000

# Kill it (replace PID with the number)
taskkill /PID <PID> /F
```

### Node/npm not found?
- Reinstall Node.js: https://nodejs.org/
- Restart your terminal after installation

### API not connecting?
- Ensure backend is running on port 5000
- Check `.env` files have correct URLs
- Check browser console for CORS errors

### View counter not updating?
- Ensure backend `/api/views` endpoint is called
- Check `data/stats.json` file is created
- Verify JSON file permissions

---

## 📞 Support

For issues or questions:
- Email: `patelshubham09123@gmail.com`
- Check the bot panel on your portfolio!

---

## 📦 What's Included

- ✅ Complete React frontend with 11 components
- ✅ Express backend with API routes
- ✅ 3 smart bots (Contact, Chat, Redirect)
- ✅ Real-time view tracking system
- ✅ Black/white minimalist design with animations
- ✅ Responsive mobile-first layout
- ✅ Configuration files (.env)
- ✅ Data structure (data.json)
- ✅ Full documentation

---

**Next Steps**: Install Node.js, then follow steps 1-5 above! 🎉
