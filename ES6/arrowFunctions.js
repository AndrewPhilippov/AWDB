function doubleAndFilter(arr) {
    return arr.map(function (value) {
            return value * 2;
        })
        .filter(function (value) {
            return value % 3 === 0;
        })
}

doubleAndFilter([5, 10, 15, 20]); // [30]

// With arrow function
var doubleAndFilter = arr => arr.map(val => val * 2).filter(num => nam % 3 === 3);
// Results
doubleAndFilter([5, 10, 15, 20]); // [30]

// Arrow functions are not exactly the same as regular functions
// Arrow functions do not get their own 'this' keyword
var instructor = {
    firstName: "Ellie",
    sayHi: function () {
        setTimeout(function () {
            console.log('Hello ' + this.firstName)
        }, 1000);
    }
}

instructor.sayHi(); // "Hello undefined"


var instructor = {
    firstName: "Ellie",
    sayHi: function () {
        setTimeout(function () {
            console.log('Hello ' + this.firstName)
        }.bind(this), 1000);
    }
}

instructor.sayHi() //Hello Ellie
// We use bind here instead of call or apply because we do not need immediate invoke this function

var instructor = {
    firstName: "Ellie",
    sayHi: function () {
        setTimeout(() =>
            console.log('Hello ' + this.firstName), 1000);
    }
}

instructor.sayHi() //Hello Ellie

// This works fine because the word this is INSIDE of the setTimeout and is its closing context, which is the instructor object.
// Since the arrow function does not get it's own keyword this, we can stop worry about explicitly setting it's value
// We can just use arrow functions.

// If we use an arrow function, the sayHi function will not have it's own keyword this - and the keyword this will not refer to the instructor object anymore!

// ********************************************************
// ARROW FUNCTIONS DO NOT GET THEIR OWN WORD `arguments`!!!
// ********************************************************

var add = (a, b) => {
    return arguments;
}

add(a, b); // ReferenceError: arguments is not defined

function outer() {
    return innerFunction = () => {
        return arguments;
    }
}

outer(1)(2); // Only prints out [1]

/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/
var tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);



/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/
var doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);


/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

var mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5)
    .reduce((acc, next) => {
        acc[next] = next.length
        return acc
    }, {});


/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

let createStudentObj = (firstName, lastName) => ({
    firstName: firstName
}, {
    lastName: lastName
});

/* 5 - Given the following code: 


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
    
    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

*/

var instructor = {
    firstName: "Colt",
    sayHi: function () {
        setTimeout(() =>
            console.log('Hello ' + this.firstName), 1000)
    }
}