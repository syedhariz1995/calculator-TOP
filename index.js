// Query selects the buttons
const numberButtons = document.querySelectorAll(`[data-number]`)
const operationButtons = document.querySelectorAll(`[data-operation]`)
const equalsButton = document.querySelector(`[data-equals]`)
const deleteButton = document.querySelector(`[data-delete]`)
const allClearButton = document.querySelector(`[data-all-clear]`)
const previousOperandTextElement= document.querySelector(`[data-previous-operand]`)
const currentOperandTextElement = document.querySelector(`[data-current-operand]`)

// Initialize variables to store the operands and the operator
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// Add event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    });
});

// Add event listeners to operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectOperation(button.innerText);
        updateDisplay();
    });
});

// Add event listener to the equals button
equalsButton.addEventListener('click', () => {
    compute();
    updateDisplay();
});

// Add event listener to the AC (clear) button
allClearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
});

// Add event listener to the DEL (delete) button
deleteButton.addEventListener('click', () => {
    deleteLast();
    updateDisplay();
});

// Function to append numbers to the current operand
function appendNumber(number) {
    currentOperand += number;
}

// Function to handle operator selection
function selectOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

// Function to perform the calculation
function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
}

// Function to clear the calculator
function clear() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
}

// Function to delete the last digit
function deleteLast() {
    currentOperand = currentOperand.slice(0, -1);
}

// Function to update the display
function updateDisplay() {
    currentOperandTextElement.innerText = currentOperand;
    if (operation != null) {
        previousOperandTextElement.innerText = `${previousOperand} ${operation}`;
    } else {
        previousOperandTextElement.innerText = '';
    }
}
