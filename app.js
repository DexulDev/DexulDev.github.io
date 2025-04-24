const languages = {
    en: {
        greeting: "Hi! I'm Luis Eduardo López Cruz",
        role: "Backend Web Developer",
        about: "About me",
        aboutText: "17-year-old Backend Web Developer, with work experience. I specialize in Laravel, although I'm recently learning .NET and ASP.NET. I'm focused on continuous learning to improve my skills and achieve my professional goals.",
        projects: "My Projects",
        skills: "Skills",
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        experience: "Professional Experience",
        education: "Education",
        projectsButton: "View Project",
        githubLink: "View Code",
        demoLink: "Live Demo",
        aboutMeSection: "About Me",
        aboutMeText: `My name is Luis Eduardo, but many know me as Dexul. I started programming by exploring C++, and at 14, I became completely hooked on the language. Over time, I expanded my knowledge into web development and databases, which led me to specialize in backend development.

Thanks to my academic performance, intellectual abilities, and soft skills, I was selected for the dual education program, where I gained professional experience at Unillantas. There, I am responsible for maintaining production systems, developing new features, and leading key projects, ensuring that the software is both efficient and scalable. Additionally, I lead a team of trainee/junior developers, which is a branch of the dedicated systems team, fostering the growth and development of new programmers.

While I am passionate about building structured and optimized solutions, I also value communication and teamwork. Listening to different perspectives and understanding each project's needs is a fundamental part of my approach because good software is not only measured by its code but by the impact it creates on those who use it.`,
        downloadCV: "Show CV",
        openToWork: "Open to work"
    },
    es: {
        greeting: "¡Hola! Soy Luis Eduardo López Cruz",
        role: "Desarrollador Web Backend",
        about: "Sobre mí",
        aboutText: "Desarrollador Web Backend de 17 años, con experiencia laboral. Me especializo en Laravel, aunque recientemente estoy aprendiendo .NET y ASP.NET. Estoy enfocado en seguir aprendiendo para mejorar mis habilidades y alcanzar mis metas profesionales.",
        projects: "Mis Proyectos",
        skills: "Habilidades",
        navHome: "Inicio",
        navAbout: "Sobre mí",
        navSkills: "Habilidades",
        navProjects: "Proyectos",
        experience: "Experiencia Profesional",
        education: "Formación Académica",
        projectsButton: "Ver Proyecto",
        githubLink: "Ver Código",
        demoLink: "Ver Demo",
        aboutMeSection: "Sobre mí",
        aboutMeText: `Me llamo Luis Eduardo, pero muchos me conocen como Dexul. Comencé en la programación explorando C++, y a los 14 años me enganché completamente con él. Con el tiempo, expandí mis conocimientos hacia el desarrollo web y bases de datos, lo que me llevó a especializarme en el backend.

Gracias a mi desempeño escolar, habilidades intelectuales y blandas, fui seleccionado para el programa de educación dual, donde adquirí experiencia laboral en Unillantas. Allí, me encargo del mantenimiento de sistemas en producción, desarrollo nuevas funcionalidades y lidero proyectos clave, asegurando que el software sea eficiente y escalable. Además, lidero un equipo de programación traineé/junior, que es una rama del equipo dedicado de sistemas, fomentando el crecimiento y la formación de nuevos desarrolladores.

Si bien me apasiona buscar soluciones estructuradas y optimizadas, también valoro la comunicación y el trabajo en equipo. Escuchar diferentes perspectivas y entender las necesidades de cada proyecto es parte fundamental de mi enfoque, porque un buen software no solo se mide por su código, sino por el impacto que genera en quienes lo usan.`,
        downloadCV: "Mostrar CV",
        openToWork: "Disponible para trabajar"
    }
};

function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 95,
            behavior: 'smooth'
        });
    }
}

const skills = [
    "Laravel", "PHP", "MySQL", "HTML", "CSS", 
    "JavaScript", ".NET", "Flutter", "Git"
];

const experience = {
    en: [
        {
            date: "September/2024 - Present",
            title: "Backend Web/Mobile Developer",
            company: "Unillantas de Oaxaca S.A. de C.V.",
            description: "I work as a Backend Developer at Unillantas, using tools like Laravel, MySQL, Dart and Flutter. I've been worked on creating applications to improve internal management, the Human Resources system and general use applications in the company."
        }
    ],
    es: [
        {
            date: "Septiembre/2024 - Presente",
            title: "Desarrollador Web Backend/Móvil",
            company: "Unillantas de Oaxaca S.A. de C.V.",
            description: "Trabajo como desarrollador Backend en Unillantas, utilizando herramientas como Laravel, MySQL, Dart y Flutter. He trabajado en la creación de aplicaciones para mejorar la gestión interna, el sistema de Recursos Humanos y aplicaciones de uso general en la empresa."
        }
    ]
};

