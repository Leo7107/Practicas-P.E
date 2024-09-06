let fechaActual = new Date()
let diaSemana = fechaActual.getDay()
let nombreDias =['Domigo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',]
let nombreDia = nombreDias[diaSemana]

console.log(`Hoy es: ${nombreDia}`)