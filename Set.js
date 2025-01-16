let nums = new Set();
nums.add(3);
nums.add(4);
nums.add(3);
nums.add("Nuwan")
nums.add("Nimal")
nums.add("Kamal")

console.log(nums); // Set { 'b', 'o', 'k', 'e', 'p', 'r' }

nums.forEach((value) => {
    console.log(value);
});


console.log(nums.has(3)); // true

