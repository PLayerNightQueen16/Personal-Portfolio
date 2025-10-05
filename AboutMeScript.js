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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                profileBlock.classList.remove('animate-writing');
                void profileBlock.offsetWidth; // trigger reflow to restart animation
                profileBlock.classList.add('animate-writing');
            }
        });
    }, { threshold: 0.5 });
    observer.observe(profileBlock);

    // About card animation on scroll
    const aboutCard = document.getElementById('aboutCard');
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    aboutObserver.observe(aboutCard);

    // Education card animation on scroll
    const eduCard = document.getElementById('eduCard');
    const eduObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    eduObserver.observe(eduCard);

    // Skills card animation on scroll
    const skillCard = document.getElementById('skillCard');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    skillObserver.observe(skillCard);

    // Projects card animation on scroll// Skills card animation on scroll
    const projectCard = document.getElementById('projectCard');
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    projectObserver.observe(projectCard);

    // Contact card animation on scroll
    const contactCard = document.getElementById('contactCard');
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    contactObserver.observe(contactCard);
});

function sendEmail(e) {
    e.preventDefault(); // prevent actual form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:jeonsamikshita@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=From: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}
