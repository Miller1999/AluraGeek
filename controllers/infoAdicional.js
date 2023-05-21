import { serviciosProductos } from "../services/cliente.js";

const url = new URL(window.location)
const id = url.searchParams.get("id");
console.log(id)

const crearNuevaImagen = (imagen) =>{
    const tarjetaI = document.createElement("div")
    tarjetaI.classList.add("imagenInfo")
    const contenidoI = `<img src="${imagen}" alt="">`
    tarjetaI.innerHTML = contenidoI
    return tarjetaI
}

const crearNuevoTexto = (producto,precio,descripcion) => {
    const tarjetaT = document.createElement("div")
    tarjetaT.classList.add("textoInfo")
    const contenidoT = `<h1>${producto}</h1>
    <p>$${precio}</p>
    <p>${descripcion}</p>`
    tarjetaT.innerHTML = contenidoT
    return tarjetaT
}

const crearNuevaTarjeta = (imagen,producto,precio,id) => {
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("tarjeta")
    const contenido = `<img src="${imagen}" alt="">
    <p >${producto}</p>
    <p>$${precio}</p>
    <a href="informacionAdicional.html?id=${id}">Ver producto</a>`
    tarjeta.innerHTML = contenido
    return tarjeta
}

const contenedor = document.getElementById("contenedorGrandeInfo")

const contenedorR = document.getElementById("itemsProducRelacionados")

serviciosProductos.listaProductos()
.then((data) => {
    const cGrande = data.filter(producto => producto.id == id)
    console.log(cGrande)
    const imagen = crearNuevaImagen(cGrande[0].Imagen)
    const texto = crearNuevoTexto(cGrande[0].Producto,cGrande[0].Precio,cGrande[0].descripcion)
    contenedor.appendChild(imagen)
    contenedor.appendChild(texto)
})

serviciosProductos.listaProductos()
.then((data) => {
    const cGrande = data.filter(producto => producto.id == id)
    const contenidoR = data.filter(producto => producto.Categoria == cGrande[0].Categoria)
    console.log("ContenidoR",contenidoR)
    contenidoR.forEach(producto => {
        const tarjeta = crearNuevaTarjeta(producto.Imagen,producto.Producto,producto.Precio,producto.id)
        contenedorR.appendChild(tarjeta)
    })
})