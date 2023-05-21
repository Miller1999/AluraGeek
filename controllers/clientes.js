import { serviciosProductos } from "../services/cliente.js"


const crearNuevoTarjeta = (imagen,categoria,producto,precio,id) => {
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("tarjeta")
    const contenido = `<img src="${imagen}" alt="">
    <p>${categoria}</p>
    <p >${producto}</p>
    <p>$${precio}</p>
    <a href="informacionAdicional.html?id=${id}">Ver producto</a>`
    tarjeta.innerHTML = contenido
    return tarjeta
}

const contenedor = document.getElementById("contenedorProductos")

serviciosProductos.listaProductos()
.then((data) => {
    data.forEach( producto => {
        const nuevaTarjeta = crearNuevoTarjeta(producto.Imagen,producto.Categoria,producto.Producto,producto.Precio,producto.id)
        contenedor.appendChild(nuevaTarjeta)
    })
})