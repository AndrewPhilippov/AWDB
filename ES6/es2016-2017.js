// ES2016
// Exponentiation operator**
// ES2015
var calculatedNumber = Math.pow(2, 4);
calculatedNumber; // 16
// In es2016 we can do like this:
var calculatedNumber = 2 ** 4;
calculatedNumber; // 16
// ES2015
var nums = [1, 2, 3, 4];
var total = 2;
for (let i = 0; i < nums.length; i++) {
    total = Math.pow(total, nums[i]);
}
// With ES6
var nums = [1, 2, 3, 4];
var total = 2;
for (let i = 0; i < nums.length; i++) {
    total **= nums[i];
}

// [].includes
// ES2015
var nums = [1, 2, 3, 4];
nums.indexOf(3) > -1; // true
nums.indexOf(44) > -1; // false

// ES2016
var nums = [1, 2, 3, 4, 5];
nums.includes(3); // true
nums.includes(44); // false


// ES2017
// padStart
// The first parameter is the total length of the new string
// The second parameter is what to pad with from the start. The default is an empty space
"awesome".padStart(10, '!'); //"!!!awesome"
// padEnd
// The first parameter is the total length of the new string
// The second parameter is what to pad with from the end. the default is empty space
"awesome".padEnd(10, '!'); // "awesome!!!"