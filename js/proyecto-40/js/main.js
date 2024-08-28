window.addEventListener("DOMContentLoaded", (event) => {

    let stars = document.querySelectorAll(".stars__star");

    stars.forEach((star, index) => {

        star.addEventListener("mouseover", () => {

            stars.forEach(star => {
                if (star.classList.contains("active")) {
                    star.classList.remove("active");
                }
            });

            for (let count = 0; count <= index; count++) {
                stars[count].classList.add("active");
            }

        });

    });

});