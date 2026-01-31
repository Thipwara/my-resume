import './style.css';
import { resumeData } from './data/resume-data';
import { ScrollAnimations, applyStaggeredAnimation } from './components/animations';
import type { SkillCategory, Experience, Education, Project } from './data/resume-data';

// Initialize scroll animations
const scrollAnimations = new ScrollAnimations();

// Populate hero section
function populateHero(): void {
    const nameElement = document.getElementById('name');
    const titleElement = document.getElementById('title');
    const bioElement = document.getElementById('bio');

    if (nameElement) nameElement.textContent = resumeData.name;
    if (titleElement) titleElement.textContent = resumeData.title;
    if (bioElement) bioElement.textContent = resumeData.bio;
}

// Render skills section
function renderSkills(): void {
    const container = document.getElementById('skills-container');
    if (!container) return;

    resumeData.skills.forEach((skillCategory: SkillCategory) => {
        const card = document.createElement('div');
        card.className = 'skill-card';

        card.innerHTML = `
      <div class="skill-category">${skillCategory.category}</div>
      <div class="skill-items">
        ${skillCategory.items.map(item => `
          <span class="skill-tag">${item}</span>
        `).join('')}
      </div>
    `;

        container.appendChild(card);
        scrollAnimations.observeElement(card);
    });

    // Apply staggered animation
    const cards = container.querySelectorAll('.skill-card');
    applyStaggeredAnimation(cards, 150);
}

// Render experience timeline
function renderExperience(): void {
    const container = document.getElementById('experience-container');
    if (!container) return;

    resumeData.experience.forEach((exp: Experience) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        item.innerHTML = `
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <div class="timeline-title">${exp.title}</div>
            <div class="timeline-company">${exp.company}</div>
          </div>
          <div class="timeline-period">${exp.period}</div>
        </div>
        <div class="timeline-description">${exp.description}</div>
      </div>
    `;

        container.appendChild(item);
        scrollAnimations.observeElement(item);
    });

    // Apply staggered animation
    const items = container.querySelectorAll('.timeline-item');
    applyStaggeredAnimation(items, 200);
}

// Render education timeline
function renderEducation(): void {
    const container = document.getElementById('education-container');
    if (!container) return;

    resumeData.education.forEach((edu: Education) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        item.innerHTML = `
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <div class="timeline-title">${edu.degree}</div>
            <div class="timeline-company">${edu.institution}</div>
          </div>
          <div class="timeline-period">${edu.period}</div>
        </div>
        <div class="timeline-description">${edu.description}</div>
      </div>
    `;

        container.appendChild(item);
        scrollAnimations.observeElement(item);
    });

    // Apply staggered animation
    const items = container.querySelectorAll('.timeline-item');
    applyStaggeredAnimation(items, 200);
}

// Render projects grid
function renderProjects(): void {
    const container = document.getElementById('projects-container');
    if (!container) return;

    resumeData.projects.forEach((project: Project) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const linkHTML = project.link
            ? `<a href="${project.link}" target="_blank" class="project-link">
           View Project →
         </a>`
            : '';

        card.innerHTML = `
      <div class="project-header">
        <div class="project-title">${project.title}</div>
        <div class="project-description">${project.description}</div>
      </div>
      <div class="project-body">
        <div class="project-tech">
          ${project.technologies.map(tech => `
            <span class="tech-tag">${tech}</span>
          `).join('')}
        </div>
        ${linkHTML}
      </div>
    `;

        container.appendChild(card);
        scrollAnimations.observeElement(card);
    });

    // Apply staggered animation
    const cards = container.querySelectorAll('.project-card');
    applyStaggeredAnimation(cards, 150);
}

// Initialize all sections
function init(): void {
    populateHero();
    renderSkills();
    renderExperience();
    renderEducation();
    renderProjects();

    // Observe section titles
    scrollAnimations.observe('.section-title');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
