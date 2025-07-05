const languages = {
    en: {
        greeting: "Hi! I'm Luis Eduardo López Cruz",
        role: "Backend Web Developer",
        about: "About me",
        aboutText: "18-year-old Backend Web Developer, with verifiable work experience. I specialize in Laravel, and I'm currently learning ASP.NET Core, AWS Lambda, and Docker. Pursuing Computer Systems Engineering. I'm focused on continuous learning to improve my skills and achieve my professional goals.",
        projects: "My Projects",
        skills: "Skills",
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        experience: "Work Experience",
        education: "Education",
        projectsButton: "View Project",
        githubLink: "View Code",
        demoLink: "Live Demo",
        aboutMeSection: "About Me",
        aboutMeText: `My name is Luis Eduardo, but many know me as Dexul. I started programming by exploring C++, and at 13, I became completely hooked on the language. Over time, I expanded my knowledge into web development and databases, which led me to specialize in backend development.

Thanks to my academic performance, intellectual abilities, and soft skills, I was selected for the dual education program, where I gained professional experience at Unillantas. There, I was responsible for maintaining production systems, developing new features, and leading key projects, ensuring that the software was both efficient and scalable. Additionally, I led a team of trainee/junior developers, which was a branch of the dedicated systems team, fostering the growth and development of new programmers.

Currently, I am pursuing a Bachelor's Degree in Computer Systems Engineering at the Instituto Tecnológico de Oaxaca, where I continue to expand my knowledge and skills. While I am passionate about building structured and optimized solutions, I also value communication and teamwork. Listening to different perspectives and understanding each project's needs is a fundamental part of my approach because good software is not only measured by its code but by the impact it creates on those who use it.`,
        downloadCV: "Show CV",
        openToWork: "Open to work",
        // Skills section translations
        skillsBackend: "Backend",
        skillsFrontend: "Frontend", 
        skillsMobile: "Mobile",
        skillsTools: "Tools & Others",
        currentlyLearning: "Currently Learning & Improving",
        skillsTitle: "Skills"
    },
    es: {
        greeting: "¡Hola! Soy Luis Eduardo López Cruz",
        role: "Desarrollador Web Backend",
        about: "Sobre mí",
        aboutText: "Desarrollador Web Backend de 18 años, con experiencia laboral comprobable. Me especializo en Laravel, y actualmente estoy aprendiendo ASP.NET Core, AWS Lambda y Docker. Cursando Ingeniería en Sistemas Computacionales. Estoy enfocado en seguir aprendiendo para mejorar mis habilidades y alcanzar mis metas profesionales.",
        projects: "Mis Proyectos",
        skills: "Habilidades",
        navHome: "Inicio",
        navAbout: "Sobre mí",
        navSkills: "Habilidades",
        navProjects: "Proyectos",
        experience: "Experiencia Laboral",
        education: "Formación Académica",
        projectsButton: "Ver Proyecto",
        githubLink: "Ver Código",
        demoLink: "Ver Demo",
        aboutMeSection: "Sobre mí",
        aboutMeText: `Me llamo Luis Eduardo, pero muchos me conocen como Dexul. Comencé en la programación explorando C++, y a los 13 años me enganché completamente con él. Con el tiempo, expandí mis conocimientos hacia el desarrollo web y bases de datos, lo que me llevó a especializarme en el backend.

Gracias a mi desempeño escolar, habilidades intelectuales y blandas, fui seleccionado para el programa de educación dual, donde adquirí experiencia laboral en Unillantas. Allí, me encargué del mantenimiento de sistemas en producción, desarrollé nuevas funcionalidades y lideré proyectos clave, asegurando que el software fuera eficiente y escalable. Además, lideré un equipo de programación traineé/junior, que era una rama del equipo dedicado de sistemas, fomentando el crecimiento y la formación de nuevos desarrolladores.

Actualmente, curso la carrera de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Oaxaca, donde continúo expandiendo mis conocimientos y habilidades. Si bien me apasiona buscar soluciones estructuradas y optimizadas, también valoro la comunicación y el trabajo en equipo. Escuchar diferentes perspectivas y entender las necesidades de cada proyecto es parte fundamental de mi enfoque, porque un buen software no solo se mide por su código, sino por el impacto que genera en quienes lo usan.`,
        downloadCV: "Mostrar CV",
        openToWork: "Disponible para trabajar",
        // Skills section translations
        skillsBackend: "Backend",
        skillsFrontend: "Frontend", 
        skillsMobile: "Móvil",
        skillsTools: "Herramientas y Otros",
        currentlyLearning: "Actualmente Aprendiendo y Mejorando",
        skillsTitle: "Habilidades"
    }
};

