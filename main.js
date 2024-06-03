const motosArray = [
{
   nombre : "Motomel s2",
   marca : "Motomel",
   modelo: "Serie 2",
   precio: 1600000,
   img: "img/349968-800-auto.png"
    
},

{
    nombre : "Motomel deluxe",
    marca : "Motomel",
    modelo: "DLX",
    precio: 1300000,
    img: "img\MOTOMEL---DLX-110.png" 
 },

 {
    nombre : "Motomel blitz tunning",
    marca : "Motomel",
    modelo: "Blitz tunning",
    precio: 1400000 ,
    img: "img\Blitz-110-v8.II_Tunning_white_web.png" 
 },

 {
    nombre : "Motomel Skua silver",
    marca : "Motomel",
    modelo: "Skua silver",
    precio: 2200000,
    img: "https://images.unomotos.com.ar/unomotos/motos_mini/motomel_skua_150_silver_0.png" 
 },

 {
    nombre : "Honda GLH",
    marca : "Honda",
    modelo: "GLH",
    precio: 5200000,
    img: "img\honda_glh_150_gaucha_mini.png" 
 },

 {
    nombre : "Rouser NS 200",
    marca : "Bajaj",
    modelo: "NS",
    precio: 4000000,
    img: "img\bajaj_rouser_200_ns_0km_mini.png"
 },

 {
    nombre : "Rouser NS 160",
    marca : "Bajaj",
    modelo: "NS",
    precio: 3300000,
    img: "img\bajaj-pulsar-ns160-td-abs-ug-2024-negro-a68347.png" 
 },

 {
    nombre : "Honda cb",
    marca : "Honda",
    modelo: "CB",
    precio:6000000, 
    img: "https://motos.honda.com.co/images/cms/Nueva-CB-300F-rojo.png" 
 },

 {
    nombre : "Honda crf",
    marca : "Honda",
    modelo: " CRF",
    precio: 13300000,
    img: "img\c2_r (1).png"
 },

 {
    nombre : "Yamaha cryton",
    marca : "Yamaha",
    modelo: "Crypton",
    precio: 2300000,
    img: "img\CryptonFi_motos_header.png"
 }
];

const motos = document.querySelectorAll(".moto");
const carritoCantidad = document.getElementById("cantidad-carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const actualizarCarrito = () => {
   carritoCantidad.textContent = carrito.length;
   localStorage.setItem("carrito", JSON.stringify(carrito));
};


motos.forEach(moto => {
   const botonComprar = moto.querySelector(".agregar");
   botonComprar.addEventListener("click", () => {
      const nombre = moto.querySelector(".nombre-moto").textContent;
      const precio = moto.querySelector(".precio-moto").textContent;
      carrito.push({nombre, precio});
      actualizarCarrito();
   });
});

function renderMotos(motosToRender) {
   contenedorMotos.innerHTML = '';
   motosToRender.forEach(moto => {
       const motoElement = document.createElement('div');
       motoElement.classList.add('moto');
       motoElement.innerHTML = `
           <img id="${moto.id}" class="img-moto" src="${moto.img}" alt="${moto.nombre}">
           <div class="details">
               <h3 class="nombre-moto">${moto.nombre}</h3>
               <p class="precio-moto">$${moto.precio.toLocaleString()}</p>
               <button class="agregar">COMPRAR</button>
           </div>
       `;
       contenedorMotos.appendChild(motoElement);
      })}

document.getElementById("honda-boton").addEventListener("click", () => filtrarMotos("HONDA"));
document.getElementById("yamaha-boton").addEventListener("click", () => filtrarMotos("YAMAHA"));
document.getElementById("motomel-boton").addEventListener("click", () => filtrarMotos("MOTOMEL"));
document.getElementById("bajaj-boton").addEventListener("click", () => filtrarMotos("BAJAJ"));

function filtrarMotos(marca){
   const motosFiltradas = motos.filter(moto => moto.marca === marca);

}

renderMotos(filtrarMotos);

actualizarCarrito();
