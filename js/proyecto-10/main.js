let palabra = prompt("Inserte una palabra: ");

function contar(palabra){

    document.querySelector("#word").innerHTML = palabra;
    let parrafo = document.querySelector("#letras");

    parrafo.innerHTML += "La palabra tiene un total de " + palabra.length + " letras: ";

    for(let i = 0; i<palabra.length; i++){

        parrafo.innerHTML += palabra[i] + " "

    }

}

contar(palabra);
