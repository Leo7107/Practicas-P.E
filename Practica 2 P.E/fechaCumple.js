const fecha_Nacimiento = new Date('2005-11-14T12:00:00')
const Dia = fecha_Nacimiento.getDay()
const nombredias = ['Domigo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',]
const dia =  nombredias[Dia]

const fecha = fecha_Nacimiento.getDate()

const Mes = fecha_Nacimiento.getMonth()
const nombremeses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',]
const mes = nombremeses[Mes] 
const año = fecha_Nacimiento.getFullYear()

console.log(`Naciste un ${dia} ${fecha} de ${mes} del ${año}`)