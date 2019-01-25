// ****************************
// ***** SAMPLE OF PROMISSES
// ****************************

// var p1 = new Promise(function(resolve, reject){
//   var num = Math.random();
//   if(num > 0.5){
//     resolve(num);
//   } else {
//     reject(num);
//   }
// });

// p1.then(function(result){
//   console.log('Success: ', result);
// }).catch(function(error){
//   console.log('Error: ', error);
// });

// ****************************
// ***** SAMPLE OF PROMISSES
// ****************************

// var promise = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     var randomInt = Math.floor(Math.random()*10);
//     resolve(randomInt);
//   }, 3000);
// });

// promise.then(function(data){
//   console.log('Random int passed to resolve: ', data);
// });

// ****************************
// ***** NESTED PROMISSES
// ****************************

var promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    randomInt = Math.floor(Math.random()*10);
    resolve(randomInt);
  }, 3000);
});

promise.then(function(data){
  console.log('Random int passed to resolve: ', data);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(Math.floor(Math.random()*10));
    }, 1000);
  }).then(function(data){
    console.log('Second random int passed to resolve: ', data)
  });
});


// ****************************************************************************
// ***** MORE UGLY EXAMPLES NESTED CALLBACKS
// ****************************************************************************

var counter = 0;
setTimeout(function(){
  counter++;
  console.log('Counter: ', counter);
  setTimeout(function(){
    counter++;
    console.log('Counter: ', counter);
    setTimeout(function(){
      counter++;
      console.log('Counter: ', counter);
    }, 3000);
  }, 2000);
}, 1000);



// ****************************************************************************
// ***** MORE UGLY EXAMPLES TO REFACTOR NESTED CALLBACKS
// ****************************************************************************

var counter = 0;
function incCounter(){
  counter++;
  console.log('Counter: ', counter);
}

function runLater(callback, timeInMs){
  var p = new Promise(function(resolve, reject){
    setTimeout(function(){
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}

runLater(incCounter, 1000).then(function(){
  return runLater(incCounter, 2000);
}).then(function(){
  return runLater(incCounter, 3000);
}).then(function(){
  console.log('Stop your counting!!!');
});