// JSON string
let jsonString = '{"name":"Alice","age":25}';

// Convert to JS object
let user = JSON.parse(jsonString);
console.log(user); // Alice

// Convert back to JSON
let newJSON = JSON.stringify(user);
console.log(newJSON); // '{"name":"Alice","age":25}'