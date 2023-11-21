const display1 = document.querySelector('.display-1')
const display2 = document.querySelector('.display-2')
const tempResult = document.querySelector('.temp-result')
const numbers = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.all-clear')
const lastEntityClear = document.querySelector('.last-entity-clear')

let displayFirstNum = ''
let displaySecondNum = ''
let result = null
let lastOperation = ''
let isDot = false