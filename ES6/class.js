// ES5
function Student(firstName, lastName) {
    this.firstNmae = firstName,
        this.lastName = lastName
}

var ellie = new Student("Ellie", "Schoppik");

// ES6
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName
    }
}

var ellie = new Student("Ellie", "Schoppik");