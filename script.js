

let firstNumber = 0

///number buttons
const numberButton = document.querySelectorAll('[data-number]')
console.log(numberButton)

//operation buttons
const operationButtons = document.querySelectorAll('[data-operation]')
console.log(operationButtons)
//equals button
const equalsButton = document.querySelector('[data-equals]')

//delete button
const deleteButton = document.querySelector('[data-delete]')

///display area
const displayArea = document.querySelector('#calcDisplay')

//decimal point
const decimalButton = document.querySelector('[data-decimal]')

//percentage sign//
const percentButton = document.querySelector('[data-percent]')

///check first thing in displayArea.innerhtml if it is a minus then delete it...if its not a minus then add a minus to the start..if else inside event listener..





//to get the number keys to add onto display
numberButton.forEach(button => {
  button.addEventListener('click', (e) => {
   displayArea.innerHTML += e.target.innerHTML

  
  })
})

const operators = ["+", "-", "÷", "x"]


//get equals button to work
equalsButton.addEventListener('click', (e) => {
  
  let currentOperator = ""




    operators.forEach( (operator) => {
      if (displayArea.innerHTML.includes(operator)) {
        currentOperator = operator
      }
    })



    const arrayToCalculate = displayArea.innerHTML.split(currentOperator)
    console.log(arrayToCalculate)

  if (currentOperator === '+' ) {
      const result = parseInt(firstNumber) + parseInt(arrayToCalculate[1]) 
      displayArea.innerHTML = result
    } else if (currentOperator === '-') {
      const result = parseInt(firstNumber) - parseInt(arrayToCalculate[1]) 
      displayArea.innerHTML = result
    }else if (currentOperator === '÷') {
      const result = parseInt(firstNumber) / parseInt(arrayToCalculate[1]) 
      displayArea.innerHTML = result
    }else if (currentOperator === 'x') {
      const result = parseInt(firstNumber) * parseInt(arrayToCalculate[1]) 
      displayArea.innerHTML = result
    }

  })

  

//get operation buttons to work
operationButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    firstNumber = displayArea.innerHTML
    
     console.log(firstNumber)
    
    displayArea.innerHTML += e.target.innerHTML
  

  })

})

//get delete button to work 

deleteButton.addEventListener('click', (e) => {
   displayArea.innerHTML = ' ';
});



 