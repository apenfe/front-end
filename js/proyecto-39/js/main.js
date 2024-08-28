window.addEventListener("DOMContentLoaded", (event) => {

    let nav = document.querySelector(".layout__nav");

    window.addEventListener("scroll", () => {

        if (document.documentElement.scrollTop > 200) {
            nav.classList.add("layout__nav--fixed");
        } else {
            nav.classList.remove("layout__nav--fixed");
        }

    });

});