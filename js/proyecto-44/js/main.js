window.addEventListener("DOMContentLoaded", (event) => {

    let xmark = document.querySelector(".selection__close");
    let selection = document.querySelector(".selection");
    let selectedBox = document.querySelector(".selection__image");
    let imageSelected = document.querySelector(".image__selected");

    let images = document.querySelectorAll(".main__image");

    images.forEach(image => {

        image.addEventListener("click", () => {

            let img = image.querySelector(".image__item");
            imageSelected.setAttribute("src", img.getAttribute("src"));
            selection.classList.add("selection--show");

            xmark.addEventListener("click", () => {
                selectedBox.setAttribute("src", image.getAttribute("src"));
                selection.classList.remove("selection--show");
            });

        });

    });

});