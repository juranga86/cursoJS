function mostrar()
{
//tomo la edad  
        
    var edad; 
    
    edad = document.getElementById('edad').value;

    console.log(typeof edad); // sireve para mostrar en la consola  el tipo de dato, en este caso string

    if(edad >= 18){
    alert("Es mayor de edad");
    } else 
    {
    alert("Es menor de edad");
    }

}//FIN DE LA FUNCIÓN