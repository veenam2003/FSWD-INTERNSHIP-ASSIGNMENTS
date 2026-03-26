const prompt = require("prompt-sync")();

let choice = prompt("Choose operation: +, -, *, /");

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

switch (choice) {
    case "+":
        console.log("Result:", a + b);
        break;
    case "-":
        console.log("Result:", a - b);
        break;
    case "*":
        console.log("Result:", a * b);
        break;
    case "/":
        console.log("Result:", a / b);
        break;
    default:
        console.log("Invalid operation");
}