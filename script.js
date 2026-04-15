// ─── Theme System ──────────────────────────────────────────────────────────
(function () {
    const html = document.documentElement;
    const STORAGE_KEY = 'portfolio-theme';

    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        // 'auto' means follow system; otherwise force dark/light
        if (theme === 'auto') {
            html.removeAttribute('data-theme');
        } else {
            html.setAttribute('data-theme', theme);
        }
        updateIcon(theme === 'auto' ? getSystemTheme() : theme);
    }

    function updateIcon(resolvedTheme) {
        const icon = document.getElementById('theme-icon');
        if (icon) icon.textContent = resolvedTheme === 'dark' ? '☀️' : '🌙';
    }

    // Apply saved preference immediately (before paint) to prevent flash
    const saved = localStorage.getItem(STORAGE_KEY) || 'auto';
    applyTheme(saved);

    // Listen for system changes when in auto mode
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!localStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY) === 'auto') {
            applyTheme('auto');
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;

        // Set correct icon on load
        const current = html.getAttribute('data-theme') || 'auto';
        updateIcon(current === 'auto' ? getSystemTheme() : current);

        btn.addEventListener('click', () => {
            const active = html.getAttribute('data-theme') || getSystemTheme();
            const next = active === 'dark' ? 'light' : 'dark';
            localStorage.setItem(STORAGE_KEY, next);
            applyTheme(next);
            // Reset inline navbar styles so CSS theme rules take over
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.background = '';
                navbar.style.boxShadow = '';
            }
        });
    });
})();

// ─── Image Fallback Handler ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/MostafaMahmoudAbdelrahman/mostafa-mahmoud-portfolio/main';
    document.querySelectorAll('img[src^="resources/"]').forEach(img => {
        img.addEventListener('error', function() {
            const resourcePath = this.getAttribute('src');
            this.src = `${GITHUB_RAW_URL}/${resourcePath}`;
        });
    });
});

// ─── Typewriter Effect ─────────────────────────────────────────────────────
const typewriterRoles = [
    'Unity & VR Developer',
    'XR Experience Architect',
    'Co-Founder @ Studio Ajaib',
    'Game Systems Engineer',
    'Tech Lead & Mentor',
];

let twRoleIdx = 0, twCharIdx = 0, twDeleting = false;

function typewriterTick() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    const current = typewriterRoles[twRoleIdx];

    if (!twDeleting) {
        el.textContent = current.slice(0, twCharIdx + 1);
        twCharIdx++;
        if (twCharIdx === current.length) {
            twDeleting = true;
            setTimeout(typewriterTick, 1800);
            return;
        }
        setTimeout(typewriterTick, 60);
    } else {
        el.textContent = current.slice(0, twCharIdx - 1);
        twCharIdx--;
        if (twCharIdx === 0) {
            twDeleting = false;
            twRoleIdx = (twRoleIdx + 1) % typewriterRoles.length;
            setTimeout(typewriterTick, 300);
            return;
        }
        setTimeout(typewriterTick, 35);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typewriterTick, 800);
});

// ─── Animated Stat Counters ────────────────────────────────────────────────
function animateCounter(el, target, duration = 1200) {
    const start = performance.now();
    const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-value[data-count]');
    if (!counters.length) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                animateCounter(el, parseInt(el.dataset.count, 10));
                io.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', initCounters);

// ─── Intersection Observer for Scroll Reveal ──────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal-text').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.7s ease-out ${index * 0.04}s, transform 0.7s ease-out ${index * 0.04}s`;
        revealObserver.observe(el);
    });
});

// ─── 3D Card Tilt Effect ──────────────────────────────────────────────────
function initCardTilt() {
    const cards = document.querySelectorAll('.project-card, .expertise-card, .skill-category');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s ease';
        });
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });
}

document.addEventListener('DOMContentLoaded', initCardTilt);

// ─── Smooth Scroll ────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            if (navMenu) navMenu.style.display = '';
        }
    });
});

// ─── Mobile Menu Toggle ───────────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.style.display === 'flex';
        navMenu.style.display = isOpen ? 'none' : 'flex';
        hamburger.setAttribute('aria-expanded', String(!isOpen));
    });
}

// ─── Navbar scroll behavior ───────────────────────────────────────────────
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (window.scrollY > 50) {
            navbar.style.background = isLight
                ? 'rgba(238, 244, 251, 0.98)'
                : 'rgba(3, 6, 16, 0.97)';
            navbar.style.boxShadow = isLight
                ? '0 0 30px rgba(2, 132, 199, 0.12)'
                : '0 0 30px rgba(56, 189, 248, 0.08)';
        } else {
            navbar.style.background = '';
            navbar.style.boxShadow = '';
        }
        scrollTimeout = null;
    }, 100);
});

// ─── Scroll Progress Bar ─────────────────────────────────────────────────
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 2px;
    background: linear-gradient(90deg, #38bdf8, #818cf8, #fb923c);
    z-index: 10001; width: 0%; transition: width 0.08s linear;
    pointer-events: none;
`;
document.body.appendChild(progressBar);

let progressTimeout;
window.addEventListener('scroll', () => {
    if (progressTimeout) return;
    progressTimeout = setTimeout(() => {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = pct + '%';
        progressTimeout = null;
    }, 40);
});

// ─── Ripple animation CSS ─────────────────────────────────────────────────
const style = document.createElement('style');
style.textContent = `@keyframes ripple { from { transform:scale(0);opacity:1; } to { transform:scale(1);opacity:0; } }`;
document.head.appendChild(style);

// ─── Email Validation Helper ──────────────────────────────────────────────
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── Contact Form ─────────────────────────────────────────────────────────
window.addEventListener('load', () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const statusElement = document.getElementById('form-status');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        if (!isValidEmail(email)) {
            statusElement.textContent = '✗ Please enter a valid email address.';
            statusElement.className = 'form-status error';
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = '📡 Sending…';

        try {
            const formData = new FormData();
            formData.append('access_key', 'c2142e08-7735-4392-af30-b24443c593de');
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('subject', `New Portfolio Message from ${name}`);
            formData.append('from_name', 'Portfolio Contact Form');
            formData.append('redirect', 'https://mostafamahmoud.dev/thank-you.html');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                statusElement.textContent = '✓ Message sent! I\'ll get back to you soon.';
                statusElement.className = 'form-status success';
                contactForm.reset();
                setTimeout(() => { statusElement.className = 'form-status'; }, 5000);
            } else {
                throw new Error(data.message || 'Failed to send');
            }
        } catch {
            statusElement.textContent = '✗ Error sending. Please email: drshdrsh26@yahoo.com';
            statusElement.className = 'form-status error';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = '⚔ Send Message';
        }
    });
});
