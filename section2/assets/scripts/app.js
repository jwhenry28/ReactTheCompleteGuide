// import { apiKey } from "./util.js"
// import apiKey from "./util.js"

// console.log(apiKey)

import * as util from "./util.js"
console.log(util.default) // apiKey
console.log(util.abc)     // abc string

const user = {
	// fields
	name: "Max",
	age: 34,

	// methods
	greet() {
		console.log("Hello");
		console.log("I am", this.age, "years old");
	}
}

console.log(user.name);
user.greet();

class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	greet() {
		console.log("Hi");
	}
}

const user1 = new User("Joseph", 25);
console.log(user1);

const hobbies = [ "programming", "reading", "lifting" ];
console.log(hobbies[0]);

hobbies.push("praying");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
	return item === "reading";
})
console.log(index);

let objects = hobbies.map((item, i) => {
    return {text: item, index: i}
})
console.log(objects)

const [firstName, lastName] = ["Joseph", "Henry"];
console.log(firstName)
console.log(lastName)

const {name, age} = { name: "Joseph", age: 25 }
console.log(name)
console.log(age)

const newHobbies = ["writing", "speaking"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
	isAdmin: true,
	...user,
}
console.log(extendedUser)