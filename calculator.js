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

let numEntered//is this a global variable

//functions run when number buttons are clicked.




function buttonClick(num){
    const display1 = document.querySelector('.display')
    const numEntered = document.createElement('span')
    numEntered.textContent = num
    display1.appendChild(numEntered);
    console.log(numEntered)
    
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

function globalSymbol(sym){
    let globalOperator = sym
    console.log(`The operator is ${globalOperator}`)
}