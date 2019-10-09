let listaPersonas = []; // declaramos un array o vector! el array es un objeto. 
// guardamos en memoria las partes del arreglo. para guardar los datos de una persona. 


//funcion que nos permitirà grabar todas las personas que querramos. 
function Persona (nombre,apellido, edad, genero, maneja, nada, bicicleta, pais) {

    this.nombre = nombre;
    this.apellido = apeliido;
    this.edad = edad;
    this.genero = genero;
    this.nada = nada;
    this.maneja = maneja;
    this.bicicleta = bicicleta;
    this.pais = pais;

    //Tambien pude tener funciones =>
    Persona.ptototype.saludar = function () {

        console.log("hola, soy " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años ")
    //usamos "this" porque està dentro del ambito de la funcion. 
    }
    
    
}



//let pe = new Persona("Juan", "Perez", "33", "Masculino", "True", "False", "False", "Argentina")


window.addEventListener('load',  ()=> {

    //let formulario = document.getElementsByTagName('form')[0]; //devuelve un vector de un documento. 
    // podemos hacer lo mismo haciendo lo siguiente: 
    let formulario = document.forms [0];
    formulario.style.width = "800px";
    formulario.stile.backgraundColor = R; 


})

function manejarSubmit(e) {

    e.preventDefault();

    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value; 
    let edad =  document.getElementById('txtedad').value;
    let genero; 
    if(document.getElementById('rdoMasculino').checked == true) {
        genero = "masculino";
    } else (
        genero = "femenino"

    )

    let nada = document.getElementById('chkNadaa').checked; 
    let maneja = document.getElementById('chkManeja').checked;
    let bicicleta = document.getElementById('chkBici').checked;
    let pais = document.getElementById('selPais').value; 

    var nuevaPersona = new Persona(nombre, apellido, edad, genero, nada, maneja, bicicleta, pais);
    
    listaPersonas.push(nuevaPersona); 
    
    console.log(lista.Persona);

    document.getElementById('txtNombre2').value = nuevaPersona.nombre; // para cargar la info en el segundo formulario. 
    document.getElementById('txtApellido2').value = nuevaPersona.apellido;
    document.getElementById('txtEdad2').value = nuevaPersona.edad;
    if (nuevaPersona == "masculino"){
    document.getElementById ('chkMasculino2').checked = true;
    } else {
        document.getElementById('rdoFemenino2').checked = true;
    }
        document.getElementById('chkNada2').checked = nuevaPersona.nada;
        document.getElementById('chkBici2').checked = nuevaPersona.bicicleta;
        document.getElementById('chkManeja2').checked = nuevaPersona.maneja;
        document.getElementById('selPais2').value = nuevaPersona.pais;

    // 1)guardamos la info del formulario 1 en el objeto
    //2) del objeto lo mostramos en el formulario 2 
    // 3) lo inyectamos en el vector
    limpiarFormulario();
}

function cargarFormulario( persona ) {

    document.getElementById('txtNombre2').value = persona.nombre; 
    document.getElementById('txtApellido2').value = persona.apellido;
    document.getElementById('txtEdad2').value = persona.edad;
    if (nuevaPersona == "masculino"){
    document.getElementById ('chkMasculino2').checked = true;
    } else {
        document.getElementById('rdoFemenino2').checked = true;
    }
        document.getElementById('chkNada2').checked = persona.nada;
        document.getElementById('chkBici2').checked = persona.bicicleta;
        document.getElementById('chkManeja2').checked = persona.maneja;
        document.getElementById('selPais2').value = persona.pais;
}




function limpiarFormulario () {

    document.getElementById('txtNombre').value = ""; // para cargar la info en el segundo formulario. 
    document.getElementById('txtApellido').value = "";
    document.getElementById('txtEdad').value = "";
    
    document.getElementById ('chkMasculino').checked = true;
    
        document.getElementById('rdoFemenino').checked = true;
    
        document.getElementById('chkNada').checked = false;
        document.getElementById('chkBici').checked = false;
        document.getElementById('chkManeja').checked = false;
        document.getElementById('selPais').value = "ar";

}