function verificarAcceso() {

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario === "admin" && contrasena === "1234") {
        document.getElementById("resultado").innerText = "Acceso permitido";
    } else {
        document.getElementById("resultado").innerText = "Acceso denegado";
    }

}