const productosList = [
    {
        id: "mascarilla-01",
        imagen: "../img/producto1.png",
        titulo: "MASQUITENSE THICK",
        descripcion:"Mascarilla para un tratamiento intenso diseñado para el cabello grueso y seco. Su alta concentración de ingredientes activos penetra en la fibra capilar gruesa para brindar nutrición duradera. Facilita el secado.",
        precio: 20250,
        categoria:{
            nombre:"Mascarillas",
            id:"mascarillas",
        }
    },
    {
        id: "mascarilla-02",
        imagen: "../img/Masque-Densite-Densifique-200ml-01-Kerastase.png",
        titulo: "MASQUE DENSITÉ",
        descripcion:"Mascarilla diseñada para cabellos un poco o muy adelgazados. Una fórmula que texturiza, aporta cuerpo y resiliencia para conseguir un cabello más grueso de la raíz a las puntas. Brinda termo-proteccion.",
        precio: 21815,
        categoria:{
            nombre:"Mascarillas",
            id:"mascarillas",
        }        
    },
    {
        id: "mascarilla-03",
        imagen: "../img/Masque-Curl-Ideal-Discipline-200ml-01-Kerastase.png",
        titulo: "MASKÉRATINE",
        descripcion:"Mascarilla para el cabello grueso y rebelde que necesita suavidad y control del frizz. El cabello queda suave y delicado con una fluidez ligera. Se obtiene mejor manejabilidad y se agiliza el secado.",
        precio: 29590,
        categoria:{
            nombre:"Mascarillas",
            id:"mascarillas",
        } 
    },
    {
        id: "mascarilla-04",
        imagen: "../img/ELIXIR-ULTIME-MASQUE-VISUAL1.png",
        titulo: "MASQUE ELIXIR ULTIME",
        descripcion:"Máscara para darle brillo al cabello opaco. Restaura las hebras para lograr un brillo sedoso y suave. El cabello opaco se nutre, quedando suave y visiblemente más brillante. Posee vitaminas C, D y Omega 9.",
        precio: 22450,
        categoria:{
            nombre:"Mascarillas",
            id:"mascarillas",
        } 
    },
    {
        id: "shampoo-01",
        imagen: "../img/Bain-Cicaextreme-Shampoo-In-Cream-250ml-01-Kerastase-v2.jpg",
        titulo: "LE BAIN CICAEXTREME",
        descripcion:"Shampoo con ácido hialurónico, proporciona una experiencia de lavado perfecta para el cabello rubio decolorado. De textura ultra suave, rica y cremosa, que lava sin fricción aportando una hidratación intensa.",
        precio: 18250,
        categoria:{
            nombre:"Shampoos",
            id:"shampoos",
        } 
    },
    {
        id: "shampoo-02",
        imagen: "../img/Blond-Absolu-Bain-Lumiere.png",
        titulo: "BAIN LUMIERE",
        descripcion:"Shampoo contiene infusion de ácido hialurónico ideal para el cabello aclarado, decolorado o gris.limpia cuidadosamente e hidrata desde la raíz hasta las puntas dejándolo suave y con una sensación ligera y luminosa.",
        precio: 18750,
        categoria:{
            nombre:"Shampoos",
            id:"shampoos",
        } 
    },
    {
        id: "shampoo-03",
        imagen: "../img/Bain-Satin-1-Nutritive-250ml-01-Kerastase.png",
        titulo: "BAIN SATIN 1",
        descripcion:"Shampoo nutritivo para cabello normal a ligeramente seco. Los ingredientes activos ofrecen nutrientes esenciales para nutrir la fibra y suavizar el cabello desde la raíz a la punta. Facilita el desenredo y aporta brillo.",
        precio: 18590,
        categoria:{
            nombre:"Shampoos",
            id:"shampoos",
        } 
    },
    {
        id: "shampoo-04",
        imagen: "../img/Bain-Fluidealiste-Sulfate-Free-Discipline-250ml-01-Kerastase.png",
        titulo: "BAIN FLUIDÉALISTE SULFATE FREE",
        descripcion:"Baño sin sulfatos para el cabello sensibilizado y rebelde. El cabello queda suave y sin frizz. Mejora la fluidez y el movimiento natural del cabello. Es ideal para cabello con procesos químicos.",
        precio: 21250,
        categoria:{
            nombre:"Shampoos",
            id:"shampoos",
        } 
    },
    {
        id: "shampoo-05",
        imagen: "../img/producto2-min.png",
        titulo: "BAIN DENSITÉ",
        descripcion:"Baño corporizante del cabello diseñado para restaurar la abundancia, la frondosidad y el movimiento al cabello que perdió densidad. Crea una masa capilar más densa y frondosa. Aporta más textura, sustancia y resiliencia.",
        precio: 19350,
        categoria:{
            nombre:"Shampoos",
            id:"shampoos",
        } 
    },
    {
        id: "acondicionador-01",
        imagen: "../img/Fondant-Densite-Densifique-200ml-01-Kerastase.png",
        titulo: "FONDANT DENSITÉ",
        descripcion:"Acondicionador para el cabello fino y adelgazado. Aporta textura, cuerpo y resiliencia al cabello para dejarlo más denso y grueso. El cabello queda con mayor plenitud, más cuerpo y mas resistencia al quiebre.",
        precio: 25250,
        categoria:{
            nombre:"Acondicionadores",
            id:"acondicionadores",
        } 
    },
    {
        id: "acondicionador-02",
        imagen: "../img/Fondant-Fluidealiste-Discipline-200ml-01-Kerastase.png",
        titulo: "FONDANT FLUIDÉALISTE",
        descripcion:"Acondicionador para cabellos rebeldes finos a normales que buscan suavidad y control. El cabello queda protegido del frizz, con un acabado ligero y suave. Ofrece una mejor manejabilidad del cabello y termo-protección.",
        precio: 23250,
        categoria:{
            nombre:"Acondicionadores",
            id:"acondicionadores",
        } 
    },
    {
        id: "acondicionador-03",
        imagen: "../img/ELIXIR-ULTIME-FONDANT-VISUAL1.png",
        titulo: "FONDANT ELIXIR ULTIME",
        descripcion:"Acondicionador infundido por un aceite cremoso que magnifica el brillo del cabello mediante el sellado de la fibra capilar. Suaviza y fortalece de forma instantánea y proporciona una nutrición profunda durante 48 horas.",
        precio: 21390,
        categoria:{
            nombre:"Acondicionadores",
            id:"acondicionadores",
        } 
    },
    {
        id: "tratamiento-01",
        imagen: "../img/Blond-Absolu-Cicaflash.png",
        titulo: "CICAFLASH",
        descripcion:"Gel cremoso,ideal para todo tipo de rubios. Restaura el cabello sensibilizado, nutriendo la fibra. La combinación de ácido Hialurónico y flor de Edelweiss suaviza y fortalece el cabello y brinda nutrición profunda.",
        precio: 25250,
        categoria:{
            nombre:"Tratamientos",
            id:"tratamientos",
        } 
    },
    {
        id: "tratamiento-02",
        imagen: "../img/Blond-Absolu-Cicaplasme.png",
        titulo: "CICAPLASME",
        descripcion:"Crema de tonos lavanda que fortifica el cabello rubio sensibilizado, decolorado o gris. Enriquecida con ácido Hialuronico y flor de Edelweiss, sella las puntas, suaviza la fibra del cabello y controla el frizz.",
        precio: 28650,
        categoria:{
            nombre:"Tratamientos",
            id:"tratamientos",
        } 
    },
    {
        id: "tratamiento-03",
        imagen: "../img/Spray-Fluidissime-Discipline-150ml-01-Kerastase.png",
        titulo: "SPRAY FLUIDISSIME",
        descripcion:"Spray de tratamiento para cabello rebelde en busca de suavidad y manejabilidad. Los agentes termoprotectores cuidan el cabello del frizz y la humedad hasta 72 horas. Brinda termo-protección antes de aplicar calor.",
        precio: 19500,
        categoria:{
            nombre:"Tratamientos",
            id:"tratamientos",
        } 
    },


];

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

