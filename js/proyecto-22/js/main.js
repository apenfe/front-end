window.addEventListener("DOMContentLoaded", event => {

    let input = document.querySelector(".main__input");
    let texto = document.querySelector(".main__text");

    input.addEventListener("keydown", e => {

        let search = input.value;

        if(search.trim() != "" && e.code == "Enter"){

            let regex = new RegExp(search, "gi");

            texto.innerHTML = texto.textContent.replace(regex, "<span class='text__search'>$&</span>");

        }

    });

});