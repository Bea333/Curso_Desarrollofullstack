/** Condicionales, operadores y Arrays */

/*
//Array vacio
let grupo = [];
//Array strings
let mascotas = ["gato", "perro","conejo"];
//Array numeros
let numeros = [1,2,3,8,4];
//Array boolean
let verdades = [true,false,true];
//Array mixto
let personas = [3125869,"fulanito","cosme",1983,true];

//Array de arrays
let resultados = [
    ["gato","miau"],
    ["perro","guau"],
    ["ardilla","wheee"],

//Las matrices comienzan en 0
let datos =["dato1","dato2","dato3"];
console.log (datos[2]);

//Propiedad LENGHT
let colorMascotas = [
    ['perro', 'marrón', 'negro', 'rojo'],
    ['gato', 'blanco', 'gris'],
    ['pez','anaranjado'],
    ['jirafa', 'amarilla']
];
//la cantidad de Arrays
console.log(colorMascotas.length);
//accedemos a una posicion
console.log(colorMascotas [0][3]);
//la cantidad de elementos en el array
console.log(colorMascotas [1].length);
//la cantidad de caracteres del elemnto
console.log(colorMascotas [2][1].length);

let verduras =['papa','zapallo','cebolla']
console.log(verduras,length);
console.log(verduras[0]);
*/
/*
//CONDICIONALES
let a=7;
if (a>5){
    console.log("El número es mayor a 5");
} else if(a<5){
    console.log("El número es menor a 5");
}
else{
    console.log("El número es iagual a 5");
}


    // Sin operador ternario
    let edad1 = 19;
    let esMayorEdad1;
    if (edad > 18){
        esMayorEdad1 = true;
    } else{
        esMayorEdad1 = false;
    }


    // Operador condicional ternario

    let esMayorEdad = edad > 18 ? true : false
    console.log("Es mayor de edad? " + esMayorEdad);
    let nombre = 'Pepito';
    let edad = 19;
    edad > 18 ? console.log(nombre + ' es mayor de edad') : console.log (nombre + ' no es mayor de edad');
    // -- PRÁCTICA CONDICIONALES /
    //1. Crear una lista
    let lista = ["Harina", "Papas", "Manzanas", "Jugo", "Chocolate"];
    //2. Prompt
    let articulo = prompt("¿Qué artículo desea agregar a la lista");
    // 3 
    if (lista.includes(articulo)){
        alert (articulo + ' ya está en la lista')
    } else {
        lista.push(articulo)
        alert("La lista es: " +lista)
    }


// Switch
let fruta = "banana";
switch (fruta) {
    case "manzana":
        color = "Rojo";
        break;
    case "kiwi":
        color = "Verde";
        break;
    default:
        color = "Blanco";
}
console.log("El color es " +color);
let color = prompt("Ingrese un color");
switch (color) {
    case "rosa":
        alert("Es Kimberly");
        break;
    case "negro":
        alert("Es Zack");
        break;
    case "amarillo":
        alert("Es Trini");
        break;
    case "azul":
        alert("Es Billy");
        break;
    case "roja":
        alert ("Es Jason");
        break;
    default:
        alert('No es un Power Ranger')
}

//Devuelve la fecha
console.log(new Date().getDay());
*/

let numeroDia = new Date().getDay();

switch (numeroDia) {
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miércoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sábado";
        break;

    default:
        dia = "Domingo";

}

console.log("Hoy es " + dia);