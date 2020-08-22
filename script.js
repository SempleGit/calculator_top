const numberButtons = document.querySelectorAll(".number");
let x;
let y;

numberButtons.forEach(b => addEventListener("click", assignValue));
let test;


function assignValue(e) {
    test = e.target;
    if (!x) {
        x = parseInt(e.target.getAttribute(["data-value"]));
    } else {
        y = parseInt(e.target.getAttribute(["data-value"]));
    }
        
}

function operate(operator, x, y) {
    switch (operator) {
        case "add":
            return add(x, y);
            break;
        case "subtract":
            return subtract(x, y);
            break;
        case "multiply":
            return multiply(x, y);
            break;
        case "divide":
            return divide(x, y);
            break;
        
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}