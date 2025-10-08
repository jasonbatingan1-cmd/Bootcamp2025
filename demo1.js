//let - variable declaration, where the value of the variable that can be changed
//let variables can have it's value changed anytime
let x = 5;
let y = 6;
let z = x+y;

console.log('x + y = ', z);

//const - variable declaration, for a constant variable (doesn't change). e.g. classes
const days_in_week = 7; //there are not more than 7 days in a week, making this a constant variable

//strings
let name = 'Jason'; //if defining with backticks (`), will grab variables
console.log(name);

name = 'Jason Batingan';
console.log(name);

//null variable value
let myAge = null; //different from an undefined variable, null is defined but there is no data/value given.

//different ways to define strings (', ", `, etc.)
//String
let string1 = 'String way 1'
let string2 = "String way 2"
let string3 = "Today's weather"
let string4 = 'Today\'s weather'
let string5 = 'You said: "You are well!"'
let string6 = 'You said: \'You are well\''
let string7 = "You said: 'You are well'"
let string8 = "You said: \"You are well\""
let string9 = `You said: "You are well"`


//boolean: true/false values
let myBool = false;
console.log(myBool);

let myVar = Boolean(0); //any string or number != 0 input makes Boolean input 'true'
console.log(myVar);

//object
let person = {
    firstname: 'Jason',
    lastname: 'Batingan',
    age: 29,
    dob: '11-06-1995',
}
console.log(person);
console.log(person.firstname, person.age);

//array
let myArray = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',];
console.log(myArray);
console.log(myArray[0], myArray[3]); //arrays are a 0-based index

//class
class Person {
    constructor(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
}

let p = new Person('John', 'Doe');
console.log(p);

//example of using both Class and Date
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() { //'age' will take the input from 'year' field, and return the car's age by sutracting
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Honda Civic", 2025);
console.log("My car is " + myCar.age() + " years old.");