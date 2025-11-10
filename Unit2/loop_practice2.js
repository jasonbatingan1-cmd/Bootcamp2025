//=== Task 2: Sum of Even Numbers ===
//Calculate and print the sum of even numbers from 1 to 20.

//for loop
console.log('Even Numbers For Loop:');

let sum = 0;

for (i = 0; i <= 20; i += 2) {
    console.log('The number in the loop is: ' + i);
    sum += i;
    console.log('Sum = ' + sum);
}

//while loop
console.log('\nEven Numbers While loop');

let j = 0;
let sum1 = 0;

while (j <= 20) {
    console.log('The number in the loop is: ' + j);
    sum1 += j;
    console.log('Sum = ' + sum1);
    j += 2;
}

//do..while loop
console.log('\nEven Numbers do..while loop');

let k = 0;
let sum2 = 0;

do {
    console.log('The number in the loop is: ' + k);
    sum2 += k;
    console.log('Sum = ' + sum2);
    k += 2;
} while (k <= 20);