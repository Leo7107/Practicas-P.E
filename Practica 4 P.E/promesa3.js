function solicitasDatosDelServidor() {
    return new Promise ((resolve, reject) =>{
        let exito = true; //si la variable fuera igual a false, la solicitud sería rechazada.

        setTimeout(() =>{
            if(exito) {
                resolve({
                    id:7,
                    nombre: "Eduardo Hernández",
                    edad: 18,
                });
            }else{
                reject("Error al obtener los datos del servidor");
            }
        }, 2000);
    });
}

solicitasDatosDelServidor()
.then((datos) =>{
    console.log("Datos recibidos", datos);
})
.catch((error) =>{
    console.error(error)
})