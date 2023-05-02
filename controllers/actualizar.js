import { serviciosProductos } from "../services/cliente.js"

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