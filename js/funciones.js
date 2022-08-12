function obtenerProductos(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductos(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
}

function obtenerProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductosCarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function actualizarBotonCarrito (){
    let productos = obtenerProductosCarrito();
    let total = 0;
    let contenido = `<button type="button" class="btn btn-light position-relative">
    <img src="assets/img/cart.svg">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
    0
    </span>
    </button>`

    if (productos.length > 0){
        for (let producto of productos) {
            total += producto.cantidad;
        }

        contenido = `<button type="button" class="btn btn-light position-relative">
        <img src="assets/img/cart.svg">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
        ${total}
        </span>
        </button>`
    }

    document.getElementById("boton_carrito").innerHTML = contenido;
}

function buscarProducto(id){
    let productos = obtenerProductos();
    return productos.find(x => x.id == id)
}

function agregarAlCarrito(id) {
    let productos_carrito = obtenerProductosCarrito();
    let pos = productos_carrito.findIndex(x => x.id == id);

    if (pos > -1){
        productos_carrito[pos].cantidad += 1;
    } else {
        let producto = buscarProducto(id); 
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }

    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
    mostrarMensaje();
}

function vaciarCarrito() {

    swal({
        title: "Estás segur@?",
        text: "Estás por vaciar tu carrito!",
        icon: "warning",
        buttons: ["Cancelar", "Si, eliminar"],
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            localStorage.removeItem("carrito"),
            actualizarBotonCarrito();
            ProductosCarrito();
        swal("Tu carrito esta vacío!", {
            icon: "success",
        });
        } else {
        swal("Podes seguir con tu compra!");
        }
    });
}

function mostrarMensaje() {
    Toastify({
    text: "El producto fue agregado al carrito",
    duration: 3000,
    close: true,
    gravity: "bottom", 
    position: "right",
    stopOnFocus: true, 
    style: {
        background: "#00b09b",
    },
}).showToast();
document.getElementById('boton_agregar');
}