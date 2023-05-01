import { serviciosProductos } from "../services/cliente.js"

const crearNuevoTarjetaA = (imagen,producto,categoria,precio,id) => {
    const tarjetaA = document.createElement("div")
    tarjetaA.classList.add("tarjeta")
    const contenido = `<img src="${imagen}" alt="">
    <div class="contenedorIconos">
    <img src="assets/Busqueda/edit.svg" alt="" class="iconos1">
    <img src="assets/Busqueda/delete.svg" alt="" class="iconos">
    </div>
    <p>${categoria}</p>
    <p>${producto}</p>
    <p>$${precio}</p>
    <span>${id}</span>`
    tarjetaA.innerHTML = contenido
    return tarjetaA
}

const contenedorA = document.getElementById("contenedorProductosA")

serviciosProductos.listaProductos()
.then((data) => {
    data.forEach( producto => {
        const nuevaTarjeta = crearNuevoTarjetaA(producto.Imagen,producto.Categoria,producto.Producto,producto.Precio,producto.id)
        contenedorA.appendChild(nuevaTarjeta)
    })
})