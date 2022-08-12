function ProductosCarrito() {
    let productos = obtenerProductosCarrito();

    let contenido = `<p class="alert alert-warning text-center">No se encontraron productos seleccionados</p>`;

    if (productos.length > 0) {
        contenido = `<p class="text-end"><a href="#" class="btn btn-danger px-2" onClick="vaciarCarrito()">Vaciar Carrito <img src="assets/img/trash3.svg" width="18"></a></p>
        <table class="table">`;
        let total = 0;

    for (let producto of productos) {
        let precio = producto.precio * producto.cantidad;
        contenido += `<tr>
        <td class="align-middle"><img src="${producto.imagen}" alt="${producto.nombre}" width="32"></td>
        <td class="align-middle">${producto.nombre} x ${producto.cantidad}</td>
        <td class="align-middle">$${precio}</td>
        <td class="text-end align-middle"><a href="#" class="btn btn-light" onclick="eliminarProducto(${producto.id})"><img src="assets/img/trash3.svg" width="18"></a></td>
        </tr>`;
        total += precio;
        }

    contenido += `<tr>
    <td class="align-middle">&nbsp;</td>
    <td class="align-middle"><b>Total a pagar:</b></td>
    <td class="align-middle"><b>$${total}</b></td>
    <td class="align-middle text-end"><a href="./pago.html" class="btn btn-light">Finalizar compra</a></td>
    </tr>`

    contenido += `</table>`
    }
    document.getElementById("productos_carrito").innerHTML = contenido;
}


function eliminarProducto(id) {
    let productos_carrito = obtenerProductosCarrito(); 
    let pos = productos_carrito.findIndex(x => x.id == id);
    productos_carrito[pos].cantidad -= 1;

    if (productos_carrito[pos].cantidad == 0){
        productos_carrito.splice(pos, 1);
    }

    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
    ProductosCarrito();
}


actualizarBotonCarrito();
ProductosCarrito();