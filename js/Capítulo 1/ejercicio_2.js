/*Ejercicio 2*/
/*
	Comprar boletos de lotería.
	Si le alcanza uno, lo compra.
	Si le alcanzo dos, compra dos.
	Si le alcanza tres y sobra regala el vuelvo.
	Debe mostrar que compró y el vuelto.
*/

let dinero = parseFloat(prompt("Ingresa tu dinero: "));
let boleto = 2.5;
let vuelto = dinero % boleto; 
let compra = ((dinero - vuelto) / boleto);

if (compra == 1 || compra==2){
	alert(`¡En hora buena! puedes comprar ${compra} boletos`);
	alert(`tu vuelto es ${vuelto}`);
}
else if (compra >= 3){
	alert(`¡En hora buena! puedes comprar ${compra} boletos`);
	alert(`Regalarás ${vuelto}`);
}
else{
	alert("Lo siento, no puedes comprar ningún boleto.");
}