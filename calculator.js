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

function buttonClick(num){
    const display1 = document.querySelector('.display')
    const numEntered = document.createElement('span')
    numEntered.textContent = num
    display1.appendChild(numEntered);
}
