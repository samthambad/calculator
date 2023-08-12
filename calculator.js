let pushToSecondNum = false;//initially, the indiv numbers only go to first number
let numEntered;
let accumulator = 0;
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
            // to populate the numArray and oprArray
            oprArray.push(e.target.value);
            console.log("operator/= button used");
            // keep this constant
            let finalCalcString = calcDisplay.textContent;
            // not this
            let stringToBeAdded = finalCalcString;
            console.log(finalCalcString);
            // find non number's index
            let indexOfOpr = 0;
            while (indexOfOpr+1 < finalCalcString.length){
                console.log("finalCalcString: "+ finalCalcString);
                // find the subsequent opr using stringToBeAdded which changes
                indexOfOpr = stringToBeAdded.search(/\D/);
                let opr = stringToBeAdded.substring(indexOfOpr,indexOfOpr+1);
                console.log("stringToBeAdded:"+ stringToBeAdded);
                console.log("opr: "+ opr);
                indexOfOpr = finalCalcString.indexOf(opr);
                console.log("the index of the opr after regex finding: "+ indexOfOpr);
                
                // if the indexOfOpr is currently at the '=' sign,
                if (indexOfOpr+1 == finalCalcString.length){
                    console.log("opr+1 = finalcalcstring.length");
                    //if at the last opr then only take what is before the operator
                    stringToBeAdded = stringToBeAdded.slice(0,-1);
                    console.log(stringToBeAdded);
                    break};
                    // slice finalCalcString after the operator index found 
                    // in this while loop iteration regex so that the next opr can be found
                    // *PROBLEM how to find the subsequent oprs without changing finalCalcString? Still need index from original length
                    // possible solution, find the next opr using stringToBeAdded and then use finalCalcString to get index from the opr String
                    stringToBeAdded = finalCalcString.slice(indexOfOpr+1);
                    console.log("stringToBeAdded after slicing: "+ stringToBeAdded);
                    // slice stringToBeAdded so that you remove the >2nd operator
                } 
                console.log(stringToBeAdded);
                numArray.push(stringToBeAdded);
                console.log(numArray);
                console.log(oprArray);
        })});
        
        document.querySelector(".clearButton").addEventListener("click", function(){
            numArray = []
            calcDisplay.textContent = numArray.join("");
        });

document.querySelector(".equalButton").addEventListener("click", function(){
    // to calculate using numArray and oprArray and display the results
        // equalButton takes the oprArray and numArray and matches them to multiply
        if(oprArray.slice(-1) == "="){
            oprArray.pop();
            console.log(oprArray);
        }
        //TO FOLLOW BODMAS, use the oprArray and find '/' then get that done, and then do the others...
        for(let sign in bodmasArray){
            // sign must be in oprArray
            if (oprArray.includes(bodmasArray[sign])){
                // get the index of that item
                let oprIndex = oprArray.indexOf(bodmasArray[sign]);
                // the below shows the index of the numArray performing the particular operation
                let numIndexArray = [oprIndex, oprIndex+1];
                console.log(numIndexArray);
                let numToBeCalc = [];
                for (let index in numIndexArray){

                    // carry out the calc here
                    numToBeCalc.push(numArray[numIndexArray[index]]);
                    console.log("numtobecalc: "+numToBeCalc);
                    console.log("sign: "+bodmasArray[sign]);
                }
                /* *PROBLEM BELOW, due to overlapping numbers for different calcs, 
                same num is used for 2 diff calc when should only be used for 1
                .Change the numArray?*/
                if (bodmasArray[sign] == "x"){
                    accumulator += numToBeCalc[0] * numToBeCalc[1];
                    console.log(accumulator);
                }
                else if (bodmasArray[sign] == "÷"){
                    accumulator += numToBeCalc[0] / numToBeCalc[1];
                    console.log(accumulator);
                }
                else if (bodmasArray[sign] == "+"){
                    accumulator += numToBeCalc[0] + numToBeCalc[1];
                    console.log(accumulator);
                }
                else if (bodmasArray[sign] == "-"){
                    accumulator += numToBeCalc[0] - numToBeCalc[1];
                    console.log(accumulator);
                }
                // change the numArray here
                for (let i in numIndexArray){
                    // change the value of numArray, there will be 2 spots with the same number
                    numArray[numIndexArray[i]] = accumulator;
                }
                for (let i in numArray){
                    if(numArray[i] == numArray[i+1]){
                        let indexToRemove = i+1;
                        console.log("Match occurs: "+ numArray[i]);
                        numArray.splice((i+1),1);
                        break
                    }
                }
                // remove the second consecutive iteration of that number
                console.log(accumulator);
            }
        }
    })
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