// module.js
let initialValue = 3;

function executeFunctionA() {
    initialValue = 10; // Modify it
    console.log("Inside executeFunctionA - Current Value:", initialValue); // Logs 10
}

function logInitialValue() {
    console.log("Log Initial Value:", initialValue); // Logs the modified initialValue
}

console.log("Inside module - Initial Value:", initialValue); // Logs 3

module.exports = {
    executeFunctionA,
    logInitialValue,
};
