//Bucles

//While
let iteraciones = 0;
while(iteraciones < 12){
	console.log(iteraciones);
	iteraciones++;
}
console.log("Fin del bucle while");


//Vectores.
let vector = ["Juan", "David", "Goliat"];
console.log(vector.length);
console.log("Fin del vector");


//for
for (var i = 0; i < vector.length; i++) {
	console.log(vector[i]);
}

vector = [1,2,3];
for (var i = vector.length-1; i>=0; i--){
	console.log(vector[i]);
}