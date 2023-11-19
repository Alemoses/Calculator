let firstNum = '';
let secondNum = '';
let operator = '';
let result = 0;

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

