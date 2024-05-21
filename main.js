let nombre = prompt("Ingresa nombre: ");

function saludar(nombre){
    console.log("Bienvenido/a " + nombre);
}

saludar(nombre);



const motovehiculos = [
    {
        marca: "Honda",
        modelo: "New Twister",
        cc: 250,
        precio: 3000
    },
{
    marca: "Yamaha",
    modelo: "Ybr",
    cc: 125,
    precio: 1800
},
{
    marca: "Motomel",
    modelo: "DLX",
    cc: 110,
    precio: 1200
},
{
    marca: "Bajaj",
    modelo: "Boxer",
    cc: 150,
    precio: 1600
}
];

const adicionales = [
    {
        nombre: "Guantes",
        precio: 100
    },
    {
        nombre: "Casco",
        precio: 400
    },
    {
        nombre: "Piloto",
        precio: 350
    }
]



const precioConCredito = motovehiculos.map((moto) => {
    return{
        marca: moto.marca,
        modelo: moto.modelo,
        cc: moto.cc,
        precio: moto.precio * 1.5
    }
});


function metodoDePago(){
   while(true){
    let pago = prompt("INGRESE METODO DE PAGO EFT O TJA:").toUpperCase();
    if (pago === "EFT"){
        console.log("ESTOS SON LOS PRECIOS AL CONTADO: ")
        console.log(motovehiculos);
        break
    }else if(pago === "TJA"){
        console.log("ESTOS SON LOS PRECIOS DE LISTA: ")
        console.log(precioConCredito);
        break
    }else{
        alert("DATO INVALIDO. INGRESE NUEVAMENTE EFT O TJA")
    }
   }
    
}
metodoDePago();
