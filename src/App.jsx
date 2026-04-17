import { useEffect } from "react";
import "./App.css";
import { resumeData } from "./resumeData";

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cert-icon"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TerminalPrompt = () => (
  <span className="terminal-prompt">{`root@sg:~#`}</span>
);

function App() {
  useEffect(() => {
    document.title = `[SYS] ${resumeData.name} | Security`;
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <a href="#" className="logo">
            [SYS_ADMIN]
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-link">
              // About
            </a>
            <a href="#skills" className="nav-link">
              // Skills
            </a>
            <a href="#experience" className="nav-link">
              // Experience
            </a>
            <a href="#certifications" className="nav-link">
              // Certs
            </a>
            <a href="#contact" className="nav-link">
              // Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="hero">
          <h1>
            <span className="terminal-prompt">{`>`}</span>
            <span className="glitch glow-text" data-text={resumeData.name}>
              {resumeData.name}
            </span>
          </h1>
          <p>{resumeData.summary}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              INIT_CONTACT
            </a>
            <a href="#experience" className="btn btn-glass">
              VIEW_LOGS
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>
            <TerminalPrompt /> Technical_Expertise
          </h2>
          <div className="skills-grid">
            {Object.entries(resumeData.skills).map(([category, items]) => (
              <div key={category} className="glass-card skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2>
            <TerminalPrompt /> Professional_Experience
          </h2>
          <div className="timeline">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="glass-card timeline-item">
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <span className="duration">{exp.duration}</span>
                <ul>
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section id="certifications">
          <h2>
            <TerminalPrompt /> Education_&_Certifications
          </h2>

          <div className="timeline" style={{ marginBottom: "3rem" }}>
            {resumeData.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card timeline-item"
                style={{ padding: "1.5rem" }}
              >
                <h3 style={{ fontSize: "1.1rem" }}>{edu.degree}</h3>
                <div className="company" style={{ color: "var(--text-muted)" }}>
                  {edu.school}
                </div>
                <span className="duration">{edu.duration}</span>
              </div>
            ))}
          </div>

          <div className="certs-grid">
            {resumeData.certifications.map((cert, idx) => (
              <div key={idx} className="glass-card cert-card">
                <ShieldIcon />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>
            <TerminalPrompt /> Ping_Me
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Awaiting new connections. Port open on port 443.
          </p>

          <div className="contact-links">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="glass-card contact-item"
            >
              <MailIcon />
              {resumeData.contact.email}
            </a>

            <a
              href={`tel:${resumeData.contact.phone.replace(/\s+/g, "")}`}
              className="glass-card contact-item"
            >
              <PhoneIcon />
              {resumeData.contact.phoneDisplay}
            </a>

            <a
              href={`https://${resumeData.contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="glass-card contact-item"
            >
              <LinkedinIcon />
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          {`[SYSTEM OFF]`} &copy; {new Date().getFullYear()} {resumeData.name}.
          Extracted via Secure Protocol.
        </p>
      </footer>
    </div>
  );
}

export default App;
