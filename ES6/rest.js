function printArguments(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// Console output
// 1
// 2
// [3, 4, 5]

function sumArguments() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// Fancy in ES5
function sumArguments() {
    var argumentsArray = [].slice.call(arguments);
    return argumentsArray.reduce(function (accumulator, nextValue) {
        return accumulator += nextValue;
    })
}

// ES6 Solution
var sumArguments = (...args) => args.reduce((acc, next) => acc + next);