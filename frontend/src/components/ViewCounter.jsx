import React from 'react'

export default function ViewCounter({ stats }) {
  return (
    <section className="view-counter">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-value">{stats.totalViews.toLocaleString()}</div>
          <div className="stat-label">Total Views</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">{stats.currentViewing}</div>
          <div className="stat-label">Currently Viewing</div>
        </div>
      </div>

      <style>{`
        .view-counter {
          background: linear-gradient(90deg, #000 0%, #1a1a1a 50%, #000 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          color: #fff;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .stats-container {
            gap: 1rem;
          }

          .stat-divider {
            height: 30px;
          }

          .stat-value {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
