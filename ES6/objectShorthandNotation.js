var firstName = "Andrew";
var lastName = "Philippov";

var student = {
    firstName: firstName,
    lastName: lastName
}

// For ES2015 we don't have to repeat that declaration
// So the syntax will be like below

var student = {
    firstName,
    lastName
}

var instructor = {
    sayHi: function () {
        return "Hello!";
    }
}
// In ES2015 we should not use arrow function! But! we still have a shortcut to
// declare an object method
var instructor = {
    sayHi() {
        return "Hello!";
    }
}

// Computed property names
var firstName = "Ellie";
var instructor = {};
instructor[firstName] = "That's me!";

instructor.Ellie // That's me!

// In ES2015 we do not have to create object first
var instructor = "Ellie";
var instructor = {
    [firstName]: "That's me!"
}

instructor.Ellie // That's me!