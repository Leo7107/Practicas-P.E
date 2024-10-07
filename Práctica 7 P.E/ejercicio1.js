const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocalesYDigitos(texto) {
    let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let contadorVocales = 0;
    let contadorDigitos = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contadorVocales++;
        }
        if (!isNaN(texto[i]) && texto[i] !== " ") {
            contadorDigitos++;
        }
    }
    console.log(`Total de vocales: ${contadorVocales}`);
    console.log(`Total de dígitos: ${contadorDigitos}`);
}

// Función para pedir al usuario que ingrese un texto
function pedirTexto() {
    rl.question('Ingresa una cadena de texto (debe contener al menos un carácter): ', (respuesta) => {
        if (!respuesta || respuesta.trim().length === 0) {
            console.log("Por favor, ingresa una cadena de texto válida.");
            pedirTexto();
        } else {
            contarVocalesYDigitos(respuesta);
            rl.close();
        }
    });
}
pedirTexto();
