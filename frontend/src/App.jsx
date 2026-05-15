import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Work from './components/Work'
import BotPanel from './components/BotPanel'
import ViewCounter from './components/ViewCounter'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [stats, setStats] = useState({ totalViews: 0, currentViewing: 0 })
  const [scrollY, setScrollY] = useState(0)

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  useEffect(() => {
    console.log('🔍 Fetching data from:', `${API_URL}/api/data`)
    
    // Fetch portfolio data
    fetch(`${API_URL}/api/data`)
      .then(res => {
        console.log('📡 Response status:', res.status)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(d => {
        console.log('✅ Data loaded:', d)
        setData(d)
      })
      .catch(err => {
        console.error('❌ Failed to fetch data:', err)
        setError(err.message)
      })

    // Track view
    fetch(`${API_URL}/api/views`, { method: 'POST' })
      .then(res => console.log('📊 View tracked:', res.status))
      .catch(err => console.error('Failed to track view:', err))

    // Fetch stats
    const fetchStats = () => {
      fetch(`${API_URL}/api/stats`)
        .then(res => res.json())
        .then(s => {
          console.log('📈 Stats:', s)
          setStats(s)
        })
        .catch(err => console.error('Failed to fetch stats:', err))
    }
    fetchStats()
    const statsInterval = setInterval(fetchStats, 5000)

    // Scroll listener for animations
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(statsInterval)
    }
  }, [API_URL])

  if (error) {
    return (
      <div style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
        <h2>⚠️ Error Loading Data</h2>
        <p>{error}</p>
        <p>Make sure backend is running at: {API_URL}</p>
        <button onClick={() => window.location.reload()} style={{ padding: '0.8rem 1.5rem', background: '#fff', color: '#000', border: 'none', borderRadius: '0.3rem', cursor: 'pointer' }}>
          Try Again
        </button>
      </div>
    )
  }

  if (!data) {
    return (
      <div style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
        Loading your portfolio...
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <Hero data={data} scrollY={scrollY} />
      <ViewCounter stats={stats} />
      <Profile data={data} />
      <Hobbies hobbies={data.hobbies} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Work data={data} />
      <BotPanel apps={data.apps} bots={data.bots} apiUrl={API_URL} />
      <Footer data={data} />
    </div>
  )
}

export default App
