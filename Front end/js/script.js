// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function(){
    
    // --- QUERY SELECTORS ---
    const header = document.querySelector('.header');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const learnMoreLinks = document.querySelectorAll('.learn-more-link');
    const heroLogo = document.getElementById('heroLogo');
    const heroTitle = document.querySelector('.hero-title');
    const navLinks = document.querySelectorAll('.nav-links a');
    const badges = document.querySelectorAll('.badge');
    const brandName = document.querySelector('.brand-name');
    const logoContainer = document.querySelector('.logo-container');
    
    // --- STATE VARIABLES ---
    let isLogoClicked = false;
    let typewriterActive = false;

    // --- COMBINED SCROLL LISTENER (Fixes animation bug & improves performance) ---
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // 1. Header background effect
        if (header) {
            if (currentScrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.9)';
                header.style.boxShadow = 'none';
            }
        }

        // 2. Parallax effect for hero elements
        if (heroLogo && !isLogoClicked) {
            heroLogo.style.transform = `rotate(45deg) translateY(${currentScrollY * 0.1}px)`;
        }
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${currentScrollY * 0.05}px)`;
        }
    });

    // --- EVENT HANDLERS ---

    // Get Started button click handler
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Simulate navigation or action
            console.log('Get Started clicked!');
            showModal('Welcome to Obsidian Security! 🔒\n\nChoose a tool to get started:\n• Threat Query - Ask any security question\n• Phishing Analyzer - Check suspicious emails');
        });
    }

    // Learn more links handler
    learnMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const threat = this.dataset.threat;
            showThreatInfo(threat);
        });
    });

    // Hero logo click handler
    if (heroLogo) {
        heroLogo.addEventListener('click', function() {
            isLogoClicked = true; // Block the scroll effect
            this.style.transform = 'rotate(45deg) scale(1.2) rotateY(180deg)';
            
            setTimeout(() => {
                isLogoClicked = false; // Re-enable the scroll effect
            }, 300);
        });
    }

    // Badge hover and click effects
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        badge.addEventListener('click', function() {
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-4px) scale(1.05)';
            }, 100);
        });
    });

    // Combined smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Add active state animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Perform smooth scroll
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Logo brand name typing effect
    if (brandName && logoContainer) {
        const originalText = brandName.textContent;
        function typewriterEffect() {
            if (typewriterActive) return;
            typewriterActive = true;
            
            brandName.textContent = '';
            let i = 0;
            
            const typeInterval = setInterval(() => {
                brandName.textContent += originalText[i];
                i++;
                if (i >= originalText.length) {
                    clearInterval(typeInterval);
                    typewriterActive = false;
                }
            }, 100);
        }
        logoContainer.addEventListener('mouseenter', typewriterEffect);
    }
    
    // --- MODAL AND THREAT INFO LOGIC ---
    function showThreatInfo(threatType) {
        const threatInfo = {
            'phishing': { /* ... content ... */ },
            'malware': { /* ... content ... */ },
            'passwords': { /* ... content ... */ },
            'wifi': { /* ... content ... */ },
            'social-engineering': { /* ... content ... */ }
            // NOTE: Threat info content is omitted here for brevity but should be included
        };
        const info = threatInfo[threatType];
        if (info) {
            showModal(`${info.title}\n\n${info.content}`);
        }
    }

    function showModal(content) {
        alert(content.replace(/\*\*(.*?)\*\*/g, '$1').replace(/•/g, '•'));
    }

    // --- INTERSECTION OBSERVER for scroll animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.content-section, .threat-card').forEach(el => {
        observer.observe(el);
    });

    // --- PARTICLE EFFECT ---
    function createParticle() { /* ... particle creation logic ... */ }
    // Activate the particle effect
    setInterval(createParticle, 500);

    // --- DYNAMICALLY ADDED CSS ---
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp { /* ... keyframes ... */ }
        .ripple { /* ... styles ... */ }
        @keyframes rippleEffect { /* ... keyframes ... */ }
    `;
    document.head.appendChild(style);
});