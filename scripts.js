const display = document.querySelector("#display");

const content = document.createElement("div");
content.classList.add("content");

display.appendChild(content);
var left = null;
var right = null;
var operator = null;
var resetDisplay = false;

function calculateResult() {
    if (left !== null && right !== null && operator) {
        let result;
        switch (operator) {
            case "+":
                result = add(left, right);
                break;
            case "-":
                result = subtract(left, right);
                break;
            case "*":
                result = multiply(left, right);
                break;
            case "/":
                if (right === 0) {
                    display.innerText = "Error: Divide by zero";
                    resetAfterDelay();
                    return;
                }
                result = divide(left, right);
                break;
            default:
                console.log("Unexpected operator.");
                return;
        }
        
        result = roundResult(result); // Ensure result is rounded properly
        display.innerText = result;
        left = result;  // Use result as new 'left' for next operation
        right = null;
        operator = null;
        resetDisplay = true; // Flag to prevent overwriting with new numbers
    }
}

function add(left, right) {
    return left + right;
}

function subtract(left, right) {
    return left - right;
}

function multiply(left, right) {
    return left * right;
}

function divide(left, right) {
    return left / right;
}

function roundResult(value) {
    if (Number.isInteger(value)) {
        return value; // Keep integers unchanged
    }
    return Number(value.toFixed(5)); // Round to 5 decimal places and remove trailing zeros
}

function appendToDisplay(value) {
    // If a number is pressed after a result was just shown
    if (resetDisplay) {
        if (typeof value === "number") {
            // Start new expression entirely
            display.innerText = value.toString();
            left = value;
            right = null;
            operator = null;
        } else {
            // Continue operation with result as left
            display.innerText += " " + value + " ";
            operator = value;
        }
        resetDisplay = false;
        return;
    }

    if (typeof value === "number") {
        display.innerText += value;
        if (operator === null) {
            left = left === null ? value : left * 10 + value;
        } else {
            right = right === null ? value : right * 10 + value;
        }
    } else {
        if (left !== null && operator === null) {
            operator = value;
            display.innerText += " " + value + " ";
        } else if (operator !== null && right !== null) {
            calculateResult(); // result becomes new left
            operator = value;
            display.innerText += " " + value + " ";
        }
    }
}



function clearDisplay() {
    display.innerText = "";
    left = null;
    right = null;
    operator = null;
    resetDisplay = false;
}

function resetAfterDelay() {
    setTimeout(clearDisplay, 1500);
}
