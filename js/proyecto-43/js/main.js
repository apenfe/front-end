window.addEventListener("DOMContentLoaded", (event) => {

    let btn = document.querySelector(".nav__btn");
    let nav = document.querySelector(".layout__nav");
    let list = document.querySelector(".nav__list");

    nav.classList.remove("layout__nav--show");
    list.classList.remove("nav__list--show");

    btn.addEventListener("click", (e) => {

        nav.classList.toggle("layout__nav--show");
        list.classList.toggle("nav__list--show");

    });

});