const education = {
    en: [
        {
            date: "August/2022 - Present",
            title: "Programming Technician",
            institution: "CBTis 265.",
            description: "I'm studying at CBTis 265, Oaxaca, in the programming course, where I've learned and developed skills in some technologies, with a focus on essential programming and web development. Although most of my knowledge is self-taught."
        }
    ],
    es: [
        {
            date: "Agosto/2022 - Presente",
            title: "Técnico en Programación",
            institution: "CBTis 265.",
            description: "Estoy cursando mi educación en el CBTis 265, Oaxaca, en la carrera de programación, donde he aprendido y desarrollado habilidades en algunas tecnologías, con especial énfasis en programación y desarrollo web. Aunque mayormente todo mi conocimiento es por cuenta propia."
        }
    ]
};

const projects = [
    {
        title: {
            en: "Cuidado-Newen",
            es: "Cuidado-Newen"
        },
        description: {
            en: "Cuidado-Newen is a search engine developed in Laravel 12, focused on querying existing data about food and exercises stored in a structured database. It was created as a personal and functional gift for my boyfriend, combining technology, health, and love 💙",
            es: "Cuidado-Newen es un motor de búsqueda desarrollado en Laravel 12, enfocado en consultar datos ya existentes sobre alimentos y ejercicios almacenados en una base de datos estructurada. Fue creado como un regalo personal y funcional para mi novio, combinando tecnología, salud y amor 💙"
        },
        image: "images/project5.webp",
        technologies: ["Laravel", "Vue.js", "MySQL", "Bootstrap", "Tailwind CSS"],
        github: "https://github.com/DexulDev/Cuidado-Newen",
        inProgress: false
    },
    {
        title: {
            en: "LaraBilling",
            es: "LaraBilling"
        },
        description: {
            en: "A lightweight and efficient invoicing system built with Laravel 12. Features include invoice generation, client management, payment tracking, tax handling, and secure payment processing with Stripe.",
            es: "Un sistema de facturación ligero y eficiente construido con Laravel 12. Incluye generación de facturas, gestión de clientes, seguimiento de pagos, manejo de impuestos y procesamiento de pagos seguro con Stripe."
        },
        image: "images/project4.webp",
        technologies: ["Laravel", "Vue.js", "MySQL", "Stripe", "OAuth"],
        github: "https://github.com/DexulDev/larabilling",
        inProgress: true 
    },
    {
        title: {
            en: "Tasker",
            es: "Tasker"
        },
        description: {
            en: "A mostly backend task management application built with Laravel and a simple frontend",
            es: "Una aplicación de gestión de tareas desarrollada con Laravel y un frontend algo simple"
        },
        image: "images/project1.webp",
        technologies: ["Laravel", "MySQL"],
        github: "https://github.com/DexulDev/Tasker",
    },
    {
        title: {
            en: "GateKeeper",
            es: "GateKeeper"
        },
        description: {
            en: "A mostly backend user login and registration application, lacks other features but is a good starting point for larger projects.",
            es: "Una aplicación de inicio de sesión y registro de usuario, carece de otras funciones, pero es un buen punto de partida para proyectos más grandes."
        },
        image: "images/project2.webp",
        technologies: ["Laravel", "MySQL"],
        github: "https://github.com/DexulDev/GateKeeper",
    },
];


function updateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    
    // Map skills to FontAwesome icons
    const skillIcons = {
        "HTML": "fab fa-html5",
        "CSS": "fab fa-css3-alt",
        "JavaScript": "fab fa-js",
        "PHP": "fab fa-php",
        "Laravel": "fab fa-laravel",
        "Git": "fab fa-git-alt",
        "MySQL": "fas fa-database", 
        ".NET": "fab fa-windows",
        "ASP.NET": "fab fa-windows",
        "Flutter": "fas fa-mobile-alt",
        "PostgreSQL": "fas fa-database"
    };
    
    skillsGrid.innerHTML = skills
        .filter(skill => skillIcons[skill])
        .map(skill => `
            <div class="skill-icon" title="${skill}">
                <i class="${skillIcons[skill]}"></i>
            </div>
        `)
        .join('');
}

