let nums = [97,78,55,70,89,24]
console.log(nums);

let result = nums.filter(n => n%2==0)
    .map(n => n*2)
    .reduce((a,b) => a+b);
    
console.log(result); // 296