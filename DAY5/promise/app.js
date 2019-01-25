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

var promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    var randomInt = Math.floor(Math.random()*10);
    resolve(randomInt);
  }, 3000);
});

promise.then(function(data){
  console.log('Random int passed to resolve: ', data);
});