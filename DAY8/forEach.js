// Create forEach
// *******************************

function forEach(arr, callback){
  for(var i = 0; i < arr.length; i++){
    // Function without return keyword always returns undefined
    callback(arr[i], i, arr);
  }
  // So no need to return anything
}

function halfValues(arr){
  var newArr = [];
  arr.forEach(el => {
    newArr.push(el*2);
  });
  return newArr;
}




// Double each number in the array
// *******************************

function doubleValues(arr){
  var newArr = [];
  arr.forEach(function(val){
    newArr.push(val * 2);
  });
return newArr;
}

// Push only even numbers to array
// *******************************

function onlyEvenValues(arr){
  var newArr = [];
  arr.forEach(function(val){
    if(val%2 === 0){
      newArr.push(val);
    }
  })
  return newArr;
}

// Show first and last letter of each word in the array
// ****************************************************

function showFirstAndLast(arr){
  var newArr = [];
  arr.forEach(function(val){
    newArr.push(val[0]+val[val.length-1]);
  })
  return newArr;
}


// Add key and value pair to the array
// ****************************************************

function addKeyAndValue(arr, key, value){
  arr.forEach(function(val){
    val[key] = value;
  })
  return arr;
}

// Return from a given string array of objects with key = vowel and value = amount of this vowel in a string 
// ****************************************************

function vowelCount(str){
  var splitArr = str.toLowerCase().split('');
  var obj = {};
  var vowels = 'aeiou';

  splitArr.forEach(letter => {
    if(vowels.indexOf(letter) !== -1){
      if(letter in obj){
        obj[letter]++
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}