class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particle-container');
        this.particles = [];
        this.particleCount = window.innerWidth <= 480 ? 8 : (window.innerWidth <= 768 ? 15 : 30);
        this.init();
        this.animate();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 2 + 0.5; // Smaller particles
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        const colors = ['#38bdf8', '#818cf8', '#fb923c', '#a78bfa'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${color}, transparent);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            box-shadow: 0 0 ${size * 2}px ${color};
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: float ${duration}s linear ${delay}s infinite;
            z-index: 2;
            will-change: transform;
        `;
        
        this.container.appendChild(particle);
        this.particles.push({
            element: particle,
            x: x,
            y: y,
            size: size,
            duration: duration,
            delay: delay,
            color: color
        });
    }

    animate() {
        if (!document.getElementById('particle-animation')) {
            const style = document.createElement('style');
            style.id = 'particle-animation';
            style.textContent = `
                @keyframes float {
                    0% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-${window.innerHeight + 100}px) translateX(${Math.random() * 100 - 50}px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Recreate particles less frequently
        setInterval(() => {
            this.particles.forEach((p, index) => {
                const rect = p.element.getBoundingClientRect();
                if (rect.top > window.innerHeight || rect.top < -100) {
                    p.element.remove();
                    this.particles.splice(index, 1);
                    this.createParticle();
                }
            });
        }, 2000); // Increased from 1000ms
    }
}

// Initialize particle system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
});
