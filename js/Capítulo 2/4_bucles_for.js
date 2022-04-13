// Bucles For.

for (let i = 0; i<=3; i++){
	document.write("Numero: " + i + "<br>");
}
document.write("<br><br>")

//for in and of
let animales = ["Elefante", "Cocodrilo", "Turpial", "Guacamaya"];

//for in
for (animal in animales){
	document.write(`El animal en la posición [${animal}] es: ${animales[animal]} <br>`);
}

//for of
for (animal of animales){
	document.write(animal + "<br>");
}


//label
let buscar = prompt("Elemento a buscar: ");
document.write("<br><br>Label para for dentro de otro for <br>");
let array = [["Hola", "Mundo", "Hello", "World"], ["Yilver", "Quevedo", "Antonio", "Molinares"], [1,2,3,4]];
forDetener:
for (let i = 0; i<3; i++){
	document.write("Numero: " + i + "<br>");
	document.write(array[i] + "<br>");
	for (let j = 0; j<4; j++){
		if (array[i][j] == buscar){
			document.write(`El elemento ${buscar} se encuentra en la posición: [${i}][${j}]`);
			break forDetener;
		}
		document.write("Numero2: " + j + " -> " + array[i][j] + "<br>");
	}
	document.write("<br>");
}