var mensajes = ["comentario:","Muy buena pagina", //mensajes por defecto
                 "reclamo:", "Quiero hacer un reclamo",

]
var tipoMensajes = ["pregunta:", "idea:", "comentario:", "reclamo:"] //tipos de mensajes
const btn = document.getElementById('boton')


btn.addEventListener("click", function guardarMensaje(){ //evento del boton
    let email = document.getElementById('e-mail').value
    let tipo = document.getElementById('tipo').value
    let nuevoMensaje = document.getElementById('message').value //recibimos los parametors
    
    let long = nuevoMensaje.length
    

    function validarCorreo(email){ //validar el correo
        let regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!regExp.test(email)){
            return false;
        }else{
            return true;
        }
        
    }
    if(validarCorreo(email)==true){
        if(long>150){
            alert("Ha superado los 150 caracteres. Intentelo de nuevo :)")
        } else{
            for(let i = 0; i<4; i++){
                if(tipo==i){
                    mensajes.push(tipoMensajes[i],nuevoMensaje)
                    localStorage.setItem("Mensajes", mensajes)
                    console.log(localStorage.getItem("Mensajes"))
                    alert("Gracias por su contacto")
                }
            }
            
        }
    } else {
        alert("El E-mail ingresado no es válido. :(")
    }

})



