import { serviciosProductos } from "../services/cliente.js"

const crearNuevoTarjetaA = (imagen,producto,categoria,precio,id) => {
    const tarjetaA = document.createElement("div")
    tarjetaA.classList.add("tarjeta")
    const contenido = `<img src="${imagen}" alt="">
    <div class="contenedorIconos">
    <a href="../editarProducto.html?id=${id}"><img src="assets/Busqueda/edit.svg" alt="" class="iconos1"></a>
    <button id=${id}><img src="assets/Busqueda/delete.svg" alt="" class="iconos"></button>
    </div>
    <p>${categoria}</p>
    <p>${producto}</p>
    <p>$${precio}</p>
    <span>${id}</span>`
    tarjetaA.innerHTML = contenido
    const btn = tarjetaA.querySelector("button")
    btn.addEventListener("click",()=>{
        const id = btn.id
    serviciosProductos.eliminarProducto(id).then((respuesta) => {
    })
    .catch((err) => alert("Ocurrio un error"))
    })
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