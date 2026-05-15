import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// CORS configuration for Vercel + local development
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  process.env.FRONTEND_URL || 'http://localhost:3000'
]

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())

// Import routes dynamically
import('./routes/api.js').then(module => {
  app.use('/api', module.default)
  console.log('✅ API routes loaded')
}).catch(err => console.error('❌ Error loading API routes:', err))

import('./routes/bots.js').then(module => {
  app.use('/api/bots', module.default)
  console.log('✅ Bot routes loaded')
}).catch(err => console.error('❌ Error loading bot routes:', err))

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
  console.log(`✅ API available at http://localhost:${PORT}/api`)
  console.log(`✅ Health check: http://localhost:${PORT}/health`)
})
