const display1 = document.querySelector('.display-1')
const display2 = document.querySelector('.display-2')
const tempResult = document.querySelector('.temp-result')
const numbers = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation')
const equal = document.querySelector('.equal')
const clearAll = document.querySelector('.all-clear')
const clearLast = document.querySelector('.last-entity-clear')

let display1Num = ''
let display2Num = ''
let result = null
let lastOperation = ''
let isDot = false


numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !isDot){ 
            isDot = true
        }else if(e.target.innerText === "." && isDot){ 
            return
        }
        display2Num += e.target.innerText
        display2.innerText = display2Num
    })
})


operations.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!display2Num) return
        isDot = false
        const operationName = e.target.innerText
        if(display1Num && display2Num && lastOperation){
            mathOperation()
        }else{
            result = parseFloat(display2Num)
        }
        clearVar(operationName)
        lastOperation = operationName
    })
})

const clearVar = (oprName = '') => {
    display1Num += display2Num + ' ' + oprName + ' '
    display1.innerText = display1Num
    display2.innerText = ''
    display2Num = ''
    tempResult.innerText = result 
}


const mathOperation = () => {
    if(lastOperation === 'x'){
        result = parseFloat(result) * parseFloat(display2Num)
    } else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(display2Num)
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(display2Num)
    }else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(display2Num)
    }else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(display2Num)
    }
}


equal.addEventListener('click', (e) => {
    if(!display1Num || !display2Num) return
    isDot = false
    mathOperation()
    clearVar()
    display2.innerText = result
    tempResult.innerText = ''
    display2Num = result
    display1Num = ''
})


clearAll.addEventListener('click', (e) => {
    display1.innerText = '0'
    display1Num = ''
    display2.innerText = '0'
    display2Num = ''
    tempResult.innerText = '0'
    result = ''
})


clearLast.addEventListener('click', (e) => {
    display2.innerText = ''
    display2Num = ''
})








// KEYBOARD FUNCTIONALITY

window.addEventListener('keydown', (e) =>{
   if(
    e.key === '0' || 
    e.key === '1' || 
    e.key === '2' || 
    e.key === '3' || 
    e.key === '4' || 
    e.key === '5' || 
    e.key === '6' || 
    e.key === '7' || 
    e.key === '8' || 
    e.key === '9' || 
    e.key === '.' 
   ){
    clickNumber(e.key)
   }else if(
    e.key === '+' ||
    e.key === '-' ||
    e.key === '%' 
   ){
    clickOperation(e.key)
   }else if(
    e.key === '*'
   ){
    clickOperation('x')
   }else if(
    e.key === 'Enter' || e.key === '='
   ){
    clickEqual()
   }
})


const clickNumber = (key) => {
    numbers.forEach(button => {
        if(button.innerText === key){
            button.click()
        }
    })
}

const clickOperation = (key) => {
    operations.forEach(button => {
        if(button.innerText === key){
            button.click()
        }
    })
}

const clickEqual = () => {
    equal.click()
}