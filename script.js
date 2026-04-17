document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Populate Skills
  const skillsGrid = document.getElementById("skillsGrid");
  for (const [category, items] of Object.entries(resumeData.skills)) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "glass-card skill-category";
    
    const h3 = document.createElement("h3");
    h3.textContent = category;
    categoryDiv.appendChild(h3);
    
    const tagsDiv = document.createElement("div");
    tagsDiv.className = "skill-tags";
    items.forEach(skill => {
      const span = document.createElement("span");
      span.className = "skill-tag";
      span.textContent = skill;
      tagsDiv.appendChild(span);
    });
    categoryDiv.appendChild(tagsDiv);
    skillsGrid.appendChild(categoryDiv);
  }

  // Populate Experience
  const expTimeline = document.getElementById("experienceTimeline");
  resumeData.experience.forEach(exp => {
    const item = document.createElement("div");
    item.className = "glass-card timeline-item";
    
    const h3 = document.createElement("h3");
    h3.textContent = exp.title;
    item.appendChild(h3);
    
    const company = document.createElement("div");
    company.className = "company";
    company.textContent = exp.company;
    item.appendChild(company);
    
    const duration = document.createElement("span");
    duration.className = "duration";
    duration.textContent = exp.duration;
    item.appendChild(duration);
    
    const ul = document.createElement("ul");
    exp.achievements.forEach(ach => {
      const li = document.createElement("li");
      li.textContent = ach;
      ul.appendChild(li);
    });
    item.appendChild(ul);
    expTimeline.appendChild(item);
  });

  // Populate Education
  const eduTimeline = document.getElementById("educationTimeline");
  resumeData.education.forEach(edu => {
    const item = document.createElement("div");
    item.className = "glass-card timeline-item";
    item.style.padding = "1.5rem";
    
    const h3 = document.createElement("h3");
    h3.style.fontSize = "1.1rem";
    h3.textContent = edu.degree;
    item.appendChild(h3);
    
    const school = document.createElement("div");
    school.className = "company";
    school.style.color = "var(--text-muted)";
    school.textContent = edu.school;
    item.appendChild(school);
    
    const duration = document.createElement("span");
    duration.className = "duration";
    duration.textContent = edu.duration;
    item.appendChild(duration);
    eduTimeline.appendChild(item);
  });

  // Populate Certifications
  const certsGrid = document.getElementById("certsGrid");
  const shieldIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cert-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
  resumeData.certifications.forEach(cert => {
    const card = document.createElement("div");
    card.className = "glass-card cert-card";
    card.innerHTML = `${shieldIcon}<span>${cert}</span>`;
    certsGrid.appendChild(card);
  });

  // --- 3D Parallax & Mouse Listeners ---
  const handleScroll = () => {
    document.documentElement.style.setProperty('--scroll', window.scrollY);
  };

  const handleMouseMove = (e) => {
    const x = ((e.clientX / window.innerWidth) - 0.5) * 15; // Range -7.5 to 7.5
    const y = ((e.clientY / window.innerHeight) - 0.5) * 15;
    document.documentElement.style.setProperty('--mouse-x', `${x}deg`);
    document.documentElement.style.setProperty('--mouse-y', `${-y}deg`);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
});