function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
        // Add animation to the target section
        animateSection(section, selector);
        
        window.scrollTo({
            top: section.offsetTop - 95,
            behavior: 'smooth'
        });
    }
}

function animateSection(section, selector) {
    // Don't animate if already animating
    if (section.classList.contains('section-animate')) {
        return;
    }
    
    // Reset any existing animations
    section.classList.remove('animate-left', 'animate-right', 'animate-scale', 'animate-bottom');
    
    // Add the animate class
    section.classList.add('section-animate');
    
    // Determine animation based on section
    let animationClass = 'animate-scale'; // default
    
    if (selector.includes('#profile') || selector.includes('profile')) {
        animationClass = 'animate-scale';
    } else if (selector.includes('skills') || selector.includes('.skills-card')) {
        animationClass = 'animate-left';
    } else if (selector.includes('#projects') || selector.includes('projects')) {
        animationClass = 'animate-right';
    } else if (selector.includes('#about') || selector.includes('about')) {
        animationClass = 'animate-bottom';
    } else if (selector.includes('experience') || selector.includes('education')) {
        animationClass = 'animate-left';
    }
    
    // Apply the animation
    requestAnimationFrame(() => {
        section.classList.add(animationClass);
    });
    
    // Clean up after animation
    setTimeout(() => {
        section.classList.remove('section-animate', animationClass);
    }, 600);
}

