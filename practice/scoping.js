let globalVar = "I am a global variable";

function showGlobal() {
    let functionVar = "I am a function variable";
    if (true) {
        let blockVar = "I am a block variable";
        console.log(blockVar); // Accessible here
    }
    console.log(functionVar); // Accessible here
    console.log(globalVar); // Accessible here
}

showGlobal(); // Output: I am a global variable
console.log(globalVar); // Output: I am a global variable
console.log(functionVar); // Output:Error as not available
console.log(blockVar); // Output:Error as not available