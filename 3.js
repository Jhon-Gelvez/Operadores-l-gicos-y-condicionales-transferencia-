
let numero = parseInt(prompt("Ingresa un número entero:"));

if (numero > 0) {
    console.log("Número positivo");
    alert("Es un número positivo");
} else if (numero < 0) {
    console.log("Número negativo");
    alert("Es un número negativo");
} else {
    console.log("Es Cero");
    alert("Es Cero");
}

//  Extensión: Verificación de Par o Impar Solo evaluamos par/impar //
if (numero !== 0) {
    if (numero % 2 === 0) {
        console.log("Además, es un número PAR.");
    } else {
        console.log("Además, es un número IMPAR.");
    }
}