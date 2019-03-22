var arr = [1, 2, 3, 4, 5];
for (let val of arr) {
    console.log(val);
}

// Can access the index
// Can only be used on data structures with a Symbol.iterator method implemented. No objects.


// Array has Symbol(Symbol.iterator)
// Object DOESN'T have Symbol(Symbol.iterator)