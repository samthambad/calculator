function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(a,operator,b){//remember to keep operator in string
    operator = operator.toString()
    console.log(operator)
    if (operator === '+'){
        return add(a,b) //return is needed as return cannot pass through 2 functions
    }
    else if(operator === '-'){
        return subtract(a,b)
    }
    else if(operator === '*'){
        return multiply(a,b)
    }
    else if(operator === '/'){
        return divide(a,b)
    }
}

//functions run when number buttons are clicked.
function buttonClick1(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 1
    display1.appendChild(oneEntered);
}
function buttonClick2(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 2
    display1.appendChild(oneEntered);
}
function buttonClick3(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 3
    display1.appendChild(oneEntered);
}
function buttonClick4(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 4
    display1.appendChild(oneEntered);
}
function buttonClick5(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 5
    display1.appendChild(oneEntered);
}
function buttonClick6(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 6
    display1.appendChild(oneEntered);
}
function buttonClick7(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 7
    display1.appendChild(oneEntered);
}
function buttonClick8(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 8
    display1.appendChild(oneEntered);
}
function buttonClick9(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 9
    display1.appendChild(oneEntered);
}
function buttonClick0(){
    const display1 = document.querySelector('.display')
    const oneEntered = document.createElement('span')
    oneEntered.textContent = 0
    display1.appendChild(oneEntered);
}