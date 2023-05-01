const formularioNuevo = document.getElementById("formulario-Nuevo-Producto")
const inputsN = document.querySelectorAll("#formulario-Nuevo-Producto input")
const textareaN = document.querySelectorAll("#formulario-Nuevo-Producto textarea")
const botonNuevo = document.getElementById("nuevoProducto")
botonNuevo.disabled = true

const camposN = {
    urlImagen: false,
    imagen: false,
    nombreProducto: false,
    precio: false,
    descripcion: false
}

const validarFormularioN = (e) => {
    switch(e.target.name){
        case "urlImagen":
            validarCampoN(e.target,"urlImagen")
            validarBoton()
            break
        case "imagen":
            validarCampoN(e.target,"imagen")
            validarBoton()
            break
        case "nombreProducto":
            validarCampoN(e.target,"nombreProducto")
            validarBoton()
            break
        case "precio":
            validarCampoN(e.target,"precio")
            validarBoton()
            break
        case "descripcion":
            if(e.target.value != ""){
                document.getElementById(`formulario-descripcion`).classList.remove("espacio-incorrecto")
                camposN.descripcion = true
            }
            else{
                document.getElementById(`formulario-descripcion`).classList.add("espacio-incorrecto")
                camposN.descripcion = false
            }
            validarBoton()
            break        
    }
}

const validarCampoN = (input,campo) => {
    if(input.value != ""){
        document.getElementById(`formulario-${campo}`).classList.remove("espacio-incorrecto")
        camposN[campo] = true
    }
    else{
        document.getElementById(`formulario-${campo}`).classList.add("espacio-incorrecto")
        camposN[campo] = false
    }
}

textareaN.forEach((textarea) =>{
    textarea.addEventListener("keyup",validarFormularioN)
    textarea.addEventListener("blur",validarFormularioN)
})

inputsN.forEach((input)=>{
    input.addEventListener("keyup", validarFormularioN)
    input.addEventListener("blur",validarFormularioN)
})

function validarBoton(){
    if((camposN.urlImagen || camposN.imagen) && camposN.nombreProducto && camposN.precio && camposN.descripcion ){
        botonNuevo.disabled = false
    }
    else{
        botonNuevo.disabled = true
    }
}

formularioNuevo.addEventListener('submit',(e)=>{
    e.preventDefault()
    if((camposN.urlImagen || camposN.imagen) && camposN.nombreProducto && camposN.precio && camposN.descripcion )
        formularioNuevo.reset()
})