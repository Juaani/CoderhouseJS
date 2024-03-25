//Storage:
//Nos permite guardar datos de manera local en el navegador, sin necesidad de generar persisntencia de datos.
//Generar persistencia de datos se refiere al proceso de:
//Almacenar datos de manera permanente para que:
//puedan ser recuperados y utilizados posteriormente,
//incluso despues de que la app o sitio se haya cerrado.

//Trabajamos con local storage:

//EJEMPLO SALUDO

localStorage.setItem("Saludo","Hola Mundo");//set le asignamos valor
let saludo = localStorage.getItem("Saludo"); //get nos da el valor
console.log(saludo);

//Trabajamos con Session Storage

//la persistencia se guarda en sesiones

sessionStorage.setItem("Nombre","Juan");
let nombre = sessionStorage.getItem("Nombre");
console.log(nombre);

//Eliminamos del Storage
localStorage.removeItem("Saludo");
localStorage.clear();

//JSON:

//Nos permite almacenar informacion de forma ligera
//Convertimos objetos en cadena de caracteres

const Juan = {
    nombre: "Juan",
    apellido: "Lopez",
    edad: 24,
};

const juanJSON = JSON.stringify(Juan);
console.log(juanJSON);

//Ahora puedo almacenar la informacion del JSON en localstorage

localStorage.setItem("Juan",juanJSON);

//Tomar JSON del local storage y lo hacemos un objeto

const personaJSON = localStorage.getItem("Juan");

const persona = JSON.parse(personaJSON);

console.log(persona);

//EJEMPLO: Utilizaremos el localstorage para cambiar el modo a dark o ligth 

const darkButton = document.getElementById("fondo");

darkButton.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo","dark");
    }
    else{
        localStorage.setItem("modo","ligth");
    }
});

//Recuperamos el modo del localstorage

const modo = localStorage.getItem("modo");

if(modo=="dark"){
    document.body.classList.add("dark");
}
else{
    document.body.classList.remove("dark");
}



