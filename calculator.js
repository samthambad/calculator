let pushToSecondNum = false;//initially, the indiv numbers only go to first number
let numEntered;
//functions run when number buttons are clicked.
//create and array and push every number/operator. Run once = is present
let sessionArray = [];


let calcDisplay = document.querySelector('.display');
// create a collection of all input of type button, use spread to make it an array and then use forEach to addEventListener then push each value to array
[...document.querySelectorAll('input[type="button"]')].forEach(function(item){item.addEventListener('click', e => 
    {sessionArray.push(e.target.value);
    calcDisplay.textContent = sessionArray.join("");})});
    
document.querySelector(".clearButton input[type='button']").addEventListener("click", function(){
    sessionArray = []
    calcDisplay.textContent = sessionArray.join("");
});

//equalButton takes the array, join the array and seperate based on whatever is not number
document.querySelector(".equalButton input[type='button']").addEventListener("click", function(){
        console.log(sessionArray);
        //find the indices of the operators and using that concat the digits before that and after that
        //complete the calc according to BODMAS: if there is any of this ['*','/'], do first, otherwise L->R
        let operatorIndices=[];
        for(let i =0; i<sessionArray.length; i++){
            if (isNaN(parseInt(sessionArray[i]))){
                operatorIndices.push(i);
            }
        }
        //remove the last index which is '='
        operatorIndices.pop();
        //join all the digits before the operator
        let firstNum = sessionArray.slice(0,operatorIndices[0]);
        let firstNumString = firstNum.join("");
        let numTogetherArrays= [firstNumString];
        console.log(firstNumString)
        //add all the subsequent numbers to array
        for(let i =0; i<operatorIndices.length;i++){
            let ithNum = sessionArray.slice(operatorIndices[i]+1,operatorIndices[i+1]);
            let ithNumString = ithNum.join("");
            numTogetherArrays.push(ithNumString);
        }
        //now use 2 numbers per one operator
        let accumulator = 0;
        for(let i =0;i<numTogetherArrays.length-1;i++){
            for(index in operatorIndices){
                if (sessionArray[index] == '+'){
                    accumulator += parseInt(numTogetherArrays[i]) + parseInt(numTogetherArrays(i+1));
                }
                else if(sessionArray[index] == 'x'){
                    accumulator += parseInt(numTogetherArrays[i]) * parseInt(numTogetherArrays(i+1));
                }
                else if(sessionArray[index] == '-'){

                }
                else if(sessionArray[index] == '÷'){

                }
                parseInt(numTogetherArrays[i])
            }
        }
        console.log("Operator indices"+operatorIndices);
        console.log(numTogetherArrays);
})

//puts the numbers clicked into a globalVariable to be used later
/* let numA
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
    console.log(`The first number is ${numA} and second number is ${numB} and the operator is ${globalOperator}`)
 //reset the whether number pressed goes to 1st or 2nd num
}

let globalOperator
function globalSymbol(sym){
    globalOperator = sym
    console.log(`The operator is ${globalOperator}`)
} */


//use clear button to remove the global variable values
/* function clearGlobalValues(){
    numA = undefined 
    numB = undefined
    ans = undefined
    globalOperator = undefined
    console.log(`After pressing 'clear' button, the first number is ${numA} and second number is ${numB}, and operator is ${globalOperator}`)
} */

//math

/* function add(a,b){
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
 */
/* function operate(a,operator,b){//remember to keep operator in string
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
} */

//putting the answer on the display using equal button
/* let equalButton = document.querySelector(".equalButton")
equalButton.addEventListener('click',function resultOnDisplay(){
    let display2 = document.querySelector('.display')
    let ans = operate(numA, globalOperator, numB)
    display2.textContent = ans
}) */
/* let ans;
//print when 2nd operator is clicked
function resultOnDisplay(){
    let display2 = document.querySelector('.display')
    ans = operate(numA, globalOperator, numB)
    console.log(numA, globalOperator, numB)
    display2.textContent =  ans
}

function resultOnDisplay2(){
    let display2 = document.querySelector('.display')
    ans = operate(numA, newOperator, numB)
    console.log(numA, newOperator, numB)
    display2.textContent = ans
} */