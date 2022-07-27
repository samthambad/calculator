let pushToSecondNum = false//initially, the indiv numbers only go to first number
let numEntered

//functions run when number buttons are clicked.




function buttonClick(num){
    let display1 = document.querySelector('.display')
    const numEntered = document.createElement('span')
    numEntered.textContent = num
    display1.appendChild(numEntered);
        console.log('a num/symbol has been appended')
}



let calcDisplay = document.querySelector('.display')
function clearDisplay(){
    calcDisplay.textContent = ""
    pushToSecondNum =false
    counter = 0
}

//puts the numbers clicked into a globalVariable to be used later
let numA
let numB
function globalVariable(num) {
    
    if (pushToSecondNum == false){
        if (numA == undefined ){//if empty, let numA be num otherwise append it, for >1 digit numbers
            numA = num
        }
        else{
            num = num.toString()//convert to string to append 
            numA += num
            numA = parseInt(numA)//convert to number

        }
    }
    else {
        if (numB == undefined ){
            numB = num
        }
        else{
            num = num.toString()
            numB += num
            numB = parseInt(numB)
            console.log(typeof(numB))
        }
    }
    console.log(`The first number is ${numA} and second number is ${numB}`)
pushToSecondNum =false //reset the whether number pressed goes to 1st or 2nd num
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
    ans = undefined
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
    operator = globalOperator
    operator = operator.toString()

    if (operator === '+'){
        return(add(a,b)) //return is needed as return cannot pass through 2 functions
    }
    else if(operator === '-'){
        return(subtract(a,b))
    }
    else if(operator === 'x'){
        return(multiply(a,b))
    }
    else if(operator === '/'){
        return divide(a,b)
    }
}


let operatorButtons = document.querySelector(".buttons .inputButtons .operatorButtons")
console.log(operatorButtons)
let counter = 0
operatorButtons.addEventListener('click', function secondNumber(){
    counter++
    console.log('the counter is', counter, 'just after clicking the operator')
    pushToSecondNum = true
    if (counter ==2){//how to make this trigger for every odd num
        console.log('the counter is', counter)
        resultOnDisplay();
        numA = ans;
        numB = undefined
        console.log(ans)
        counter = 0
    }

//     operatorButtons.addEventListener('click', resultOnDisplay());//when operator is clicked the second time
})



//putting the answer on the display
let equalButton = document.querySelector(".equalButton")
equalButton.addEventListener('click',function resultOnDisplay(){
    let display2 = document.querySelector('.display')
    let ans = operate(numA, globalOperator, numB)
    display2.textContent = ans
})

let ans
//print when 2nd operator is clicked
function resultOnDisplay(){
    let display2 = document.querySelector('.display')
    ans = operate(numA, globalOperator, numB)
    console.log(numA, globalOperator, numB)
    display2.textContent = ans
}