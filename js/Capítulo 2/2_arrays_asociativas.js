// Arrays Asociativas.
/*
	Son muy parecidos a los diccionarios en Python.
*/

let array = {
	"nombre":"Eduardo",
	"edad": 18,
	"casado": true,
	"ciudad": "Maracay"
};

frase = `¡Hola! <br>
		 Mi nombre es: ${array["nombre"]} <br>
		 Tengo ${array["edad"]} años de edad <br>
		 ¿Qué si estoy casado? ${array["casado"]} <br>
		 Vivo en ${array["ciudad"]}`;

document.write(`<p>${frase}</p>`)