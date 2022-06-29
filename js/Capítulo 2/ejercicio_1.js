/*Ejercicio 4*/
/*
	Dejar pasar solo a los mayores de edad.
	La primera persona que entre después de las 2:00AM no paga.
*/

let edad = prompt("Ingresa tu edad: ");
let checkHora = false;
let hora;

if (edad >= 18) {
	hora = parseInt(prompt("Ingresa La Hora"));
	alert("¡Felicidades, puedes pasar!");
	if (!checkHora && hora >= 2 && hora <= 7){
		checkHora = true;
		alert("Eres una persona afortunada, no pagaras entrada");
	}else{
		alert("Pero debes pagar una entrada");
	}
}else{
	alert("Lo siento, no puedes pasar");
}