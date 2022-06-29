//Operadores Lógicos

let numero1 = 23;
let numero2 = 12;
let texto1 = "Hola";
let texto2 = "Texto2";
let numeroTexto = "12";

console.log(numero1 == numero2);
console.log(numero1 != numero2);
console.log(numero2 == numeroTexto);
console.log(numero2 === numeroTexto);
console.log(numero2 != numeroTexto);
console.log(numero2 !== numeroTexto);

console.log("Mayor igual y menor");
console.log(numero1 > numero2);
console.log(numero1 >= numero2);
console.log(numero1 < numero2);
console.log(numero1 <= numero2);


//Operadores Booleanos
let item1 = false;
let item2 = true;
let resultado1 = item1 && item2;
let resultado2 = item1 || item2;
let resultado3 = !(item1 && item2);
console.log(`item1 ${item1}`);
console.log(`item2 ${item2}`);
console.log(`resultado1 ${resultado1}`);
console.log(`resultado2 ${resultado2}`);
console.log(`resultado3 ${resultado3}`);


//camel case
/*
	Es una forma de como escribir variables, funciones y clases.
	decimeUnaPalabra.
	la primera palabra en minuscula y luego cada inicial de las demás plabras en mayúsculas.
*/
document.getElementById("Hola");