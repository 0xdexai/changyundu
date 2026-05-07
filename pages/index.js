import Head from 'next/head'

const projects = [
  {
    id: 'barbarian',
    title: 'Barbarian Company Site',
    desc: 'Corporate website for the Barbarian company — design and frontend implementation.',
    img: '/Barbarians.png',
    link: 'https://barbarians.com/'
  },
  {
    id: 'medan',
    title: 'Medan',
    desc: 'A web product example focused on marketplace and listings.',
    img: '/Medan.png',
    link: 'https://devdash.medan.ai/'
  },
  {
    id: 'footymarket',
    title: 'footymarket',
    desc: 'E-commerce style shop for football/sports gear.',
    img: '/FootyMarket.png',
    link: 'https://dev-frontend.footymarket.com/'
  },
  {
    id: 'withvideo',
    title: 'Withvideo',
    desc: 'A media-sharing platform supporting short videos and embeds.',
    img: '/WithVideo.png',
    link: 'https://withvideo.ai/'
  }
]

const stack = [
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'REST APIs',
  'UI/UX Implementation',
  'Performance Optimization',
  'Testing'
]

const expertise = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    items: [
      { name: 'React', score: 95 },
      { name: 'Next.js', score: 92 },
      { name: 'JavaScript', score: 94 },
      { name: 'UI/UX Implementation', score: 90 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    items: [
      { name: 'Node.js', score: 88 },
      { name: 'REST APIs', score: 93 },
      { name: 'Performance Optimization', score: 86 },
      { name: 'Testing', score: 84 }
    ]
  },
  {
    id: 'delivery',
    title: 'Performance & Quality',
    items: [
      { name: 'Performance', score: 90 },
      { name: 'Accessibility', score: 85 },
      { name: 'Responsiveness', score: 94 },
      { name: 'Maintainability', score: 91 }
    ]
  }
]

