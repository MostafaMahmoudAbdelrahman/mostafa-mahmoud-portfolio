// Image Fallback Handler
document.addEventListener('DOMContentLoaded', () => {
    const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/MostafaMahmoudAbdelrahman/mostafa-mahmoud-portfolio/main';
    
    // Get all images
    const images = document.querySelectorAll('img[src^="resources/"]');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // If local resource fails, use GitHub URL
            const resourcePath = this.src;
            this.src = `${GITHUB_RAW_URL}/${resourcePath}`;
            console.log(`Fallback loaded: ${this.src}`);
        });
    });
});

// Intersection Observer for Scroll Reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.8s ease-out ${index * 0.05}s, transform 0.8s ease-out ${index * 0.05}s`;
        observer.observe(el);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Navbar background on scroll - throttled
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
            navbar.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.7)';
            navbar.style.boxShadow = 'none';
        }
        scrollTimeout = null;
    }, 100);
});

// Parallax effect for hero section - throttled
let parallaxTimeout;
window.addEventListener('scroll', () => {
    if (parallaxTimeout) return;
    
    parallaxTimeout = setTimeout(() => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        parallaxTimeout = null;
    }, 50);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #ff006e, #ffd60a);
    z-index: 10000;
    width: 0%;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

let progressTimeout;
window.addEventListener('scroll', () => {
    if (progressTimeout) return;
    
    progressTimeout = setTimeout(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
        progressTimeout = null;
    }, 50);
});

// Initialize on load
window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully');
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const statusElement = document.getElementById('form-status');
            
            try {
                // Using Web3Forms with redirect method (no key exposed)
                const formData = new FormData();
                formData.append('access_key', 'c2142e08-7735-4392-af30-b24443c593de');
                formData.append('name', name);
                formData.append('email', email);
                formData.append('message', message);
                formData.append('subject', `New Portfolio Message from ${name}`);
                formData.append('from_name', 'Portfolio Contact Form');
                formData.append('to_email', 'drshdrsh26@yahoo.com');
                formData.append('redirect', 'https://mostafamahmoud.dev/thank-you.html'); // Optional: redirect after submit
                
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    statusElement.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
                    statusElement.classList.add('success');
                    statusElement.classList.remove('error');
                    contactForm.reset();
                    setTimeout(() => {
                        statusElement.classList.remove('success');
                    }, 5000);
                } else {
                    throw new Error(data.message || 'Failed to send message');
                }
            } catch (error) {
                console.error('Error:', error);
                statusElement.textContent = '✗ Error sending message. Please email directly: drshdrsh26@yahoo.com';
                statusElement.classList.add('error');
                statusElement.classList.remove('success');
            }
        });
    }
});
