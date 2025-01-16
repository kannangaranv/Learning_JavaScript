
let add = function (a, b) {
    return a + b;
}

console.log(add); // 11

console.log(add(5, 6)); // 11

function sum(a, b, c=1) {
    return a + b + c;
}

console.log(sum(5, 6)); // 12