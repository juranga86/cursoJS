function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var max = 10;
    var min = 1;
    /*
    Para generar un número entre un número que deseemos a otro, 
    debemos usar Math.random() */
    var num = Math.floor(Math.random() * ((max+1)- min) + min);
                                      //  10 + 1  - 1    +  1 
                                      //    11    - 1    +  1
                                      //    10 + 1 
                                      // 11
    //math.floor me devuelve el nùmero redondeado hacia abajo.
    // math.ceil() redondeo hacia arriba
    /*math.round() redondeo. Si la proción de la fracción es igual o menor a 0.5 => redondea hacia abajo, 
                             si es mayor a 0.5 derondea hacia arriba.*/  
    alert(num);

}//FIN DE LA FUNCIÓN