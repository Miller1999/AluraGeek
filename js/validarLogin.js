const formularioL = document.getElementById("formularioLogin")
const inputsL = document.querySelectorAll("#formularioLogin input")
const btnInciar = document.getElementById("inSesion")

const expresionesL = {
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$/
}

const validarFormularioL = (e) => {
    switch(e.target.name){
        case "email":
            validarCampoL(expresionesL.email,e.target,"email")
            break
        case "password":
            validarCampoL(expresionesL.password,e.target,"password")
    }
}

const validarCampoL = (expresion,input,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`formulario-${campo}`).classList.remove("formularioLogin-incorrecto")
    }
    else{
        document.getElementById(`formulario-${campo}`).classList.add("formularioLogin-incorrecto")
    }
}

inputsL.forEach((input)=>{
    input.addEventListener("keyup", validarFormularioL)
    input.addEventListener("blur",validarFormularioL)
})

formularioL.addEventListener('submit', (e) => {
    e.preventDefault()
    if(inputsL[0].value == "millerjavierarias@gmail.com" && inputsL[1].value == "Javier20"){
        formularioL.reset()
        window.location.href = "Admin.html"
    }
    else{
        formularioL.reset()
        document.getElementById("mensaje-acceso").classList.remove("mensaje-acceso")
    }
})
