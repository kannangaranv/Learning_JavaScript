let laptop = {
    cpu: "i7",
    ram: "16GB",
    brand: "Dell",
    getconfig: function () {
        return `CPU: ${this.cpu}, RAM: ${this.ram}, Brand: ${this.brand}`;
    },
}

console.log(laptop.getconfig()); // object