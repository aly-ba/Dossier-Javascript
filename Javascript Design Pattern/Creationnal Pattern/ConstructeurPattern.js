//constructeur Pattern
function Person(firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.sayName = function () {
        return "My Name is " + this.firstName + " " + this.lastName;
    }
}

//instance of Person
var Galsen= new Person("Yespai", "CoolPapi") ;
var Sene = new Person("Djolof"," Man");

var EstPerson = Galsen instanceof Person; // retourne vrai
var EstMeme = Galsen.sayName === janeDoe.sayName; //false bien sur