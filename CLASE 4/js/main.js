//ARRAYS 

const alumnos = ['Pedro','Yamila','Juan','Renzo']; //Array 1

let alumno = alumnos.pop(); //Ultimo

let alumno2 = alumnos.shift(); //Primero

console.log(alumno);

console.log(alumno2);

const alumnosQueNoEstan = ['Jason','Danise']; //Array2

console.log(alumnosQueNoEstan); //Imprimo array2

alumnosQueNoEstan.splice(1,0,'Nacho'); //Agrego alumno a array2

const nombres = ['N','A','O','P']; //Constante

const nombreString = nombres.join(""); //array como string

console.log(nombreString);

const todosLosAlumnos = alumnos.concat(alumnosQueNoEstan); //Unir arrays / concatenar

console.log(todosLosAlumnos);

const nuevaListaAlumnos = todosLosAlumnos.slice(2,4); //Seleccionar solamente algunos elementos array

console.log(nuevaListaAlumnos);

document.write(todosLosAlumnos);




