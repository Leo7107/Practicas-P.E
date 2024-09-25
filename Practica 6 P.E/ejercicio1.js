const readline = require('readline')
const datos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function calcularEdad(){
    datos.question(`Ingrese su edad:`, (edad)=>{
         if(edad <= 12){
            console.log(`Se ha determinado que usted aun es un niño.`)
         }else if(edad <= 17){
            console.log(`Se ha determinado que usted es un adolescente.`)
         }else if(edad <= 35){
            console.log(`Se ha determinado que usted es un adulto joven.`)
         }else if(edad <= 59){
            console.log(`Se ha determinado que usted es un adulto.`)
         }else{
            console.log(`Se ha determinado que usted es un adulto mayor.`)
         }
         datos.close()
    })
}
calcularEdad()