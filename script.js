let currentInput = "";
let firstNum = null;
let secondNum = null;
let operator = null;
let resultDisplayed = false;

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".button-number");
const operatorButtons = document.querySelectorAll(".button-operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

// add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// substract two numbers
function substract(num1, num2) {
    return num1 - num2;
}

// multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// divide two numbers
function divide(num1, num2) {
    if (num2 == 0) {
        return "Error: Cannot dive by zero";
    }
    return num1 / num2;
}

// perform operation on two numbers
function operate(operator, num1, num2) {
    firstNum = parseFloat(num1);
    secondNum = parseFloat(num2);

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

// update the display
function updateDisplay() {
    display.textContent = currentInput || '0';
}

// handle number input
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (resultDisplayed) {
            currentInput = "";
            resultDisplayed = false;
        }
        currentInput += button.textContent;
        updateDisplay();
    });
});

// handle operator input
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "") {
            return;
        }
        if (firstNum === null) {
            firstNum = parseFloat(currentInput);
            operator = button.textContent;
            currentInput = "";
        }
        else if (currentInput !== "") {
            secondNum = parseFloat(currentInput);
            const result = operate(operator, firstNum, secondNum);
            currentInput = result.toString();
            updateDisplay();
            firstNum = parseFloat(currentInput);
            operator = button.textContent;
            currentInput = "";
        }
    });
});

// handle equals
equalsButton.addEventListener("click", () => {
    if (firstNum !== null && currentInput !== "") {
        secondNum = parseFloat(currentInput);
        const result = operate(operator, firstNum, secondNum);
        currentInput = result.toString();
        updateDisplay();
        firstNum = parseFloat(currentInput);
        secondNum = null;
        operator = null;
        resultDisplayed = true;
    }
});

// handle clear
clearButton.addEventListener("click", () => {
    currentInput = "";
    firstNum = null;
    secondNum = null;
    operator = null;
    resultDisplayed = false;
    updateDisplay();
});

// initialize display
updateDisplay();
