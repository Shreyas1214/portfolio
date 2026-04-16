import { useState } from 'react';
import { Mail, Network, MapPin, ChevronDown, Terminal, Shield, Award, Server } from 'lucide-react';
import './index.css';

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem' }} className="gradient-text">
          Shreyas Ghevariya
        </h1>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', fontWeight: 300, marginBottom: '2rem' }}>
          Junior Technical Analyst & Cyber Operations Support
        </h2>
        
        <div className="flex items-center gap-4 mb-4" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="flex items-center gap-2 text-secondary">
            <MapPin size={18} /> Etobicoke, ON
          </div>
          <a href="mailto:shreyasghevariya21@gmail.com" className="flex items-center gap-2">
            <Mail size={18} /> shreyasghevariya21@gmail.com
          </a>
          <a href="https://linkedin.com/in/shreyas-ghevariya" target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <Network size={18} /> LinkedIn Profile
          </a>
        </div>
        
        <div style={{ marginTop: '5rem' }}>
          <ChevronDown size={32} style={{ margin: '0 auto', animation: 'bounce 2s infinite', color: 'var(--text-secondary)' }} />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Professional Summary</span></h2>
        <div className="glass-panel">
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Attention to detail-oriented professional eager to perform <strong>application and batch monitoring</strong> to ensure operational risk is mitigated. Proven ability to prevent service outages through strategic alert monitoring and rapid diagnosis. Adept at evaluating production problem logs to identify appropriate actions. 
            <br/><br/>
            Experienced in running <strong>automation scripts (Python, PowerShell)</strong> to handle transactional loads. Committed to providing technical assistance and strictly adhering to <strong>Service Level Agreements (SLA's)</strong>. Strong knowledge of TCP/IP, LAN, and troubleshooting principles to ensure stability in domestic batch processing and retail banking environments.
          </p>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Core Competencies</span></h2>
        
        <div className="skills-grid">
          <div className="glass-panel">
            <div className="flex items-center gap-2 mb-4">
              <Server color="var(--accent-color)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Production & Support</h3>
            </div>
            <div>
              <span className="skill-tag">Application Monitoring</span>
              <span className="skill-tag">Batch Monitoring</span>
              <span className="skill-tag">Incident Response</span>
              <span className="skill-tag">Root Cause Analysis</span>
              <span className="skill-tag">Risk Mitigation</span>
              <span className="skill-tag">UAT Support</span>
            </div>
          </div>
          
          <div className="glass-panel">
            <div className="flex items-center gap-2 mb-4">
              <Terminal color="var(--accent-color)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Automation & Scripting</h3>
            </div>
            <div>
              <span className="skill-tag">Python Scripts</span>
              <span className="skill-tag">PowerShell</span>
              <span className="skill-tag">Shell Scripting</span>
              <span className="skill-tag">Workload Automation</span>
              <span className="skill-tag">Task Optimization</span>
            </div>
          </div>
          
          <div className="glass-panel">
            <div className="flex items-center gap-2 mb-4">
              <Network color="var(--accent-color)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Networking & Systems</h3>
            </div>
            <div>
              <span className="skill-tag">TCP/IP</span>
              <span className="skill-tag">LAN/WAN</span>
              <span className="skill-tag">Unix/Linux</span>
              <span className="skill-tag">SQL Basics</span>
              <span className="skill-tag">Retail Banking Apps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Professional Experience</span></h2>
        
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="glass-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Information Security & Operations Analyst</h3>
                  <h4 style={{ color: 'var(--accent-color)', fontWeight: 500 }}>Federation for the Humanities and Social Sciences (Toronto, ON)</h4>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.5rem' }}>Dec 2024 – Present</div>
              </div>
              
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-primary)' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Operational Support & Monitoring:</strong> Perform continuous application and batch monitoring to identify and mitigate operational risks, effectively preventing 10+ potential service outages per month.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Automation Impact:</strong> Developed and maintained automation scripts to streamline repetitive tasks, reducing manual workload by 20+ hours weekly and increasing processing efficiency by 30%.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Technical Assistance:</strong> Provide technical assistance and production operational support, investigating complex incidents to ensure rapid resolution and maintaining 99.9% system uptime.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>SLA Management:</strong> Focused on timelines and Service Level Agreements, consistently achieving 100% compliance in a high-pressure environment.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="glass-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Cybersecurity & Systems Analyst</h3>
                  <h4 style={{ color: 'var(--accent-color)', fontWeight: 500 }}>Career Technology Cybersecurity India Pvt Ltd (Mumbai, MH)</h4>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.5rem' }}>Feb 2022 – Mar 2023</div>
              </div>
              
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-primary)' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Troubleshooting:</strong> Demonstrated working knowledge of basic troubleshooting principles to investigate critical incidents, identifying root causes and minimizing incident recurrence by 37%.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Process Adaptation:</strong> Adapted to changes in process/procedure focusing on risk mitigation, resulting in a 15% increase in client satisfaction.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Cross-Functional Support:</strong> Built ongoing relationships with business partners through strong interpersonal skills, closing 150+ vulnerabilities ahead of schedule.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Data-Driven Decisions:</strong> Leveraged metrics to track system performance, ensuring alignment with organizational requirements.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Key Projects & Community Engagement</span></h2>
        
        <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem', color: '#818cf8' }}>Incident Response Optimization</h3>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
              Streamlined operational procedures and playbooks, resulting in a <strong>95% resolution rate</strong> for reported incidents and improving average response times by 37%.
            </p>
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem', color: '#c084fc' }}>Automated Threat Correlation</h3>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
              Deployed automated tools to correlate logs and alerts, reducing manual analysis time by <strong>45%</strong> and allowing for faster detection of potential outages.
            </p>
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem', color: '#38bdf8' }}>Community Engagement</h3>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
              Actively participate in community engagement initiatives and hackathons, fostering an inclusive culture and continuous learning.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="section" style={{ paddingBottom: '8rem' }}>
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Education & Certifications</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="glass-panel" style={{ gridColumn: '1 / -1' }}>
            <div className="flex items-center gap-2 mb-6">
              <Award color="var(--accent-color)" size={28} />
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700 }}>Education</h3>
            </div>
            
            <div style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--accent-color)', paddingLeft: '1rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Post Graduation Diploma in Cybersecurity</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Loyalist College, Toronto, ON | May 2023 – Dec 2024</p>
            </div>
            
            <div style={{ borderLeft: '3px solid var(--accent-border, rgba(255,255,255,0.2))', paddingLeft: '1rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>B.Sc. in Information Technology</h4>
              <p style={{ color: 'var(--text-secondary)' }}>K.E.S Shroff College, Mumbai | Jun 2019 – May 2022</p>
            </div>
          </div>
          
          <div className="glass-panel" style={{ gridColumn: '1 / -1' }}>
            <div className="flex items-center gap-2 mb-6">
              <Shield color="var(--accent-color)" size={28} />
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700 }}>Certifications</h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--accent-color)', borderRadius: '12px', padding: '1rem 1.5rem', flex: '1 1 200px' }}>
                <span style={{ fontWeight: 600, display: 'block' }}>CompTIA Security+</span>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>2023 - 2026</span>
              </div>
              <div style={{ background: 'rgba(129, 140, 248, 0.1)', border: '1px solid #818cf8', borderRadius: '12px', padding: '1rem 1.5rem', flex: '1 1 200px' }}>
                <span style={{ fontWeight: 600, display: 'block' }}>Certified Ethical Hacker (CEH)</span>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>2023 - 2026</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', padding: '1rem 1.5rem', flex: '1 1 200px' }}>
                <span style={{ fontWeight: 600, display: 'block' }}>ISO/IEC 27001 Associate</span>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>2022</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', padding: '1rem 1.5rem', flex: '1 1 200px' }}>
                <span style={{ fontWeight: 600, display: 'block' }}>CompTIA CySA+</span>
                <span style={{ fontSize: '0.85rem', color: '#38bdf8' }}>In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
