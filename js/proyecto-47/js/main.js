window.addEventListener("DOMContentLoaded", (event) => {

    let btn = document.querySelector(".nav__btn");
    let pagesBox = document.querySelector(".layout__pages");
    let menu = document.querySelector(".layout__list");
    let items = document.querySelectorAll(".list__item");
    let pages = document.querySelectorAll(".pages__page");

    btn.addEventListener("click", () => {
        btn.classList.toggle("nav__btn--active")
        pagesBox.classList.toggle("layout__pages--show")
        menu.classList.toggle("layout__list--show")
    });

    items.forEach((item, index) => {

        item.addEventListener("click", () => {

            for (let i = 0; i < pages.length; i++) {
                if (index == i) {
                    pages[index].classList.add("page--active")
                } else {
                    pages[i].classList.remove("page--active")
                }
            }

        });

    });

});