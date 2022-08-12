let productos = [
    {id: 1,
    nombre: "PROOF (Standard Edition)",
    precio: 20000,
    artista: "BTS",
    imagen: "./assets/img/proof.jpg",
    },
    {id: 2,
    nombre: "Zero Fever Epilogue",
    precio: 7850,
    artista: "ATEEZ",
    imagen: "./assets/img/zerofever.png",
    },
    {id: 3,
    nombre: "Love Yourself: Tear",
    precio: 9000,
    artista: "BTS",
    imagen: "./assets/img/loveyourself.jpg",
    },
    {id: 4,
    nombre: "The Album (Version 2)",
    precio: 7900,
    artista: "Blackpink",
    imagen: "./assets/img/thealbum.png",
    },
    {id: 5,
    nombre: "Dimension: Answer",
    precio: 9660,
    artista: "NCT",
    imagen: "./assets/img/dimensionanswer.png",
    },
    {id: 6,
    nombre: "The Dream Chapter: Star",
    precio: 6720,
    artista: "TXT",
    imagen: "./assets/img/dreamchapter.jpg",
    },
    {id: 7,
    nombre: "Crazy In Love",
    precio: 8800,
    artista: "ITZY",
    imagen: "./assets/img/crazyinlove.png",
    },
    {id: 8,
    nombre: "No Easy",
    precio: 8200,
    artista: "Stray Kids",
    imagen: "./assets/img/noeasy.png",
    },
    {id: 9,
        nombre: "4 Only",
        precio: 9340,
        artista: "Lee Hi",
        imagen: "./assets/img/4only.jpg",
        },
];


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