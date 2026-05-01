document.addEventListener('DOMContentLoaded', () => {
    // Navbar active state
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });

    // Profile block animation on scroll
    const profileBlock = document.querySelector('.profile-block');
    let writingInterval;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const restartAnimation = () => {
                    profileBlock.classList.remove('animate-writing');
                    void profileBlock.offsetWidth; // trigger reflow to restart animation
                    profileBlock.classList.add('animate-writing');
                };
                restartAnimation();
                // Animation takes ~25s total. Wait an extra 30s = 55000ms loop
                writingInterval = setInterval(restartAnimation, 55000);
            } else {
                // Remove class and stop interval when scrolled out of view
                profileBlock.classList.remove('animate-writing');
                clearInterval(writingInterval);
            }
        });
    }, { threshold: 0.3 }); // lower threshold to ensure it triggers on large screens
    observer.observe(profileBlock);

    // Scroll animations for all cards and images
    const scrollElements = document.querySelectorAll(
        '.about-card, .education-card, .skill-card, .project-card, .contact-card, .about-images img, .edu-images img, .skills-images img, .project-images img'
    );

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Remove class when out of view so it animates every time you scroll to it
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.15 });

    scrollElements.forEach(el => scrollObserver.observe(el));
});

function sendEmail(e) {
    e.preventDefault(); // prevent actual form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:jeonsamikshita@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=From: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}
