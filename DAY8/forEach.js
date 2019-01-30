// Double each number in the array
// *******************************

function doubleValues(arr){
  var newArr = [];
  arr.forEach(function(val){
    newArr.push(val * 2);
  })
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

  splitArr.forEach(function(letter){
    if(vowels.indexOf(letter) !== -1){
      if(letter in obj){
        obj[letter]++
      } else {
        obj[letter] = 1;
      }
    }
  })
  return obj;
}