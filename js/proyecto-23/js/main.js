window.addEventListener("DOMContentLoaded", event => {

    let input = document.querySelector(".main__input");
    let main =  document.querySelector(".layout__main");
    let check = document.querySelector(".icons__check");
    let xmark = document.querySelector(".icons__xmark");

    input.addEventListener("focus", () => {
        main.classList.add("focus");
    });

    input.addEventListener("blur", () => {
        main.classList.remove("focus");
    });

    input.addEventListener("keydown", () => {
        validate();
    });

    let validate = () => {

        let email = input.value;
        let pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(email.trim() != ""){

            let test = pattern.test(email);

            if(test){
                check.classList.add("show");
                xmark.classList.remove("show");
            }else{
                check.classList.remove("show");
                xmark.classList.add("show");
            }

        }
    }

});