// Initialize AOS-like reveal effects
let revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight * 0.85) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

// Sample Data
const portfolioData = {
  name: "Jasphier Nick C. Nuyad",
  roles: ["Full-Stack Developer", "System Architect", "UI/UX Enthusiast", "IT Specialist"],
  aboutMe: {
    bio: [
      "I am a Information Technology (BSIT) student with a passion for building secure, efficient, and innovative digital solutions. My academic journey has driven me deep into the worlds of cybersecurity, ethical hacking, and information security compliance. I thrive on understanding how systems work and how to protect them. Beyond the technical logic of security frameworks, I also have a keen eye for visual design and digital aesthetics, blending analytical problem-solving with a creative edge. I am eager to leverage my skills to help organizations secure their digital assets and navigate complex compliance landscapes."
    ]
  },
  projects: [
    {
      title: "SmartPMC",
      subtitle: "Pre-Marriage Counseling Management System",
      description: "Developed a web-based management portal to streamline counselor assignments, applicant registration schedules, documentation, and secure certificate generation workflows.",
      tech: ["PHP", "Node.js", "MySQL"],
      image: "/assets/smart-pmoc.jpg"
    },
    {
      title: "HealthCore Management System",
      description: "A comprehensive healthcare platform designed for patient records, appointment scheduling, and pharmacy inventory. Features automated SMS reminders and secure data encryption.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      image: "/assets/healthcore.png"
    },
    {
      title: "Law Office Portal",
      subtitle: "Dennis Rey Capunes Law Office",
      description: "A secure legal management system featuring a custom-branded login interface, user authentication, and streamlined access to legal documentation and case records.",
      tech: ["JavaScript", "HTML", "CSS", "Legal-Tech"],
      image: "/assets/law-office.png"
    }
  ],
  achievements: [
    {
      title: "Ethical Hacker - Cisco Networking Academy",
      image: "/assets/certificates/ethical-hacker.png",
      description: "Successfully completed the Ethical Hacker course offered by Davao Del Norte State College through the Cisco Networking Academy program."
    },
    {
      title: "Capstone Project Exhibit 2026 - SmartPMC",
      image: "/assets/certificates/capstone-exhibit.png",
      description: "Participation in the BSIT and BSIS Capstone Project Exhibit 2026 for presenting 'Smart-PMC: A Web-Based Pre-Marriage Counseling Management System'."
    },
    {
      title: "Advanced Seminar Series: Journey to IT Specialist",
      image: "/assets/certificates/seminar-day1.png",
      description: "Certificate of Completion for 'Journey from Science Practitioner to Information Technology Specialist' held on October 8, 2025."
    },
    {
      title: "Advanced Seminar Series: Power of Color in Graphic Design",
      image: "/assets/certificates/seminar-day2.png",
      description: "Certificate of Completion for 'The Power of Color in Graphic Design: Theory, Psychology, and Practice' held on November 5, 2025."
    }
  ],
  skills: [
    {
      category: "Frontend",
      icon: "fa-solid fa-code",
      items: [
        { name: "HTML5", icon: "fa-brands fa-html5", color: "#e34f26" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
        { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "#06b6d4" },
        { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952b3" }
      ]
    },
    {
      category: "Database",
      icon: "fa-solid fa-database",
      items: [
        { name: "MySQL", icon: "fa-solid fa-server", color: "#4479a1" }
      ]
    },
    {
      category: "Tools & Core",
      icon: "fa-solid fa-screwdriver-wrench",
      items: [
        { name: "Git", icon: "fa-brands fa-git-alt", color: "#f05032" },
        { name: "GitHub", icon: "fa-brands fa-github", color: "#ffffff" },
        { name: "Figma", icon: "fa-brands fa-figma", color: "#f24e1e" },
        { name: "Canva", icon: "fa-solid fa-palette", color: "#00c4cc" }
      ]
    }
  ],
  resume: "/assets/resume.jpg"
};

// Render Functions
const renderTypingEffect = () => {
  const typingText = document.getElementById('typing-text');
  if (!typingText) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  const type = () => {
    const currentRole = portfolioData.roles[roleIndex];

    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % portfolioData.roles.length;
      typeSpeed = 500; // Pause before next role
    }

    setTimeout(type, typeSpeed);
  };

  type();
};

const renderAbout = () => {
  const container = document.getElementById('about-description-v2');
  if (!container) return;
  container.innerHTML = portfolioData.aboutMe.bio.map(p => `<p>${p}</p>`).join('');
};

const renderProjects = () => {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = portfolioData.projects.map(p => `
    <div class="card glass-card reveal">
      ${(p as any).image ? `<div class="card-image"><img src="${(p as any).image}" alt="${p.title}"></div>` : ''}
      <h3>${p.title}</h3>
      ${p.subtitle ? `<p class="subtitle">${p.subtitle}</p>` : ''}
      <p class="description">${p.description}</p>
      <div class="tech-stack">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
};

const renderSkills = () => {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = (portfolioData as any).skills.map((cat: any) => `
    <div class="skills-card glass-card reveal">
      <div class="skills-category">
        <i class="${cat.icon}"></i>
        <h4>${cat.category}</h4>
      </div>
      <div class="skills-list">
        ${cat.items.map((skill: any) => `
          <div class="skill-item">
            <span class="skill-name">${skill.name}</span>
            <i class="${skill.icon}" style="color: ${skill.color}"></i>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
};

const renderAchievements = () => {
  const gallery = document.getElementById('achievements-gallery');
  if (!gallery) return;
  gallery.innerHTML = portfolioData.achievements.map(a => `
    <div class="gallery-item glass-card reveal">
      <div class="certificate-badge"><i class="fa-solid fa-award"></i></div>
      <img src="${a.image}" alt="${a.title}">
      <div class="gallery-overlay">
        <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem;">${a.title}</h4>
        <p style="font-size: 0.85rem; color: #ccc; margin-bottom: 1rem;">${a.description || ''}</p>
        <span class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem;">View Certificate</span>
      </div>
    </div>
  `).join('');
};

const renderCertificateModal = () => {
  const modal = document.getElementById('certificate-modal');
  const modalImg = document.getElementById('modal-image') as HTMLImageElement;
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.close-modal');

  if (!modal || !modalImg || !modalTitle || !modalDesc || !closeBtn) return;

  const openModal = (index: number) => {
    const cert = portfolioData.achievements[index];
    modalImg.src = cert.image;
    modalTitle.textContent = cert.title;
    modalDesc.textContent = cert.description || '';
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scroll
    }, 300);
  };

  // Event Delegation for View Certificate buttons
  document.getElementById('achievements-gallery')?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('btn-primary') && target.textContent === 'View Certificate') {
      const galleryItem = target.closest('.gallery-item');
      if (galleryItem) {
        const items = Array.from(document.querySelectorAll('.gallery-item'));
        const index = items.indexOf(galleryItem);
        if (index !== -1) openModal(index);
      }
    }
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  // Resume Button Logic
  document.getElementById('resume-btn')?.addEventListener('click', () => {
    modalImg.src = portfolioData.resume;
    modalTitle.textContent = "Curriculum Vitae";
    modalDesc.textContent = "Full digital version of my professional profile and background.";
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  });
};

// Initialize
renderTypingEffect();
renderAbout();
renderSkills();
renderProjects();
renderAchievements();
renderCertificateModal();
// Recalculate reveal elements after injection
revealElements = document.querySelectorAll('.reveal');
revealOnScroll();
