//Loop Practice Task 3
console.log('Multiplication Table:');

// Using a for loop:
// Choose a number(e.g., 5) and print its multiplication table up to 10.
let start = 5;
let result = 0;

console.log('Using a for loop:');
for (let i = 0; i<= 10; i++) { //variable, condition, increment/operation
    console.log('The number is: ' + i);
    console.log('5 x ' + i + ' = ' + (start * i));
}

// Using a while loop:
// Choose a number(e.g., 5) and print its multiplication table up to 10.
console.log('\n\nUsing a while loop:');
let j = 0
while (j <= 10) {
    result = start * j;
    console.log('The number is: ' + j);
    console.log('5 x ' + j + ' = ' + result);
    j++;
}

// Using a do..while loop:
// Choose a number(e.g., 5) and print its multiplication table up to 10.
console.log('\n\nUsing a do..while loop:');
let k = 0;
do {
    result = start * k;
    console.log('The number is: ' + k);
    console.log('5 x ' + k + ' = ' + result);
    k++;
} while (k <= 10);