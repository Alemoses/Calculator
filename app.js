let firstNum = '';
let secondNum = '';
let operator = '';
let result = 0;
let clickCount = 0;
let decimalClick = 0;

const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const display = document.querySelector('#display');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');
const equalsBtn = document.querySelector('#equals');
const decimalBtn = document.querySelector('#decimal');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(numA, operator, numB) {
  if (operator === '+') {
    result = add(numA, numB);
    console.log(add(numA, numB));
  } else if (operator === '-') {
    result = subtract(numA, numB);
    console.log(subtract(numA, numB));
  } else if (operator === '*' || operator === 'x') {
    result = multiply(numA, numB);
    console.log(multiply(numA, numB));
  } else {
    result = divide(numA, numB);
    console.log(divide(numA, numB));
    if (numB === 0) {
      return "Can't divide by 0";
    }
  };
  return result;
}

//renders numbers to the display when corresponding numbered button is clicked and saves them to variables when an operator button is clicked
function displayNums() {
  numberBtn.forEach(number => {
    number.addEventListener("click", e => {
      operatorBtn.forEach(btn => btn.disabled = false);
      display.value += e.target.value;
      if (operator === '') {
        firstNum += e.target.value;
        console.log(firstNum)
      } else {
        secondNum += e.target.value;
        console.log(secondNum)
      }
    });
  });
}

//renders operators to the display when corresponding operator is clicked
function displayOperators() {
  operatorBtn.forEach(op => {
    op.addEventListener("click", e => {
      clickCount++;
      display.value += e.target.value;
      operator = e.target.value;
      secondNum = '';
      decimalBtn.disabled = false;
      console.log(operator)
      if (clickCount >= 1) {
        operatorBtn.forEach(btn => btn.disabled = true)
      }
      if (clickCount >= 2) {
        firstNum = result;
      }
    });
  });
}

//renders decimal button on display element and add decimal point to either firstNum or secondNum depending on when decimalBtn is clicked
function displayDecimal() {
  decimalBtn.addEventListener('click', e => {
    display.value += e.target.value;
    decimalClick++;
    if (decimalClick === 1) {
      firstNum += e.target.value;
      decimalBtn.disabled = true;
    } else {
      secondNum += e.target.value;
      decimalBtn.disabled = true;
    }
  });
}

