const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".mobile-menu__close");

function openMenu() {
  menu.classList.add("mobile-menu_open");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  menu.classList.remove("mobile-menu_open");
  document.body.classList.remove("no-scroll");
}

burger.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
