function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "Error: Cannot dive by zero";
    }
    return num1 / num2;
}

let num1 = 3;
let operator = '+';
let num2 = 5;

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Error: unknown operator";
    }
}

let currentInput = "";
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".button-number");

function updateDisplay() {
    display.textContent = currentInput || '0';
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        updateDisplay();
    });
});

updateDisplay();
