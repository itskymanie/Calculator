let display = document.querySelector("#display");
let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;
let resultDisplayed = false;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Nice try. NOOB." : a / b;

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
    
    if (resultDisplayed ) {
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
    // If a result was just displayed, allow continuing the operation
    if (resultDisplayed) {
        resultDisplayed = false;
    }

    // If no new number is entered, just update the operator
    if (currentInput === "" && firstNumber !== null) {
        operator = op;
        return;
    }

    // If a number is entered, process it
    if (currentInput !== "") {
        let number = parseFloat(currentInput);

        if (firstNumber === null) {
            // Set the first number if it hasn't been set yet
            firstNumber = number;
        } else if (operator !== null) {
            // If an operation already exists, calculate the result
            firstNumber = operate(operator, firstNumber, number);
            updateDisplay(firstNumber);
        }

        // Store the new operator and reset input for next number
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

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        
        handleDigitInput(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        // If the key is an operator
        handleOperatorInput(key);
    } else if (key === "Enter" || key === "=") {
        // If Enter or = is pressed, evaluate the expression
        handleEquals();
    } else if (key === "Backspace") {
        // Handle backspace to remove the last digit
        handleBackspace();
    } else if (key === "Escape") {
        // Clear the calculator when Escape is pressed
        handleClear();
    } else if (key === ".") {
        // Allow decimal input
        handleDecimal();
    }
});
