// Bucles While y Do_While.


//while
let numero = 0;

while (numero <= 10){
	document.write(numero + "<br>")
	numero ++;
}


//do while
let num = 10;
do{
	document.write(num*2);
	num++;
	document.write(num*2);
}while(num < 5);



//break
numero = 10;
document.write("<br><br>")
document.write("Ejemplo de un break en el codigo while <br>");
while (numero > 0){
	numero--;
	document.write(numero + " -> ");
	if (numero%5 == 0){
		document.write("El numero " + numero + " es multiplo de 5, Fin de la ejecución." + "<br>");
		break;
	}
	document.write("El numero no es multiplo de 5, continua la ejecución" + "<br>");
}


//continue
numero = 0;
document.write("<br><br>");
document.write("Ejemplo de un continue en el codigo while <br>");
while (numero!=10){
	numero ++;
	if (numero%2 == 0){
		continue;
	}
	document.write("El numero " + numero + " no es multiplo de 2 <br>");
}