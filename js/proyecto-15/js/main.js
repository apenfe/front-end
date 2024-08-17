window.addEventListener("DOMContentLoaded", () => {

    let cards = document.querySelectorAll(".layout__card");

    cards.forEach( card => {

        let btn = document.createElement("button");
        let text = document.createTextNode("Eliminar tarjeta");

        btn.classList.add("content__btn");
        btn.appendChild(text);

        card.children[1].appendChild(btn);

    });

});