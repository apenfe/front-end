let frase = "Este curso tiene muchos proyectos web para practicar";

let palabra_reemplazo = prompt(`En esta frase ${frase} que palabra quieres reemplazar?` );
let palabra_nueva = prompt("Inserte una palabra nueva: ");

function reemplazar(antigua, nueva){

    let fraseFinal = "";

    let busqueda = frase.search(antigua);

    if(busqueda && busqueda != -1){
        fraseFinal += frase.replace(antigua,nueva);
    }else{
        fraseFinal += "Esa palabra no existe";
    }

    return fraseFinal;

}

alert(reemplazar(palabra_reemplazo,palabra_nueva));