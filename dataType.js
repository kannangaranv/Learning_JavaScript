let names = ["Nuwan", 5, {tech:"JS"}, function(){console.log("Hi")}];

names.push("Nimal");
names.push(10);

names[2].tech = "Python";
console.log(names)
names[3]();

