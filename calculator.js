

let numEntered

//functions run when number buttons are clicked.


hello

function buttonClick(num){
    let display1 = document.querySelector('.display')
    const numEntered = document.createElement('span')
    numEntered.textContent = num
    display1.appendChild(numEntered);
 
}

let calcDisplay = document.querySelector('.display')
function clearDisplay(){
    while (calcDisplay.firstElementChild){
        calcDisplay.firstElementChild.remove();
    }
}

//puts the numbers clicked into a globalVariable to be used later
let numA
let numB
function globalVariable(num) {
    
    if (numA == undefined){
        numA = num
    }
    else {
        numB = num
    }
    console.log(`The first number is ${numA} and second number is ${numB}`)
}

let globalOperator
function globalSymbol(sym){
    globalOperator = sym
    console.log(`The operator is ${globalOperator}`)
}


//use clear button to remove the global variable values
function clearGlobalValues(){
    numA = undefined 
    numB = undefined
    globalOperator = undefined
    console.log(`After pressing 'clear' button, the first number is ${numA} and second number is ${numB}, and operator is ${globalOperator}`)
}

//math

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
    a = numA
    b = numB
    console.log(a)
    console.log(b)
    operator = globalOperator
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