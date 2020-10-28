const numberButtons = document.querySelectorAll(".number");
const operandButtons = document.querySelectorAll(".operand");
const mainDisplay = document.querySelector(".maintext");
let x;
let y;
let operator;
let runningTotal;
let activeInput = true;

numberButtons.forEach(b => addEventListener("click", parseInput));
operandButtons.forEach(b => addEventListener("click", parseOperation));

function parseOperation(e) {
    if (!e.target.getAttribute("class").includes("operand")) {
        return;
    }

    let dataValue = e.target.getAttribute(["data-value"]);
    switch (dataValue) {
        case "add":
            storeValue();
            operator = dataValue;
            updateMainScreen("+");
            break;
        case "subtract":
            storeValue();
            operator = dataValue;
            updateMainScreen("-");
            break;
        case "divide":
            storeValue();
            operator = dataValue;
            updateMainScreen("/");
            break;
        case "multiply":
            storeValue();
            operator = dataValue;
            updateMainScreen("*");
            break;
        case "negation":
            negateValue();
            break;
        case "equal":
            storeValue();
            updateMainScreen(runningTotal);
            clearValues();
            break;
        case "clear":
            clearValues();
            updateMainScreen(0);
            break;
    }   
}    

function parseInput(e) {
    //checks if number button hit
    if (!e.target.getAttribute("class").includes("number ")) {
        return;
    }
    

    if (!activeInput) {
        mainDisplay.textContent = 0;
        activeInput = true;
    }

    let dataValue = e.target.getAttribute(["data-value"]);
    let updateValue;

    // already a period in the display, do nothing.
    if (mainDisplay.textContent.includes(".") && dataValue === ".") {
        return;
    }

    if (dataValue === 'backspace') {
        updateValue = mainDisplay.textContent.length == 1 ? 0 : mainDisplay.textContent.substr(0, mainDisplay.textContent.length-1);
    } else if (mainDisplay.textContent.match(/[1-9]/g) && activeInput) {
        updateValue = mainDisplay.textContent.length < 11 ? mainDisplay.textContent + dataValue : mainDisplay.textContent;
    } else {
        updateValue = dataValue;
    }
    updateMainScreen(updateValue);
}

function negateValue() {
    if (mainDisplay.textContent.match(/[0-9]/g)) {
        let updateValue = parseFloat(mainDisplay.textContent) * -1;
        updateMainScreen(updateValue);
    }
}

function clearValues() {
    x = 0;
    y = 0;
    operator = "";
    activeInput = false;
}

function finalResult() {
    
}


function storeValue() {
   if (!x) {
       x = parseFloat(mainDisplay.textContent);
       runningTotal = x;
   } else {
       y = parseFloat(mainDisplay.textContent);
        if (y !== 0 && operator !== '\'') {
            runningTotal = operate(operator, runningTotal, y);
            runningTotal = Math.round(runningTotal * 10) / 10;
        } else {
            runningTotal = 'div by 0';
            updateMainScreen(runningTotal);
            clearValues();
        }
   }
}

function updateMainScreen(updateValue) {
    mainDisplay.textContent = updateValue;
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