let suma = 0;
let iteraciones = 0;

while(suma < 1000){
    let numerosAleatorio = Math.floor(Math.random() * 100) +1;

    suma += numerosAleatorio;

    iteraciones++;
    
    console.log(`Iteraciones ${iteraciones}: Se añadió ${numerosAleatorio}, suma actual: ${suma}`);
}
console.log(`Proceso completado en ${iteraciones} iteraciones. Suma total: ${suma}`)