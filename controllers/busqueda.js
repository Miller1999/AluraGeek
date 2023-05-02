import { serviciosProductos } from "../services/cliente.js";

const formularioB = document.getElementById("formulario-busqueda")
const inputSearch = document.querySelector("#formulario-busqueda input")

const busqueda = () => {
    const itemBuscado = inputSearch.value
    return itemBuscado
}



formularioB.addEventListener("submit",(e)=>{
    e.preventDefault()
    serviciosProductos.listaProductos()
    .then((data) =>{
        const encontrado = data.find(producto => producto.Producto == busqueda())
        if(encontrado != undefined){
            window.location.href = "productos.html"
        }else{
            alert("No se encontro")
        }
    })
})