let result = 0;

function sumAll(...numbers){ // recoje todos los parametros dados en un array llamado numbers

    let salida = 0;
    let resulNumbers = document.querySelector("#numbers");

    for(let i = 0; i<numbers.length; i++){
        salida += numbers[i];
        resulNumbers.innerHTML += numbers[i];

        if(i!= numbers.length-1){
            resulNumbers.innerHTML += ", ";
        }else{
            resulNumbers.innerHTML += ".";
        }
    }

    return salida;

}

result = sumAll(2,4);

let resultBox = document.querySelector("#result").innerHTML = "El resultado es "+result;