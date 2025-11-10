//variable - a container for storing data values
//container - a bigger container that can hold multiple values (array, object)

//dot property '.' - accesses any property/function of an object
//bracket notation '[]' - accesses any property/function of an ogject using its name
//call functions using dot notation

let car = {
    brand: "Toyota", //property
    model: "Corolla",//property
    year: 2020,//property
    start: function () { //behaviour
        console.log(`${this.brand} ${this.model} Car started!`);
    }
};

console.log(car.brand);  // Dot notation
console.log(car["model"]);  // Bracket notation
car.start(); // Call function

//constructor function - a special function used to create objects
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`);
    }
}

// Create objects using the constructor function
let person1 = new Person("Alice", 28, "New York");
let person2 = new Person("Bob", 35, "Los Angeles");

console.log(person1.name); // Access property
person2.greet(); // Call method

//class - a blueprint for creating objects
class Animal {
    species;
    sound;
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.species} goes ${this.sound}`);
    }   
}

let dog = new Animal("Dog", "Woof");
let cat = new Animal("Cat", "Meow");

console.log(dog.species); // Access property
cat.makeSound(); // Call method

//object oriented programming
//class, instance, constroctors

//encapsulation - bundling data and methods that operate on that data within one unit
//abstraction - hiding complex implementation details and showing only the necessary parts
//inheritance - a mechanism where a new class can inherit properties and methods from an existing class (parent and child classes)
//  (use 'extends' keyword) (use 'super' to call parent constructor ex. super name, age, address)
//  (can define new properties and methods in child class, it will 'go up' to the parent)
//polymorphism - the ability of different classes to be treated as instances of the same class through a common interface (overriding methods)

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 👈 Calls parent constructor
        this.breed = breed;
    }

    displayInfo() {
        console.log(`${this.name} is a ${this.breed}`);
    }
}

let dog1 = new Dog("Buddy", "Golden Retriever");
dog1.displayInfo(); // Buddy is a Golden Retriever