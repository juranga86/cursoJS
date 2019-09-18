function mostrar() {
	
	//Genero el número RANDOM entre 1 y 10 
	var max = 10;
	var min = 1;

	var num = Math.floor(Math.random() * ((max + 1) - min) + min);
	
	console.log(num);

	if (num >= 9)
	{
		alert('EXCELENTE');
	}
	else if (num >= 4 && num < 9)
	{
		alert('APROBO');
	}
	else 
	{
		alert('Vamos, la proxima se puede');
	}
	

}//FIN DE LA FUNCIÓN