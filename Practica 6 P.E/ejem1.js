let puntuacion = 85;
let calificacion = "";

// Verificamos el puntaje y asignamos una calificación
if (puntuacion >= 90) {
    calificacion = "A";
} else if (puntuacion >= 80) {
    calificacion = "B";
} else if (puntuacion >= 70) {
    calificacion = "C";
} else if (puntuacion >= 60) {
    calificacion = "D";
} else {
    calificacion = "F";
}

console.log(`La calificación del estudiante es: ${calificacion}`);
