let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito =JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoOperaciones = document.querySelector("#carrito-operaciones");
const contenedorCarritoComprado =document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar =document.querySelector("#carrito-operaciones-vaciar");
const contenedorTotalCompra = document.querySelector("#total");

const botonCalcularCompraConEnvio = document.querySelector("#calcular-total");


function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length > 0) {


        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoOperaciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        const productosEnCarritoLocalStorage =JSON.parse(localStorage.getItem("productos-en-carrito"));

        if (productosEnCarritoLocalStorage)
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class= "carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Producto</small>
                    <h5 class="carrito-producto-titulo2">${producto.titulo}</h5>
                </div>
                <div class="carrito-producto-cantidad">
                <small> Cantidad</small>
                <button class="carrito-cantidad-modificar" ">-</button>
                <p class="carrito-cantidad">${producto.cantidad}</p>
                <button class="carrito-cantidad-modificar">+</button>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
            
            `;
    
            contenedorCarritoProductos.append(div);
        })
        
        
        } else {
    
            contenedorCarritoVacio.classList.remove("disabled");
            contenedorCarritoProductos.classList.add("disabled");
            contenedorCarritoOperaciones.classList.add("disabled");
            contenedorCarritoComprado.classList.add("disabled");
            contenedorCarritoOperaciones.classList.add("disabled");
            containerEnvio.classList.add("disabled");
            botonIniciarCompra.classList.add("disabled");
        }

    actualizarBotonesEliminar();
    actualizarTotalCompra();
}

//escuchar eventos click en contenedorCarritoProductos
contenedorCarritoProductos.addEventListener("click", e => {
    if (e.target.classList.contains("carrito-cantidad-modificar")) {  //click en + o -
    const idProducto = e.target.parentElement.parentElement.querySelector(".carrito-producto-eliminar").id;
    
    let cantidadCambio;                          //cantidadCambio: cuánto cambiara la Q de un producto: + (suma 1) - (resta 1)       
    if (e.target.textContent === "+") {
        cantidadCambio = 1;
    } else {
        cantidadCambio = -1;
    }
    
    modificarCantidad(idProducto, cantidadCambio);   
    }
});

//cambiar y actualizar Q de los productos del carrito
function modificarCantidad(idProducto, cantidad) {
    const producto = productosEnCarrito.find(producto => producto.id === idProducto);
    if (producto) {
        producto.cantidad += cantidad;
        if (producto.cantidad <= 0) {
            const index = productosEnCarrito.indexOf(producto);
            productosEnCarrito.splice(index, 1);
        }

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        cargarProductosCarrito();

    }
}

cargarProductosCarrito();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    

}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotalCompra(){
    const totalCompra = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    contenedorTotalCompra.innerText = `$${totalCompra}`;
}

//seccion envio e iniciar compra:

const containerEnvio = document.querySelector(".container-envio");
const div = document.createElement("div");
    div.innerHTML = `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
            <label class="form-check-label" for="flexRadioDefault1">
            Envío en moto (CABA) - $800
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
            Envío por correo Andreani - $1500
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
            <label class="form-check-label" for="flexRadioDefault3">
            Retiro en el local - $0
            </label>
        </div>
        <div class="container-comprar">
            <button id ="carrito-operaciones-comprar" class="carrito-operaciones-comprar">Iniciar compra</button>
        </div>
    `
    containerEnvio.append(div);



//evento para el radio y que se sume al importe total sin envio:

const radioEnvioMoto = document.querySelector("#flexRadioDefault1");
const radioEnvioCorreo = document.querySelector("#flexRadioDefault2");
const radioRetiroLocal = document.querySelector("#flexRadioDefault3");

radioEnvioMoto.addEventListener("change", actualizarTotalConEnvio);
radioEnvioCorreo.addEventListener("change", actualizarTotalConEnvio);
radioRetiroLocal.addEventListener("change", actualizarTotalConEnvio);


const contenedorTotalConEnvio = document.querySelector("#total-con-envio");

function actualizarTotalConEnvio() {
    const totalCompraMasEnvio = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    let totalConEnvio = totalCompraMasEnvio;
    let importeEnvio = 0;

    if (radioEnvioMoto.checked) {
        totalConEnvio += 800;
        importeEnvio = 800;
    } else if (radioEnvioCorreo.checked) {
        totalConEnvio += 1500;
        importeEnvio = 1500;
    }

    contenedorTotalCompra.innerText = `$${totalConEnvio}`;

    

    // guardo importe de envío en el LS
    localStorage.setItem("importe-envio", importeEnvio);
}

// importe de envío desde el LS
const importeEnvioGuardado = parseInt(localStorage.getItem("importe-envio")) || 0;

// const totalCompraSinEnvio = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
// contenedorTotalSinEnvio.innerText = `Total sin envío: $${totalCompraSinEnvio}`;
// contenedorTotalCompra.innerText = `$${totalCompraSinEnvio}`;

actualizarTotalConEnvio();





//funcionalidad al boton iniciar compra:


const botonIniciarCompra = document.querySelector("#carrito-operaciones-comprar");
const formularioCompra = document.querySelector("#formulario-compra");

botonIniciarCompra.addEventListener("click", () => {
    console.log(formularioCompra);
    formularioCompra.classList.remove("hidden");
});





































//     let productosEnCarrito = localStorage.getItem("productos-en-carrito");
//     productosEnCarrito =JSON.parse(productosEnCarrito);

//     const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
//     const contenedorCarritoProductos = document.querySelector("#carrito-productos");
//     const contenedorCarritoOperaciones = document.querySelector("#carrito-operaciones");
//     const contenedorCarritoComprado =document.querySelector("#carrito-comprado");
//     let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
//     const botonVaciar =document.querySelector("#carrito-operaciones-vaciar");
//     const contenedorTotalCompra = document.querySelector("#total");
//     const contenedorTotalSinEnvio = document.querySelector("#carrito-operaciones-total");
//     const containerEnvio = document.querySelector(".container-envio");


//     function cargarProductosCarrito(){
//         if(productosEnCarrito && productosEnCarrito.length > 0) {


//             contenedorCarritoVacio.classList.add("disabled");
//             contenedorCarritoProductos.classList.remove("disabled");
//             contenedorCarritoOperaciones.classList.remove("disabled");
//             contenedorCarritoComprado.classList.add("disabled");
    
//         const productosEnCarritoLocalStorage =JSON.parse(localStorage.getItem("productos-en-carrito"));
//         if (productosEnCarritoLocalStorage)
//         contenedorCarritoProductos.innerHTML = "";
    
//         productosEnCarrito.forEach(producto => {
    
//             const div = document.createElement("div");
//             div.classList.add("carrito-producto");
//             div.innerHTML = `
//                 <img class= "carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
//                 <div class="carrito-producto-titulo">
//                     <small>Producto</small>
//                     <h5 class="carrito-producto-titulo2">${producto.titulo}</h5>
//                 </div>
//                 <div class="carrito-producto-cantidad">
//                 <small> Cantidad</small>
//                 <button class="carrito-cantidad-modificar" ">-</button>
//                 <p class="carrito-cantidad">${producto.cantidad}</p>
//                 <button class="carrito-cantidad-modificar">+</button>
//                 </div>
//                 <div class="carrito-producto-precio">
//                     <small>Precio</small>
//                     <p>$${producto.precio}</p>
//                 </div>
//                 <div class="carrito-producto-subtotal">
//                 <small>Subtotal</small>
//                 <p>$${producto.precio * producto.cantidad}</p>
//             </div>
//             <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
            
//             `;
    
//             contenedorCarritoProductos.append(div);
//         })
    
        
//     } else {
    
//         contenedorCarritoVacio.classList.remove("disabled");
//         contenedorCarritoProductos.classList.add("disabled");
//         contenedorCarritoOperaciones.classList.add("disabled");
//         contenedorCarritoComprado.classList.add("disabled");
//     }

//     actualizarBotonesEliminar();
//     actualizarTotalCompra();
// }

// //escuchar eventos click en contenedorCarritoProductos
// contenedorCarritoProductos.addEventListener("click", e => {
//     if (e.target.classList.contains("carrito-cantidad-modificar")) {  //click en + o -
//         const idProducto = e.target.parentElement.parentElement.querySelector(".carrito-producto-eliminar").id;
        
//         let cantidadCambio;                          //cantidadCambio: cuánto cambiara la Q de un producto: + (suma 1) - (resta 1)       
//         if (e.target.textContent === "+") {
//             cantidadCambio = 1;
//         } else {
//             cantidadCambio = -1;
//         }
        
//         modificarCantidad(idProducto, cantidadCambio);   
//     }
// });

// //cambiar y actualizar Q de los productos del carrito
// function modificarCantidad(idProducto, cantidad) {
//     const producto = productosEnCarrito.find(producto => producto.id === idProducto);
//     if (producto) {
//         producto.cantidad += cantidad;
//         if (producto.cantidad <= 0) {
//             const index = productosEnCarrito.indexOf(producto);
//             productosEnCarrito.splice(index, 1);
//         }
//         localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
//         cargarProductosCarrito();
//     }
// }

// cargarProductosCarrito();



// function actualizarBotonesEliminar() {
//     botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

//     botonesEliminar.forEach(boton => {
//         boton.addEventListener("click", eliminarDelCarrito);
//     });
// }

// function eliminarDelCarrito(e){
//     const idBoton = e.currentTarget.id;
//     const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    
//     productosEnCarrito.splice(index, 1);
//     cargarProductosCarrito();

//     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    

// }

// botonVaciar.addEventListener("click", vaciarCarrito);

// function vaciarCarrito(){
//     productosEnCarrito.length = 0;
//     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
//     cargarProductosCarrito();
// }

// function actualizarTotalCompra(){
//     const totalCompra = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
//     contenedorTotalCompra.innerText = `$${totalCompra}`;
// }

// const totalCompraSinEnvio = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
//     contenedorTotalSinEnvio.innerText = `Total sin envío: $${totalCompraSinEnvio}`;
//     contenedorTotalCompra.innerText = `$${totalCompraSinEnvio}`;



// //seccion envio e iniciar compra:


// const div = document.createElement("div");
// div.innerHTML = `
//     <div class="form-check">
//         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
//         <label class="form-check-label" for="flexRadioDefault1">
//         Envío en moto (CABA) - $800
//         </label>
//     </div>
//     <div class="form-check">
//         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
//         <label class="form-check-label" for="flexRadioDefault2">
//         Envío por correo Andreani - $1500
//         </label>
//     </div>
//     <div class="form-check">
//         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
//         <label class="form-check-label" for="flexRadioDefault3">
//         Retiro en el local - $0
//         </label>
//     </div>
//     <div class="container-comprar">
//         <h5 id="total-con-envio"> Total con Envio : 
//         </h5>
//         <button id ="carrito-operaciones-comprar" class="carrito-operaciones-comprar">Iniciar compra</button>
//     </div>
// `;
// containerEnvio.append(div);



// //evento para el radio y que se sume al importe total sin envio:

// const radioEnvioMoto = document.querySelector("#flexRadioDefault1");
// const radioEnvioCorreo = document.querySelector("#flexRadioDefault2");
// const radioRetiroLocal = document.querySelector("#flexRadioDefault3");

// radioEnvioMoto.addEventListener("change", actualizarTotalConEnvio);
// radioEnvioCorreo.addEventListener("change", actualizarTotalConEnvio);
// radioRetiroLocal.addEventListener("change", actualizarTotalConEnvio);


// const contenedorTotalConEnvio = document.querySelector("#total-con-envio");

// function actualizarTotalConEnvio() {
//     const totalCompraMasEnvio = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
//     let totalConEnvio = totalCompraMasEnvio;
//     let importeEnvio = 0;

//     if (radioEnvioMoto.checked) {
//         totalConEnvio += 800;
//         importeEnvio = 800;
//     } else if (radioEnvioCorreo.checked) {
//         totalConEnvio += 1500;
//         importeEnvio = 1500;
//     }

//     contenedorTotalCompra.innerText = `$${totalConEnvio}`;
//     // contenedorTotalConEnvio.append(contenedorTotalCompra);

    

//     // guardo importe de envío en el LS
//     localStorage.setItem("importe-envio", importeEnvio);
// }

// // importe de envío desde el LS
// const importeEnvioGuardado = parseInt(localStorage.getItem("importe-envio")) || 0;


// actualizarTotalConEnvio();



// //agregar funcionalidad al boton iniciar compra:
// const botonIniciarCompra = document.querySelector(".carrito-operaciones-comprar");
// const formularioCompra = document.querySelector("#formulario-compra");

// botonIniciarCompra.addEventListener("click", () => {
//     formularioCompra.classList.remove("hidden");
// });



































