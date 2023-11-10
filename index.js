const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

let currentInput = '';
let previousInput = '';
let operation = '';
let result = ''; // Initialize result as an empty string

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/') {
      operation = button.textContent;
      previousInput = currentInput;
      currentInput = '';
      screen.textContent = previousInput + operation;
    } else if (button.textContent === '.') {
      if (currentInput.includes('.')) {
        return;
      } else {
        currentInput += button.textContent;
      }
    } else if (button.textContent === '=') {
      if (operation === '+') {
        result = parseFloat(previousInput) + parseFloat(currentInput);
      } else if (operation === '-') {
        result = parseFloat(previousInput) - parseFloat(currentInput);
      } else if (operation === '*') {
        result = parseFloat(previousInput) * parseFloat(currentInput);
      } else if (operation === '/') {
        result = parseFloat(previousInput) / parseFloat(currentInput);
      }
      operation = '';
      previousInput = '';
      screen.textContent = result.toString(); // Update the screen with the result
    } else {
      currentInput += button.textContent;
      screen.textContent = currentInput;
    }
  });
});

clearButton.addEventListener('click', () => {
  currentInput = '';
  previousInput = '';
  operation = '';
  result = ''; // Reset result to an empty string
  screen.textContent = '.';
});
