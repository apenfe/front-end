window.addEventListener("DOMContentLoaded", (event) => {

    let titulo = document.querySelector(".main__title");
    let texto = "¡Bienvenido al curso!";
    let letterStart = 0;
    let letterEnd = 1;

    let write = () => {

        setInterval(() => {

            titulo.innerText = texto.slice(letterStart, letterEnd);

            letterEnd++;

            if (letterEnd > texto.length) {
                letterEnd = 1;
            }

        }, 100);

    }

    write();

});