import React, { useEffect, useState } from 'react'

export default function Hero({ data, scrollY }) {
  const [videoProgress, setVideoProgress] = useState(0)

  useEffect(() => {
    // Calculate video progress based on scroll
    const progress = Math.min((scrollY / window.innerHeight) * 100, 100)
    setVideoProgress(progress)
  }, [scrollY])

  return (
    <section className="hero" id="hero">
      <div className="hero-video-container">
        {/* Simulated video background with scroll tracking */}
        <div 
          className="hero-video-bg" 
          style={{ 
            backgroundImage: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
            opacity: 1 - (videoProgress / 100) * 0.3,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="video-progress-indicator" style={{ width: `${videoProgress}%` }}></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hey, I'm {data.profile.name}</h1>
          <p className="hero-subtitle">{data.profile.bio}</p>
          <div className="hero-professions">
            {data.professions.map((prof, idx) => (
              <span key={idx} className="profession-badge">
                {prof.icon} {prof.title}
              </span>
            ))}
          </div>
          <p className="hero-location">📍 {data.profile.location}</p>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000;
        }

        .hero-video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hero-video-bg {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .video-progress-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: #fff;
          transition: width 0.3s ease;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: #fff;
        }

        .hero-text {
          animation: fadeIn 0.8s ease-out;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #ccc;
        }

        .hero-professions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .profession-badge {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          font-size: 0.9rem;
        }

        .hero-location {
          font-size: 1.1rem;
          color: #999;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}
