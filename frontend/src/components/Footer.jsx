import React from 'react'

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Patel Shubham</h4>
            <p>{data.profile.bio}</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#profile">Profile</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#work">Work</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <p>Email: {data.profile.email}</p>
            <p>Location: {data.profile.location}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Patel Shubham. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #000;
          color: #fff;
          border-top: 1px solid #1a1a1a;
          padding: 4rem 2rem 2rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .footer-section p {
          color: #aaa;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 0.5rem;
        }

        .footer-section a {
          color: #aaa;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-section a:hover {
          color: #fff;
        }

        .footer-bottom {
          border-top: 1px solid #1a1a1a;
          padding-top: 2rem;
          text-align: center;
          color: #666;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
