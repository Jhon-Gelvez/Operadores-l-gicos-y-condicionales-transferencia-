

let opcion = Number(prompt("1. Saldo\n2. Retirar\n3. Depositar\n4. Salir"));

switch (opcion) {
    case 1:
        alert("Consultando saldo...");
        break;
    case 2:
        alert("Retirando dinero...");
        break;
    case 3:
        alert("Depositando dinero...");
        break;
    case 4:
        alert("Saliendo del sistema...");
        break;
    default:
        alert("Opción no válida. Intenta de nuevo.");
        break;
}