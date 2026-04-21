/* ==========================================================================
   RESUME DATA
   ========================================================================== */
const skillsData = [
    {
        category: "Languages",
        icon: "⚡",
        skills: ["Python", "SQL", "Java"]
    },
    {
        category: "Analytics & Vis",
        icon: "📊",
        skills: ["Power BI", "Tableau", "Looker Studio", "Excel", "EDA", "KPI Dashboards"]
    },
    {
        category: "Data Engineering",
        icon: "⚙️",
        skills: ["ETL Pipelines", "Data Transformation", "Data Modeling"]
    },
    {
        category: "Libraries",
        icon: "📚",
        skills: ["Pandas", "NumPy", "TensorFlow", "OpenCV", "spaCy", "NLTK", "BeautifulSoup", "Selenium"]
    },
    {
        category: "Cloud & Tools",
        icon: "☁️",
        skills: ["AWS", "Microsoft Azure", "Microsoft Fabric"]
    }
];

const experienceData = [
    {
        role: "Business Development Associate",
        company: "Syncpedia",
        year: "Mar 2026 – Present",
        bullets: [
            "Analyzed 5,000+ customer records using Python and SQL to identify conversion trends and optimize targeting strategies.",
            "Built interactive KPI dashboards in Power BI for real-time performance tracking and executive decision-making.",
            "Improved customer targeting efficiency by 20% through data-driven segmentation and actionable insights."
        ]
    }
];

const educationData = [
    {
        degree: "B.Tech – Computer Science & Engineering (Data Science)",
        institution: "B V Raju Institute of Technology | CGPA: 7.63 / 10.0",
        year: "2022 - 2026"
    },
    {
        degree: "Certifications",
        institution: "Microsoft Power BI & Azure Fundamentals | AWS Data Engineering & Cloud Architecture | Cisco Data Analytics Essentials | Microsoft Fabric | Tableau (Simplilearn) | HP Life: Data Science & Analytics | AICTE-AWS Cloud & Data Engineering Internship",
        year: "Recent"
    },
    {
        degree: "Achievements",
        institution: "2nd Prize – Business Plan Competition (BVRIT) | Participant – Smart India Hackathon 2024",
        year: "2024"
    }
];

const projectsData = [
    {
        id: 1,
        title: 'GPS Spoofing Detection in UAV',
        description: 'Analyzed 10,000+ GPS records via data preprocessing and feature engineering; built anomaly detection models (LSTM, XGBoost) achieving 92% accuracy. Developed real-time monitoring dashboard.',
        tags: ['Python', 'LSTM', 'XGBoost', 'Machine Learning', 'Data Preprocessing'],
        image: 'images/gps-spoofing.png',
    },
    {
        id: 2,
        title: 'News Crawling & Sentiment Analysis',
        description: 'Scraped and analyzed 1,000+ news articles using Selenium and BeautifulSoup; built NLP sentiment classifier with 88% accuracy; automated data pipeline for collection, cleaning, and reporting.',
        tags: ['Python', 'Selenium', 'BeautifulSoup', 'NLP', 'Data Pipeline'],
        image: 'images/sentiment-analysis.png',
    },
    {
        id: 3,
        title: 'Lung Cancer Detection using U-Net',
        description: 'Processed CT scan datasets and performed image segmentation using TensorFlow and OpenCV; achieved 90% accuracy via deep learning and preprocessing techniques.',
        tags: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning', 'Image Segmentation'],
        image: 'images/lung-cancer.png',
    },
    {
        id: 4,
        title: 'BVRIT Hostel Management System',
        description: 'Designed SQL database system for hostel record management; automated room allocation reporting and reduced manual administrative effort significantly.',
        tags: ['SQL', 'Database Management', 'Automation'],
        image: 'images/hostel-management.png',
    }
];

