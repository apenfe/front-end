window.addEventListener("DOMContentLoaded", event => {

    let grayStar = document.querySelector(".main__star--gray");
    let yellowStar = document.querySelector(".main__star--yellow");

    grayStar.addEventListener("click", () => {
        yellowStar.classList.add("visible");
        grayStar.classList.add("yellow-color");
    });

    yellowStar.addEventListener("click", () => {
        yellowStar.classList.remove("visible");
        grayStar.classList.remove("yellow-color");
    });

});