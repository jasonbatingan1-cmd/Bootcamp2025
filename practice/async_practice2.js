function orderPizza() {
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve("🍕 Pizza delivered!"), 2000);
});
}

async function getPizza() {
    console.log("Ordering pizza...");
    let result = await orderPizza(); // wait until promise finishes
    console.log("Result from promise:", result);
}

getPizza();
// console.log("I have ordered pizza.")