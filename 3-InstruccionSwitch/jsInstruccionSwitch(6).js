function mostrar() {

    var laHora = document.getElementById('hora').value;


    switch (laHora) {
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            alert("Es de mañana");
            breack;
        case "20":
        case "21":
        case "22":
        case "23":
        case "24":
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            alert("Es de noche");
            breack;
        default:
            alert("Es de tarde");   
    }

}//FIN DE LA FUNCIÓN