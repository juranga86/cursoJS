/*
alert("afuera de la funcion saludar");

function saludar (){

    alert("dentro de la funcion saludar");
}

saludar(); //con esto llamamos a la funciòn saludar. Aca la invocamos.
*/
/*
function saludar (mensaje){ // "mensaje" es el PARAMETRO, sòlo vive dentro de la funciòn // 

    alert(mensaje);
}

saludar("Hola a todos"); // le estamos pasando como parametro a la funciòn 

saludar("Cahu gente");
*/
/*
function saludar (mensaje, otraCosa){  //le agregamos "otraCosa" y funciona igual porque JS es una lenguaje dèbilmente tipado. 

    alert(mensaje);
}

saludar(28); 

saludar("Cahu gente"); */
/*
(function saludar (mensaje, otraCosa){  //le agregamos "otraCosa" y funciona igual porque JS es una lenguaje dèbilmente tipado. 

    alert(mensaje);
}) () // esto es una funciòn autoinvocada. La encerramos entre parentesis
*/
/*
let x = function saludar (mensaje, otraCosa){ 

    alert(mensaje);
}

let x = saludar;
saludar("chau");
x("hola");
*/



////////////////////////////////////////////////////////////////////////////////////
/*
let x = "Escritorio";
let cadena = "Ferrocarril"

console.log( x.length ); 
// length de un string es la cantidad de caracteres 

console.log( '      algo    '.trim()); //el trim me saca los espacios. 

console.log( 'algo'.toUpperCase ()); //toUpperCase sirve para agrandar la palabra ALGO. 

console.log( cadena.indexOf('i')); // donde esta la letra i? en el caracter 9

console.log( cadena.indexOf('r', 4)); // que hay en la posiciòn 4 del caracter

console.log( cadena.includes('e')); // Me dice si este caracter existe o no en la variable (true o Flase)

console.log( cadena.startsWith('F')); //me dice si comienza con "F" (true o False)
*/
///////////////////////////////////////////////////////////////////////////////////////
/*
let x = 5;

let y = x;

y = 20; 

console.log(x); //Que numero pasa? en este caso pasa igual a 5. pero la y vale 20 
*/
////////////////////////////////////////////////////////////////////////////////////

//caso del Array => es una variable compuesta. Es un objeto
/*
let x = [12, 5, 6, 8];

let y = x;

y.push(300); 

console.log(x); // x e y estan apuntando al mismo vector. 

////////////

let cad = 'Juan' ; 
let cadMay = cad.toUpperCase();

console.log(cad);
*/

//////////////////////////////
/*
function modificarX ( x) {

    x = x * 2;
    console.log("aca adentro x vale " + x); // aca adentro la funciòn vale 40.
}

let x = 20; //aca guardo 20

console.log("antes de la funcion x vale " + x);

modificarX( x); // se lo paso por VALOR => 20

console.log("despues de la funciòn x vale" + x); // por ultimo la x va a seguir valiendo 20 porque se la pase por valor a la funciòn, no la modifico. 

// PASAR EL DATO POR REFERENCIA, le paso el ORIGINAL (si la funciòn modifica el dato => se impacta en el espacio de memoria de origen. Porque sabe exactamente donde esta) 
// <> PASAR EL DATO POR VALOR (en este caso es solo una copia => si se modifica el origen del dato)

*/
////////////////////////////////////////////////////////////////////////////////////////////////
/*

function modificarX ( x) {

    x.push("Andrea"); // le agrego al vector Andrea
    console.log("aca adentro x vale " + x); 
}

let x = ["Juan", "Pedro, Luis"]; //aca guardo en x la DIreccion de memoria 

console.log("antes de la funcion x vale " + x);

modificarX( x); //aca cuando lo paso se lo paso por REFERENCIA porque x guarda la direccion de memoria. Ya se le agrego el ANDREA.

console.log("despues de la funciòn x vale" + x); // aca voy a leer el dato MODIFICADO, ya no veo el original. 
*/
////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function modificarPerro (unPerro) {



    
    console.log("aca adentro x vale " + unPerro); 
}

let perro = { // si pongo algo entre llaves, digo que es un OBJETO 
    nombre: "Bobby",
    edad: 3,
    patas:4, 
    raza: "caniche",
    ladrar: ()=>{
        console.log("guau guau");
    }
    
};

console.log(perro.edad);

console.log("antes de la funcion el perro se llama " + perro.edad);

modificarPerro( unPerro); //aca cuando lo paso se lo paso por REFERENCIA porque x guarda la direccion de memoria. Ya se le agrego el ANDREA.

console.log("despues de la funciòn x vale" + x); 
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
window.addEventListener('load', inicializarManejadores ); 
//Parametro 1 => una vez que carga la pagina. // JS es asincronico, va haciendo varias varias cosas a la vez. No hace una peticion y espera respuesta. De lo contrario serìa Sincronico. 
//parametro 2 => llamo a la funciòn. Luego de que la pagina cargò 


function inicializarManejadores() {

const boton = document.getElementById('btnCalcular');

boton.addEventListener('click', calcularSuperfice);


}

function calcularSuperfice(){

    let radio = document.getElementById('txtRadio').value;
    let superficie = Math.PI * radio * radio ;
    document.getElementById('txtSuperficie').value = superficie.toFixed(2) //toFixed para que solo nos muestre 2 decimales. 

}

function saludar(){
    alert ("Hola");

}

let unaFuncion = saludar;

unaFuncion();
*/
/////////////////////////////////////////////////////////////////////////////////////

//callback ver como funciona dentro de una funcion
//return, ver como funciona dentro de una funcion. 

function calcular(operador1, operador2, callback) {

return callback (operador1, operador2);

}

function sumar (a,b) {

    return a + b;
}

function restar (a, b) {

    return a - b;
}

