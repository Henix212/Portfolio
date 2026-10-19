document.addEventListener('DOMContentLoaded', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        const staggerObserver = new IntersectionObserver(entries => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('vis'), i * 70);
                }
            });
        }, { threshold: 0.08 });

        document.querySelectorAll('.tl-item, .plist-item, .edu-item, .certs-list li').forEach(el => {
            staggerObserver.observe(el);
        });
    } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
        document.querySelectorAll('.tl-item, .plist-item, .edu-item, .certs-list li').forEach(el => {
            el.classList.add('vis');
        });
    }

    const progress = document.querySelector('.scroll-progress');
    if (progress) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            progress.style.width = `${Math.min(scrolled * 100, 100)}%`;
        }, { passive: true });
    }

    const toggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            toggle.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open);
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
