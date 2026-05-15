import React from 'react'

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">Portfolio</div>
        <ul className="nav-menu">
          <li><a onClick={() => scrollToSection('profile')}>Profile</a></li>
          <li><a onClick={() => scrollToSection('hobbies')}>Hobbies</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('work')}>Work</a></li>
        </ul>
      </nav>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
        }

        .nav-menu {
          list-style: none;
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-menu li a {
          color: #aaa;
          text-decoration: none;
          font-size: 0.95rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-menu li a:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .nav {
            padding: 1rem 2rem;
          }

          .nav-brand {
            font-size: 1.2rem;
          }

          .nav-menu {
            gap: 1rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </header>
  )
}
