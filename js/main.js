let productos = [];

fetch("./js/data.json")
    .then((respuesta) => respuesta.json())
    .then((data) => {
    cargarProductos(data);
    });

const cargarProductos = (data) => {
    productos = data;
const contenedor = document.getElementById("container");
productos.forEach((producto) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-md-4", "col-lg-3", "m-2")
    let html = `<img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text"> ${producto.artista} </br> $${producto.precio}</p>
        <a class="btn color-btn" id="boton_agregar" onClick="agregarAlCarrito(${producto.id})">Comprar</a>
    </div>`

    card.innerHTML = html;
    contenedor.appendChild(card);
});
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


guardarProductos(productos);
actualizarBotonCarrito();