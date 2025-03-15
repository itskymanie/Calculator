const display = document.querySelector("#display");

const content = document.createElement("div");
content.classList.add("content");

display.appendChild(content);
var left = null;
var right = null;
var operator = null;

function calculateResult() {
    if(left != null  && right != null && operator) {
        let result;
        switch(operator) {
        case "+":
            result = add(left, right);
            break;
        case "-":
            result = subtract(left,right);
            break;
        case "*":
            result = multiply(left, right);
            break;
        case "/":
            result = divide(left, right);
            break;
        default:
            console.log("why we hitting the default.")
        }
        display.innerText = result;
        left = result;
        right = null;
        operator = null;
    }
}

function add(left, right) {
    return left + right;
}

function subtract (left, right) {
    return left - right;
}

function multiply( left , right){
    return left * right;
} 

function divide (left , right) {
    return left / right;
}

function appendToDisplay(value) {
    if (typeof(value) === "number") {
        display.innerText= value;
        if(left === -1) {
            left = value;
        }
        else {
            right = value;
        }
    } else {
        operator = value;

    }
}


