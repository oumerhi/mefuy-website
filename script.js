document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Sticky Navbar Polish
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.height = '70px';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.height = '90px';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu
    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        // Add mobile styling via JS or CSS class toggle
        navLinks.classList.toggle('mobile-active');
    });

    // Form Handling with visual feedback
    const form = document.querySelector('.premium-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.innerText = 'Sending Inquiry...';
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
            alert('Your request has been received by Mefuya Trading. An agent will contact you within 24 hours.');
            form.reset();
            btn.innerText = 'Send Brief';
            btn.style.opacity = '1';
        }, 1500);
    });

    // Simple Intersection Observer for Fade-In
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-item, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});