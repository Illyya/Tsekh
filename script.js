let menu = document.querySelector('.menu');
let burger = document.querySelector('.header__menu_burger');

burger.onclick = function () {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}