/* ==========================================================================
   DOM INITIALIZATION & RENDER FUNCTIONS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Render Skills
    const skillsContainer = document.getElementById('skills-grid');
    if (skillsContainer) {
        skillsData.forEach(cat => {
            const box = document.createElement('div');
            box.className = 'skill-card';

            const tagsHtml = cat.skills.map(s => `<span class="tech-tag">${s}</span>`).join('');

            box.innerHTML = `
          <div class="skill-card-icon">${cat.icon}</div>
          <h3 class="skill-category-title">${cat.category}</h3>
          <div class="skill-tags">${tagsHtml}</div>
        `;
            skillsContainer.appendChild(box);
        });
    }

    // 4. Render Experience
    const expContainer = document.getElementById('experience-timeline');
    if (expContainer) {
        experienceData.forEach(exp => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            const bulletsHtml = exp.bullets.map(b => `<li>${b}</li>`).join('');

            item.innerHTML = `
          <div class="timeline-meta">${exp.year}</div>
          <h3 class="timeline-title">${exp.role}</h3>
          <h4 class="timeline-subtitle">${exp.company}</h4>
          <ul class="timeline-details">${bulletsHtml}</ul>
        `;
            expContainer.appendChild(item);
        });
    }

    // 5. Render Education
    const eduContainer = document.getElementById('education-timeline');
    if (eduContainer) {
        educationData.forEach(edu => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            item.innerHTML = `
          <div class="timeline-meta">${edu.year}</div>
          <h3 class="timeline-title">${edu.degree}</h3>
          <h4 class="timeline-subtitle">${edu.institution}</h4>
        `;
            eduContainer.appendChild(item);
        });
    }

    // 6. Render Projects
    const projectsContainer = document.getElementById('projects-grid');
    if (projectsContainer) {
        projectsData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';

            const tagsHtml = project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

            card.innerHTML = `
          <div class="card-img-wrapper">
            <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjIwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyMCIgZmlsbD0iIzExMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNhMGEwYTUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4='"/>
            <div class="card-img-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <div class="skill-tags" style="margin-bottom: 15px;">${tagsHtml}</div>
            <p class="card-desc">${project.description}</p>
            <div>
              <a href="#" class="card-link" onclick="event.preventDefault(); alert('Accessing Project Protocol: ${project.title}')">View Project Overview &rarr;</a>
            </div>
          </div>
        `;
            projectsContainer.appendChild(card);
        });
    }

    // 7. Hero Typing Effect
    const textElement = document.getElementById('typing-text');
    if (textElement) {
        const texts = ["Data Analyst", "Data Enthusiast", "BI Developer", "Data Engineer"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];

            if (isDeleting) {
                textElement.innerText = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.innerText = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 100;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; // Pause before start typing new word
            }

            setTimeout(type, typeSpeed);
        }

        // Start typing effect after a small delay
        setTimeout(type, 1500);
    }

    // 8. Intersection Observer for Fade-In Effects
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: to animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Dynamically set current year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) currentYearEl.innerText = new Date().getFullYear();

    // 9. Interactive Particle Background
    function initInteractiveBackground() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-bg';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.zIndex = '-2';
        canvas.style.pointerEvents = 'none';
        document.body.prepend(canvas);

        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let particlesArray = [];
        const mouse = {
            x: null,
            y: null,
            radius: 120
        };

        window.addEventListener('mousemove', function(event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });
        
        window.addEventListener('mouseout', function() {
            mouse.x = null;
            mouse.y = null;
        });

        window.addEventListener('resize', function() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        });

        class Particle {
            constructor(x, y, dx, dy, size, color) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.size = size;
                this.color = color;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                if(this.x > width || this.x < 0) this.dx = -this.dx;
                if(this.y > height || this.y < 0) this.dy = -this.dy;
                
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < mouse.radius && mouse.x != null) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx/10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy/10;
                    }
                }
                this.x += this.dx;
                this.y += this.dy;
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            let numberOfParticles = (width * height) / 8000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 1.5) + 0.5;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let dx = (Math.random() * 0.5) - 0.25;
                let dy = (Math.random() * 0.5) - 0.25;
                let color = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.6)' : 'rgba(176, 38, 255, 0.6)';
                particlesArray.push(new Particle(x, y, dx, dy, size, color));
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (width / 10) * (height / 10)) {
                        opacityValue = 1 - (distance / 15000);
                        ctx.strokeStyle = `rgba(0, 240, 255, ${opacityValue * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }
        init();
        animate();
    }
    
    // Only initialize the interactive background on screens larger than mobile, for performance.
    if(window.innerWidth > 768) {
        initInteractiveBackground();
    }
});
