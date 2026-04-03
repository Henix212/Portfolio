document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('active') }), { threshold: .1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
    const io = new IntersectionObserver(es => es.forEach((e, i) => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 90) }), { threshold: .08 });
    document.querySelectorAll('.tl-item,.pcard,.ccard').forEach(el => io.observe(el));
});
