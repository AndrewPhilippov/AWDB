// PROMISES
// One time guaranteed return of some future value
// When that value is figured out - the promise is resolved/fulfilled or rejected
// Friendly way to refactor callback call
// Libraries have implemented Promises for a while, ES2015 is a little late to the game

// A simple example
function displayAtRandomeTime() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > .5) {
                resolve('Yes!');
            } else {
                reject('No!');
            }
        }, 1000);
    })
}
// The resolved value from a Promise will allways contain a .then and .catch method which are functions to be executed when the promise is resolved or rejected
// Sinse a Promise allways returns something that has a .then (thenable) - we can change promises together and return values from one promise to another
var years = [];
$.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb')
    .then(function (movie) {
        years.push(movie.Year)
        return $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb')
    })
    .then(function (movie) {
        years.push(movie.Year);
        console.log(years);
    })
console.log('ALL DONE');