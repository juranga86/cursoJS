function mostrar()
{
 
var mes = document.getElementById('mes').value; 

switch (mes) {
    case "Enero":
        alert("que comiences bien el año!!!");
        breack; //breack me saca de la estructura del switch
    case "Marzo":
        alert("a clases!!!");
        breack;
    case "Julio":
        alert("se vienen las vacaciones!!!");
        breack;
    case "Diciembre":
        alert("Felices fiestas! !!");
        breack;
    default: //agregamos para ver como funciona "default".
        alert("defoult"); // el 'default' no lleva 'breack'

}


}//FIN DE LA FUNCIÓN