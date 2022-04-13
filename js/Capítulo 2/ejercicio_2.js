/*Ejercicio 5*/
/*
	Crear un mini-sistema para registrar los alumnos que están presentes (p) y ausentes (a).
	Pasado 30 días mostrar su situación. Número total de ausentes y numero total de presentes
	Máximo de 10% de ausencias. Si se tiene más aclarar que está reprobado.
*/
let alumnos = [["Juan", 0], ["David", 0], ["Hector", 0]];
let dias = 3; //Solo tienes que poner 30;


const pasarAsistencia = () => {
	let asistencia;
	for (let i = 0; i < dias; i++) {
		document.write(`<h3>Día: </h3><h4>${i + 1}</h4>`)
		for (lugarAlumno in alumnos){
			asistencia = prompt(`Alumno ${alumnos[lugarAlumno][0]}`);
			if (asistencia == "a" || asistencia == "A"){
				alumnos[lugarAlumno][1] += 1;
			}
		}
	}
}


const resultadoAnual = () => {
	let texto;
	let porcentaje;
	for (alumno of alumnos){
		texto = "";
		texto += `<p>Alumno: <b>${alumno[0]}</b></p>
				  <p>Presente: <b>${dias - alumno[1]}</b>
				  <p>Ausentes: <b>${alumno[1]}</b></p>`
		porcentaje = (alumno[1] * 100) / dias
		console.log(porcentaje);
		if (porcentaje >= 10){
			texto += `<p style="color:red;">Reprobado</p>`
		}
		document.write("<br>");
		document.write(texto);
	}
}


pasarAsistencia();
document.write("<br><br><br>");
resultadoAnual();