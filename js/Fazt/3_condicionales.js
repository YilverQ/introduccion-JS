//Condicionales
let resultado = "Yilver Quevedo";

//If
if (resultado == "Yilver Quevedo"){
	console.log("Nombre correcto.")
}
console.log("Existe dos formas de comparar: == o ===");


//if else
resultado = "Hola"
if (resultado == "Mundo") {
	console.log("El resultado es igual a Mundo");
}else{
	console.log("Era casi obvio que la respuesta sería false");
}

//if else if else
resultado = "Yilver Quevedo";
if (resultado == "Hola") {
	console.log("El resultado es Hola");
} else if (resultado == "Mundo"){
	console.log("El resultado es Mundo");
} else{
	console.log("El resultado es: " + resultado)
}


//switch
let equipo = "Juventus";
switch(equipo){
	case "Madrid":
		console.log("El resultado es Madrid");
		break;
	case "Barcelona":
		console.log("El resultado es Barcelona");
		break;
	case "Juventus":
		console.log("El resultado es Juventus");
		break;
	default: 
		console.log("El equipo no está registrado");
}