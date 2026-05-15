import React, { useState } from 'react'

export default function BotPanel({ apps, bots, apiUrl }) {
  const [activeBot, setActiveBot] = useState(null)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [chatMessage, setChatMessage] = useState('')
  const [redirectInput, setRedirectInput] = useState('')
  const [redirectResult, setRedirectResult] = useState(null)
  const [contactStatus, setContactStatus] = useState('')

  const greetings = [
    "Thanks for reaching out! I'll get back to you soon! 🙏",
    "Message received! Looking forward to connecting! 🚀",
    "Thanks for the message! I appreciate your interest! 💬",
    "Got it! I'll review and respond shortly! ✉️"
  ]

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactStatus('❌ Please fill all fields!')
      return
    }

    try {
      setContactStatus('⏳ Sending...')
      const response = await fetch(`${apiUrl}/api/bots/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      })
      
      if (response.ok) {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
        setContactStatus(`✅ ${randomGreeting}`)
        setContactForm({ name: '', email: '', message: '' })
        setTimeout(() => setContactStatus(''), 3000)
      } else {
        setContactStatus('❌ Failed to send')
      }
    } catch (err) {
      setContactStatus(`❌ Error: ${err.message}`)
    }
  }

  const handleChatSubmit = async (e) => {
    e.preventDefault()
    if (!chatMessage.trim()) return

    try {
      const response = await fetch(`${apiUrl}/api/bots/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: chatMessage })
      })
      const data = await response.json()
      alert(`🤖 Bot: ${data.reply}`)
      setChatMessage('')
    } catch (err) {
      alert('❌ Chat error: ' + err.message)
    }
  }

  const handleRedirectSubmit = async (e) => {
    e.preventDefault()
    if (!redirectInput.trim()) return

    try {
      const response = await fetch(`${apiUrl}/api/bots/redirect`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword: redirectInput })
      })
      const data = await response.json()
      if (data.link) {
        setRedirectResult(data)
        setTimeout(() => window.open(data.link, '_blank'), 500)
      } else {
        setRedirectResult({ error: 'No match found. Try: nfs, gta, code, ig' })
      }
      setRedirectInput('')
    } catch (err) {
      setRedirectResult({ error: 'Error: ' + err.message })
    }
  }

  return (
    <div className="bot-panel">
      <div className="bot-buttons">
        <button 
          className={`bot-btn ${activeBot === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveBot(activeBot === 'contact' ? null : 'contact')}
          title="Contact Bot"
        >
          💬
        </button>
        <button 
          className={`bot-btn ${activeBot === 'chat' ? 'active' : ''}`}
          onClick={() => setActiveBot(activeBot === 'chat' ? null : 'chat')}
          title="Chat Bot"
        >
          🤖
        </button>
        <button 
          className={`bot-btn ${activeBot === 'redirect' ? 'active' : ''}`}
          onClick={() => setActiveBot(activeBot === 'redirect' ? null : 'redirect')}
          title="Redirect Bot"
        >
          🔗
        </button>
      </div>

      {activeBot === 'contact' && (
        <div className="bot-modal">
          <h3>Contact Me</h3>
          <form onSubmit={handleContactSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={contactForm.name}
              onChange={e => setContactForm({...contactForm, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={contactForm.email}
              onChange={e => setContactForm({...contactForm, email: e.target.value})}
            />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              value={contactForm.message}
              onChange={e => setContactForm({...contactForm, message: e.target.value})}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {contactStatus && <div className="status">{contactStatus}</div>}
        </div>
      )}

      {activeBot === 'chat' && (
        <div className="bot-modal">
          <h3>Chat Bot</h3>
          <form onSubmit={handleChatSubmit}>
            <input 
              type="text" 
              placeholder="Ask me something..." 
              value={chatMessage}
              onChange={e => setChatMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
          <p className="hint">Try: Hi, What do you do?, Tell me about yourself</p>
        </div>
      )}

      {activeBot === 'redirect' && (
        <div className="bot-modal">
          <h3>Smart Redirect</h3>
          <form onSubmit={handleRedirectSubmit}>
            <input 
              type="text" 
              placeholder="Type keyword (e.g., nfs, gta, code)" 
              value={redirectInput}
              onChange={e => setRedirectInput(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          {redirectResult && (
            <div className={`result ${redirectResult.error ? 'error' : 'success'}`}>
              {redirectResult.error ? redirectResult.error : `Opening ${redirectResult.app}...`}
            </div>
          )}
          <p className="hint">Try: nfs, gta, valorant, code, rdr</p>
        </div>
      )}

      <style>{`
        .bot-panel {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
        }

        .bot-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .bot-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bot-btn:hover,
        .bot-btn.active {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.6);
          transform: scale(1.1);
        }

        .bot-modal {
          position: absolute;
          bottom: 80px;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          padding: 1.5rem;
          width: 300px;
          color: #fff;
          backdrop-filter: blur(10px);
        }

        .bot-modal h3 {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .bot-modal form {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .bot-modal input,
        .bot-modal textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 0.7rem;
          border-radius: 0.3rem;
          font-family: inherit;
          font-size: 0.9rem;
        }

        .bot-modal input::placeholder,
        .bot-modal textarea::placeholder {
          color: #888;
        }

        .bot-modal button[type="submit"] {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          padding: 0.7rem;
          border-radius: 0.3rem;
          cursor: pointer;
        }

        .bot-modal button[type="submit"]:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .hint {
          font-size: 0.8rem;
          color: #888;
          margin-top: 0.8rem;
          font-style: italic;
        }

        .status {
          margin-top: 1rem;
          padding: 0.8rem;
          border-radius: 0.3rem;
          font-size: 0.85rem;
          text-align: center;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
        }

        .result {
          margin-top: 1rem;
          padding: 0.8rem;
          border-radius: 0.3rem;
          font-size: 0.9rem;
        }

        .result.success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
        }

        .result.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
        }

        @media (max-width: 768px) {
          .bot-panel {
            bottom: 1rem;
            right: 1rem;
          }

          .bot-btn {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .bot-modal {
            width: 250px;
          }
        }
      `}</style>
    </div>
  )
}
