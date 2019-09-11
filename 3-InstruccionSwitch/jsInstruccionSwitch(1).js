function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value; 

switch (mes) {
    case "Enero":
        alert("verano");
        breack;
    case "Marzo":
        alert("a Clases");
        breack;
    case "Julio":
        alert("se vienen las vacaciones");
        breack;
    case "Diciembre":
        alert("FELICES FIESTAS!!!");
        breack;
    default: //agregamos para ver como funciona.
        alert("defoult");

}


}//FIN DE LA FUNCIÓN