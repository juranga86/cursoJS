/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var sum;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    sum = num1 + num2; 

    alert("La suma es: " + sum);
}

function restar()
{
    var num1;
    var num2;
    var res;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    res = num1 - num2; 

    alert("La resta es: " + res);
}

function multiplicar()
{ 
    var num1;
    var num2;
    var mul;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    mul = num1 * num2; 

    alert("La multiplicación es: " + mul);	
}

function dividir()
{
    var num1;
    var num2;
    var div;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    div = num1 / num2; 

    alert("La división es: " + div);	
}

