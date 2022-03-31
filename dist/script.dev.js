"use strict";

var firstNumber = 0; ///number buttons

var numberButton = document.querySelectorAll('[data-number]');
console.log(numberButton); //operation buttons

var operationButtons = document.querySelectorAll('[data-operation]');
console.log(operationButtons); //equals button

var equalsButton = document.querySelector('[data-equals]'); //delete button

var deleteButton = document.querySelector('[data-delete]'); ///display area

var displayArea = document.querySelector('#calcDisplay'); //decimal point

var decimalButton = document.querySelector('[data-decimal]'); //percentage sign//

var percentButton = document.querySelector('[data-percent]'); ///check first thing in displayArea.innerhtml if it is a minus then delete it...if its not a minus then add a minus to the start..if else inside event listener..
//to get the number keys to add onto display

numberButton.forEach(function (button) {
  button.addEventListener('click', function (e) {
    displayArea.innerHTML += e.target.innerHTML;
  });
});
var operators = ["+", "-", "÷", "x"]; //get equals button to work

equalsButton.addEventListener('click', function (e) {
  var currentOperator = "";
  operators.forEach(function (operator) {
    if (displayArea.innerHTML.includes(operator)) {
      currentOperator = operator;
    }
  });
  var arrayToCalculate = displayArea.innerHTML.split(currentOperator);
  console.log(arrayToCalculate);

  if (currentOperator === '+') {
    var result = parseInt(firstNumber) + parseInt(arrayToCalculate[1]);
    displayArea.innerHTML = result;
  } else if (currentOperator === '-') {
    var _result = parseInt(firstNumber) - parseInt(arrayToCalculate[1]);

    displayArea.innerHTML = _result;
  } else if (currentOperator === '÷') {
    var _result2 = parseInt(firstNumber) / parseInt(arrayToCalculate[1]);

    displayArea.innerHTML = _result2;
  } else if (currentOperator === 'x') {
    var _result3 = parseInt(firstNumber) * parseInt(arrayToCalculate[1]);

    displayArea.innerHTML = _result3;
  }
}); //get operation buttons to work

operationButtons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    firstNumber = displayArea.innerHTML;
    console.log(firstNumber);
    displayArea.innerHTML += e.target.innerHTML;
  });
}); //get delete button to work 

deleteButton.addEventListener('click', function (e) {
  displayArea.innerHTML = ' ';
});