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

//********************//
//****** TEST TEST TEST
//********************//


/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr){
  return arr.map(el => {
      return el*2;
  });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map((el, index) => {
      return el*index;
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(el => {
      // We use bracket notation instead of dot notation because we need javascript to avaluate that variable and not look for a key with a name of 'key'
      return el[key];
    });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(el => {
      return el.first +' '+el.last;
    });
}