const readline = require('readline')
const datos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let letra = '', veces = 0, cadena = ''

function preguntarLetra() {
    datos.question("Que letra desea, X o Z?: ",(inputLetra) => {
        letra = inputLetra.toUpperCase();
        if(letra === 'X' || letra === 'Z'){
            preguntarVeces();
        }else {
            console.log("Debes elegir una letra entre X o Z.");
            preguntarLetra();
        }
    })
}

function preguntarVeces(){
    datos.question("Cuantas repeticiones? (1-15): ",(inputVeces) => {
        veces = parseInt(inputVeces);
        if(veces >=1 && veces <= 15){
            generarCadena();
        }else{
            console.log("El numero de repeticiones debe estar entre 1 y 15.");
        }
    })
}

function generarCadena(){
    while(veces > 0){
        cadena += letra;
        veces--;
    }
    console.log(`Resultado: ${cadena}`);
    datos.close();
}
preguntarLetra();