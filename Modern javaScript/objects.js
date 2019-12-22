let person = {
	name : "Nayab",
	age : 30,
	location : 'Chennai, India'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age += 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

let oneObject = {};
let twoObject = {};

console.log(oneObject === twoObject); //false
console.log(oneObject == twoObject); // false

let threeObject = oneObject;

console.log(threeObject == oneObject); //true
