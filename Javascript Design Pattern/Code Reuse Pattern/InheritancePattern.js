//principe d'heritage en js
function Beverage(nom, temp) {
    this.nom = nom;
    this.temp = temp;
}

Beverage.prototype.boire = function () {
    console.log("Je suis en de boire" + this.nom);
}

function Cafe(type) {
    Beverage.call(this, "cafe", "hot")
    this.type = type;
}

Cafe.prototype = Object.create(Beverage.prototype);
Cafe.prototype.sip = function () {
    console.log("Sipping quelques awesome " + this.type + "" + this.name);
};

var water = new Beverage("water", "cold");
var cafe = new Cafe("bold dark roast");