document.addEventListener('DOMContentLoaded', function() {
    const dropdownParents = document.querySelectorAll('.dropdown-parent');
    const categoryButtons = document.querySelectorAll('.radio-button');
    const newsCards = document.querySelectorAll('.card');
    const navLinks = document.querySelectorAll('nav ul li a');


    dropdownParents.forEach(parent => {
        const dropdown = parent.querySelector('.dropdown');
        const link = parent.querySelector('.page-link');

        link.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const selectedCategory = this.dataset.category;
            filterNews(selectedCategory);
        });
    });
    function filterNews(category) {
        newsCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

const rentButtons = document.querySelectorAll('.rent_btn');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');

rentButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = "block";
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

