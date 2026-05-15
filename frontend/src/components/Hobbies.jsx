import React from 'react'

export default function Hobbies({ hobbies }) {
  return (
    <section className="hobbies" id="hobbies">
      <div className="container">
        <h2>Hobbies & Interests</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, idx) => (
            <div key={idx} className="hobby-card">
              <div className="hobby-icon">{hobby.icon}</div>
              <h3>{hobby.name}</h3>
              <p className="hobby-time">⏱️ {hobby.time}</p>
              <p className="hobby-desc">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hobbies {
          padding: 6rem 2rem;
          background: #1a1a1a;
          color: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hobbies h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }

        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .hobby-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          text-align: center;
        }

        .hobby-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
        }

        .hobby-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hobby-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .hobby-time {
          color: #aaa;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .hobby-desc {
          color: #888;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hobbies h2 {
            font-size: 1.8rem;
          }
          .hobbies-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
