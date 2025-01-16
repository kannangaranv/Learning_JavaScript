let nums = [5, 6, 7, 8, 9];
console.log(nums);

let [num1, num2, num3, num4, num5] = nums;

console.log(num1);

let a = 5;
let b = 6;

[a, b] = [b, a];

console.log(a);
console.log(b);


let words = "My name is Nuwan Kannangara";

let [word1, word2, word3, ...word4] = words.split(' ');

console.log(word4);