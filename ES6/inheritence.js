function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello() {
    return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;