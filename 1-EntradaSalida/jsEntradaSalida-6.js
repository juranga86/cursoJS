/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    var num1;
    var num2;
    var suma;

    num1 = document.getElementById("numeroUno").value;//quedo el numero cargado como texto. Con comillas Ej: "10"
    num2 = document.getElementById("numeroDos").value;

    num1 = parseInt(num1); // convierte al numero como texto y lo devuelve como número. Sin comillas 
    num2 = parseInt(num2);

    suma = num1 + num2;

    alert("La suma es "+ suma);
   
}

/* 
tambien se puede hacer:

    var num1;
    var num2;
    var suma;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    
    suma = num1 + num2;

    alert("La suma es "+ suma); 
    
*/