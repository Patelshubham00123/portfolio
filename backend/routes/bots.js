import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const router = express.Router()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataFilePath = path.join(__dirname, '../../data.json')
const contactsFilePath = path.join(__dirname, '../../data/contacts.json')

// Initialize contacts file
const initializeContacts = () => {
  if (!fs.existsSync(contactsFilePath)) {
    fs.writeFileSync(contactsFilePath, JSON.stringify([], null, 2))
  }
}

// Contact Bot
router.post('/contact', (req, res) => {
  initializeContacts()
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const contacts = JSON.parse(fs.readFileSync(contactsFilePath, 'utf-8'))
    contacts.push({
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })
    fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2))
    res.json({ success: true, message: 'Contact form saved successfully' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact' })
  }
})

// Chat Bot
router.post('/chat', (req, res) => {
  const { message } = req.body
  const msg = message.toLowerCase()

  const responses = {
    default: 'Hi there! Thanks for reaching out. How can I help you?',
    hello: 'Hey! Welcome to my portfolio. How are you?',
    hi: 'Hey! Welcome to my portfolio. How are you?',
    what: 'I am a Web Developer, Video Editor, Gamer, and PC Technician.',
    'do you do': 'I am a Web Developer, Video Editor, Gamer, and PC Technician based in Kadi, Gujarat.',
    'about': 'I am Patel Shubham, a versatile tech professional passionate about coding, gaming, and technology.',
    'who': 'I am Patel Shubham from Kadi, Gujarat. Web dev, video editor, gamer, and tech enthusiast.',
    'help': 'You can reach out to me using the contact form, or chat with me here. What would you like to know?',
    'contact': 'You can contact me at patelshubham09123@gmail.com or use the contact form on this page.',
    'email': 'My email is patelshubham09123@gmail.com',
    'skills': 'I work with React, Node.js, JavaScript, Video Editing, PC Building, and more!',
    'tech': 'I am proficient in React, Node.js, Express, MongoDB, Firebase, and various tools.',
    'thanks': 'You are welcome! Feel free to explore my portfolio.',
    'bye': 'Goodbye! Come back soon!',
  }

  let reply = responses.default
  for (const [key, value] of Object.entries(responses)) {
    if (msg.includes(key)) {
      reply = value
      break
    }
  }

  res.json({ reply })
})

// Smart Redirect Bot
router.post('/redirect', (req, res) => {
  const { keyword } = req.body
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'))

  if (!keyword) {
    return res.status(400).json({ error: 'Keyword required' })
  }

  const searchTerm = keyword.toLowerCase()

  // Search in bots keywords
  for (const [key, value] of Object.entries(data.bots.keywords)) {
    if (searchTerm.includes(key)) {
      return res.json({ app: value.app, link: value.link })
    }
  }

  // Search in apps
  for (const app of data.apps) {
    for (const keyword of app.keywords) {
      if (searchTerm.includes(keyword)) {
        return res.json({ app: app.name, link: app.url })
      }
    }
  }

  res.json({ error: 'No match found' })
})

export default router
