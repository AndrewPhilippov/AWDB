// ********************
// Object destructuring
// ********************

// ES5
var instructor = {
    firstName: "Ellie",
    lastName: "Schoppik"
}

var firstName = instructor.firstName;
var lastName = instructor.lastName;

firstName; // Ellie
lastName; // Schoppik

// ES6 solution to extract the values to variables
var instructor = {
    firstName: "Ellie",
    lastName: "Schoppik"
}

var {
    firstName,
    lastName
} = instructor;

firstName; // Ellie
lastName; // Schoppik

// In ES2015 we can also call variables with different names.
var {
    firstName: first,
    lastName: last
} = instructor;
first; // Ellie
last; // Schoppik

// ES5 default values with an object
function createInstructor(options) {
    var options = options || {}
    var name = options.name || {
        first: "Matt",
        last: "Lane"
    }
    var isHilarious = options.isHilarious || false;
    return [name.first, name.last, isHilarious];
}

// With ES6 refactoring
function createInstructor({
    name = {
        first: "Matt",
        last: "Lane"
    },
    isHilarious = false
} = {}) {
    return [name.first, name.last, isHilarious];
}
// Here we pass in a destructured object as a parameter
// We assign as a default value an empty object so ES2015 knows we are destructuring
// If nothing is passed in, we default to the destructured object as a parameter

createInstructor(); // ["Matt", "Lane", false]
createInstructor({
    isHilarious: true
}); // ["Matt", "Lane", true]
createInstructor({
    name: {
        first: "Andrew",
        last: "Philippov"
    },
    isHilarious: true
}); // ["Andrew", "Philippov", true]


// Object fields as parameters ES5
function displayInfo(obj) {
    return [obj.name, obj.favColor];
}

var instructor = {
    name: "Ellie",
    favColor: "Purple"
}

displayInfo(instructor); // ["Ellie", "Purple"]

// Object fields as parameters ES2015
function displayInfo({
    name,
    favColor
}) {
    return [name, favColor];
}

var instructor = {
    name: "Ellie",
    favColor: "Purple"
};
displayInfo(instructor); // ["Ellie", "Purple"]

// *******************
// Array destructuring
// *******************

// ES5 VS ES2015
// ***
// ES5
var arr = [1, 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[2];

a; // 1
b; // 2
c; // 3

// ***
// ES6
var arr = [1, 2, 3];
var [a, b, c] = arr;

a; // 1
b; // 2
c; // 3

// ES5
function returnNumbers(a, b) {
    return [a, b];
}

var first = returnNumbers(5, 10)[0];
var second = returnNumbers(5, 10)[1];
first; // 5
second; // 10

// ES6
function returnNumbers(a, b) {
    return [a, b];
}

[first, second] = returnNumbers(5, 10);
first; // 5
second; // 10

// ES5
function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
    return [a, b];
}
swap(10, 5); // [5, 10]

// ES6
function swap(a, b) {
    return [a, b] = [b, a];
}
swap(10, 5); // [5, 10]

/* 
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

function displayStudentInfo(obj) {

}

/* 
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/

// you will have to pass in the correct parameters for this function!
function printFullName() {

}

/* 
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')
*/

// you will have to pass in the correct parameters for this function!
function createStudent() {

}

/* 
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

Examples:
    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
    reverseArray([1,2]) // [2,1]
    reverseArray([]) // []
    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/

function reverseArray(arr) {

}