import React from 'react'

export default function Projects({ projects }) {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-image">
                <div className="image-placeholder">{project.id}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
          padding: 6rem 2rem;
          background: #000;
          color: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 0.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          border-color: #fff;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
        }

        .project-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .image-placeholder {
          font-size: 3rem;
          color: #444;
          font-weight: bold;
        }

        .project-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .project-card p {
          color: #aaa;
          margin-bottom: 1rem;
          flex: 1;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.7rem;
          border-radius: 0.2rem;
          font-size: 0.8rem;
          color: #ccc;
        }

        @media (max-width: 768px) {
          .projects h2 {
            font-size: 1.8rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
