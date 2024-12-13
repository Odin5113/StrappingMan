// Add smooth scrolling to navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset();
});