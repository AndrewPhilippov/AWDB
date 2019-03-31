// ES5

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function () {
    return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// With use of apply we can redo Student like this
function Student() {
    Person.apply(this.arguments);
}

// With ES2015 we can use Super keyword
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName) {
        // We should use Super here
        super(firstName, lastName);
    }
}

// Super can only be used if a method by the same name is implemented in the parent class

// Exersises
// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property
class Vehicle {
    constructor(make, model, year) {
        this.make = make,
            this.model = model,
            this.year = year
    }
    start() {
        return "VROOM"
    }
    toString() {
        return `The make, model, and year are ${this.make} ${this.model} ${this.year}`
    }
}
/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.numWheels = 4
    }
}
// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.numWheels = 2
    }
}