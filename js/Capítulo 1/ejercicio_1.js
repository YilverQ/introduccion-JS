//Problema 1
/*
	Lista de Helados.
	1. Helado de agua. = 0.6
	2. Helado de crema. = 1
	3. Helado de heladix. = 1.6
	4. Helado de heladovich. = 1.7
	5. Helado de helardo. = 1.8
	6. Helado de confites. = 2.9
	7. Helado de pote 1/4kg. = 2.9
*/

let dineroCofla = prompt("Cofla, ¿Cuánto dinero tienes?");
let dineroRoberto = prompt("Roberto, ¿Cuánto dinero tienes?");
let dineroPedro = prompt("Pedro, ¿Cuánto dinero tienes?");

dineroCofla = parseFloat(dineroRoberto);
dineroRoberto = parseFloat(dineroRoberto);
dineroPedro = parseFloat(dineroPedro);


function comprarHelado(dinero){
	if (dinero >= 0.6 && dinero < 1){
		return `Helado de agua y tu vuelvo es ${dinero-0.6}`;
	}else if(dinero >= 1 && dinero < 1.6){
		return `Helado de crema y tu vuelto es ${dinero-1}`;
	}else if (dinero >= 1.6 && dinero < 1.7){
		return `Helado de heladix y tu vuelto es ${dinero-1.6}`;
	}else if (dinero >= 1.7 && dinero < 1.8){
		return `Helado de heladovich y tu vuelto es ${dinero-1.7}`;
	}else if (dinero >= 1.8 && dinero < 2.9){
		return `Helado de helardo y tu vuelto es ${dinero-1.8}`;
	}else if (dinero >= 2.9){
		return `Helado de confites o pote de 1/4Kg y tu vuelto es ${dinero-2.9}`;
	}else{
		return `0 helados, tu vuelto es ${dinero}`;
	}
}

alert(`Cofla, puedes comprar ${comprarHelado(dineroCofla)}`);
alert(`Roberto, puedes comprar ${comprarHelado(dineroRoberto)}`);
alert(`Pedro, puedes comprar ${comprarHelado(dineroPedro)}`);