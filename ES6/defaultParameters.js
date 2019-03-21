function add(a, b) {
    return a + b;
}

add(); // Return NaN because a is undefined and b is undefined

function add(a = 10, b = 20) {
    return a + b;
}

add(); // 30
add(20); // 40