function downloadCV() {
    const currentLang = document.documentElement.getAttribute('lang') || 'es';

    const fileName = currentLang === 'en' 
        ? 'CV/CV_LuisEduardoLopezCruz_EN.pdf' 
        : 'CV/CV_LuisEduardoLopezCruz_ES.pdf';
    
    window.open(fileName, '_blank');
}

function updateTimeline(items, selector, lang) {
    const container = document.querySelector(selector);
    if (!container) return;
    
    container.innerHTML = items.map(item => `
        <div class="timeline-item">
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-company">${item.company || item.institution}</div>
            <div class="timeline-description">${item.description}</div>
        </div>
    `).join('');
}

function changeLanguage(lang) {
    setTimeout(() => {
        document.documentElement.setAttribute('lang', lang);
        
        // Update the open-to-work badge first
        const openToWorkBadge = document.getElementById('open-to-work-badge');
        if (openToWorkBadge) {
            openToWorkBadge.textContent = languages[lang].openToWork;
        }
        
        // Then update h1 without the badge
        const greeting = document.querySelector('h1');
        if (greeting) {
            greeting.textContent = languages[lang].greeting;
        }
        
        // Map of selectors to text content
        const elements = {
            '.subtitle': languages[lang].role,
            '.experience-text': languages[lang].aboutText,
            '.skills-card h2': languages[lang].skills,
            '.projects-title': languages[lang].projects,
            '.experience-title': languages[lang].experience,
            '.education-title': languages[lang].education,
            '.about-me-card h2': languages[lang].aboutMeSection,
            '#download-cv-btn': languages[lang].downloadCV,
            '.nav-text-home': languages[lang].navHome,
            '.nav-text-about': languages[lang].navAbout,
            '.nav-text-skills': languages[lang].navSkills,
            '.nav-text-projects': languages[lang].navProjects
        };

        // Update text content for each element if it exists
        Object.entries(elements).forEach(([selector, text]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        });

        // Update about me content with paragraphs - fixed implementation
        const aboutMeText = document.querySelector('.about-me-text');
        if (aboutMeText) {
            // Make sure we have content to display
            const content = languages[lang].aboutMeText || '';
            // Split by double newlines (paragraphs)
            const aboutMeParagraphs = content.split('\n\n');
            // Create HTML
            aboutMeText.innerHTML = aboutMeParagraphs
                .filter(p => p.trim()) // Remove empty paragraphs
                .map(p => `<p>${p.trim()}</p>`)
                .join('');
            
        } else {
            console.warn('About Me text container not found!');
        }

        // Update experience and education timelines
        updateTimeline(experience[lang], '.experience-card .timeline', lang);
        updateTimeline(education[lang], '.education-card .timeline', lang);
        
        // Update projects
        updateProjects(lang);
        
        // Update language toggle text
        const langText = document.querySelector('.language-text');
        if (langText) {
            langText.textContent = lang === 'en' ? 'ES' : 'EN';
        }

        // Save language preference
        localStorage.setItem('language', lang);
    }, 0);
}

function updateProjects(lang) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" 
                 alt="${project.title[lang]}" 
                 class="project-image"
                 loading="lazy">
            <div class="project-content">
                <h3>${project.title[lang]}</h3>
                ${project.inProgress ? `<div class="project-status">
                    <span>${lang === 'en' ? 'Work in Progress' : 'En Desarrollo'}</span>
                </div>` : ''}
                <p>${project.description[lang]}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                        ${languages[lang].githubLink}
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const newLang = currentLang === 'en' ? 'es' : 'en';
    
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '0.5';
    mainContent.style.transition = 'opacity 0.3s ease';
    
    const langButton = document.querySelector('.language-toggle');
    if (langButton) {
        langButton.classList.add('language-toggling');
    }
    
    setTimeout(() => {
        changeLanguage(newLang);
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
            if (langButton) {
                langButton.classList.remove('language-toggling');
            }
        }, 100);
    }, 300);
}

function toggleTheme() {
    const body = document.documentElement;
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon with animation
    const themeIcon = document.querySelector('.theme-toggle i');
    if (!themeIcon) return;
    
    themeIcon.style.opacity = '0';
    
    setTimeout(() => {
        themeIcon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        themeIcon.style.opacity = '1';
    }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = `fas fa-${savedTheme === 'light' ? 'moon' : 'sun'}`;
    }
    
    const savedLanguage = localStorage.getItem('language') || 'es';
    changeLanguage(savedLanguage);
    
    updateSkills();
});