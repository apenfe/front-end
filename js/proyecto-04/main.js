var sueldo = 1700;
var resultado = document.getElementById('resultado');

switch(sueldo){

    case 500:
        resultado.innerHTML = 'Trabajas a media jornada';
    break;
    case 1000:
        resultado.innerHTML = 'Salario minimo';
    break;
    case 1300:
        resultado.innerHTML = 'Tu sueldo es regular';
    break;
    case 1700:
        resultado.innerHTML = 'Tu sueldo es bueno';
    break;
  
}
  