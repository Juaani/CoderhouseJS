//CICLOS

//Herramienta que nos permite repetir un bloque de codigo o instrucciones de forma controlada
// y en un numero determinado de veces.

//Puede ser por conteo:

//Va sumando una unidad o mas por vuelta. Al llegar al tope se detiene (Deja de iterar)

//FOR

for(let i=0;i<5;i++){
 alert("Hola Brasilll");
}

/*Sintaxis:
i=0 --> Desde
i<5 --> Hasta
i++ --> Actualizacion
*/

//CONTINUE: Bajo cierta condicion salta repeticion


for(i=0;i<=6;i++){
 if(i % 2 == 0){
    continue
}
    console.log(i);
 }

//O puede ser condicional:

//WHILE o DO WHILE

let nombre = prompt("Ingrese nombre o la palabra 'cancelar' para cancelar la operacion:")

while(nombre!= "cancelar"){
    console.log(nombre);
    break;
}


//BUCLES

//Switch:

/* Es un bucle con una estructura de seleccion. 
Diseñado para multiples condiciones sobre una misma variable.
*/

let clima = prompt("Ingrese el clima de su ciudad: ");

switch(clima){
    case "lluvia":
        console.log(clima);
    break;
    case "viento":
        console.log(clima);
        break;    
}
