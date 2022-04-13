// Funciones con JavaScript.


//funcion saludar;
function saludar(){
	let estado = prompt("Hola, ¿Cómo estás?");
	if (estado == "bien"){
		alert("¡Qué bien!");
	} else{
		alert("Coño, que chimbo...")
	}
}


//segunda forma de crear una función;
saludo = function(){
	document.write("Esto es una forma de realizar funciones en JS <br>");
}
saludo();


//Return
function devolver(){
	document.write("Hola Mundo <br>");
	return true;
}

valorFuncion = devolver();


//Parametros.
function suma(num1, num2){
	return num1+num2;
}
let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa otro numero"));
alert("El resultado de la suma es: " + suma(num1,num2));


//Funciones Flechas.
const escribir = () =>{
	document.write("<br>Esta es la forma de escribir con ayuda de una función flecha <br>")
}

const saluda_a = (nombre) =>{
	document.write("Hola, ¿Cómo estás? " + nombre + "<br>");
}

escribir();
saluda_a("Yilver");
saluda_a("Juan");