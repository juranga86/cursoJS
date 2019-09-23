function mostrar()
{

	var num = prompt("ingrese un número entre 0 y 9");
	
	while (num > 9 || num < 0) {
        
        num = prompt("ingrese un número entre 0 y 9");
		console.log(num);
		

	}

	document.getElementById("Numero").value = num;
	


}//FIN DE LA FUNCIÓN