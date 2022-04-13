//Concatenación
let saludo = "Hola";
let pregunta = "¿Cómo estás?";

let resultado = saludo + pregunta;
document.write(resultado);
document.write("<br>")


//Concatenar números como strings.
let numero1 = 20;
let numero2 = 15;
resultado = numero1 + numero2;
document.write(resultado);
document.write("<br>")


//concatenar con el método "concat".
resultado = "" + numero1 + numero2;
document.write(resultado);
document.write("<br>")
let numero3 = "44";
document.write(resultado.concat(numero3)); //solo se puede concatenar si hay una cadena de texto;


//concatenar
//se puede concatenar con backtiks. ${variable}.
document.write("<br>");
let nombre = "Yilver";
let apellido = "Quevedo";
let edad = 20;
resultado = "Hola, soy " + nombre + " " + apellido + " y tengo " + edad;
document.write(resultado);
document.write("<br>");
resultado = `Hola, soy ${nombre} ${apellido} y tengo ${edad}`;
document.write(resultado);

resultado = `Hola, soy ${nombre} 
						${apellido} y tengo 
						${edad}`;
document.write(resultado);
document.write("<br>");
document.write(`<h1>JavaScript</h1>
	<p>JavaScript es el mejor lenguaje de programación para la web.</p>
	<p>Sería perfecto juntarlo con un lenguaje de backend como python</p>`);

document.write("<br>");
document.write("<br>");
document.write("Hola Mundo, soy 'Yilver'");
document.write('Hola Mundo, soy "Yilver"');