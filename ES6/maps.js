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