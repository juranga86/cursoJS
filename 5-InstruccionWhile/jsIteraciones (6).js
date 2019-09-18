function mostrar()
{
/*
	var contador=0;
	var acumulador=0;
	var numero;
/*	
	for (var i=0; i<5; i++) {
	
		numero = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + numero; //puedo usar => acumulador++ o acumulador+=

	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5; //no lo guardo en una variable. 
*/

	while(contador < 5) {
	numero = parseInt(prompt("Ingrese un numero: "));
	
	acumulador = acumulador + numero;
	
	contador = contador + 1;
// en realidad las dos son acumuladores, pero uno acumula en valores variables, la otra acumula a valores VARIABLES
// al que acumula valores CONSTANTES decimos que es CONTADOR 
// CONTADO => acumula valores contantes. 
// ACUMULADOR => acumulo valores variables. 	

} 



/*
// ACLARACIONES DEL WHILE 

var seguir = 's';

// cuando voy a leer la variable, sí debería traer su valor, si voy a escribirla no me quiero saber su valor 

while (seguir == 's') { //aca estoy leyendo la variable. Entonces acá debería estar inicializado 'seguir'
	alert("hola como le va?");
	seguir =  prompt("quiere que lo salude de nuevo?"); 
}
*/

/*
var numero = 0;
var acumulador;

while (acumulador<= 1000) {

	numweo = parseInt(prompt("Ingresa numero"));

	acumulador = acumulador + 1; 

}

alert(numero);
*/
*/

var contador=0;
var acumulador=0;
var numero;
	
for (var i=0; i<5; i++) {

	numero = parseInt(prompt("Ingrese un numero"));

	acumulador = acumulador + numero; //puedo usar => acumulador++ o acumulador+=

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; //no lo guardo en una variable. 

}//FIN DE LA FUNCIÓN