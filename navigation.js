// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
