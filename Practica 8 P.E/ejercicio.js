const readline = require('readline')
const datos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 100);
let contador = 0;
console.log(numeroAleatorio);

function solicitarNumero(){
    datos.question("Ingrese un numero aleatorio: ",(inputNumero) => {
        numero = parseInt(inputNumero);
        if(numero !== numeroAleatorio){
            contador++;
            console.log("Te has equivocado. Vuelve a intentarlo.")
            solicitarNumero();
        }else{
            console.log(`Felicidades, haz acertado el número. Te tomó ${contador} intentos.`)
            datos.close();
        }
    })
}
solicitarNumero();