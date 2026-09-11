import { ContainerScroll } from './components/ui/container-scroll-animation';

const skillGroups = [
  {
    title: 'Top skills',
    items: ['Engineering', 'Graphic Design', 'Data analysis', 'PPT presentation', 'C', 'Python', 'AI & ML'],
  },
  {
    title: 'Current focus',
    items: ['B.Tech 1st year', 'Looking for Internships', 'Nabarangpur, Odisha, India'],
  },
];

const educationItems = [
  {
    year: '2025',
    title: 'GIET University Gunupur',
    description: 'Education details beyond the institution name are not available in the profile PDF.',
  },
  {
    year: 'Current',
    title: 'B.Tech 1st year',
    description: 'The profile PDF confirms the current study stage but does not include additional course details.',
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a href="#top" className="brand" aria-label="Go to home section">
            <span className="brand-mark">AD</span>
            <span className="brand-text">Archita Dash</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button-small" href="#contact">
            Let’s talk
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <ContainerScroll
            titleComponent={
              <>
                <p className="eyebrow hero-eyebrow">B.Tech 1st year • AI & ML aspirant</p>
                <h1 className="scroll-hero-title">Archita Dash</h1>
              </>
            }
          >
            <div className="scroll-hero-media">
              <div className="scroll-hero-overlay" />
              <div className="scroll-hero-content">
                <p className="eyebrow">Portfolio background</p>
                <h2>Engineering, AI & ML, data analysis, and design.</h2>
              </div>
            </div>
          </ContainerScroll>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">B.Tech 1st year • AI & ML aspirant</p>
              <h1>Archita Dash</h1>
              <p className="lead">
                Graphic Design • Data analysis • PPT presentation • Programming Language (C, Python) •
                specialization (AI & ML)
              </p>

              <div className="cta-row">
                <a className="button" href="#projects">
                  View projects
                </a>
                <a className="button button-secondary" href="#about">
                  Learn more
                </a>
              </div>

              <ul className="stats" aria-label="Key profile details">
                <li>
                  <strong>1st</strong>
                  <span>Year of B.Tech</span>
                </li>
                <li>
                  <strong>7</strong>
                  <span>Top skills listed</span>
                </li>
                <li>
                  <strong>Open</strong>
                  <span>To internships</span>
                </li>
              </ul>
            </div>

            <div className="hero-panel" aria-label="Profile summary card">
              <div className="panel-glow" />
              <div className="profile-card">
                <div className="profile-image">
                  <span>AD</span>
                </div>

                <div className="profile-meta">
                  <p className="label">Based in</p>
                  <h2>Nabarangpur, Odisha, India</h2>
                </div>

                <div className="profile-meta">
                  <p className="label">Current status</p>
                  <h2>Looking for internships</h2>
                </div>

                <div className="profile-meta">
                  <p className="label">Current focus</p>
                  <h2>Engineering • AI & ML • Data analysis • Graphic Design</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <div className="section-heading">
              <p className="eyebrow">About</p>
              <h2>Profile summary</h2>
            </div>

            <div className="empty-state-box">
              <p className="empty-state">
                Missing from the profile PDF: a detailed About section with personal background and
                long-form summary.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-muted">
          <div className="container">
            <div className="section-heading split">
              <div>
                <p className="eyebrow">Projects</p>
                <h2>Selected work</h2>
              </div>
            </div>

            <div className="empty-state-box">
              <p className="empty-state">
                Missing from the profile PDF: project names, descriptions, and links.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container narrow">
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Tools and strengths</h2>
            </div>

            <div className="skills-layout">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section section-muted">
          <div className="container narrow">
            <div className="section-heading">
              <p className="eyebrow">Education</p>
              <h2>Background and learning path</h2>
            </div>

            <div className="timeline" aria-label="Education timeline">
              {educationItems.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <p className="timeline-year">{item.year}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-box">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s connect and explore opportunities.</h2>
            </div>

            <div className="contact-actions">
              <a className="button" href="mailto:dasharchita150@gmail.com">
                dasharchita150@gmail.com
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/archita-dash-300a1937a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>© {new Date().getFullYear()} Archita Dash</p>
          <p>Built to be clear, fast, and easy to explore.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
