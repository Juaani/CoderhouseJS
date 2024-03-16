//DOM *MODELOS DE OBJETOD DEL DOCUMENTO*

//ETIQUETAS HTML = NODOS

//PLANTILLAS LITERALES

//ANTES:

let cliente = "Ricky Fort";

let importe = 1000000;

mensaje = cliente +" realizo una compra por $"+importe;

console.log(mensaje);

//AHORA CON PLANTILLA LITERALES FACILITAMOS LA CONCATENACION DE MENSAJES:

//con basticks ` `

let mensahePlantilla = `El cliente ${cliente} realizo una compra de  ${importe} USD`;
console.log(mensahePlantilla);

//EL DOM NOS PERMITE MODIFICAR DE MANERA DINAMICA UN HTML

//CADA ETIQUETA REPRESENTA UN NODO
//SON ACCESIBLES MEDIANTE EL OBJETO GLOBAL DOCUMENT

//1) ACCEDEMOS AL DOM:

//vinculamos mediante etiqueta ID

const titulo = document.getElementById("tituloPrincipal");

console.log(titulo);

//podemos vincular mediante la etiqueta CLASS

const parrafo = document.getElementsByClassName("parrafoPrincipal");
console.log(parrafo);

//podemos vincular mediante los TAG

const lista = document.getElementsByTagName("li");
console.log(lista);

//podemos vincular mediante QuerySelector


const queryPersonas = document.querySelector(".nombre");
console.log(queryPersonas);

const queryPersonasAll = document.querySelectorAll(".nombre");
console.log(queryPersonasAll);

//2) MODIFICAR NODOS:

//innetText: me permite acceder a cualquier contenido del DOM y modificarlo de manera dinamica.

tituloPrincipal.innerText = "DOM Modificado desde main.js"

// innerHTML> me permite agregar codigo html dentro del codigo:

const divContenedorA = document.getElementById("divContenedor");

divContenedor.innerHTML = `<p> Esto es un parrafo insertado </p>`;

const contenedor = document.getElementById("divContenedor");

const parrafoB = document.createElement("p");

parrafo.innerText = "creamos un texto";

contenedor.appendChild(parrafoB);