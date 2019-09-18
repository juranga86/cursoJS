function mostrar()
{
//tomo la edad  

var edad; 
    
edad = parseInt(document.getElementById('edad').value);

console.log(typeof edad); 
/*
if(edad >= 18)
{
alert("Es mayor de edad");
} 
else 
{
    if(edad < 13)
    {
    alert("Es un niño");
    } 
    else
    {
    alert("Es adolescente");
    } 
    
}
*/
// o podemos hacer 

if(edad <13) 
{
    alert("Es un niño");
}
else  if(edad < 18)
{
    alert("Es adolescente");
}

else 
{
    alert("Es mayor de edad");
}


}//FIN DE LA FUNCIÓN