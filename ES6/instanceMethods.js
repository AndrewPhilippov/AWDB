// ES5 Instance Methods
function Student(firstName, lastName) {
    this.firstName = firstName,
        this.lastName = lastName
}

Student.prototype.sayHello = function () {
    return 'Hello ' + this.firstName + ' ' + this.lastName;
}

// ES2015
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName
    }
    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

// ES5 Class Methods
function Student(firstName, lastName) {
    this.firstName = firstName,
        this.lastName = lastName
}
Student.prototype.sayHello = function () {
    return 'Hello ' + this.firstName + ' ' + this.lastName;
}
Student.isStudent = function (obj) {
    return obj.constructor === Student;
}
// Class methods are placed directly on the constructor function

// ES2015
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName
    }
    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    static isStudent(obj) {
        return obj.constructor === Student;
    }
}

// Exersises
// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340
*/
class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.favoriteColor = favoriteColor,
            this.favoriteNumber = favoriteNumber
    }
    multiplyFavoriteNumber(num) {
        return num * this.favoriteNumber;
    }
}