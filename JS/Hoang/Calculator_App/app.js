// Variable Declaration

let firstNumber = '';
let secondNumber = '';
let operation = '';

const calcResult = document.getElementById('result');
const displayOutput = document.getElementById('input');

// Calculation execution after the Result button click

calcResult.addEventListener('click', performCalculation);

/**
 * perform the actual calculation based on user input
 * @return{number} result of the calculation
 */

function performCalculation() {
    let operationresult;

    if (!firstNumber || !secondNumber) return;

    if (operation === 'plus') {
        operationresult = Number(firstNumber) + Number(secondNumber);
    }

    if (operation === 'minus') {
        operationresult = Number(firstNumber) - Number(secondNumber);
    }

    if (operation === 'multiply') {
        operationresult = Number(firstNumber) * Number(secondNumber);
    }

    if (operation === 'divide') {
        operationresult = Number(firstNumber) / Number(secondNumber);
    }

    displayOutput.innerText = operationresult;

    firstNumber = '' + operationresult;
    secondNumber = '';
    operation = '';
}

// Targetting all operators to execute the calculation

document.querySelectorAll('.operators > div').forEach(button => {
    button.addEventListener('click', function () {
        updateSelectedOperation(this);
        if (secondNumber) {
            firstNumber = secondNumber;
            secondNumber = '';
        }
    })
})

// Selecting numbers of the calculator

document.querySelectorAll('.numbers > div').forEach(button => {
    button.addEventListener('click', function () {
        if (this.innerText === 'C') {
            calcReset();
            updateDisplay();
            return;
        }
        updateSelectedNumber(this);
        updateDisplay();
    });
})

// Resetting of the calculator and display

function calcReset() {
    firstNumber = '';
    secondNumber = '';
    operation = '';
}

// Display value

function updateDisplay() {
    displayOutput.innerText = `${secondNumber}`;
}

/**
 * update the variable operation with user choice
 * @return {void}
 */

function updateSelectedNumber(value) {
    if (value.innerText === '.' && secondNumber.indexOf('.') > -1) {
        return;
    }
    secondNumber += value.innerText;
}

/**
 * update the variable operation with user choice
 * @return {void}
 */

function updateSelectedOperation(value) {
    // console.log(value.innerText);
    switch (value.innerText) {
        case '+':
            operation = 'plus';
            break;
        case '-':
            operation = 'minus';
            break;
        case '×':
            operation = 'multiply';
            break;
        case '÷':
            operation = 'divide';
            break;
        default:
            console.log('oops');
            break;
    }
}