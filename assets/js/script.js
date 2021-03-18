const menuBtn = document.querySelector('.menu__btn')

menuBtn.addEventListener('click', (e) => {
    document.querySelector('.header__menu').classList.toggle('header__menu--active')
})