import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const router = express.Router()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataFilePath = path.join(__dirname, '../../data.json')
const statsFilePath = path.join(__dirname, '../data/stats.json')
const contactsFilePath = path.join(__dirname, '../data/contacts.json')

// Initialize data files if they don't exist
const initializeStats = () => {
  if (!fs.existsSync(statsFilePath)) {
    fs.writeFileSync(statsFilePath, JSON.stringify({ totalViews: 0, activeUsers: [], lastCleanup: Date.now() }, null, 2))
  }
}

const initializeContacts = () => {
  if (!fs.existsSync(contactsFilePath)) {
    fs.writeFileSync(contactsFilePath, JSON.stringify([], null, 2))
  }
}

// Get portfolio data
router.get('/data', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'))
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to load data' })
  }
})

// Track page views
router.post('/views', (req, res) => {
  initializeStats()
  try {
    const stats = JSON.parse(fs.readFileSync(statsFilePath, 'utf-8'))
    stats.totalViews += 1
    
    // Clean up old sessions (older than 5 minutes)
    const fiveMinutesAgo = Date.now() - (5 * 60 * 1000)
    stats.activeUsers = stats.activeUsers.filter(user => user.timestamp > fiveMinutesAgo)
    
    // Add current user
    const userId = req.ip + req.get('user-agent')
    const userExists = stats.activeUsers.find(u => u.id === userId)
    if (!userExists) {
      stats.activeUsers.push({ id: userId, timestamp: Date.now() })
    }
    
    fs.writeFileSync(statsFilePath, JSON.stringify(stats, null, 2))
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to track view' })
  }
})

// Get statistics
router.get('/stats', (req, res) => {
  initializeStats()
  try {
    const stats = JSON.parse(fs.readFileSync(statsFilePath, 'utf-8'))
    
    // Clean up old sessions
    const fiveMinutesAgo = Date.now() - (5 * 60 * 1000)
    stats.activeUsers = stats.activeUsers.filter(user => user.timestamp > fiveMinutesAgo)
    
    res.json({
      totalViews: stats.totalViews,
      currentViewing: stats.activeUsers.length
    })
  } catch (err) {
    res.status(500).json({ totalViews: 0, currentViewing: 0 })
  }
})

export default router
