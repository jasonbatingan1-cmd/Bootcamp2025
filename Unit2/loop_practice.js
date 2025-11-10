//=== Task 1: Print Numbers from 1 to 10 ===

// Using a for loop:
// Print numbers from 1 to 10.
console.log('For Loops');
for (let i = 0; i < 10; i++) {
    console.log('Car Make #' + (i+1) + ': ' + carMakes[i]);
}

// Using a while loop:
// Print numbers from 1 to 10.
console.log('While Loops'); 
let j = 0;
while (j < 10) {
    console.log('The number is: ' + (j+1));
    j++;
}

// Using a do..while loop:
// Print numbers from 1 to 10.
console.log('do..while loop')
let k = 0;
do {
    console.log('The number is: ' + (k+1));
    k++;
}

while (k < 10);