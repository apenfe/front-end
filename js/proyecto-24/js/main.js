window.addEventListener("DOMContentLoaded", event => {

    let input = document.querySelector(".form__input");
    let icon = document.querySelector(".form__eye > .fa-solid");

    icon.addEventListener("click", () => {

        if(input.type == "password" && input.value.trim() != ""){
            input.type = "text";
        }else{
            input.type = "password";
        }

    });

});