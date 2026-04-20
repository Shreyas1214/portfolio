import './styles.css';

const resumeData = {
  name: 'Shreyas Ghevariya',
  roles: ['Cybersecurity Specialist', 'SOC Analyst', 'Cyber Security Analyst'],
  contact: {
    email: 'shreyasghevariya72@gmail.com',
    phone: '+12262720595',
    phoneDisplay: '+1 226 272 0595',
    location: 'Toronto, Canada',
    linkedin: 'www.linkedin.com/in/shreyas-ghevariya/'
  },
  summary: 'Detail-oriented Cybersecurity Analyst with 4+ years of experience protecting complex IT infrastructures and ensuring compliance with global security standards.',
  skills: {
    'SIEM Platforms': ['Splunk', 'Microsoft Sentinel', 'IBM QRadar', 'Elastic Stack'],
    'Cloud Security': ['Azure Security Center', 'AWS GuardDuty', 'GCP Chronicle', 'Azure AD'],
    'Endpoint Security': ['CrowdStrike Falcon', 'SentinelOne', 'Microsoft Defender ATP', 'Carbon Black'],
    'Vulnerability Management': ['Qualys', 'Nessus', 'Tenable.io', 'OpenVAS'],
    'Network Security': ['Cisco ASA', 'Palo Alto', 'Fortinet', 'Snort', 'VPNs', 'TCP/IP'],
    'Penetration Testing': ['Metasploit', 'Burp Suite', 'Nmap', 'OWASP ZAP', 'Kali Linux'],
    'Response & Forensics': ['Wireshark', 'Volatility', 'FTK Imager', 'Incident Response Protocol'],
    'DevSecOps & Automation': ['Jenkins', 'GitLab CI', 'Snyk', 'Terraform', 'Ansible', 'Python', 'Bash', 'PowerShell'],
    'Identity & Compliance': ['Azure AD', 'IAM', 'Okta', 'ISO 27001', 'GDPR', 'PCI DSS']
  },
  experience: [
    {
      title: 'Information Security Analyst',
      company: 'Federation for the Humanities and Social Sciences | Canada',
      duration: '02/2024 \u2013 Present',
      achievements: [
        'Designed and implemented network security protocols, including Cisco ASA and Palo Alto firewall configurations and IDS/IPS to protect against unauthorized access.',
        'Configured and managed VPN solutions for secure remote access, maintaining seamless connectivity.',
        'Secured multi-cloud environments using AWS Guard Duty, Azure Defender, and Azure AD, ensuring risk mitigation and compliance.',
        'Deployed and monitored endpoint security solutions such as CrowdStrike, SentinelOne, and Carbon Black to protect against malware and ransomware.',
        'Conducted vulnerability assessments and penetration testing using Nessus, Qualys, Metasploit, and OWASP ZAP.',
        'Orchestrated security operations with SIEM (Splunk, IBM QRadar) and SOAR tools, automating threat detection and response.',
        'Managed enterprise email security with Proofpoint and Avanan, reducing phishing and spam risks by 95%.',
        'Automated security tasks with Python, Bash, and PowerShell, improving efficiency by 30%.'
      ]
    },
    {
      title: 'Cyber Security Operations Analyst',
      company: 'Career Technology Cybersecurity India Pvt Ltd | India',
      duration: '02/2021 \u2013 03/2023',
      achievements: [
        'Monitored and analysed network traffic using SIEM tools such as Splunk and QRadar for real-time threat detection and rapid incident response.',
        'Strengthened network security by configuring and managing firewalls, IDS/IPS, and VPNs.',
        'Conducted risk assessments and vulnerability scans using Nessus and Qualys, integrating findings into ServiceNow.',
        'Enhanced cloud security by implementing robust IAM policies and leveraging cloud-native monitoring tools.',
        'Conducted penetration testing and phishing simulations to assess and mitigate risks.',
        'Developed and implemented security policies and procedures, delivering internal training programs.'
      ]
    }
  ],
  education: [
    {
      degree: 'Post Graduation Diploma in Cybersecurity',
      school: 'Loyalist College, Toronto',
      duration: 'May 2023 \u2013 Dec 2024'
    },
    {
      degree: 'B.Sc. in Information Technology',
      school: 'K.E.S Shroff College, Mumbai',
      duration: 'Jun 2019 \u2013 May 2022'
    }
  ],
  certifications: [
    'Certified Ethical Hacker (CEH) \u2013 EC-Council',
    'CompTIA Security+ \u2013 CompTIA',
    'Certified Penetration Testing Engineer (CPTE) \u2013 Mile2',
    'Certified Professional Ethical Hacker (CPEH) \u2013 Mile2',
    'Certified in Cybersecurity (CC) \u2013 ISC2',
    'NSE 1 Network Security Associate \u2013 Fortinet',
    'Ransomware Uncovered Specialist \u2013 ICTTF',
    'ISO/IEC 27001 Associate',
    'Teramind Foundations Certified',
    'Artificial Intelligence \u2013 TCS iON',
    'CompTIA CySA+ (In Progress)'
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Populate Skills
  const skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid) {
    for (const [category, items] of Object.entries(resumeData.skills)) {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'mac-card skill-category reveal';
      const h3 = document.createElement('h3');
      h3.textContent = category;
      categoryDiv.appendChild(h3);
      const tagsDiv = document.createElement('div');
      tagsDiv.className = 'skill-tags';
      (items as string[]).forEach((skill: string) => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = skill;
        tagsDiv.appendChild(span);
      });
      categoryDiv.appendChild(tagsDiv);
      skillsGrid.appendChild(categoryDiv);
    }
  }

  // Populate Experience
  const expTimeline = document.getElementById('experienceTimeline');
  if (expTimeline) {
    resumeData.experience.forEach(exp => {
      const item = document.createElement('div');
      item.className = 'mac-card timeline-item reveal';
      const h3 = document.createElement('h3');
      h3.textContent = exp.title;
      item.appendChild(h3);
      const company = document.createElement('div');
      company.className = 'company';
      company.textContent = exp.company;
      item.appendChild(company);
      const duration = document.createElement('span');
      duration.className = 'duration';
      duration.textContent = exp.duration;
      item.appendChild(duration);
      const ul = document.createElement('ul');
      exp.achievements.forEach(ach => {
        const li = document.createElement('li');
        li.textContent = ach;
        ul.appendChild(li);
      });
      item.appendChild(ul);
      expTimeline.appendChild(item);
    });
  }

  // Populate Education
  const eduTimeline = document.getElementById('educationTimeline');
  if (eduTimeline) {
    resumeData.education.forEach(edu => {
      const item = document.createElement('div');
      item.className = 'mac-card timeline-item reveal';
      item.style.padding = '1.5rem 2.5rem';
      const h3 = document.createElement('h3');
      h3.style.fontSize = '1.15rem';
      h3.textContent = edu.degree;
      item.appendChild(h3);
      const school = document.createElement('div');
      school.className = 'company';
      school.textContent = edu.school;
      item.appendChild(school);
      const duration = document.createElement('span');
      duration.className = 'duration';
      duration.textContent = edu.duration;
      item.appendChild(duration);
      eduTimeline.appendChild(item);
    });
  }

  // Populate Certifications
  const certsGrid = document.getElementById('certsGrid');
  if (certsGrid) {
    const shieldSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cert-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
    resumeData.certifications.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'mac-card cert-card reveal';
      card.innerHTML = `${shieldSvg}<span>${cert}</span>`;
      certsGrid.appendChild(card);
    });
  }

  // Parallax effect
  const parallaxEls = document.querySelectorAll('.parallax-el');
  const speeds = [0.2, -0.15, 0.25];

  const handleScroll = () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach((el, i) => {
      const speed = speeds[i] || 0.1;
      const yPos = scrollY * speed;
      const rot = scrollY * speed * 0.015;
      (el as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${rot}deg)`;
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Add reveal class to bug bounty cards
  document.querySelectorAll('.bb-hero-card, .bb-badge-item, .achievement-card').forEach(el => {
    el.classList.add('reveal');
  });

  // Scroll reveal with IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
