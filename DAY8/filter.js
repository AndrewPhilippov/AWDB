// How does it work
// **********************
function filter(arr, callback){
  newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

// Filter examples
// **********************
var arr = [1,2,3];
arr.filter(function(value, index,array){
  // no need for if statement
  // Just return an expression
  // that evaluates 'true' or 'false'
  return value > 2;
});

var instructors = [ {name: 'Ellie'},
                    {name: 'Tim'},
                    {name: 'Matt'},
                    {name: 'Colt'}
                  ];
instructors.filter(el => {
  return el.name.length > 3;
});

function onlyFourLettersNames(arr){
  return arr.filter(el => {
    return el.length === 4;
  });
}
onlyFourLettersNames(['Rusty', 'Colt', 'Moxie', 'Matt']);

function divisibleByThree(arr){
  return arr.filter(el => {
    return el%3 === 0;
  });
}
var nimArr = [1,2,3,4,5,6,7,8,9];



// Coding exersises with filter
// ***********************************
/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
    return arr.filter(el => {
      return el[key];
      // or 
      // return val[key] !== undefined;
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
  var num = arr.filter(el => {
      return el === searchValue;
    });
  return num[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
    return arr.filter(el => {
      return el[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
    var vowels = 'aeiuo';
    var newArr = str.toLowerCase().split('').filter(letter => {
      return vowels.indexOf(letter) === -1
    }).join('');
    return newArr;
  }

  /*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
  return  arr.filter(num => {
    return num%2 !== 0;
  }).map(num => {
    return num *2;
  });
}