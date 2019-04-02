// Promise.all

// Accepts an array of promises and resolves all of them or rejects once a single one of the promisses has been first rejected (fail fast)
// If all of the passed-in promisses fullfill, Promise.all is fullfilld with an array of the values from the passed in promises? in the same order as the promises passed in.
// You may have seen something like this when $.when in jQuery or Q
// The promisses don't resolve sequentially, but Promise.all waits for them

function getMovie(title) {
    $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`)
}

var titanicPromise = getMovie('titanic');
var shreckPromise = getMovie('shrek');
var breaveHeartPromise = getMovie('braveheart');

Promise.all([titanicPromise, shreckPromise, breaveHeartPromise])
    .then(function (movies) {
        return movies.forEach(function (value) {
            console.log(value);
        })
    })
    .catch(function (err) {
        console.log(err);
    })

/*************************
ES2015 Promises Assignment
**************************/
/*
1. Write a function called getMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. The function should return a promise, which when resolved, returns a string which displays the username who has the most followers. 

Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.
*/
// getMostFollowers('elie', 'tigarcia', 'colt').then(function (data) {
//     console.log(data)
// });

// "Colt has the most followers with 424"
function getMostFollowers(...usernames) {
    let baseUrl = 'https://api.github.com/users/';
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    return Promise.all(urls).then(function (data) {
        let max = data.sort((a, b) => a.followers < b.followers)[0];
        return `${max.name} has the most followers with ${max.followers}`
    })
}

/*
2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.
*/
/*
starWarsString(1).then(function (data) {
    console.log(data)
})
*/

// "Luke Skywalker"
function starWarsString(id) {
    var str = '';
    return $.getJSON(`http://swapi.co/api/people/${id}/`)
        .then(function (data) {
            str += `${data.name} is featured in `;
            var filmData = data.films[0].replace('http', 'https');
            return $.getJSON(filmData);
        })
        .then(function (res) {
            str += `${res.title}, directed by ${res.director} `;
            let planetData = res.palnets[0].replace('http', 'https');
            return $.getJSON(planetData);
        })
        .then(function (res) {
            str += `and it takes place on ${res.name}`;
            return str;
        }).then(function (finalString) {
            return finalString;
        })
}
/*
Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in 
*/
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