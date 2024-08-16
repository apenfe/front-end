var marca = "Peugeot";
var velocidad = 170;
var stock = 4;
var modelos = ['208','308','3008'];

console.log("De la marca "+marca+", tenemos "+ stock+" unidades en stock, todos alcanzan los "+velocidad+" km/h. Estos son: ");

for(let i= 0; i<modelos.length; i++){

    if(i == modelos.length-1){
        console.log(modelos[i]+".");
    }else{
        console.log(modelos[i]+", ");
    }
  
}