let map = new Map();

map.set("name", "Nuwan");
map.set("technology", "JavaScript");
map.set("laptop", {
  cpu: "i7",
  ram: "16GB",
  brand: "Dell"
});

console.log(map.keys()); // object
console.log(map.values()); // object
console.log(map.entries()); // object
console.log(map.size); // object
console.log(map.get("name")); // object
console.log(map.get("technology")); // object
console.log(map.get("laptop")); // object
console.log(map.get("laptop").cpu); // object
console.log(map.get("laptop").ram); // object
console.log(map.get("laptop").brand); // object
console.log(map.has("name")); // object
console.log(map.has("technology")); // object

map.delete("technology");

for (let [key, value] of map) {
  console.log(key); // object
  console.log(value); // object
}

map.forEach((value, key) => {
  console.log(key); // object
  console.log(value); // object
}); // object