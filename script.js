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