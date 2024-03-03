//OBJETOS:

//Agrupamos datos en una unica entidad
//Poseen propiedades y metodos


//Sintaxis:

let alumnoJuani = {
    nombre:"Juan",
    apellido:"Lopez",
    edad:24,
};

//Caracteristicas:

//Propiedades: datos que describen al objeto

//Ejemplo > edad, nombre, apellido

//Metodos: son funciones que se ejecutan en el objeto

let perro ={
    nombre: "Nala",
    edad: 0.5,
    color: "Negro",
};

console.log(perro);

let auto={
    marca: "BMW",
    modelo: "M8",
    anio: 2019,
    color: "Negro",
    precioUSD: 25000,
    km: 0,
};

console.log(auto);

//Como ver propiedades sin ver todo?

//1

console.log(auto.marca);

//2

console.log(auto["marca"]);

//ASIGNAR VALORES A PROPIEDADES

auto.modelo = "M6";
console.log(auto.modelo);


//OBJETO CON CONST

const yerba={
    marca: "Taragui",
    tipo: "Despalada",
    precio: 3210,
};

console.log(yerba);
yerba.precio = 2900;
console.log(yerba);

//NO FUNCIONA IGUAL QUE VARIABLE
//YA QUE ACCEDEMOS A VALOR DE REFERENCIA
//NO AL VALOR DE FORMA DIRECTA


//FUNCIONES CONSTRUCTORAS

//El constructor es una funcion que usamos para crear un objeto
//cada vez que sea necesario

function Persona(nombre, apellido, edad){ //parametros como propiedades
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    //metodo

    this.saludar = function(){
        console.log("Hola, vos sos "+this.nombre);
    }
}

//crear objeto a partir de funcion constructora

const persona1 = new Persona("Juan","Lopez",24);
console.log(persona1);
const persona2 = new Persona("Pedro","Sanchez",40);
console.log(persona2);

//utilizamos un metodo

persona1.saludar();

//utilizando prompt

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = parseFloat(prompt("Ingrese su edad:"));

const persona3 = new Persona(nombre,apellido,edad);
console.log(persona3)
persona3.saludar();

//Clases

/* Las clases en JS tienen una sintaxis mas clara y simle para
poder crear objetos.
Son un equivalente al emplea de la funcion constructora*/

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    sumarIva(){return this.precio*1.21}
}

const fideos = new Producto("fideos",75);
console.log("El precio de "+fideos.nombre +" es de "+fideos.precio +" mas iva "+ fideos.sumarIva());


//metodos toLowerCase() MAY A MIN y toUpperCase() MIN A MAY

let frase = "Hola soy un string";
console.log(frase.toUpperCase())

//meotdo length 

console.log(frase.length);

//Operador IN - nos permite saber si tiene una propiedad o no

let Homer ={
    nombre: "Homer",
    apellidp: "Simpson",
    edad: 33,
}

console.log("nombre" in Homer);
console.log("casado" in Homer);

//Operador FOR IN - nos perimete reccores las propiedades

for (let propiedad in Homer){
    console.log(propiedad);
}

//si quiero mostrar en consola su valor

for (let propiedad in Homer){
    console.log(propiedad + " : " +Homer[propiedad]);
}
