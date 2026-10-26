// Abstract toggles
document.querySelectorAll('.abstract-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const content = link.closest('.paper').querySelector('.abstract-content');
        content.classList.toggle('show');
        const label = link.textContent.replace(/^Hide /, '');
        link.textContent = content.classList.contains('show') ? 'Hide ' + label : label;
    });
});

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-bar ul');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => navList.classList.toggle('show'));

    document.querySelectorAll('.nav-bar a').forEach(link => {
        link.addEventListener('click', () => navList.classList.remove('show'));
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-bar') && navList.classList.contains('show')) {
            navList.classList.remove('show');
        }
    });
}
