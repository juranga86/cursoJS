function mostrar()
{
//es igual al ejercicio anterior, sòlo cambia la condiciòn del IF.

        
        var edad; 
    
        edad = document.getElementById('edad').value;
        
        console.log(typeof edad); // sireve para mostrar en la consola  el tipo de dato, en este caso string
        
        if(edad >= 18){
        alert("Es mayor de edad");
        }
    


}