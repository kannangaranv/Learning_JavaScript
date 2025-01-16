let laptop = {
    cpu: "i7",
    ram: "16GB",
    brand: "Dell",
    greet: function () {
        return `Hello, ${this.cpu}!`;
    },
}

console.log(laptop.greet()); // object