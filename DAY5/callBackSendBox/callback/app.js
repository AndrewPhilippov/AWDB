// function callbackfn(){
//   console.log('I am from callBack');
// }

// function highOrder(fn){
//   console.log('About to call callBack');
//   fn(); //Callback function is invoked
//   console.log('Callback has been Envoked');
// }

// highOrder(callbackfn);

// **********************************************************
// ***** FOREACH
// **********************************************************

// var arr = [1,2,3,4,5,6];
// // regular function to double each number in the given array
// function double(arr){
//   for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]*2);
//   }
// }
// double(arr);

// // Double each number in the array by using forEach method
// arr.forEach(el => {
//   console.log(el*2);
// });

// FOREACH EXAMPLE
var strings = ['my', 'forEach', 'example'];
// // With arary method forEach
var result = '';
// strings.forEach((str, index, array) => {
//   if(array.length - 1 !== index){
//     result += str + ' ';
//   } else {
//     result += str + '!!!';
//   }
// });
// console.log(result);

// MY OWN FOREACH FUNCTION
function forEach(arr, callback){
  for(var i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
}
// // With my own function forEach
forEach(strings, function(str, index, array){
  if(array.length - 1 !== index){
    result += str + ' ';
  } else {
    result += str + '!!!';
  }
});
console.log(result);