import { serviciosProductos } from "../services/cliente.js"

const formularioNP = document.getElementById("formulario-Nuevo-Producto")

formularioNP.addEventListener("submit", () =>{
    const Imagen = document.getElementById("file").files[0].name
    const Categoria = document.getElementById("categoria").value
    const Producto = document.getElementById("nombreProducto").value
    const Precio = document.getElementById("precio").value
    const descripcion = document.getElementById("descripcion").value

    console.log( file, " - ",nombre," - ",precio," - ",descripcion)

    serviciosProductos.crearProducto(Producto,Precio,Categoria,`assets/${Imagen}`,descripcion).then( respuesta =>{
        console.log(respuesta)
    })
})

//* PARA PODER FILTRAR PARA EL INDEX AÑADIR CATEGORIA Y FILTRAR EL SERVIDOR POR CATEGORIA CON UN IF SI ES STARWARS SE MANDA PARA CONTENEDOR-STARWARS POR EJEMPLO