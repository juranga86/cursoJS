function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var max = 10;
    var min = 1;
    var num = Math.floor(Math.random() * ((max+1)- min) + min);
    //                                       11  - 1    +  1
    //math.floor me devuelve el nùmero redondeado hacia abajo.
    // math.ceil()
    //math.round()
    alert(num);

}//FIN DE LA FUNCIÓN