const display1 = document.querySelector('.display-1')
const display2 = document.querySelector('.display-2')
const tempResult = document.querySelector('.temp-result')
const numbers = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.all-clear')
const lastEntityClear = document.querySelector('.last-entity-clear')

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