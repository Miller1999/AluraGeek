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

export const serviciosProductos = {
    listaProductos,
    crearProducto
}