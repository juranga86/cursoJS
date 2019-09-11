function mostrar()
{
//tomo la edad  

//solo hago algo cuando la edad es 15, => uso IF

    var edad; 

    edad = document.getElementById('edad').value;
    
    console.log(typeof edad); // sireve para mostrar en la consola  el tipo de dato, en este caso string
    
    if(edad == 15){
    alert("Niña Bonita");
    }
}//FIN DE LA FUNCIÓN