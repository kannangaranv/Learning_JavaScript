function Alien(name, tech){
    this.name = name;
    this.tech = tech;
    this.laptop = {
        cpu : "i7",
        ram : "16GB",
        brand: "Dell"
    }
}

let alien1 = new Alien("Nuwan", "JavaScript");
console.log(alien1); // object
let alien2 = new Alien("Nimal", "JavaScript");
console.log(alien2); // object

alien1.name = "Nuwan2";
console.log(alien1); // object