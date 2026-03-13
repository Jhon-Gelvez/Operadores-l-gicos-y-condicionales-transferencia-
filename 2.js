function calcularPrecio() {

    let edad = document.getElementById("edad").value;
    let estudiante = document.getElementById("estudiante").checked;
    let precio;

    if (edad < 12) {
        precio = 5000;
    } else if (edad >= 12 && edad <= 18) {
        precio = 8000;
    } else {
        precio = 10000;
    }

    if (estudiante) {
        precio = precio * 0.8;
    }

    document.getElementById("resultado").innerText = "El precio de la entrada es: " + precio;

}