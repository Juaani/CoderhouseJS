//FUNCIONES DE ORDEN SUPERIOR / RETORNAN FUNCIONES

//EJEMPLO

function mayorQue(n){
    return (m) => m > n;
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(12));
console.log(mayorQueDiez(8));

//EJEMPLO 2:

function asiganarOperacion(op){
    if (op=="sumar"){
        return (a,b) => a + b;
    }
    else if(op == "restar"){
        return (a,b) => a - b;
    }
}

let suma = asiganarOperacion("sumar");
let resta = asiganarOperacion("restar");

console.log(suma(12,1));
console.log(resta(12,1));

//FUNCIONES DE ORDEN SUPERIOR / RECIBEN FUNCIONES POR PARAMETRO // CALLBACKS

//EJEMPLO:

function porCadaUno(arr, fn){
    for(const el of arr){
        fn(el)
    }
}

const frutas = ["pera","banana","tomate"];

const saludar = (saludo) =>{
    console.log("Hola ",saludo);
}

porCadaUno(frutas, saludar);

//Metodos de Busqueda y Transformacion:

//ForEach():

const numeros = [1,2,3,4,5];

numeros.forEach((num)=>{
    console.log(num);
});

//Find

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
];

const resultado = cursos.find((el) => el.nombre === "ReactJS");
const resultadoDos = cursos.find((el) => el.nombre === "DW");

console.log(resultado);
console.log(resultadoDos);

//Some / Find pero retorna true o false

console.log( cursos.some((el) => el.nombre == "Desarrollo web"));
console.log( cursos.some((el) => el.nombre == "Javascript"));

//Map

const nombres = cursos.map((el) => el.nombre);
console.log(nombres);

//Reduce

const numeritos = [1,2,3,4,5];

const total = numeritos.reduce((acumulador, elemento)=>{
    return acumulador + elemento;
},50);

console.log(total);

//PRACTICA:

const productos = [
    {id: 1, prudcto: "Mayonesa", precio: 125},
    {id: 2, prudcto: "Harina", precio: 90},
    {id: 3, prudcto: "Pan", precio: 105},
    {id: 4, prudcto: "Fideo", precio: 115},
    {id: 5, prudcto: "Manzana", precio: 155},
]

const buscado = productos.find(producto => producto.id === 3);
console.log(buscado);
const existe = productos.some(producto => producto.nombre === "Harina");
console.log(existe);
const baratos = productos.filter(producto => producto.precio < 100);
console.log(baratos);
const listaNombres = productos.map(producto => producto.nombre);
console.log(listaNombres);



