var johnDoe = {
    firstName: "JOhn",
    lastName: "Doe",
    sayName: function () {
        return "My Name is " + this.firstName + "" + this.lastName;
    }
}

//janeDoe is johndoe prototype
var janeDoe = Object.create(johnDoe, {
    firsName: { value: "Jane" },
    greet: {
        value: function (person) {
            return "hello," + person.firstName;
        }
    }
});

//jimSmith is the JaneDoe Prototype
var jimSmith = Object.create(janeDoe, {
    firstName: {value:"Jim"},
    lastName : {value:"Smith"}
});

alert(johnDoe.sayName());
alert(janeDoe.sayName()+ " " +janeDoe.greet(johnDoe));

console.log(janeDoe.__proto__ === johnDoe);
console.log(jimSmith .__proto__ === janeDoe);