window.addEventListener("DOMContentLoaded", (event) => {

    let main = document.querySelector(".layout__main");
    let messages = document.querySelector(".main__messages");
    let form = document.querySelector(".main__form");
    let input = document.querySelector(".form__input");
    let loader = document.querySelector(".layout__loader");

    setTimeout(() => {
        main.style.display = "flex";
        loader.style.display = "none";
    }, 5000);

    form.addEventListener("submit", sendMessage);

    function sendMessage(e) {
        e.preventDefault();

        let text = input.value;

        if (text.trim() != "") {
            messages.innerHTML += `
                <article class="messages__message">
                    <p class="message__name">${"Lorenzo Casal"}</p>
                    <p class="message__text">${text}</p>
                </article>
            `;

            input.value = "";
        }

    };


});