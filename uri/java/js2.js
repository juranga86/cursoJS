//guardamos las propiedades de un objeto. El objeto persona.
var persona = {

    nombre: "Juan",
    apellido: "Perez",
    edad: 20, 
    domicilio: {
        pais: "Argenitna",
        localidad: "Avellaneda",
        direccion: {
            calle: "Av Mitre",
            numero: 750,
        }
    }
}

console.log(persona.nombre);
console.log(persona.domicilio.pais);
console.log(persona['nombre']);

console.log(persona['domicilio']['direccion']['calle'])

var x = "edad";

console.log(persona[x]);

for( prop in persona) { //en prop se cargan las propiedades de una persona => a traves del prop se van leyendo las propiedades de la persona

    console.log(prop+ " : " + persona[prop]);
}
