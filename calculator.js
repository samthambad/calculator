let pushToSecondNum = false;//initially, the indiv numbers only go to first number
let numEntered;
//functions run when number buttons are clicked.
//create and array and push every number/operator. Run once = is present
let numArray = [];
let oprArray = [];
let displayArray = [];
const bodmasArray = ['÷','x','+','-']


let calcDisplay = document.querySelector('.display');

// create a collection of all input of type button, use spread to make it an array and then use forEach to addEventListener then push each value to array
[...document.querySelectorAll('input[type="button"]')].forEach(function(item){item.addEventListener('click', e => 
{displayArray.push(e.target.value);
    calcDisplay.textContent = displayArray.join("");})});
    
    [...document.querySelectorAll('.operatorButtons, .equalButton')].forEach(function(item){item.addEventListener('click', e => 
        {
            console.log("operator/= button used");
            let finalCalcString = calcDisplay.textContent;
            console.log(finalCalcString);
            // find non number's index
            let indexOfOpr = 0;
            let stringToBeAdded;
            while (indexOfOpr+1 < finalCalcString.length){
                indexOfOpr = finalCalcString.search(/\D/);
                console.log("indx of opr"+indexOfOpr);
                if (indexOfOpr+1 == finalCalcString.length){
                    console.log("opr+1 = finalcalcstring.length");
                    //if at the last opr then only take what is before the operator
                    stringToBeAdded = finalCalcString.slice(0,-1);
                    console.log(stringToBeAdded);
                    break};
                finalCalcString = finalCalcString.slice(indexOfOpr+1);
                stringToBeAdded = finalCalcString.slice(0,-1);
            } 
            console.log(stringToBeAdded);
            numArray.push(stringToBeAdded);
            console.log(numArray);
        })});
    
document.querySelector(".clearButton").addEventListener("click", function(){
    numArray = []
    calcDisplay.textContent = numArray.join("");
});

document.querySelector(".equalButton").addEventListener("click", function(){
        // equalButton takes the oprArray and numArray and matches them to multiply
        //TO FOLLOW BODMAS, use the oprArray and find '/' then get that done, and then do the others...

        // let accumulator = 0;
        // for(let i =0;i<numTogetherArrays.length-1;i++){
        //     for( let index in operatorIndices){
        //         if (numArray[index] == '+'){
        //             accumulator += parseInt(numTogetherArrays[i]) + parseInt(numTogetherArrays(i+1));
        //         }
        //         else if(numArray[index] == 'x'){
        //             accumulator += parseInt(numTogetherArrays[i]) * parseInt(numTogetherArrays(i+1));
        //         }
        //         else if(numArray[index] == '-'){
        //             accumulator += parseInt(numTogetherArrays[i]) - parseInt(numTogetherArrays(i+1));
        //         }
        //         else if(numArray[index] == '÷'){
        //             accumulator += parseInt(numTogetherArrays[i]) / parseInt(numTogetherArrays(i+1));
        //         }
        //         parseInt(numTogetherArrays[i])
        //     }
        // }
        // console.log("Operator indices"+operatorIndices);
        // console.log(numTogetherArrays);
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