let fruits;
fruits = ['apple', 'banana', 'strawberry'];
console.log(fruits);

fruits.push('pineapple');
console.log(fruits);

//=== Function with Parameters ===
function greet(name) {
    console.log('Name: ' + name)
}

//with Arrow Function
const greet1 = (name) => console.log(name);

let myName = 'Jason Batingan';
greet(myName);
greet1(myName);
//=================================

//=== Funciton with Return Value ==
function squareRoot(input) {
    return Math.sqrt(input);
}

//with Arrow Function
const squareRoot1 = (input) => Math.sqrt(input);

let myNumber = 64;
console.log('Square root of ' + myNumber + ': ' + squareRoot(myNumber));
console.log(squareRoot1(myNumber));
//=================================

//=== Function Interactions =======
function calculateArea(length, width) {
    return length * width;
}

//with Arrow Function
let calculateArea1 = (length, width) => length * width;

let myLength = 12;
let myWidth = 5;
console.log('Area of shape: ' + calculateArea(myLength, myWidth));
console.log(calculateArea1(myLength, myWidth));

//=================================