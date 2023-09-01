let productosList = [];

fetch("../js/productos.json")
    .then(response => response.json())
    .then(data => {
        productosList = data;
        cargarProductos(productosList);
    })





//Elementos del DOM:

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numeroCarrito = document.querySelector("#numerito");



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML= "";
    
    productosElegidos.forEach(producto => {

        const article = document.createElement("article");
        article.classList.add("col-12", "col-md-6", "col-xl-3");

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="price">$${producto.precio}</p>
                <div class="center">
                    <button class="producto-agregar" id="${producto.id}">Comprar ahora</button>
                </div>
            </div>
        `;

        article.appendChild(card);
        contenedorProductos.appendChild(article);
    });

    actualizarBotonesAgregar();
    
}

cargarProductos(productosList);


//agrego evento a los botones:

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));  // elimino la clase active de todos los botones
        e.currentTarget.classList.add("active");                               //agrego la clase active cuando hago click al boton
    
        if(e.currentTarget.id != "todos"){
            const productosBoton = productosList.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            cargarProductos(productosList);
        }

    });
});



function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito; 

let productosEnCarritoLocalStorage = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLocalStorage) {
    productosEnCarrito = JSON.parse(productosEnCarritoLocalStorage);
    actualizarNumeroCarrito();
} else {
    productosEnCarrito = [];
}


//funcion para agregar productos al carrito
function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 2000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
        background: "#62929e",
        borderRadius: "1rem",
        
        },
        onClick: function(){} 
    }).showToast();



    const idBoton = e.currentTarget.id;
    const productoAgregado = productosList.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumeroCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

//funcion para actualizar el numero del carrito (cantidad de productos):

function actualizarNumeroCarrito() {
    let nuevoNumeroCarrito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numeroCarrito.innerText = nuevoNumeroCarrito;

}









































// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const contenedor = document.querySelector("#contenedorProductos");

// productosList.forEach(producto => {
//     const section = document.createElement("section");
//     section.classList.add("row");

//     section.innerHTML = `
//     <article class="col-12 col-md-6 col-xl-3">
//         <div class="card">
//             <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
//             <div class="card-body">
//                 <h5 class="card-title">${producto.nombre}</h5>
//                 <p class="card-text">${producto.descripcion}</p>
//                 <p class="price">$${producto.precio}</p>
//                 <div class="center">
//                     <button class="btn btn-outline-success btn-sm btn-comprar" id="${producto.id}">COMPRAR</button>
//                 </div>
//             </div>
//         </div>
//     </article>
//     `;

//     const buttonComprar = section.querySelector(".btn-comprar");

//     buttonComprar.addEventListener("click", () => {
//         carrito.push(producto);
//         localStorage.setItem("carrito", JSON.stringify(carrito));
//     });

//     contenedor.appendChild(section);
// });

