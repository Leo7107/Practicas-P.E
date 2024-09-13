let letracalificación = 'B'

switch (letracalificación) {
    case "A":
        console.log(`Exelente trabajo`)
        break;
    case "B":
        console.log(`Buen dia de trabajo`)
        break;
    case "C":
        console.log(`Es suficiente`)
        break;
    case "D":
        console.log(`Necesita mejorar`)
        break;
    case "F":
        console.log(`Reprobado`)
        break;
    default:
        console.log("Calificación no es valida")
        break;
}