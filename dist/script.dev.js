"use strict";

///number buttons
var numberButton = document.querySelectorAll('[data-number]');
console.log(numberButton); //operation buttons

var operationButtons = document.querySelectorAll('[data-operation]');
console.log(operationButtons); //equals button

var equalsButton = document.querySelector('[data-equals]'); //delete button

var deleteButton = document.querySelector('[data-delete]'); ///display area

var displayArea = document.querySelector('#calcDisplay'); //to get the number keys to add onto display

numberButton.forEach(function (button) {
  button.addEventListener('click', function (e) {
    displayArea.innerHTML += e.target.innerHTML;
  });
}); //get equals button to work

equalsButton.addEventListener('click', function (e) {
  var arrayToCalculate = displayArea.innerHTML.split('');

  if (arrayToCalculate[1] === '+') {
    var result = parseInt(arrayToCalculate[0]) + parseInt(arrayToCalculate[2]);
    displayArea.innerHTML = result;
  } else if (arrayToCalculate[1] === '-') {
    var _result = parseInt(arrayToCalculate[0]) - parseInt(arrayToCalculate[2]);

    displayArea.innerHTML = _result;
  } else if (arrayToCalculate[1] === '÷') {
    var _result2 = parseInt(arrayToCalculate[0]) / parseInt(arrayToCalculate[2]);

    displayArea.innerHTML = _result2;
  } else if (arrayToCalculate[1] === '*') {
    var _result3 = parseInt(arrayToCalculate[0]) * parseInt(arrayToCalculate[2]);

    displayArea.innerHTML = _result3;
  } else if (arrayToCalculate[1] === 'x') {
    var _result4 = parseInt(arrayToCalculate[0]) * parseInt(arrayToCalculate[2]);

    displayArea.innerHTML = _result4;
  }
}); //get operation buttons to work

operationButtons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    displayArea.innerHTML += e.target.innerHTML;
  });
}); //get delete button to work 

deleteButton.addEventListener('click', function (e) {
  displayArea.innerHTML = ' ';
});