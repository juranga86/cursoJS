function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes) {
    case "Febrero":
        alert("Tiene 29 dias");
        breack;
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("Tiene 31 días");
        break;
    default:
        alert("Tiene 30 días");

}
	
}//FIN DE LA FUNCIÓN