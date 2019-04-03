// ES2016
// Exponentiation operator**
// ES2015
var calculatedNumber = Math.pow(2, 4);
calculatedNumber; // 16
// In es2016 we can do like this:
var calculatedNumber = 2 ** 4;
calculatedNumber; // 16
// ES2015
var nums = [1, 2, 3, 4];
var total = 2;
for (let i = 0; i < nums.length; i++) {
    total = Math.pow(total, nums[i]);
}
// With ES6
var nums = [1, 2, 3, 4];
var total = 2;
for (let i = 0; i < nums.length; i++) {
    total **= nums[i];
}

// [].includes
// ES2015
var nums = [1, 2, 3, 4];
nums.indexOf(3) > -1; // true
nums.indexOf(44) > -1; // false

// ES2016
var nums = [1, 2, 3, 4, 5];
nums.includes(3); // true
nums.includes(44); // false


// ES2017
// padStart
// The first parameter is the total length of the new string
// The second parameter is what to pad with from the start. The default is an empty space
"awesome".padStart(10, '!'); //"!!!awesome"
// padEnd
// The first parameter is the total length of the new string
// The second parameter is what to pad with from the end. the default is empty space
"awesome".padEnd(10, '!'); // "awesome!!!"

// **********************
// ES2017 Async Functions
// **********************
// A special kind of functions that is created using word async
// The purpose of async functions is to simplify writing asynchronouse code , specifically Promises
async function first() {
    return 'We did it';
}

first(); // return Promise {<resolved>: "We did it"}
first().then(val => console.log(val));

// Await
// A reserved keyword that can only be executed inside async functions
// await pouses the executions of the async functionand is followed by a Promise. The await keyword waits for the promise to resolve, and then resumes the the async function execution and returns the resolved value
// We think of the await keyword like a puse button (simular to yield with generators);

async function getMovieDate() {
    console.log('Starting')
    var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
    console.log('All done')
    console.log(movieData);
}
getMovieDate(); // Will return
// Starting
// Promise {<pending>}
// All done
// {Title: "Titanic", Year: "1997", Rated: "PG-13", Released: "19 Dec 1997", Runtime: "194 min", …}

// No need of .then, callbacks or yield

// Object async
var movieCollector = {
    data: 'titanic',
    async getMovie() {
        var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
        console.log(response);
    }
}

// Class async
// We can also place async functions as instance method with ES2015 class syntax
class movieData {
    constructor(name) {
        this.name = name;
    }
    async getMovie() {
        var response = await $.getJSON(`https://omdbapi.com?t=${this.name}&apikey=thewdb`);
        console.log(response);
    }
}

var m = new movieData('shrek');
m.getMovie(); //{Title: "Shrek", Year: "2001", Rated: "PG", Released: "18 May 2001", Runtime: "90 min", …}

// Handling errors 
async function getUser(user) {
    try {
        var response = await $.getJSON(`https://api.github.com/users/${user}`);
        console.log(response.name);
    } catch {
        console.log('User doesn\'t exist');
    }
}

// Thinking about HTTP requests
// Sequentioal NOT parallel
async function getMovieData() {
    var responseOne = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
    var responseTwo = await $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
    console.log(responseOne);
    console.log(responseTwo);
}
getMovieData();
// In this case the second http request does not get made untill the first promise is resolved. This can really slowdown our applications
// But here is the way we can fix it!

// We have to start HTTP requests in parallel and then await their resolved promise!
// This solution is much faster
async function getMovieData() {
    var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
    var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

    var titanicData = await titanicPromise;
    var shrekData = await shrekPromise;

    console.log(titanicData);
    console.log(shrekData);
}

// await with Promise.all
async function getMovieData(first, second) {
    var moviesList = await Promise.all([
        await $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
        await $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
    ]);
    console.log(moviesList[0].Year);
    console.log(moviesList[1].Year);
}

/*
// **********
// Assignment
// **********

Async Functions Assignment
1. Write a function called hasMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. The function should return a string which displays the username who has the most followers. 

Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.
*/

async function hasMostFollowers(...usernames) {
    let baseUrl = 'https://api.github.com/users/';
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    let results = await Promise.all(urls);
    let max = results.sort((a, b) => a.followers < b.followers)[0];
    return `${max.name} has the most followers with ${max.followers}`
}

hasMostFollowers('elie', 'tigarcia', 'colt').then(function (data) {
    console.log(data)
});

// "Colt has the most followers with 424"

/*
2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.
*/

async function starWarsString(id) {
    let str = '';
    let results = await $.getJSON(`https://swapi.co/api/people/${id}/`);
    str += `${results.name} is featured in `;
    var movies = results.films[0]
    let moreResults = await $.getJSON(movies);
    str += `${moreResults.title}, directed by ${moreResults.director} `;
    let planetData = moreResults.planets[0]
    let finalResults = await $.getJSON(planetData)
    str += `and it takes place on ${finalResults.name}`;
    return str;
}

starWarsString(1).then(function (data) {
    console.log(data)
})

// "Luke Skywalker"

/*
Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in 
*/
async function starWarsString(id) {
    let str = '';
    let results = await $.getJSON(`https://swapi.co/api/people/${id}/`);
    str += `${results.name} is featured in `;
    var movies = results.films[0]
    let moreResults = await $.getJSON(movies);
    str += `${moreResults.title}, directed by ${moreResults.director} `;
    return str;
}

starWarsString(1).then(function (data) {
    console.log(data)
})

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"

/*
Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet. 
*/

starWarsString(1).then(function (data) {
    console.log(data)
})

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"


// Object rest
var instructor = {
    first: "Ellie",
    last: "Schoppik",
    job: "Instructor",
    numSiblings: 3
};
var {
    first,
    last,
    ...data
} = instructor;
first; // "Ellie"
last; // "Schoppik"
data; // {job: "Instructor", numSiblings: 3}

// Object spread
var instructor = {
    first: "Ellie",
    last: "Schoppik",
    job: "Instructor"
}
var instructor2 = {
    ...instructor,
    first: "Tim",
    last: "Garcia"
};
// great for creating objects starting from default values. and is a more concise alternative to Object.assign

var defaults = {
    job: "Instructor",
    ownsCat: true,
    ownsDog: true
};
var matt = {
    ...defaults,
    ownsCat: false
};
var colt = {
    ...defaults,
    ownsDog: false
};
// Quite common in React and Redux