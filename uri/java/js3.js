/*
function persona(){

return 30;

}

var x = persona(); 

console.log(x);
//en JS todos son funciones, siempre retorna un valor. Si no tiene valor ponen undefined
*/
/*
function persona(){

    this.i = 20;
    
    }
    
    var x = new persona(); //el new me devuelve un objeto. Todo lo que este adentro de x es el ambito 
                            //de la funcion no va a ser visible desde afuera
    
    console.log(x);
   */

  function persona(nombre, apellido, edad){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    //le agrego una funcion al objeto. Se llama metodo. Los objetos tienen carcteristicas y responsabilidades. 
    this.saludar = function() {
        console.log("hola, soy" + this.nombre + ", " + this.apellido);

    }
    
    }
    
    var x = new persona("juan", "perez", 23);
    var y = new persona("lucia", "garcia", 20); 
    var z = new persona("andrea", "vazquez", 31); //el new me devuelve un objeto. Todo lo que este adentro de x es el ambito 
                            //de la funcion no va a ser visible desde afuera
    
    console.log(x);
    console.log(y);
    console.log(z);

    x.saludar();
    y.saludar();


    //x.genero = "masculino"

    persona.prototype.genero = 20; 

    console.log(x);
    console.log(y);
    console.log(z);