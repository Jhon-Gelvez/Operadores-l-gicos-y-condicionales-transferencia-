// 5. Sistema de calificaciones con condiciones lógicas
// Un estudiante aprueba una materia si:
// • Su nota final es mayor o igual a 60 y
// • Su asistencia es mayor o igual al 80%.
// Si no cumple ambas condiciones, debe mostrar "Reprobado".
// Pregunta de análisis: 
// ¿Qué operador lógico garantiza que ambas condiciones se
// evalúen al mismo tiempo?

// el operador && (and) permite unir las dos comprobaciones en una sola linea y darnos como resultado un TRUE si ambas se cumplen o FALSE en caso contrario 

// Solicitar la nota al usuario
let nota = parseInt(prompt("Ingrese la nota final:"));

// Solicitar el porcentaje de asistencia
let asistencia = parseInt(prompt("Ingrese el porcentaje de asistencia:"));

// Verificar ambas condiciones
if (nota >= 60 && asistencia >= 80) {
    alert("Aprobado");
} else {
    alert("Reprobado");
}
