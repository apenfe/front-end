let animales = ['leon','cebra','mono','humano','perro'];

const recorrerMostrar = () => {
    document.write("<h1>Ptoyecto 12 JS</h1>");

    for(let i = 0; i<animales.length; i++){

        let parrafo = `<p>Este animal es: ${animales[i]}</p>`;
        document.write(parrafo);
        
    }

}

recorrerMostrar();