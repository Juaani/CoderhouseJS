//FUNCIONES
//Es un conjunto de instrucciones que se agrupan para
//una tarea concreta

//PASOS:
//1.DECLARAR

/* Ejemplo:
Quiero hace una funcion que se llame saludar y que su tarea concreta
sea generar un console.log que diga "Hola Mundo"*/

function saludar(){
    console.log("Hola Mundo");
}

/*2.LLAMAR:

Ejemplo: llamar a la funcion saludar*/

saludar();

// Hay funciones que retornan un dato:

function retornarNum(){
    return 3;
}

console.log(retornarNum()); //Se imprime si o si con console.log

//Funcion suma:

function sumar(vA,vB){ //PARAMETROS
    let resultado = vA + vB; //Funcion solamente dentro del scope
    return resultado; //return para sacar resultado del scope
}

console.log(sumar(1,3));

let na = 20;
let nb = 30;

let resultadoSuma = sumar(na,nb);
console.log(resultadoSuma); //Reutilizando funcion

//SIMPLIFICAR FUNCIONES:

function sumarB (v1,v2){
    return v1+v2; //return solo
}

let resultadoSumaB = sumarB(20,10);//Definimos parametros
console.log(resultadoSumaB);//Imprimimos

//SIMPLIFICACION 2:

function sumarC (vA,vB){
    return vA+vB;
}

console.log(sumarC(4,8));

//FUNCIONES ANONIMAS, SE USAN PARA SER UTILIZADAS POR PARAMETRO O 
//ASIGNADA A OTRA VARIABLE

let sumaAnonima = function (a,b) {return a + b}; //sumaAnonima es la variable
console.log(sumaAnonima(1,2));//imprimir

//FUNCION FLECHA

let division = (a,b) => {return a/b}; //Flecha= parametros+flecha+return
console.log(division(4,2));//imprimir

//RETURN IMPLICITO

let mutiplicar = (a,b) => a*b; //Sin return
console.log(mutiplicar(2,2));//imprimir

//FUNCIONES DE UNICO PARAMETRO

let nombre = a => console.log("Hola "+ a);//Parametro+Flecha+Funcion
nombre("Juani")//Imprimir declarando valor parametro
nombre("Ignacio");