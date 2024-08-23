window.addEventListener("DOMContentLoaded", (event) => {

    let controls = document.querySelectorAll(".form__control");

    controls.forEach(formControl => {

        let label = formControl.firstElementChild;
        let input = formControl.lastElementChild;

        input.addEventListener("focus", () => {

            label.classList.remove("blur");
            label.classList.add("focus");

        });

        input.addEventListener("blur", () => {

            if(input.value.trim() == ""){
                label.classList.add("blur");
            label.classList.remove("focus");

            }
            
        });

    });
 
});