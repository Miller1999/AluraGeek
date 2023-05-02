import { serviciosProductos } from "../services/cliente.js"

const formulario = document.getElementById("formulario-Nuevo-Producto")

const obtenerInformacion = () => {
    const url = new URL(window.location)
    const id = url.searchParams.get("id")   
    const Categoria = document.getElementById("categoria")
    const Producto = document.getElementById("nombreProducto")
    const Precio = document.getElementById("precio")
    const descripcion = document.getElementById("descripcion")

    serviciosProductos.detalleProducto(id).then( producto => {
        Categoria.value = producto.Categoria
        Producto.value = producto.Producto
        Precio.value = producto.Precio
        descripcion.value = producto.descripcion
    })
}

obtenerInformacion()

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const url = new URL(window.location)
    const id = url.searchParams.get("id")  
    const Imagen = document.getElementById("file").files[0].name
    const Categoria = document.getElementById("categoria").value
    const Producto = document.getElementById("nombreProducto").value
    const Precio = document.getElementById("precio").value
    const descripcion = document.getElementById("descripcion").value
    console.log(Imagen,Categoria,Producto,Precio,descripcion)
    serviciosProductos.actualizarProducto(Producto,Precio,Categoria,`assets/${Imagen}`,descripcion,id).then(() =>{
        window.location.href ="Admin.html"
    })

})