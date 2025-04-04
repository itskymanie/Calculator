let display = document.querySelector("#display");
let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;
let resultDisplayed = false;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "ERROR" : a / b;

const operate = (operator, num1, num2) => {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return null;
    }
};

const updateDisplay = (value) => {
    display.innerText = value;
};

const handleDigitInput = (digit) => {
    if (resultDisplayed) {
        currentInput = digit;
        resultDisplayed = false;
        firstNumber = null; 
        operator = null
    } else {
        currentInput += digit;
    }
    updateDisplay(currentInput);
};


const handleOperatorInput = (op) => {
    if (currentInput === "") return;

    if (firstNumber === null) {
        firstNumber = parseFloat(currentInput);
        operator = op;
        currentInput = "";
    } else if (operator !== null) {
        secondNumber = parseFloat(currentInput);
        firstNumber = operate(operator, firstNumber, secondNumber);
        updateDisplay(firstNumber);
        operator = op;
        currentInput = "";
    }
};

const handleEquals = () => {
    if (currentInput === "" || operator === null) return;

    secondNumber = parseFloat(currentInput);
    const result = operate(operator, firstNumber, secondNumber);
    updateDisplay(result);
    firstNumber = result;
    currentInput = "";
    operator = null;
    resultDisplayed = true;
};

const handleClear = () => {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    currentInput = "";
    updateDisplay("0");
    resultDisplayed = false;
};

const handleBackspace = () => {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
        updateDisplay("0");
    } else {
        updateDisplay(currentInput);
    }
};

const handleDecimal = () => {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay(currentInput);
    }
};


document.querySelectorAll(".digit").forEach(button => {
    button.addEventListener("click", () => handleDigitInput(button.innerText));
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => handleOperatorInput(button.innerText));
});

document.querySelector(".equals").addEventListener("click", handleEquals);
document.querySelector(".clear").addEventListener("click", handleClear);
document.querySelector(".backspace").addEventListener("click", handleBackspace);
document.querySelector(".decimal").addEventListener("click", handleDecimal);