const skillCategories = {
    backend: {
        en: "Backend",
        es: "Backend", 
        skills: [
            { name: "PHP", badge: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
            { name: "Laravel", badge: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" },
            { name: "C#", badge: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" },
            { name: ".NET", badge: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" },
            { name: "ASP.NET Core", badge: "https://img.shields.io/badge/ASP.NET_Core-5C2D91?style=for-the-badge&logo=.net&logoColor=white" },
            { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
            { name: "Java", badge: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" },
            { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" },
            { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
            { name: "SQLite", badge: "https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" },
            { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
            { name: "AWS", badge: "https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazon&logoColor=white" }
        ]
    },
    frontend: {
        en: "Frontend",
        es: "Frontend",
        skills: [
            { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
            { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
            { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-2E2E2E?style=for-the-badge&logo=javascript&logoColor=F7DF1E" },
            { name: "Vite", badge: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" },
            { name: "NPM", badge: "https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white" }
        ]
    },
    mobile: {
        en: "Mobile",
        es: "Móvil",
        skills: [
            { name: "Flutter", badge: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" },
            { name: "Dart", badge: "https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" }
        ]
    },
    tools: {
        en: "Tools & Others",
        es: "Herramientas y Otros",
        skills: [
            { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
            { name: "GitHub", badge: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
            { name: "GitLab", badge: "https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" },
            { name: "Arch Linux", badge: "https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white" }
        ]
    }
};

const currentlyLearning = {
    en: [
        { name: "ASP.NET Core", progress: "60%", focus: "Web APIs & Microservices", badge: "https://img.shields.io/badge/ASP.NET_Core-5C2D91?style=for-the-badge&logo=.net&logoColor=white" },
        { name: "AWS Lambda", progress: "80%", focus: "Serverless Architecture", badge: "https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white" },
        { name: "Docker", progress: "60%", focus: "Containerization & Orchestration", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" }
    ],
    es: [
        { name: "ASP.NET Core", progress: "60%", focus: "APIs Web y Microservicios", badge: "https://img.shields.io/badge/ASP.NET_Core-5C2D91?style=for-the-badge&logo=.net&logoColor=white" },
        { name: "AWS Lambda", progress: "80%", focus: "Arquitectura Serverless", badge: "https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white" },
        { name: "Docker", progress: "60%", focus: "Contenedorización y Orquestación", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" }
    ]
};

// Legacy skills array for compatibility
const skills = [
    "Laravel", "PHP", "MySQL", "HTML", "CSS", 
    "JavaScript", ".NET", "Flutter", "Git"
];

const experience = {
    en: [
        {
            date: "September/2024 - June/2025",
            title: "Backend Web/Mobile Developer",
            company: "Unillantas de Oaxaca S.A. de C.V.",
            description: "I worked as a Backend Developer at Unillantas with verifiable work experience, using technologies like Laravel, MySQL, Dart, and Flutter. I was responsible for developing and maintaining critical production systems, creating enterprise applications for internal management, Human Resources systems, and company-wide solutions. My role involved full-stack development, database design, and leading development projects. This experience is fully documented and verifiable through official employment records."
        }
    ],
    es: [
        {
            date: "Septiembre/2024 - Junio/2025",
            title: "Desarrollador Web Backend/Móvil",
            company: "Unillantas de Oaxaca S.A. de C.V.",
            description: "Trabajé como Desarrollador Backend en Unillantas con experiencia laboral comprobable, utilizando tecnologías como Laravel, MySQL, Dart y Flutter. Fui responsable del desarrollo y mantenimiento de sistemas críticos en producción, creación de aplicaciones empresariales para gestión interna, sistemas de Recursos Humanos y soluciones a nivel empresa. Mi rol involucró desarrollo full-stack, diseño de bases de datos y liderazgo de proyectos de desarrollo. Esta experiencia está completamente documentada y es verificable a través de registros oficiales de empleo."
        }
    ]
};

const education = {
    en: [
        {
            date: "August/2025 - Present",
            title: "Bachelor's Degree in Computer Systems Engineering",
            institution: "Instituto Tecnológico de Oaxaca (TecNM)",
            description: "I am currently pursuing a Bachelor's Degree in Computer Systems Engineering at the Instituto Tecnológico de Oaxaca, where I will acquire and develop not only fundamental but essential skills for the field of programming and my future career as a software engineer."
        },
        {
            date: "August/2022 - June/2025",
            title: "Programming Technician",
            institution: "CBTis 265",
            description: "I studied at CBTis 265, Oaxaca, in the programming course, where I learned and developed skills in some technologies, with a focus on essential programming and web development. Although most of my knowledge is self-taught."
        }
    ],
    es: [
        {
            date: "Agosto/2025 - Presente",
            title: "Ingeniería en Sistemas Computacionales",
            institution: "Instituto Tecnológico de Oaxaca (TecNM)",
            description: "Actualmente curso la carrera de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Oaxaca, donde aprenderé y desarrollaré habilidades no solo fundamentales, sino necesarias para desempeñarme en el ámbito de la programación y como futuro ingeniero de software."
        },
        {
            date: "Agosto/2022 - Junio/2025",
            title: "Técnico en Programación",
            institution: "CBTis 265",
            description: "Cursé mi educación en el CBTis 265, Oaxaca, en la carrera de programación, donde aprendí y desarrollé habilidades en algunas tecnologías, con especial énfasis en programación y desarrollo web. Aunque mayormente todo mi conocimiento es por cuenta propia."
        }
    ]
};

const projects = [
    {
        title: {
            en: "AliFinder",
            es: "AliFinder"
        },
        description: {
            en: "A web scraping extension for AliExpress built with React and a Laravel backend, designed to find the best product based on custom criteria.",
            es: "Una extensión de web scraping para AliExpress construida con React y un backend en Laravel, diseñada para encontrar el mejor producto según criterios personalizados."
        },
        image: "images/project5.webp",
        technologies: ["React", "Laravel 12", "SWC", "Vite", "Bootstrap"],
        github: "https://github.com/DexulDev/AliFinder",
        inWork: true,
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
        technologies: ["Laravel 11", "MySQL"],
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
        technologies: ["Laravel 11", "MySQL"],
        github: "https://github.com/DexulDev/GateKeeper",
    },
];


function updateSkills() {
    const currentLang = document.documentElement.getAttribute('lang') || 'es';
    const skillsGrid = document.querySelector('.skills-grid');
    
    // Mark as loading to hide badges initially
    skillsGrid.classList.add('loading');
    
    // Clear any existing animations before updating content
    const existingBadges = skillsGrid.querySelectorAll('.skill-badge, .learning-item');
    existingBadges.forEach(badge => {
        badge.style.animation = 'none';
        badge.style.transition = 'none';
        badge.style.opacity = '0';
        badge.style.visibility = 'hidden';
    });
    
    // Create skill category buttons and content
    skillsGrid.innerHTML = `
        <div class="skill-categories">
            <div class="skill-category-buttons">
                ${Object.keys(skillCategories).map(category => `
                    <button class="skill-category-btn ${category === 'backend' ? 'active' : ''}" 
                            data-category="${category}">
                        ${skillCategories[category][currentLang]}
                    </button>
                `).join('')}
            </div>
            <div class="skill-badges-container">
                ${Object.keys(skillCategories).map(category => `
                    <div class="skill-badges ${category === 'backend' ? 'active' : ''}" 
                         data-category="${category}">
                        ${skillCategories[category].skills.map(skill => `
                            <div class="skill-badge">
                                <img src="${skill.badge}" alt="${skill.name}" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="currently-learning">
            <h3>${languages[currentLang].currentlyLearning}</h3>
            <div class="learning-grid">
                ${currentlyLearning[currentLang].map(item => `
                    <div class="learning-item">
                        <div class="learning-badge">
                            <img src="${item.badge}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="learning-info">
                            <div class="learning-name">${item.name}</div>
                            <div class="learning-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${item.progress}"></div>
                                </div>
                                <span class="progress-text">${item.progress}</span>
                            </div>
                            <div class="learning-focus">${item.focus}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Remove loading state after content is ready
    setTimeout(() => {
        skillsGrid.classList.remove('loading');
    }, 50);
    
    // Add event listeners for category buttons
    const categoryButtons = skillsGrid.querySelectorAll('.skill-category-btn');
    const skillBadges = skillsGrid.querySelectorAll('.skill-badges');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active skill badges
            skillBadges.forEach(badges => {
                badges.classList.remove('active');
                if (badges.dataset.category === category) {
                    badges.classList.add('active');
                    
                    // Trigger animation for new category badges
                    const newBadges = badges.querySelectorAll('.skill-badge');
                    setTimeout(() => {
                        animateSkillBadges(newBadges);
                    }, 50); // Small delay to ensure DOM is ready
                }
            });
        });
    });
    
    // Only animate on initial load if not during language change
    if (!isChangingLanguage && !document.querySelector('.language-toggle')?.classList.contains('language-toggling')) {
        // Wait for images to load before animating
        const images = skillsGrid.querySelectorAll('img');
        let loadedImages = 0;
        const totalImages = images.length;
        
        if (totalImages === 0) {
            // No images to load, animate immediately
            startInitialAnimations();
        } else {
            images.forEach(img => {
                if (img.complete) {
                    loadedImages++;
                } else {
                    img.addEventListener('load', () => {
                        loadedImages++;
                        if (loadedImages === totalImages) {
                            startInitialAnimations();
                        }
                    });
                    img.addEventListener('error', () => {
                        loadedImages++;
                        if (loadedImages === totalImages) {
                            startInitialAnimations();
                        }
                    });
                }
            });
            
            // Fallback timeout
            setTimeout(() => {
                if (loadedImages < totalImages) {
                    startInitialAnimations();
                }
            }, 1000);
            
            // If all images are already loaded
            if (loadedImages === totalImages) {
                startInitialAnimations();
            }
        }
    }
    
    function startInitialAnimations() {
        setTimeout(() => {
            const initialBadges = skillsGrid.querySelectorAll('.skill-badges.active .skill-badge');
            if (initialBadges.length > 0) {
                animateSkillBadges(initialBadges);
            }
            
            // Animate learning items
            const learningItems = skillsGrid.querySelectorAll('.learning-item');
            animateLearningItems(learningItems);
        }, 200);
    }
}

// Function to animate skill badges when changing categories
function animateSkillBadges(badges) {
    if (!badges || badges.length === 0) return;
    
    // Use batch animation for large sets (like Backend with 12 items)
    if (badges.length > 8) {
        animateSkillBadgesBatch(badges);
        return;
    }
    
    // Regular animation for smaller sets
    badges.forEach(badge => {
        badge.style.animation = 'none';
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        badge.style.transition = 'none';
        badge.style.visibility = 'visible';
        badge.classList.remove('animate-ready');
    });
    
    // Force reflow to ensure styles are applied
    badges[0].offsetHeight;
    
    // Apply animations with optimized delays for smaller sets
    badges.forEach((badge, index) => {
        const delay = (index * 60) + 50;
        setTimeout(() => {
            badge.style.animation = `slideInUp 0.4s ease-out forwards`;
        }, delay);
    });
    
    // Clean up animation styles after all animations complete
    const totalDuration = 500 + (badges.length * 60);
    setTimeout(() => {
        badges.forEach(badge => {
            badge.style.animation = 'none';
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
            badge.style.transition = '';
            badge.classList.add('animate-ready');
        });
    }, totalDuration);
}

// Optimized batch animation for large sets of badges
function animateSkillBadgesBatch(badges) {
    if (!badges || badges.length === 0) return;
    
    // Clear any existing animations first
    badges.forEach(badge => {
        badge.style.animation = 'none';
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(10px)'; // Even smaller movement
        badge.style.transition = 'none';
        badge.style.visibility = 'visible';
        badge.classList.remove('animate-ready');
    });
    
    // Force reflow
    badges[0].offsetHeight;
    
    // Animate in smaller batches for smoother effect
    const batchSize = Math.ceil(badges.length / 4); // Divide into 4 smaller batches
    const batchDelay = 60; // Smaller delay between batches
    
    for (let batchIndex = 0; batchIndex < 4; batchIndex++) {
        const startIndex = batchIndex * batchSize;
        const endIndex = Math.min(startIndex + batchSize, badges.length);
        const batchBadges = Array.from(badges).slice(startIndex, endIndex);
        
        if (batchBadges.length === 0) continue;
        
        setTimeout(() => {
            batchBadges.forEach((badge, index) => {
                setTimeout(() => {
                    badge.style.animation = `slideInUp 0.3s ease-out forwards`; // Even faster
                }, index * 10); // Very small stagger within batch
            });
        }, batchIndex * batchDelay);
    }
    
    // Clean up after all animations - much faster
    setTimeout(() => {
        badges.forEach(badge => {
            badge.style.animation = 'none';
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
            badge.style.transition = '';
            badge.classList.add('animate-ready');
        });
    }, 500); // Much shorter cleanup time
}

function downloadCV() {
    const fileName = 'CV/CV_LuisEduardoLopezCruz.pdf';
    
    try {
        const newWindow = window.open(fileName, '_blank');
        
        if (!newWindow) {
            const link = document.createElement('a');
            link.href = fileName;
            link.download = fileName;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    } catch (error) {
        console.error('Error al abrir el CV:', error);
        const link = document.createElement('a');
        link.href = fileName;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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
            '.skills-card h2': languages[lang].skillsTitle,
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
        
        // Update skills section
        updateSkills();
        
        // Update language toggle text
        const langText = document.querySelector('.language-text');
        if (langText) {
            langText.textContent = lang === 'en' ? 'ES' : 'EN';
        }

        // Save language preference
        localStorage.setItem('language', lang);
    }, 0);
}

// Function to add navigation animations when changing language
function animateLanguageChange() {
    // Only animate sections that are not skill-related to avoid conflicts
    const sections = document.querySelectorAll('.profile-card, .experience-card, .education-card, .projects-section, .about-me-card');
    
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('section-animate', 'animate-scale');
            
            setTimeout(() => {
                section.classList.remove('section-animate', 'animate-scale');
            }, 600);
        }, index * 80); // Faster stagger for language change
    });
    
    // Handle skills section separately to avoid animation conflicts
    const skillsSection = document.querySelector('.skills-card');
    if (skillsSection) {
        setTimeout(() => {
            // Don't animate the skills section content, just update the skills
            const skillBadges = skillsSection.querySelectorAll('.skill-badges.active .skill-badge');
            if (skillBadges.length > 0) {
                setTimeout(() => {
                    animateSkillBadges(skillBadges);
                }, 300); // Delay to let language change settle
            }
        }, 400);
    }
}

// Function to animate sections on page load
function animateOnLoad() {
    const sections = document.querySelectorAll('.profile-card, .skills-card, .experience-card, .education-card, .projects-section, .about-me-card');
    
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('section-animate', 'animate-bottom');
            
            setTimeout(() => {
                section.classList.remove('section-animate', 'animate-bottom');
            }, 600);
        }, index * 150); // Stagger the animations more on load
    });
}

// Add keyboard navigation
function handleKeyboardNavigation(event) {
    // Only handle if no input is focused
    if (document.activeElement && document.activeElement.tagName === 'INPUT') {
        return;
    }
    
    const sections = ['#profile', '.skills-card', '#projects', '#about'];
    const currentSection = getCurrentSection();
    let targetIndex = sections.indexOf(currentSection);
    
    switch(event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
            event.preventDefault();
            targetIndex = Math.min(targetIndex + 1, sections.length - 1);
            scrollToSection(sections[targetIndex]);
            break;
        case 'ArrowUp':
        case 'ArrowLeft':
            event.preventDefault();
            targetIndex = Math.max(targetIndex - 1, 0);
            scrollToSection(sections[targetIndex]);
            break;
        case 'Home':
            event.preventDefault();
            scrollToSection('#profile');
        break;
        case 'End':
            event.preventDefault();
            scrollToSection('#about');
            break;
    }
}

function getCurrentSection() {
    const sections = [
        { selector: '#profile', element: document.querySelector('#profile') },
        { selector: '.skills-card', element: document.querySelector('.skills-card') },
        { selector: '#projects', element: document.querySelector('#projects') },
        { selector: '#about', element: document.querySelector('#about') }
    ];
    
    const scrollPosition = window.scrollY + 200;
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
            return section.selector;
        }
    }
    
    return '#profile';
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
                ${project.inPause ? `<div class="project-status status-paused">
                    <span>${lang === 'en' ? 'Paused' : 'En Pausa'}</span>
                </div>` : ''}
                ${project.inWork ? `<div class="project-status status-wip">
                    <span>${lang === 'en' ? 'WIP' : 'En Desarrollo'}</span>
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
    
    // Set language change state
    setLanguageChangeState(true);
    
    const mainContent = document.querySelector('main');
    const skillsGrid = document.querySelector('.skills-grid');
    
    // Immediately hide skills content to prevent flickering
    if (skillsGrid) {
        skillsGrid.style.opacity = '0';
        skillsGrid.style.transition = 'opacity 0.2s ease';
    }
    
    mainContent.style.opacity = '0.7';
    mainContent.style.transition = 'opacity 0.3s ease';
    
    const langButton = document.querySelector('.language-toggle');
    if (langButton) {
        langButton.classList.add('language-toggling');
    }
    
    // Hide all skill badges immediately
    const skillBadges = document.querySelectorAll('.skill-badge, .learning-item');
    skillBadges.forEach(badge => {
        badge.style.opacity = '0';
        badge.style.animation = 'none';
        badge.style.transition = 'none';
        badge.style.visibility = 'hidden';
    });
    
    setTimeout(() => {
        changeLanguage(newLang);
        
        // Wait a bit more for content to settle
        setTimeout(() => {
            // Show skills grid again
            if (skillsGrid) {
                skillsGrid.style.opacity = '1';
            }
            
            // Re-enable visibility for badges
            skillBadges.forEach(badge => {
                badge.style.visibility = 'visible';
                badge.style.transition = '';
            });
            
            mainContent.style.opacity = '1';
            if (langButton) {
                langButton.classList.remove('language-toggling');
            }
            
            // Clear language change state
            setTimeout(() => {
                setLanguageChangeState(false);
                
                // Now animate the new content
                setTimeout(() => {
                    const newSkillBadges = document.querySelectorAll('.skill-badges.active .skill-badge');
                    if (newSkillBadges.length > 0) {
                        animateSkillBadges(newSkillBadges);
                    }
                    
                    // Animate learning items
                    const learningItems = document.querySelectorAll('.learning-item');
                    animateLearningItems(learningItems);
                }, 100);
            }, 100);
        }, 200);
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
    // Set up theme first
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = `fas fa-${savedTheme === 'light' ? 'moon' : 'sun'}`;
    }
    
    // Set up language without animations
    const savedLanguage = localStorage.getItem('language') || 'es';
    setLanguageChangeState(true); // Prevent initial animations
    
    changeLanguage(savedLanguage);
    
    // Initialize skills without initial animations
    updateSkills();
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Initialize active navigation
    updateActiveNavigation();
    
    // Show keyboard hint for new users
    showKeyboardHint();
    
    // Clear language change state and start animations after everything is loaded
    setTimeout(() => {
        setLanguageChangeState(false);
        
        // Now start the initial animations - faster timing
        setTimeout(() => {
            // Animate sections first
            animateOnLoad();
            
            // Then animate skills with reduced delay
            setTimeout(() => {
                const initialBadges = document.querySelectorAll('.skill-badges.active .skill-badge');
                if (initialBadges.length > 0) {
                    animateSkillBadges(initialBadges);
                }
                
                // Animate learning items with overlap for smoother flow
                setTimeout(() => {
                    const learningItems = document.querySelectorAll('.learning-item');
                    animateLearningItems(learningItems);
                }, 150); // Reduced from 300 to create overlap
            }, 400); // Reduced from 800
        }, 100);
    }, 100);
});

// Global flag to track language change state
let isChangingLanguage = false;

// Enhanced language change detection
function setLanguageChangeState(changing) {
    isChangingLanguage = changing;
    const body = document.body;
    
    if (changing) {
        body.classList.add('language-changing');
    } else {
        body.classList.remove('language-changing');
    }
}

// Add visual feedback to navigation buttons
function updateActiveNavigation() {
    const navButtons = document.querySelectorAll('.nav-icon');
    const currentSection = getCurrentSection();
    
    navButtons.forEach(button => {
        button.classList.remove('nav-active');
    });
    
    // Map sections to nav buttons (correct order: Home, Skills, Projects, About)
    const sectionToNav = {
        '#profile': 0,      // Home button (first)
        '.skills-card': 1,  // Skills button (second) 
        '#projects': 2,     // Projects button (third)
        '#about': 3         // About button (fourth)
    };
    
    const activeIndex = sectionToNav[currentSection];
    if (activeIndex !== undefined && navButtons[activeIndex]) {
        navButtons[activeIndex].classList.add('nav-active');
    }
}

// Enhanced scroll listener for active navigation
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        updateActiveNavigation();
    }, 100);
});

// Show keyboard navigation hint on first visit
function showKeyboardHint() {
    const hasSeenHint = localStorage.getItem('keyboard-hint-seen');
    if (!hasSeenHint) {
        setTimeout(() => {
            const hint = document.createElement('div');
            hint.className = 'keyboard-hint';
            hint.innerHTML = `
                <div class="hint-content">
                    <i class="fas fa-keyboard"></i>
                    <p>¡Tip! Usa las flechas del teclado para navegar entre secciones</p>
                    <button onclick="this.parentElement.parentElement.remove(); localStorage.setItem('keyboard-hint-seen', 'true');">Entendido</button>
                </div>
            `;
            document.body.appendChild(hint);
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                if (hint.parentElement) {
                    hint.remove();
                    localStorage.setItem('keyboard-hint-seen', 'true');
                }
            }, 5000);
        }, 3000); // Show after 3 seconds
    }
}

// Function to animate learning items separately
function animateLearningItems(items) {
    if (!items || items.length === 0) return;
    
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.animation = 'none';
        item.style.visibility = 'visible';
        item.classList.remove('animate-ready');
        
        // Faster timing for learning items
        const delay = 200 + (index * 60); // Reduced delay and stagger
        setTimeout(() => {
            item.style.animation = `slideInUp 0.4s ease-out forwards`; // Faster animation
        }, delay);
    });
    
    // Clean up after animations
    const totalDuration = 600 + (items.length * 60);
    setTimeout(() => {
        items.forEach(item => {
            item.style.animation = 'none';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.classList.add('animate-ready');
        });
    }, totalDuration);
}

showKeyboardHint();
