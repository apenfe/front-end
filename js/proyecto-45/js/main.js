window.addEventListener("DOMContentLoaded", (event) => {

    let layout = document.querySelector(".layout");
    let upButton = document.querySelector(".btns__up");
    let downButton = document.querySelector(".btns__down");
    let left = document.querySelector(".layout__left");
    let right = document.querySelector(".layout__right");

    let sliderLength = document.querySelectorAll(".left__bg").length;
    let sliderIndex = 0;

    right.style.top = `-${((sliderLength - 1) * 100)}vh`;

    let actions = (action) => {

        if (action == "up") {

            sliderIndex++;

            if (sliderIndex > sliderLength - 1) {
                sliderIndex = 0;
            }

        } else if (action == "down") {

            sliderIndex--;

            if (sliderIndex < 0) {
                sliderIndex = sliderLength - 1;
            }

        }

        let windowHeight = layout.clientHeight;

        left.style.transform = `translateY(-${sliderIndex * windowHeight}px)`;
        right.style.transform = `translateY(${sliderIndex * windowHeight}px)`;

    }

    upButton.addEventListener("click", () => {
        actions("up");
    });

    downButton.addEventListener("click", () => {
        actions("down");
    });

});