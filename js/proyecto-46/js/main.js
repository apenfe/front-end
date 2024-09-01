window.addEventListener("DOMContentLoaded", (event) => {

    let pages = document.querySelectorAll(".main__page");
    let navItems = document.querySelectorAll(".nav__item");

    let navigation = () => {

        navItems.forEach((navItem, index) => {

            navItem.addEventListener("click", () => {

                for (let i = 0; i < pages.length; i++) {

                    if (i == index) {
                        pages[index].classList.add("main__page--active");
                        navItem.classList.add("nav__item--active");
                    } else {
                        pages[i].classList.remove("main__page--active");
                        navItems[i].classList.remove("nav__item--active");
                    }

                }

            });

        });

    }

    navigation();

});