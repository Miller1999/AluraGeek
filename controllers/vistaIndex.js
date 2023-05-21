import { serviciosProductos } from "../services/cliente.js";

const crearNuevaTarjera = (imagen,producto,precio,id,categoria) => {
    const tarjetaI = document.createElement("div")
    tarjetaI.classList.add("tarjeta")
    const contenido = `<img src="${imagen}" alt="">
    <p >${producto}</p>
    <p>$${precio}</p>
    <a href="informacionAdicional.html?id=${id}">Ver producto</a>`
    tarjetaI.innerHTML = contenido
    return tarjetaI
}

const contenedorS = document.getElementById("contenedorStarwars")
const contenedorC = document.getElementById("contenedorConsolas")
const contenedorV = document.getElementById("contenedorVarios")

serviciosProductos.listaProductos()
.then((data) => {
    const contenidoS = data.filter(producto => producto.Categoria == "StarWars")
    const contenidoC = data.filter(producto => producto.Categoria == "Consolas")
    const contenidoV = data.filter(producto => producto.Categoria == "Varios" )
    contenidoS.forEach(producto => {
        const nuevaTarjeta = crearNuevaTarjera(producto.Imagen, producto.Producto, producto.Precio,producto.id,producto.Categoria)
        contenedorS.appendChild(nuevaTarjeta)
    })
    contenidoC.forEach(producto => {
        const nuevaTarjeta = crearNuevaTarjera(producto.Imagen, producto.Producto, producto.Precio,producto.id,producto.Categoria)
        contenedorC.appendChild(nuevaTarjeta)
    })
    contenidoV.forEach(producto => {
        const nuevaTarjeta = crearNuevaTarjera(producto.Imagen, producto.Producto, producto.Precio,producto.id,producto.Categoria)
        contenedorV.appendChild(nuevaTarjeta)
    })
})