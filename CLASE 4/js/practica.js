//ARRAYS

const listaNombres = [];

let cantidad = 5;

do{
    let entrada = prompt("Ingresar nombre: ");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
}
while(listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["ANA","EMA"]);

alert(nuevaLista.join("\n"));


//EJEMPLO 2

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar('Pedro')


/*const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}
*/

//


class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();