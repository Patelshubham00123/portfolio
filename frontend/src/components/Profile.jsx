import React from 'react'

export default function Profile({ data }) {
  return (
    <section className="profile" id="profile">
      <div className="container">
        <h2>About Me</h2>
        <div className="profile-content">
          <div className="profile-text">
            <p>{data.profile.bio}</p>
            <p>Based in {data.profile.location}</p>
            <p>Email: {data.profile.email}</p>
          </div>
        </div>
      </div>

      <style>{`
        .profile {
          padding: 6rem 2rem;
          background: #000;
          color: #fff;
          border-top: 1px solid #1a1a1a;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .profile h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }

        .profile-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .profile-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ccc;
        }

        .profile-text p {
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .profile-content {
            grid-template-columns: 1fr;
          }
          .profile h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  )
}
