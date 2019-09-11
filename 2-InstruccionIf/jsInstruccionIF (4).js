function mostrar()
{
//tomo la edad  

var edad; 
    
edad = document.getElementById('edad').value;

console.log(typeof edad); // sireve para mostrar en la consola  el tipo de dato, en este caso string
/*
if(edad >= 13 && edad <= 17){
alert("Es adolescente");
} 
*/


// otra forma de hacer lo mismo es por la negativa, usando ! 

if(!(edad < 13 || edad > 17)){
alert("Es adolescente");
} 

}//FIN DE LA FUNCIÓN