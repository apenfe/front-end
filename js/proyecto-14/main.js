/*
Un usuario nos dira su sueldo

Necesito saber que sueldos son iguales o mayores al suyo en la empresa.

Crea un programa que dado un array de sueldos,
busque los sueldos mayores o iguales a uno dado por el usuario,
cuando los encuentre, debera ordenar los resultados de forma ascendente
y mostrarlos por consola.
*/

const sueldos = [1050, 750, 300, 750, 3011, 480];

var sueldoUsuario = parseInt(prompt("Cual es tu sueldo?"));

function buscarSueldos(salarios, miSueldo){

    let busqueda = salarios.filter(salario => salario >= miSueldo);

    let ordenar = busqueda.sort((a,b) => a - b);

    console.log(ordenar);

}

buscarSueldos(sueldos, sueldoUsuario);