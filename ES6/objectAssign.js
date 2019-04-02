// Object.assign 
// Create copies of objects without the same reference

// ES5
var o = {
    name: "Ellie"
};
var o2 = o;
o2.name = "Tim";
o.name; // "Tim";

// Fixing up with Object.assign (notice the first parameter)
var o = {
    name: "Ellie"
};
var o2 = Object.assign({}, o);
// o2.name = "Tim"
// o.name; "Ellie"

// Not a deep clone
// ES2015
var o = {
    instructors: ["Ellie", "Tim"]
};
var o2 = Object.assign({}, o);

o2.instructors.push("Colt");
o.instructors; // ["Ellie", "Tim", "Colt"]
// If we have objects inside of objects, we are copying - those still have a reference

// Array.from
// Convert other data types into array
// ES5
var divs = document.getElementsByTagName("div"); // returns an array-like-object
divs.reduce; // undefined, since it is not an actual array
// In ES5 it is done via call method
var converted = [].slice.call(divs); // convert the array-like-object into an array
converted.reduce; // function reduce() { ... }

// Using array.from
// ES2015

var divs = document.getElementsByTagName("div");
var converted = Array.from(divs);

// It also converts different types of objects into arrays
var firstSet = new Set([1, 2, 3, 4, 3, 2, 1]); // [1,2,3,4]
var arrayFromSet = Array.from(firstSet); // [1,2,3,4]