// Menu
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__btn')
const menuLink = document.querySelectorAll('.menu__link')

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('menu--active')
})

menuLink.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('menu--active')
    })
})


// price__swiper
const swiper = new Swiper(".price__swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// popup
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});