const output = document.getElementById('output');
//querySelectorAll supports the forEach method
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('equals');
const clearInput = document.getElementById('clear');
const showInput = document.getElementById('input');

//values to be stored
let numOne = null;
let operator = null;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        output.textContent += number.textContent
    });
});

//we check if there is a number displayed. If there is, we store the number as "numOne", then we store the selected operator, and it clears the input displayed so that a new number can be entered for calculation.

operators.forEach(ope => {
    ope.addEventListener('click', () =>{
        if(output.textContent) {
            numOne = parseFloat(output.textContent);
            operator = ope.textContent;
            //with this line of code we can still show the first number and operator entered in the input field.
            showInput.textContent = `${numOne} ${operator}`;
            output.textContent = '';
        }
    });
});

//if the first number is entered, an operator is selected, and a second number has been entered and is being displayed, we can proceed with the calculation.
equals.addEventListener('click', () => {
    if (numOne !== null && operator && output.textContent) {
        const numTwo = parseFloat(output.textContent);
        let result;
        
        switch(operator) {
            case '+':
                result = numOne + numTwo;
                break;
            
            case '-':
                result = numOne - numTwo;
                break;

            case 'x':
                result = numOne * numTwo;
                break;

            case '/':
                result = numOne / numTwo;
                break;
        }
        
        //displays the result
        output.textContent = result;
        showInput.textContent = '';

        //resets stored values
        numOne = null;
        operator = null;
    }
});

//clears output and stored values
clearInput.addEventListener('click', () => {
    output.textContent = '';
    showInput.textContent = '';
    numOne = null;
    operator = null;
});



