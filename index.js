const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

let currentInput = '';
let previousInput = '';
let operation = '';

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
        currentInput = parseFloat(previousInput) + parseFloat(currentInput);
      } else if (operation === '-') {
        currentInput = parseFloat(previousInput) - parseFloat(currentInput);
      } else if (operation === '*') {
        currentInput = parseFloat(previousInput) * parseFloat(currentInput);
      } else if (operation === '/') {
        currentInput = parseFloat(previousInput) / parseFloat(currentInput);
      }
      operation = '';
      previousInput = '';
      screen.textContent = currentInput;
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
  screen.textContent = '.';
});