//Tipo de datos> Boleeanos: 2 valores : Falso o Verdadero

/* if(true){
    codigo ejecutable
}
if(false){
    codigo no ejecutable
}*/

let mostrar = false;

if(mostrar){
    alert("Diga un numero del uno al cinco")
}

//Prioridades a resolver codigo:

//1. Se resuelve el interior del parentesis
//2. Se resuelve el codigo ejecutable
//3. Se ejecuta

let edad = parseInt(prompt("Ingrese su edad: ")); //Almacenamos variable

edad = Number(edad); //Comprobamos el tipo de dato

if(edad>=18){ //Resolvemos parentesis
    alert("Puede ingresar a la pagina") //Ejecutamos este codigo si es verdadero
}
else{
    alert("Fuera de ahiiiii") //Si es falso ejecutamos este
}

//Como se si una condicion me queda True o False?

//((true && true) && false) False
//((!false || false) && true ) true
//((!true || false) && true) false

/*
T && T = T
F && F = F
T && F = F
F && T = F

F || F = F 
T || T = T 
F || T = T 
T || F = T 
*/

//EJEMPLO:

let identificacion = parseInt(prompt("Ingrese su dni: "));
let carnetDeConducir = parseInt(prompt("Ingrese su numero de carnet de conducir: "));
let edadUsuario = parseInt(prompt("Ingrese su edad: "));

if((identificacion || carnetDeConducir)&& edadUsuario>17 && edadUsuario<70){
    alert("Puede conducir el acceso e identificarse");
}
else{
    alert("No puede identificarse o conducir");
}