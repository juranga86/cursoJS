function mostrar()
{
	var contador = 1;

	while (contador < 11) {
	
	console.log("cont:" + contador);
	//si queremos hacer un corte en el contador. 
	if(contador == 4){
		
		break; 
		// Lo que hace esto es que cuando la variable "contador" llega a 4 => sale de la estructura del 
		//While, a través del "break" => va a contar: 1-2-3-4 y sale. 
		//Por otro lado, el "continue;" lo que hace es evaluar la condición del While una vez más, para 
		//luego salir de la estructura.
	}
	
	contador++;//sirve para incrementar el contador

	

	}

	
}//FIN DE LA FUNCIÓN