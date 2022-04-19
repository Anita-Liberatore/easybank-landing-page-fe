const hamburger = document.getElementById('hamburger');
const pageLinks = document.getElementById('page-links-mobile');

hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('show');
        pageLinks.classList.toggle('show');
});