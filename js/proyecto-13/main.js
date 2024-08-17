let concesionario = [
    {
        marca: "Mercedes",
        modelos: ['clase A', 'clase B', 'clase C']
    },
    {
        marca: "Audi",
        modelos: ['TT', 'A2', 'A4']
    },
    {
        marca: "Peugeot",
        modelos: ['208', '308', '3008']
    },
]

function mostrar(datos){

    let cajaConcesionario = document.querySelector("#concesionario");

    datos.forEach(coches => {

        cajaConcesionario.innerHTML += `<h1>${coches.marca}</h1>`;

        cajaConcesionario.innerHTML += `<ul>`;

        coches.modelos.forEach(modelo => {

            cajaConcesionario.innerHTML += `<li>${modelo}</li>`;

        });

        cajaConcesionario.innerHTML += `</ul>`;
        
    });

}

mostrar(concesionario);