const capabilities = [
  {
    title: 'Modern Frontend',
    desc: 'Responsive UI using React and Next.js with maintainable component architecture.'
  },
  {
    title: 'API Integration',
    desc: 'Reliable API design and integration for production-ready web products.'
  },
  {
    title: 'Performance',
    desc: 'Optimization for faster load times, smooth rendering, and stable experiences.'
  },
  {
    title: 'Product Delivery',
    desc: 'From idea to implementation with practical decisions and clean execution.'
  },
  {
    title: 'Code Quality',
    desc: 'Clear structure, reusable patterns, and testing for long-term maintainability.'
  },
  {
    title: 'Security Basics',
    desc: 'Secure defaults and careful handling of authentication and API access.'
  }
]

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Changyun du - Portfolio</title>
        <meta name="description" content="Portfolio of Changyun du" />
      </Head>

      <header className="topbar">
        <a href="#home" className="brand">CD</a>
        <nav className="topnav">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#gitlab-demo">GitLab</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>Changyun du</h1>
            <p className="role">Software Engineer at Barbarians, Inc</p>
            <p className="lead">
              Software Engineer building clean, practical and performant web products.
            </p>
            <div className="hero-tags">
              {stack.slice(0, 5).map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="mailto:xsope766@outlook.com" className="btn ghost">Get in Touch</a>
            </div>
            <div className="socials">
              <a href="mailto:xsope766@outlook.com">Email</a>
              <a href="mailto:chang@barbarians.com">Work</a>
              <a href="https://gitlab.com/dongmount16" target="_blank" rel="noopener noreferrer">GitLab</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img src="/api/profile" alt="Changyun du" className="hero-photo" />
          </div>
        </section>

        <section id="about" className="section-wrap">
          <div className="about-card">
            <h2>About Me</h2>
            <p>
              I focus on building user-centered web experiences with maintainable architecture,
              responsive implementation, and reliable delivery quality.
            </p>
            <div className="about-grid">
              <p><strong>Name:</strong> Changyun du</p>
              <p><strong>Company:</strong> Barbarians, Inc</p>
              <p><strong>Role:</strong> Software Engineer</p>
              <p><strong>Personal:</strong> <a href="mailto:xsope766@outlook.com">xsope766@outlook.com</a></p>
              <p><strong>Work:</strong> <a href="mailto:chang@barbarians.com">chang@barbarians.com</a></p>
            </div>
          </div>
        </section>

        <section id="expertise" className="section-wrap">
          <h2>Technical Expertise</h2>
          <div className="expertise-grid">
            {expertise.map(group => (
              <div className="expertise-card" key={group.id}>
                <h3>{group.title}</h3>
                <div className="bar-list">
                  {group.items.map(item => (
                    <div key={item.name} className="bar-item">
                      <div className="bar-label">
                        <span>{item.name}</span>
                        <span>{item.score}%</span>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: `${item.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <h2>Featured Projects</h2>
          <div className="project-list">
            {projects.map((p, i) => (
              <a key={p.id} className="project-row" href={p.link} target="_blank" rel="noopener noreferrer">
                <div className="project-copy">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-metrics">
                    <span>Frontend: {92 - i}%</span>
                    <span>UX: {89 - i}%</span>
                  </div>
                </div>
                <div className="project-image">
                  <img src={p.img} alt={p.title} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="gitlab-demo" className="section-wrap">
          <div className="video-card">
            <h2>GitLab</h2>
            <p>
              A short GitLab showcase video from my recent work. You can watch it directly here
              or open my GitLab profile for more details.
            </p>
            <div className="video-frame">
              <video controls preload="metadata">
                <source src="/api/gitlab-video" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <a
              href="https://gitlab.com/dongmount16"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              Open GitLab Profile
            </a>
          </div>
        </section>

        <section id="capabilities" className="section-wrap">
          <h2>Modern Web Capabilities</h2>
          <div className="cap-grid">
            {capabilities.map(item => (
              <div className="cap-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-wrap">
          <div className="contact-panel">
            <h2>Let's Build Something Amazing</h2>
            <p>Personal: <a href="mailto:xsope766@outlook.com">xsope766@outlook.com</a></p>
            <p>Work: <a href="mailto:chang@barbarians.com">chang@barbarians.com</a></p>
            <a className="btn primary" href="mailto:xsope766@outlook.com">Start a Project</a>
          </div>
        </section>

        <footer className="footer">© {new Date().getFullYear()} Changyun du</footer>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 12% -10%, rgba(59, 130, 246, 0.24), transparent 40%),
            radial-gradient(circle at 86% 6%, rgba(168, 85, 247, 0.2), transparent 38%),
            linear-gradient(180deg, #060b17 0%, #050816 100%);
          color: #e2e8f0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 28px;
          backdrop-filter: blur(12px);
          background: rgba(5, 10, 24, 0.72);
          border-bottom: 1px solid rgba(71, 85, 105, 0.45);
        }

        .brand {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          color: #ffffff;
          background: linear-gradient(135deg, #4f46e5, #22d3ee);
          box-shadow: 0 0 0 1px rgba(147, 197, 253, 0.2), 0 8px 18px rgba(37, 99, 235, 0.38);
        }

        .topnav {
          display: flex;
          gap: 18px;
        }

        .topnav a {
          text-decoration: none;
          color: #dbe5f2;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease, text-shadow 0.2s ease;
        }

        .topnav a:hover {
          color: #c4b5fd;
          text-shadow: 0 0 12px rgba(129, 140, 248, 0.42);
        }

        .section-wrap {
          width: min(1040px, 92%);
          margin: 0 auto;
          padding: 46px 0;
          animation: fadeUp 0.7s ease both;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 34px;
          align-items: center;
          min-height: 72vh;
          text-align: center;
        }

        .hero-copy {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .eyebrow {
          margin: 0 0 8px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.75rem;
          color: #a5b4fc;
          font-weight: 700;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.4rem);
          line-height: 1.03;
          letter-spacing: -0.02em;
          text-shadow: 0 0 22px rgba(129, 140, 248, 0.5), 0 0 55px rgba(96, 165, 250, 0.28);
        }

        .role {
          margin: 10px 0 6px;
          color: #c4b5fd;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .lead {
          margin-top: 10px;
          max-width: 50ch;
          color: #adbed3;
          font-size: 1rem;
        }

        .hero-tags {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          max-width: 550px;
        }

        .hero-tags span {
          padding: 7px 12px;
          border-radius: 999px;
          border: 1px solid rgba(71, 85, 105, 0.7);
          background: rgba(15, 23, 42, 0.55);
          font-size: 0.82rem;
          color: #cbd5e1;
          backdrop-filter: blur(8px);
        }

        .hero-actions {
          margin-top: 16px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.22);
        }

        .btn.primary {
          background: linear-gradient(135deg, #4f46e5, #06b6d4);
          color: #fff;
        }

        .btn.ghost {
          border: 1px solid rgba(71, 85, 105, 0.75);
          color: #dbeafe;
          background: rgba(15, 23, 42, 0.45);
        }

        .socials {
          margin-top: 14px;
          display: flex;
          gap: 14px;
          justify-content: center;
        }

        .socials a {
          font-size: 0.88rem;
          color: #a5b4fc;
        }

        .hero-photo-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-photo {
          width: min(320px, 100%);
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 22px;
          border: 4px solid rgba(15, 23, 42, 0.9);
          box-shadow: 0 18px 42px rgba(2, 6, 23, 0.6), 0 0 0 1px rgba(148, 163, 184, 0.2);
          animation: floatPhoto 5s ease-in-out infinite;
        }

        .about-card {
          background: linear-gradient(150deg, rgba(15, 23, 42, 0.82), rgba(10, 19, 36, 0.78));
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 14px;
          padding: 24px;
          backdrop-filter: blur(10px);
          box-shadow: 0 16px 34px rgba(2, 6, 23, 0.3);
        }

        .about-grid {
          margin-top: 14px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          max-width: 520px;
        }

        .about-grid p {
          margin: 0;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        .expertise-card {
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.82), rgba(10, 19, 36, 0.78));
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 14px;
          padding: 16px;
          backdrop-filter: blur(10px);
        }

        .expertise-card h3 {
          margin: 0 0 12px;
          font-size: 1rem;
        }

        .bar-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.84rem;
          color: #a3b2c5;
          margin-bottom: 5px;
        }

        .bar-track {
          width: 100%;
          height: 8px;
          border-radius: 10px;
          background: #1f2d43;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          animation: growBar 1s ease both;
        }

        .project-list {
          display: grid;
          gap: 18px;
        }

        .project-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          background: linear-gradient(150deg, rgba(14, 23, 40, 0.86), rgba(10, 19, 36, 0.8));
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 14px;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          backdrop-filter: blur(10px);
        }

        .project-row:hover {
          transform: translateY(-3px);
          border-color: #64748b;
          box-shadow: 0 20px 34px rgba(2, 6, 23, 0.35);
        }

        .project-copy {
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
        }

        .project-copy h3 {
          margin: 0;
        }

        .project-copy p {
          margin: 0;
          color: #adbed3;
        }

        .project-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(120px, 1fr));
          gap: 8px;
          color: #c4b5fd;
          font-size: 0.86rem;
          font-weight: 600;
        }

        .project-image {
          min-height: 220px;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.05) contrast(1.02);
        }

        .video-card {
          background: linear-gradient(150deg, rgba(15, 23, 42, 0.82), rgba(10, 19, 36, 0.78));
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 14px;
          padding: 24px;
          display: grid;
          gap: 14px;
          backdrop-filter: blur(10px);
          box-shadow: 0 16px 34px rgba(2, 6, 23, 0.3);
        }

        .video-card h2,
        .video-card p {
          margin: 0;
        }

        .video-card p {
          color: #adbed3;
          max-width: 70ch;
        }

        .video-frame {
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(71, 85, 105, 0.55);
          background: #0b1220;
        }

        .video-frame video {
          width: 100%;
          display: block;
          max-height: 520px;
        }

        .cap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .cap-card {
          background: linear-gradient(160deg, rgba(14, 23, 40, 0.86), rgba(10, 19, 36, 0.8));
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 12px;
          padding: 18px;
          min-height: 135px;
          backdrop-filter: blur(10px);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .cap-card:hover {
          transform: translateY(-3px);
          border-color: #64748b;
        }

        .cap-card h4 {
          margin: 0 0 8px;
        }

        .cap-card p {
          margin: 0;
          color: #9fb0c4;
        }

        .contact-panel {
          width: min(560px, 100%);
          margin: 0 auto;
          text-align: center;
          background: linear-gradient(160deg, rgba(14, 23, 40, 0.86), rgba(10, 19, 36, 0.8));
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 14px;
          padding: 28px 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 16px 36px rgba(2, 6, 23, 0.34);
        }

        .footer {
          padding: 32px 0 40px;
          text-align: center;
          color: #94a3b8;
        }

        a {
          color: #93c5fd;
        }

        a:hover {
          color: #bfdbfe;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatPhoto {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes growBar {
          from {
            width: 0;
          }
        }

        @media (max-width: 840px) {
          .topbar {
            padding: 12px 18px;
          }

          .topnav {
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .hero {
            grid-template-columns: 1fr;
            min-height: auto;
            padding-top: 26px;
          }

          .hero-photo {
            width: min(280px, 100%);
          }

          .project-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
