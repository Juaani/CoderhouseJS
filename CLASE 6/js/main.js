//Eventos: son la manera que tenemos en JS de controlar las acciones de los usuarios

//Se ejecutan mediante un manejador de eventos => Action Listener

//Eventos:

//click:

//Se dispara cuando clickeamos un elemento determinado

//EJ:

const botonPrueba = document.getElementById("click");

botonPrueba.addEventListener("click", () =>{
    alert("Hola Mundo");
})

//On click:

//Se dispara utilizando los elementos de nodo de HTML

//Ej:

const botonOnClick = document.getElementById("click2");
botonOnClick.onclick = () =>{
    alert("Adios Mundo");
}

//Escribiendo la funcion en el HTML:

function jsEnHTML(){
    alert("Buenos dias");
}

//Mouseover-Mouseout: el puntero del mouse se mueve o sale del elemento

const caja = document.getElementById("caja");

caja.onmouseover = () =>{
    console.log("Ingreso o salio el puntero de la caja");
};

caja.onmouseout = () =>{
    console.log("Salio el puntero")
};

caja.onmousemove = () =>{
    console.log("Esta arriba de la caja. Sorprendente")
};

//Eventos de teclado:

//OnkeyDown:

const texto = document.getElementById("teclado");

texto.onkeydown = () =>{
    console.log("Presionaste una tecla");
};

//OnKeyUp:

texto.onkeyup = () =>{
    console.log("Soltaste una tecla");
};

//Evento Change: se activa cuando cambia el valor de un elemento:

const change = document.getElementById("change");

change.addEventListener("change", () =>{
    alert("Ingresaste un texto");
});

//Evento Input: funcion cada vez que ingrese un texto

const input = document.getElementById("input");

input.addEventListener("input", ()=>{
    console.log(input.value)
});

//Evento submit: activa cuando un formulario envia datos

class Cliente{
    constructor (nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const clientes = [];

const form = document.getElementById("formulario");

form.addEventListener("submit",(e)=>{
    //Antes del proceso evitamos el comportamiento default:

    e.preventDefault();

    const nombreFormulario = document.getElementById("nombre");
    const apellidoFormulario = document.getElementById("apellido");

    //creamos objeto cliente:

    const cliente = new Cliente(nombreFormulario.value,apellidoFormulario.value);
    clientes.push(cliente);
    console.log(clientes);

    //reseteamos el form al presionar enviar

    formulario.reset();
})