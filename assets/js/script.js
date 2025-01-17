document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('header')) {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('nav').classList.remove('active');
    }
});

// Handle mobile dropdown toggles
const dropdownParents = document.querySelectorAll('.dropdown-parent');
dropdownParents.forEach(parent => {
    parent.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle('active');
        }
    });
});