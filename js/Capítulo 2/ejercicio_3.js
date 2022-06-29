/*Ejercicio 6*/
/*
	Crar una calculadora que nos simplifique el trabajo.
*/
let num1, num2, resultado;

const suma = (num1, num2) => {
	num1 = parseFloat(prompt("Ingresa un número: "));
	num2 = parseFloat(prompt("Ingresa otro número: "));
	resultado = `El resultado de tu suma es: ${num1 + num2}`;
	return resultado;
}

const resta = (num1, num2) => {
	num1 = parseFloat(prompt("Ingresa un número: "));
	num2 = parseFloat(prompt("Ingresa otro número: "));
	resultado = `El resultado de tu resta es: ${num1 - num2}`;
	return resultado;
}

const multiplicacion = (num1, num2) => {
	num1 = parseFloat(prompt("Ingresa un número: "));
	num2 = parseFloat(prompt("Ingresa otro número: "));
	resultado = `El resultado de tu multiplicacion es: ${num1 * num2}`;
	return resultado;
}

const division = (num1, num2) => {
	num1 = parseFloat(prompt("Ingresa un número: "));
	num2 = parseFloat(prompt("Ingresa otro número: "));
	resultado = `El resultado de tu division es: ${num1 / num2}`;
	return resultado;
}

const salir = () => {
	return "salir Del Programa..."
}

let funciones = [suma, resta, multiplicacion, division, salir];
let texto = `Ingresa una opcion \n
			1. Suma\n
			2. Resta\n
			3. Multiplicación\n
			4. División\n
			5. Salir`;
let opcion = parseInt(prompt(texto));
console.log(funciones[opcion -1]());