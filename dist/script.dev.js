"use strict";

///////////need to take into consideration the decimal point, the +/-, the %, and it won't take more than one number unless it fits in the parameters ive put. 
///number buttons
var numberButton = document.querySelectorAll('[data-number]');
console.log(numberButton); //operation buttons

var operationButtons = document.querySelectorAll('[data-operation]');
console.log(operationButtons); //equals button

var equalsButton = document.querySelector('[data-equals]'); //delete button

var deleteButton = document.querySelector('[data-delete]'); ///display area

var displayArea = document.querySelector('#calcDisplay'); //decimal point

var decimalButton = document.querySelector('[data-decimal]'); //percentage sign//

var percentButton = document.querySelector('[data-percent]');
var firstNumber = 0;
var secondNumber = 0; //to get the number keys to add onto display

numberButton.forEach(function (button) {
  button.addEventListener('click', function (e) {
    displayArea.innerHTML += e.target.innerHTML;
  });
}); //get equals button to work

equalsButton.addEventListener('click', function (e) {
  var arrayToCalculate = displayArea.innerHTML.split('');

  if (arrayToCalculate[1] === '+') {
    var result = parseInt(firstNumber) + parseInt(arrayToCalculate[2]);
    displayArea.innerHTML = result;
  } else if (arrayToCalculate[1] === '-') {
    var _result = parseInt(firstNumber) - parseInt(arrayToCalculate[2]);

    displayArea.innerHTML = _result;
  } else if (arrayToCalculate[1] === '÷') {
    var _result2 = parseInt(firstNumber) / parseInt(arrayToCalculate[2]);

    displayArea.innerHTML = _result2;
  } else if (arrayToCalculate[1] === '*') {
    var _result3 = parseInt(firstNumber) * parseInt(arrayToCalculate[2]);

    displayArea.innerHTML = _result3;
  } else if (arrayToCalculate[1] === 'x') {
    var _result4 = parseInt(firstNumber) * parseInt(arrayToCalculate[2]);

    displayArea.innerHTML = _result4;
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