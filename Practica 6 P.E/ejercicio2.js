const readline = require('readline')
const datos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function DeterminarMesPorNumero() {
    datos.question(`Ingrese un numero del 1 al 12 para determinar el mes correspondiente: `, (numMes) => {
        let nombreMes 
        switch (numMes) {
            case "1":
                nombreMes = "Enero";
                break;
            case "2":
                nombreMes = "Febrero";
                break;
            case "3":
                nombreMes = "Marzo";
                break;
            case "4":
                nombreMes = "Abril";
                break;
            case "5":
                nombreMes = "Mayo";
                break;
            case "6":
                nombreMes = "Junio";
                break;
            case "7":
                nombreMes = "Julio"
                break;
            case "8":
                nombreMes = "Agosto";
                break;
            case "9":
                nombreMes = "Septiembre";
                break;
            case "10":
                nombreMes = "Octubre";
                break;
            case "11":
                nombreMes = "Noviembre";
                break;
            case "12":
                nombreMes = "Diciembre";
                break;
            default:
                nombreMes = "No es válido"
                break;
        }
        console.log(`Se ha determinado su mes: ${nombreMes}`)
        datos.close()
    })
}
DeterminarMesPorNumero()