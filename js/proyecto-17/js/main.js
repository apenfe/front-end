window.addEventListener("DOMContentLoaded", event => {

    let cards = document.querySelectorAll(".layout__card");

    cards.forEach(card => {

        let header = card.querySelector(".card__header");
        let description = card.querySelector(".content__description");
        let btn = card.querySelector(".content__btn");

        btn.addEventListener("click", ()=>{

            if(btn.style.backgroundColor == "white"){

                card.style.boxShadow = "none";
                header.style.backgroundColor = "#0E6EFC";
                description.style.opacity = "1";
                btn.style.backgroundColor = "#0E6EFC";
                btn.style.color = "white";

            }else{

                card.style.boxShadow = "0px 0px 14px black";
                header.style.backgroundColor = "#1962CA";
                description.style.opacity = "0.8";
                btn.style.backgroundColor = "white";
                btn.style.color = "#1962CA";
                
            }

        });

    });

});