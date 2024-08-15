let nombre = "Adrian";
let apellido = "Peñalver";
let edad = 28;
let pais = "España";
let conocimientos = ['js','java'];

console.log("Hola, soy "+nombre+" "+apellido + ", tengo "+edad+" años, vivo en "+pais+" y tengo los siguientes conocimientos: "+conocimientos[0]+" y "+conocimientos[1]+".");

edad = 67;

conocimientos.push('sql');

console.log("Ahora tengo "+edad+" años y he aprendido "+conocimientos[2]+".")