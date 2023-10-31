const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumulativeCalculation

const calculate = (button) => {
    const value = button.textContent

    if(value === "CLEAR"){
        calculation = []
        screenDisplay.innerHTML = '.'
    }else if(value === "="){
        screenDisplay.innerHTML = eval(accumulativeCalculation)
    } else{
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.innerHTML = accumulativeCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))