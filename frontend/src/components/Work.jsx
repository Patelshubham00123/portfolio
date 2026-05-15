import React from 'react'

export default function Work({ data }) {
  return (
    <section className="work" id="work">
      <div className="container">
        <h2>Professions & Connect</h2>
        
        <div className="professions-section">
          <h3>Current Roles</h3>
          <div className="professions-grid">
            {data.professions.map((prof, idx) => (
              <div key={idx} className="profession-item">
                <span className="prof-icon">{prof.icon}</span>
                <p>{prof.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="apps-section">
          <h3>Follow & Connect</h3>
          <div className="apps-grid">
            {data.apps.map((app, idx) => (
              <a 
                key={idx} 
                href={app.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-link"
                title={app.name}
              >
                <span className="app-icon">{app.icon}</span>
                <span className="app-name">{app.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="location-section">
          <h3>Based In</h3>
          <p className="location-info">
            📍 {data.profile.location}
          </p>
        </div>
      </div>

      <style>{`
        .work {
          padding: 6rem 2rem;
          background: #000;
          color: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .work h2 {
          font-size: 2.5rem;
          margin-bottom: 4rem;
          text-align: center;
        }

        .professions-section,
        .apps-section,
        .location-section {
          margin-bottom: 4rem;
        }

        .professions-section h3,
        .apps-section h3,
        .location-section h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #fff;
        }

        .professions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
        }

        .profession-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .profession-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
        }

        .prof-icon {
          display: block;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .profession-item p {
          font-size: 0.95rem;
          color: #ccc;
        }

        .apps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
        }

        .app-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .app-link:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-5px);
        }

        .app-icon {
          font-size: 2rem;
        }

        .app-name {
          font-size: 0.9rem;
          text-align: center;
          color: #ddd;
        }

        .location-section {
          text-align: center;
        }

        .location-info {
          font-size: 1.3rem;
          color: #ccc;
        }

        @media (max-width: 768px) {
          .work h2 {
            font-size: 1.8rem;
          }
          .professions-grid,
          .apps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
