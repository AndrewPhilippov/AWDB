// Creating map function
function map(arr, callback){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i], i, arr))
  }
  return newArr;
}

// Map function Examples
function triplaeValues(arr){
  return arr.map(function(value){
    return value*3;
  });
}
triplaeValues([1,2,3]); //console: [3.6.9]

function onlyFirstNames(arr){
  return arr.map(function(val){
    return val.first;
  });
}
onlyFirstNames([{first: 'Tim', last: 'Garcia'}, {first: 'Matt', last: 'Lane'}]);
// console: ['Tim', 'Matt']
