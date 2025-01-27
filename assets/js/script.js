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

function showRentForm() {
    document.getElementById('modalOverlay').style.display = 'flex';
}

function hideRentForm() {
    document.getElementById('modalOverlay').style.display = 'none';
}

function updateContactPlaceholder() {
    const contactMethod = document.getElementById('contact-method').value;
    const contactDetailInput = document.getElementById('contact-detail');

    switch (contactMethod) {
        case 'email':
            contactDetailInput.placeholder = 'Укажите вашу почту';
            break;
        case 'telegram':
            contactDetailInput.placeholder = 'Ваш @username';
            break;
        case 'phone':
            contactDetailInput.placeholder = 'Ваш номер телефона';
            break;
        case 'whatsapp':
            contactDetailInput.placeholder = 'Ваш номер WhatsApp';
            break;
        default:
            contactDetailInput.placeholder = 'Укажите ваш способ связи';
            break;
    }
}

function submitRentForm() {
    const name = document.getElementById('name').value;
    const contactMethod = document.getElementById('contact-method').value;
    const contactDetail = document.getElementById('contact-detail').value;

    if (name && contactMethod && contactDetail) {
        alert(`Заявка отправлена! Имя: ${name}, Связь через: ${contactMethod}, Контакт: ${contactDetail}`);
        hideRentForm();
    }else{
        alert(`Заполните все поля`)
    }
}

