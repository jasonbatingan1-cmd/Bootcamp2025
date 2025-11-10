function doSomething() {
    console.log("Function executed after a random delay!");
}

// Generate a random delay between 1000ms (1 second) and 5000ms (5 seconds)
const minDelay = 1000; // 1 second
const maxDelay = 5000; // 5 seconds
const randomDelay1 = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
const randomDelay2 = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
const randomDelay3 = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

// console.log(`Setting timeout for ${randomDelay} milliseconds.`);

// setTimeout(doSomething, randomDelay);

function funOne() {
    //sync function
    console.log(`Setting timeout for ${randomDelay1} milliseconds.`);
    //async function
    setTimeout(doSomething, randomDelay1);
}
function funTwo() {
    //sync function
    console.log(`Setting timeout for ${randomDelay2} milliseconds.`);
    //async function
    setTimeout(doSomething, randomDelay2);
}
function funThree() {
    //sync function
    console.log(`Setting timeout for ${randomDelay3} milliseconds.`);
    //async function
    setTimeout(doSomething, randomDelay3);
}

funOne();
funTwo();
funThree();