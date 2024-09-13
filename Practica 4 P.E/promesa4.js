function PedidoComida (){
    return new Promise((resolve, reject) => {
        let exito = true //si la variable fuera igual a false, la solicitud sería rechazada.
        console.log ("Su pedido se está procesando. Espere un momento.")
        setTimeout(()=> {
            if(exito){
                resolve("Su pedido se ha solicitado con éxito")
            }else{
                reject("Ha ocurrido un error con su pedido. Vuelva  intentarlo más tarde")
            }  
        }, 3000);
    })
}

PedidoComida()
.then((res) =>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})