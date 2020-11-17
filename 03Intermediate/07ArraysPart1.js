var countries = ["India", "USA", "Dubai", "China"]

var states = new Array("AP", "Mp", "UP", "Delhi", "Goa")

console.log(states);

// At End of Array, to remove we use"POP" and to add we use "PUSH"

states.pop();
console.log(states);


states.push("Again Added Goa");
console.log(states);

states.shift();
console.log(states);

states.unshift("Added Again AP ")
console.log(states);