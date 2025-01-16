let alien = {
    name: "Nuwan",
    technology: "JavaScript",
    laptop : {
        cpu : "i7",
        ram : "16GB",
        brand: "Dell"
    }
    
}

console.log(alien); // object

console.log(`Name of Alien ${alien.name}`); // object
console.log(`Technology of Alien ${alien.technology}`); // object
console.log(`Alien's Laptop ${alien.laptop}`); // object
console.log(`Alien's Laptop CPU ${alien.laptop.cpu}`); // object
console.log(`Alien's Laptop RAM ${alien.laptop?.Ram?.length}`); // object

delete alien.technology;
console.log(alien); // object

for (let key in alien){
    console.log(key); // object
    console.log(alien[key]); // object
}

for (let key in alien.laptop){
    console.log(key); // object
    console.log(alien.laptop[key]); // object
}