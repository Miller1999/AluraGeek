const listaProductos = ( ) => {
    return fetch("http://localhost:3000/producto").then((respuesta) =>{
        return respuesta.json()
    })
}

const crearProducto = (Producto,Precio,Categoria,Imagen,descripcion,id) => {
    return fetch("http://localhost:3000/producto",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({Producto,Precio,Categoria,Imagen,descripcion,id: uuid.v4()})
    })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "DELETE"
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json())
}

const actualizarProducto = (Producto,Precio,Categoria,Imagen,descripcion,id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({Producto,Precio,Categoria,Imagen,descripcion})
    }).then(respuesta => console.log(respuesta))
}

export const serviciosProductos = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,

}