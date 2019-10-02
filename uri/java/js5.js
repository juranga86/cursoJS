
function Avenger (nombre, nombreReal, poder) {

    this.nombre = nombre;
    this.nombreReal = nombreReal;
    this.poder  = poder;

    this.status = function(){

        if (this.salud > 0) {

        console.log(this.nombre + " Salud: " + this.salud + " Energia " + this.poder)
        }
        else{

                this.salud = 0;
                console.log("estoy muerto");
        }
    }

    this.curar = function(amigo){

        if (this.poder > 40){
            amigo.salud += 20;
            this.poder -= 40;
        }
            

        }
    

    this.atacar = function(malo){

        malo.salud -= 50;
    }
}

var Ironman = new Avenger ("Iroman", "Tony", 1000);
var Capitan = new Avenger ("Capitan america", "Stive", 500);

var Thanos = new Avenger ("Thanos", "Thanos", 1500);

Ironman.status();
Capitan.status();
Thanos.status();

Ironman.atacar(Thanos);

Thanos.status();

Capitan.curar(Thanos);