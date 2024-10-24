// main.js
let initialValue = 343; // Outer scope variable
console.log("Outside module - Initial Value:", initialValue); // Logs 343

const { executeFunctionA, logInitialValue } = require("./module.js"); // For ES Modules
// const { executeFunctionA, logInitialValue } = require("./module.js"); // For CommonJS

executeFunctionA(); // Modify and log 10
logInitialValue(); // Logs 10 for both cases
