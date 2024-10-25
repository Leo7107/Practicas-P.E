const readline = require('readline')
const datos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contrasenCorrecta = "1234"

function pedirContrasena(){
    datos.question("Introduce la contraseña: ",(contrasenaIngresada) => {
        if(contrasenaIngresada !== contrasenCorrecta) {
            console.log("Contraseña incorrecta. Por favor vuelva a intentarlo.")
            pedirContrasena();
        } else {
            console.log("Bienvenido! Haz introducido la contraseña correcta.")
            datos.close();
        }
    })
}

pedirContrasena();