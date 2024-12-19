// Primitives: number, string, boolean
// Complex: arrays, objects
// Function types, parameters

// Primatives

let age: number;
age = 12.1;

let userName: string;
userName = "Joseph";

let isInstructor: boolean;
isInstructor = false;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Joseph",
  age: 35,
};

let people: {
  name: string;
  age: number;
}[];

// Type Alias
type Person = {
  name: string;
  age: number;
};

let aliasedPeople: Person[];

// Type inference

let course = "React - The Complete Guide";

// Union types
let myUnion: string | number = "React - The Complete Guide";
myUnion = 123;

// Functions & types

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd')