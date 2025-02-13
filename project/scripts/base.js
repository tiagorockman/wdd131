const hamButton = document.querySelector('#menu');
const navLinks = document.querySelector('.nav-links');  // FIXED SELECTOR

hamButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');  // Toggle .open on .nav-links
    hamButton.classList.toggle('open');
});