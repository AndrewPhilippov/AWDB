function helloInstructor() {
  return ellie;
  var ellie = "Ellie";
}

helloInstructor(); // undefined

function helloInstructor() {
  return ellie;
  let ellie = "Ellie";
}

helloInstructor(); // ReferenceError

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
//   By the time the setTimeout runs, the for loop has already running till the end

// One of solutions is to run another function inside of the loop and invoke it immidiately

for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i);
}

// The simpliest solution is to use let instead of var
// let allows us to declare variables that are limited in scope to the block in which it is used and a new variable
// is created for each iteration
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
