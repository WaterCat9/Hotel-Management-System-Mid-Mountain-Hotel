
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

        document.querySelectorAll('.feature-card').forEach(card => {
            observer.observe(card);
        });
