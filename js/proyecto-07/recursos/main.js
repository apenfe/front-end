const actualYear = new Date().getFullYear();

let year = 0;
let result = 0;

do{

    year = parseInt(prompt("Inserte año de nacimiento",year));

    if(year < 1910 || year > actualYear){
        alert("Año invalido");
    }else{
        break;
    }

}while(true);

result = actualYear - year;

alert("Tienes "+result+" años.");