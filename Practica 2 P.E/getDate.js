let fechaActual = new Date()
let dia = fechaActual.getDate()

let mes = fechaActual.getMonth() + 1
let año = fechaActual.getFullYear()

console.log(`Hoy es: ` + dia + `/` + mes + `/` + año)