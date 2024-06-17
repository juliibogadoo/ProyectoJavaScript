
/* CONTENEDOR DE MOTOS */
const contenedorMotos = document.getElementById("contenedor-motos");
/* BOTONES PARA FILTRAR MARCA */
const hondaBoton = document.getElementById("honda-boton");
const yamahaBoton = document.getElementById("yamaha-boton");
const motomelBoton = document.getElementById("motomel-boton");
const bajajBoton = document.getElementById("bajaj-boton");
/* BOTON PARA VOLVER AL INICIO */
const inicioBoton = document.getElementById("titulo");

let motosArray = [];

/* CARGANDO DATOS JSON CON FETCH */
fetch("/motosArray.json")
.then(response => response.json())
.then(data => {
   motosArray = data;
   mostrarMotos(motosArray);
});

/* INSERTANDO EL HTML DESDE JS PARA MOSTRAR LAS MOTOS */
const mostrarMotos = (motos) => {
   contenedorMotos.classList.add("oculto");
   /* AGREGO UN SETTIMEOUT PARA CREAR UNA TRANSICION AL FILTRAR LA MARCA */
   setTimeout(() => {
   contenedorMotos.innerHTML = '';
   motos.forEach(moto => {
      const motoDiv = document.createElement("div");
      motoDiv.classList.add("moto");
      motoDiv.innerHTML =  `
      <img class="img-moto" src="${moto.img}" alt="${moto.nombre}">
      <div class="details">
          <h3 class="nombre-moto">${moto.nombre}</h3>
          <p class="precio-moto">$${moto.precio.toLocaleString()}</p>
          <button class="agregar" data-nombre="${moto.nombre}">COMPRAR</button>
      </div>
  `;
  contenedorMotos.appendChild(motoDiv);
   });
   contenedorMotos.classList.remove("oculto");
}, 300);
};

/* FUNCION PARA FILTRAR LAS MOTOS */
const filtrarMotos = (marca) => {
   return motosArray.filter(moto => moto.marca === marca);
};
/* EVENTO PARA CUANDO HACEMOS CLICK SOBRE EL BOTON DE MARCAS */
hondaBoton.addEventListener("click", () => mostrarMotos(filtrarMotos("Honda")));
yamahaBoton.addEventListener("click", () => mostrarMotos(filtrarMotos("Yamaha")));
motomelBoton.addEventListener("click", () => mostrarMotos(filtrarMotos("Motomel")));
bajajBoton.addEventListener("click", () => mostrarMotos(filtrarMotos("Bajaj")));

/* BOTON TITULO PARA VOLVER A MOSTRAR TODAS LAS MOTOS */
inicioBoton.addEventListener("click", () => {
   mostrarMotos(motosArray)
});

mostrarMotos(motosArray);

/* FORMULARIO */
const formulario = document.querySelector("#form-js");
const botonEnviar = document.querySelector("#enviar-input");

const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const inputNumero = document.querySelector("#numero");
const inputMensaje = document.querySelector("#mensaje");

const mensajeConfirmacion = document.querySelector("#mensaje-confirmacion");

/* LLAMANDO AL BOTON ENVIAR */
formulario.addEventListener("submit", (e) =>{
   e.preventDefault();

const nombre = inputNombre.value;
const email = inputEmail.value;
const numero = inputNumero.value;
const mensaje = inputMensaje.value;

if (nombre === "" || email === "" || numero === "" || mensaje === ""){
   alert("COMPLETE TODOS LOS CAMPOS.");
   return;
}

if (!numeroInvalid(numero)){
   alert("INGRESA UN NUMERO VALIDO.");
   return;
}

/* GUARDANDO LOS DATOS EN EL LOCALSTORAGE
 */
localStorage.setItem("nombre", nombre);
localStorage.setItem("email", email);
localStorage.setItem("numero", numero);
localStorage.setItem("mensaje", mensaje);


Swal.fire({
   position: "center",
   icon: "success",
   title: "TU CONSULTA FUE ENVIADO CON EXITO",
   showConfirmButton: false,
   timer: 2000
 });

mensajeConfirmacion.style.display = "block";

/* LE AGREGO UN TIEMPO AL TEXTO DE 3s */
setTimeout(() => {
   mensajeConfirmacion.style.display = "none";
}, 3000);

formulario.reset(); 

});
/* VALIDAR SI EL NUMERO INGRESADO ES VALIDO */
function numeroInvalid(numero){
   const re = /^\d+$/;
   return re.test(numero);
}
