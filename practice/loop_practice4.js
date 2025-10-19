//forEach
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// The forEach() method does not return a value.
console.log('forEach Method:');

let carMakes = ['Honda', 'Toyota', 'Volkswagen', 'Hyndai', 'Mitsubishi',
    'BMW', 'Tesla', 'Audi', 'Kia', 'Ford'
];
let carsLength = [];

carMakes.forEach(myFunction)
console.log(carsLength);

function myFunction(car) {
    carsLength.push(car.length);
}

//map
carMakes.map(myFunction)
carMakes.map((car) => car.toUpperCase());
console.log(carMakes);

//filter
let newCars = carMakes.filter((car) => car !== 'Toyota');
console.log(newCars);

let newCars2 = 
    carMakes
        .filter((len) => len < 6);
console.log(newCars2);

//reduce
let nums = [50, 20, 15, 45, 98];
const sumOfNums = nums.reduce((total, currentValue) => total + currentValue, 0);
console.log(sumOfNums);


//=== Exercise ===
let fruits = ['apple', 'banana', 'cherry', 'pear', 'strawberry']
let newFruits = 
    fruits
        .map((fruit) => fruit.length)
        .filter((len) => len % 2 == 0)
        .reduce((total, currentValue) => total + currentValue, 0);
console.log(newFruits);

//for...in
const person = { name: 'john', age: 30, city: 'New York' };

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

//for...of
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

//break statement
const numsArr = [1, 2, 3, 4, 5, 6];
//               0  1  2  3  4  5
let i = 0;
for (i = 0; i < numsArr.length; i++) {
    if (numsArr[i] === 4) {
        console.log("Found 4! Exiting the loop.");
        break; // Exit the loop when the number 4 is found
    }
    console.log(numsArr[i]);
}
console.log(i) // Value of i

//continue statement
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // This will only log odd numbers
}


//=== Exercise 2 ===
console.log('\nColors Exercise:');
const colors2 = ['red', 'blue', 'green', 'yellow'];
colors2.forEach((color) => console.log(color));

let colors3 = 
    colors2
        .map((color) => color.length)
        .filter((length) => length > 3)
        .reduce((total, currentValue) => total + currentValue, 0);
console.log(colors3);

let colors4 = 
    colors2
        .map((color) => color.toUpperCase())
        .filter((color) => color.length > 3);
console.log(colors4);