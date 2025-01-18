document.addEventListener('DOMContentLoaded', function() {
    const dropdownParents = document.querySelectorAll('.dropdown-parent');
    const categoryButtons = document.querySelectorAll('.radio-button');
    const newsCards = document.querySelectorAll('.card');


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
                card.style.display = 'block'; // Показываем карточку
            } else {
                card.style.display = 'none'; // Скрываем карточку
            }
        });
    }
});