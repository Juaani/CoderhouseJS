//SIEMPRE VAMOS A TRBAJAR VINCULANDO JS A UN HTML
//FORMA DE VINCULARLO
//1
//Crear un main.js y vincularlo a lo que es HTML con la etiqueta script:src
//SIEMPRE COLOCAR EL SCRIPT AL FINAL DEL HTML

//Sintaxtis
//Comentarios:
/*Comentario en Bloque*/
//Comentario en linea

//2
//En JS no se tienen en cuenta los espacios en blanco (Si al nombrar variables)
//3
//JS es Key Sensitive - MAYUSCULAS y minusculas:
//let estoEsUnEuemplo 
//4
//Terminar las lineas con ";" - Esto solo por buena practica
//5
//Hay palabras reservadas que no se pueden utilizar
//NO UTILIZAR LA LETRA Ñ - Se admite pero no re recomienda


//Tipos de datos:
//Datos Primitivos:
//number => 12345 => lo utilizamos para operaciones matematicas.
//String => "Hola soy un String" => Cadena de texto.
// true/false => dato de tipo booleano. 
// null => valor nulo.
// undefined => valor no definido.

let nombreAlumno = "Juan Ignacio";
console.log(nombreAlumno);

nombreAlumno = "Pedrito"; //Reasignamos sin nombrar LET
console.log(nombreAlumno);

//Constantes
//No es lo mismo que declarar let, ya que la variable puede resivir varios valores.
//La constante recibe un solo valor de asignacion y declaracion.
//CONST se usa solo si no queremos cambiar el valor de un dato.

const nombreArgentina = "Argentina";
const pi = 3.14; //EN DECIMALES USAMOS "."
console.log(pi);


//EJERCICIOS

let ingreseNombre = prompt("Ingrese su nombre:");
let notaParcialUno = parseFloat(prompt("Ingrese la nota del primer parcial: "));
let notaParcialDos = parseFloat(prompt("Ingrese la nota del segundo parcial: "));

let notaPromedio = (notaParcialDos+notaParcialUno)/2;
alert("El Alumno "+ingreseNombre+" tiene un promedio de "+notaPromedio);

//PROMPT RECIBE SOLO STRING, POR LO QUE DEBEMOS PARSEAR EL DATO

//Se recomienda usar ParseFloat y no ParseInt ya que este ultimo solo admite enteros, el primero admite ambos



