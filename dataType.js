let names = ["Nuwan", 5, {tech:"JS"}, function(){console.log("Hi")}];

names.push("Nimal");
names.push(10);

names[2].tech = "Python";
console.log(names)
names[3]();


let data = [5,7,8,9,10];
console.log(data);

data.push(20);
console.log(data);

data.pop();
console.log(data);

data.shift();
console.log(data);

data.unshift(1);
console.log(data);

data.splice(2,1);
console.log(data);