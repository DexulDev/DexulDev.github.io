const languages = {
    en: {
        greeting: "Hi! I'm Luis Eduardo López Cruz",
        role: "Backend Web Developer",
        about: "About me",
        aboutText: "17-year-old Backend Web Developer with experience. I specialize in technologies like Laravel, MySQL, .NET, and ASP.NET. I'm focused on continuous learning to improve my skills and achieve my professional goals.",
        projects: "My Projects",
        skills: "Skills",
        experience: "Professional Experience",
        education: "Education",
        projectsButton: "View Project",
        githubLink: "View Code",
        demoLink: "Live Demo"
    },
    es: {
        greeting: "Hola! Soy Luis Eduardo López Cruz",
        role: "Desarrollador Backend Web",
        about: "Sobre mí",
        aboutText: "Desarrollador Web Backend de 17 años con experiencia. Me especializo en tecnologías como Laravel, MySQL, .NET y ASP.NET. Estoy enfocado en seguir aprendiendo para mejorar mis habilidades y alcanzar mis metas profesionales.",
        projects: "Mis Proyectos",
        skills: "Habilidades",
        experience: "Experiencia Profesional",
        education: "Formación Académica",
        projectsButton: "Ver Proyecto",
        githubLink: "Ver Código",
        demoLink: "Ver Demo"
    }
};

function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const experience = {
    en: [
        {
            date: "September/2024 - Present",
            title: "Backend Web Developer",
            company: "Unillantas de Oaxaca S.A. de C.V.",
            description: "I work as a Backend Developer at UNILLANTAS, using tools like Laravel, MySQL, .NET and PostgreSQL. I've been involved in creating applications to improve internal management and the sales system."
        }
    ],
    es: [
        {
            date: "Septiembre/2024 - Presente",
            title: "Desarrollador Web Backend",
            company: "Unillantas de Oaxaca S.A. de C.V.",
            description: "Trabajo como desarrollador Backend en UNILLANTAS, utilizando herramientas como Laravel, MySQL, .NET y PostgreSQL. He trabajado en la creación de aplicaciones para mejorar la gestión interna y el sistema de ventas."
        }
    ]
};

const education = {
    en: [
        {
            date: "August/2022 - Present",
            title: "Programming",
            institution: "CBTis 265.",
            description: "I'm studying at CBTis 265, Oaxaca, in the programming course, where I've learned and developed skills in various technologies, with a focus on backend programming and web development. Although most of my knowledge is self-taught."
        }
    ],
    es: [
        {
            date: "Agosto/2022 - Presente",
            title: "Programación",
            institution: "CBTis 265.",
            description: "Estoy cursando mi educación en el CBTis 265, Oaxaca, en la carrera de programación, donde he aprendido y desarrollado habilidades en diversas tecnologías, con especial énfasis en programación backend y desarrollo web. Aunque mayormente todo mi conocimiento es por cuenta propia."
        }
    ]
};

const projects = [
    {
        title: {
            en: "Task Manager App",
            es: "Aplicación de Gestión de Tareas"
        },
        description: {
            en: "A mostly backend task management application built with Laravel and a simple frontend",
            es: "Una aplicación de gestión de tareas desarrollada con Laravel y un frontend algo simple"
        },
        image: "images/project1.webp",
        technologies: ["Laravel", "MySQL"],
        github: "https://github.com/DexulDev/Laravel-ToDoList",
        /* demo: "https://demo-link.com", */
    },
    {
        title: {
            en: "Basic Login System",
            es: "Aplicación de Inicio de Sesión Básica"
        },
        description: {
            en: "A mostly backend user login and registration application, lacks other features but is a good starting point for larger projects.",
            es: "Una aplicación de inicio de sesión y registro de usuario, carece de otras funciones, pero es un buen punto de partida para proyectos más grandes."
        },
        image: "images/project2.webp",
        technologies: ["Laravel", "MySQL"],
        github: "https://github.com/DexulDev/Basic-login-and-register-with-Laravel",
        /* demo: "https://demo-link.com", */
    },
    {
        title: {
            en: "Fun cat facts",
            es: "Datos curiosos de gatos"
        },
        description: {
            en: "A simple web app that fetches random fun cat facts from an API and displays them to the user along with a GIF that is searchable using the first 3 letters of the fact.",
            es: "Una aplicación web simple que obtiene aleatoriamente datos curiosos de gatos de una API y los muestra al usuario junto con un GIF que se busca con las primeras 3 letras del dato curioso."
        },
        image: "images/project3.webp",
        technologies: ["Laravel"],
        github: "https://github.com/DexulDev/Laravel-fun-cat-fact-and-gif",
        /* demo: "https://demo-link.com", */
    }
];

function updateTimeline(items, containerClass, lang) {
    const container = document.querySelector(`.${containerClass} .timeline`);
    container.innerHTML = items[lang].map(item => `
        <div class="timeline-item">
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-company">${item.company || item.institution}</div>
            <div class="timeline-description">${item.description}</div>
        </div>
    `).join('');
}

function changeLanguage(lang) {
    requestAnimationFrame(() => {
        document.querySelector('.profile-header h1').textContent = languages[lang].greeting;
    });
    setTimeout(() => {
        document.querySelector('.profile-header h1').textContent = languages[lang].greeting;
        document.querySelector('.profile-header .subtitle').textContent = languages[lang].role;
        
        document.querySelector('.about-card h2').textContent = languages[lang].about;
        document.querySelector('.projects-title').textContent = languages[lang].projects;
        document.querySelector('.skills-card h2').textContent = languages[lang].skills;
        document.querySelector('.experience-title').textContent = languages[lang].experience;
        document.querySelector('.education-title').textContent = languages[lang].education;
        document.querySelector('.about-card p').textContent = languages[lang].aboutText;
    
        updateTimeline(experience, 'experience-card', lang);
        updateTimeline(education, 'education-card', lang);
        updateProjects(lang);
    
        document.documentElement.setAttribute('lang', lang);
        document.querySelector('.language-text').textContent = lang.toUpperCase();
        localStorage.setItem('language', lang);
    }, 0);
}

function updateProjects(lang) {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" 
                 alt="${project.title[lang]}" 
                 class="project-image"
                 loading="lazy"
                 decoding="async">
            <h3>${project.title[lang]}</h3>
            <p>${project.description[lang]}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank">
                    <i class="fab fa-github"></i>
                    ${languages[lang].githubLink}
                </a>
            </div>
        </div>
    `).join('');
}

function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const newLang = currentLang === 'en' ? 'es' : 'en';
    changeLanguage(newLang);
}

function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    changeLanguage(savedLanguage);

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
});