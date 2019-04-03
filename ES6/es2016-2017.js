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