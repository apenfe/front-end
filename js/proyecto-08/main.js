window.addEventListener("DOMContentLoaded", event => {

    let numero = parseInt(prompt("Inserte un numero"));

    let result_box = document.querySelector("#result");

    if(numero % 2 == 0){

        console.log("Es un numero par");
        prompt("Es un numero par");
        result_box.innerHTML = "<h1>El numero es par</h1>";

    }else{

        console.log("Es un numero impar");
        prompt("Es un numero impar");
        result_box.innerHTML = "<h1>El numero es impar</h1>";

    }

});
