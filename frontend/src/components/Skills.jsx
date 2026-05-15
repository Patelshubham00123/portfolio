import React from 'react'

export default function Skills({ skills }) {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skill-items">
                {items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills {
          padding: 6rem 2rem;
          background: #1a1a1a;
          color: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.03);
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
        }

        .skill-category h3 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          text-transform: capitalize;
          color: #fff;
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.08);
          padding: 0.6rem 1.2rem;
          border-radius: 0.3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }

        .skill-item:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .skill-name {
          font-size: 0.95rem;
          color: #ddd;
        }

        @media (max-width: 768px) {
          .skills h2 {
            font-size: 1.8rem;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
