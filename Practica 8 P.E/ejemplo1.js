//Requerimos el modulo readline para manejar la entrada y salida de datos en la consola
const readline = require('readline')
const datos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarMenu() {
    datos.question("1.- Escribir\n2.- Leer\n3.- Salir\nEscoge una opcion: ", (opcion) => {
        switch (opcion) {
            case '1':
                console.log("Opcion 1: Eliges Escribir.")
                mostrarMenu();
                break;
            case '2':
                console.log("Opcion 2: Eliges Leer.")
                mostrarMenu();
                break;
            case '3':
                console.log("Fin del programa.")
                datos.close();
                break;
            default:
                console.log("Debes elegir una de las opciones validas.")
                break;
        }
    })
}
mostrarMenu();