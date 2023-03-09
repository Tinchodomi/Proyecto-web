

/// EVENTOS /// 

let nav = document.getElementById("btn")
let reserva = document.getElementById("btn2")
let h1 = document.getElementById("h1header")

nav.onclick = () =>{console.log("NAVclick")}
nav.onmousemove = () =>{console.log("NAVmousemove")}
nav.onmousedown = () =>{console.log("NAVmousedown")}
nav.onmouseout = () =>{console.log("NAVmouseout")}
nav.onmouseover = () =>{console.log("NAVmouseover")}
nav.onmouseup = () =>{console.log("NAVmouseup")}

reserva.onmousemove = () =>{console.log("RESERVAmousemove")}
reserva.onmouseout = () =>{console.log("RESERVAmouseout")}
reserva.onmouseover = () =>{console.log("RESERVAmouseover")}

h1.onmousemove = () =>{console.log("BRODmousemove")}
h1.onmouseout = () =>{console.log("BRODmouseout")}
h1.onmouseover = () =>{console.log("BRODmouseover")}

/// DOM ///

document.querySelector('h1').textContent = "brÖd"

let quitarh2 = document.querySelector('h2');
let quitarh6 = document.querySelector('h6');
quitarh2.remove();
quitarh6.remove();


///STORAGE
localStorage.setItem('Bienvenido', 'Bienvenidos a Brod')
let mensaje = localStorage.getItem('Bienvenido')

sessionStorage.setItem('email', "brodbakery@gmail.com")
email = sessionStorage.getItem('email')

for (let i = 0; i < localStorage.length; i++){

    let clave = localStorage.key(i)


    console.log("clave "+ clave);
    console.log("valor "+ localStorage.getItem(clave))
}

console.log(mensaje)
console.log( email)


const producto1 = {id:1, tipo:"Pan Clasico "};
localStorage.setItem("producto1",producto1);
const enJSON = JSON.stringify(producto1);

console.log(enJSON); //carga el objeto
console.log(typeof enJSON) //tipo objeto
console.log(typeof producto1) //tipo string

localStorage.setItem("Panes", enJSON);

const producto2 = JSON.parse(localStorage.getItem("Panes"))
console.log(producto2.tipo)



const productos = [ {nro:1, producto: "Pan Clasico", precio:300},
{nro:2, producto: "Pan de semillas", precio:450},
{nro:3, producto:"Pan Mediterraneo", precio:480,}]

const guardarLocal = (clave,valor) => {localStorage.setItem(clave, valor)}

for (const producto of productos) {

    guardarLocal(producto.codigo, JSON.stringify(producto));
}

guardarLocal ("listaProductos", JSON.stringify(productos));

class Producto {

    constructor(obj){

        this.producto = obj.producto;
        this.precio = parseFloat(obj.precio);

    }

    sumaIva(){
        
        this.precio = this.precio * 1.21;
    }
}

const almacenados = JSON.parse(localStorage.getItem ("listaProductos"));
const productosPan = [];

for(const objeto of almacenados) productosPan.push(new Producto(objeto))



for (const precio of productosPan) precio.sumaIva();

console.log(productosPan)


///operadores avanzados

const usuario = {nombre:"Marcos", edad: 58}
const usuario2 = null;

let permiso = usuario.edad >= 18 ? true : false
permiso ? console.log("puede comprar") : console.log("no puede comprar")

console.log(usuario || "el usuario no existe")
console.log(usuario2 || "el usuario no existe")
console.log(usuario2?.nombre || "el usuario no existe")

const {nombre,edad,telefono} = usuario;
console.log(nombre);
console.log(edad);
console.log(telefono);

const desest = ({nombre,edad}) => {console.log(nombre,edad)}
desest(usuario)


const carrito = [];  
carrito.length === 0 && console.log("no  hay cosas en el carrito") 

//spread
const nombres = ["Rita", "Pedro","Miguel", "Ana", "Vanesa"]
const [a,b,] = nombres
console.log(a,b,)

const [,,x,y] = nombres
console.log(x,y)

console.log(...nombres)
console.log(nombres)

const usuario1 = {
    ...usuario
}

console.log(usuario1)

const usuario11 = {...usuario1, direccion:"Buenos Aires 192"}

console.log(usuario11)


const sweetAlert = document.getElementById('cat')

cat.addEventListener('click',()=>{
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Página en construcción',
  footer: '<a href="">Why do I have this issue?</a>'
})

})


const sweetAlert2 = document.getElementById('eqp')

eqp.addEventListener('click',()=>{
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Página en construcción',
  footer: '<a href="">Why do I have this issue?</a>'
})

})



const evento = (res)=>{

    return new Promise((resolve, reject)=>{
        
        if (res === true) {
            resolve("Promesa resuelta")
        }
        else{
            reject("Promesa rechazada")
        }
    })

}

console.log(evento(true))
console.log(evento(false))



const evento1 = (res)=>{

    return new Promise((resolve, reject)=>{
        
        setTimeout (() =>{

            res ? resolve('resuelta') : reject('rechazada')
        },2000)
    })

}

//console.log(evento1(true))
//console.log(evento1(false))

evento1 (true) 
    
    .then((response) =>{
        
        console.log(response)
    })

evento1 (false) 
    
    .catch((error) =>{
        
        console.log(error)
    })




