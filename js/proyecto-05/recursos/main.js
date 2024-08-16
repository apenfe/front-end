
let tableContainer = document.querySelector(".tables");

let result = 0;

for(let i = 1; i<=10; i++){

    tableContainer.innerHTML += `
        <div class="tables__item">

            <h2 class="tables__title">
                Tabla del ${i}
            </h2>
    
            <ul class="tables__list tables__list--${i}">
            
            </ul>
            
        </div>
    `;

    // calcular resultado
    for(let j = 0; j<=10; j++){

        result = i*j;

        // sacar caja donde mostrar operaciones
        let list = document.querySelector('.tables__list--'+i);

        // imprimir todas las operaciones.
        list.innerHTML += `<li class="list__item">${i} X ${j} = ${result}</li>`   

    }

}
