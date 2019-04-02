function* pauseAndReturnValues(num) {
    for (let i = 0; i < num; i++) {
        yield i;
    }
}

var gen = pauseAndReturnValues(5);

function* printValues() {
    yield "first";
    yield "second";
    yield "third";
}

var g = printValues();
g.next().value; // first
g.next().value; // second
g.next().value; // third

// Iterating over a generator
// Since generators implement Symbol.iterator property we can use a for...of loop
function* pauseAndReturnValues(num) {
    for (let i = 0; i < num; i++) {
        yield i;
    }
}
for (val of pauseAndReturnValues(5)) {
    console.log(val);
}

function* getMovieData(movieName) {
    console.log('Starting');
    yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
}
var movieGetter = getMovieData('titanic');
movieGetter.next().value.then(val => console.log(val));