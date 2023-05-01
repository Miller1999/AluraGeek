const formulario = document.getElementById("formularioHableConNosotros")
const inputs = document.querySelectorAll("#formularioHableConNosotros input")
const textareas = document.querySelectorAll("#formularioHableConNosotros textarea")
const botonEnviar = document.getElementById("enviar")
botonEnviar.disabled = true;

const expresiones = {
    nombre: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{1,40}$/,
    mensaje: /^[A-ZÑa-z0-9ñáéíóúÁÉÍÓÚ'° ]{1,120}$/
}

const campos = {
    nombre: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre,e.target,"nombre")
        break;
        case "mensaje":
            if(expresiones.mensaje.test(e.target.value)){
                document.getElementById(`formulario-mensaje`).classList.remove("espacio-incorrecto")
                campos.mensaje = true;
                botonEnviar.disabled = false;
            }
            else{
                document.getElementById(`formulario-mensaje`).classList.add("espacio-incorrecto")
                botonEnviar.disabled = true
            }
        break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`formulario-${campo}`).classList.remove("espacio-incorrecto")
        campos[campo] = true
    }
    else{
        document.getElementById(`formulario-${campo}`).classList.add("espacio-incorrecto")
    }
}

textareas.forEach((textarea) =>{
    textarea.addEventListener("keyup",validarFormulario)
    textarea.addEventListener("blur",validarFormulario)
})

inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario)
    input.addEventListener("blur",validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    if(campos.nombre && campos.mensaje){
        formulario.reset()
        e.preventDefault()
    }
    
})