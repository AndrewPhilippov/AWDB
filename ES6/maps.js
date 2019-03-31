var firstMap = new Map;
firstMap.set(1, 'Ellie');
firstMap.set(false, 'a boolian');
firstMap.set('nice', 'a String');
firstMap.delete("nice"); // true
firstMap.size // 2

var arrayKey = [];
firstMap.set(arrayKey, [1, 2, 3, 4, 5]);

var objectKey = {};
firstMap.set(objectKey, {
    a: 1
});

firstMap.get(1); // 'Ellie'
firstMap.get(false); // 'a boolean'
firstMap.get(arrayKey); // [1,2,3,4,5]
firstMap.get(objectKey); // {a:1}

// 1. Finding the size is easy no more loops or Object.keys()
// 2. The keys can be any data type! In object it only can be a string
// 3. We can accidentally overwrite keys on the Object.prototype in an object you make - Maps do not have this issue
// 4. Iterating over a keys and values in maps is quiet easy as well

// WHEN SHOULD WE USE MAPS?
// If you need to look up keys dynamically (they are not hard coded strings)
// If you need strings that are not keys
// If you are frequently adding and removing key/value pairs
// Are key/value pairs are frequently added or removed?
// If you are operating on multiple keys at a time

// WEAKMAP
// Simular to a Map, but all the keys must be Objects
// Values in a WeakMap can be cleared from memory if there is no reference to them
// More perfomant than maps, but can not be iterated over 