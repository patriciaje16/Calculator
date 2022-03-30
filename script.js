
///////////need to take into consideration the decimal point, the +/-, the %, and it won't take more than one number unless it fits in the parameters ive put. 


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








//to get the number keys to add onto display
numberButton.forEach(button => {
  button.addEventListener('click', (e) => {
   displayArea.innerHTML += e.target.innerHTML

  
  })
})


//get equals button to work
equalsButton.addEventListener('click', (e) => {
  
    
    const arrayToCalculate = displayArea.innerHTML.split('')
    
  if (arrayToCalculate[1] === '+' ) {
      const result = parseInt(arrayToCalculate[0]) + parseInt(arrayToCalculate[2]) 
      displayArea.innerHTML = result
    } else if (arrayToCalculate[1] === '-') {
      const result = parseInt(arrayToCalculate[0]) - parseInt(arrayToCalculate[2]) 
      displayArea.innerHTML = result
    }else if (arrayToCalculate[1] === '÷') {
      const result = parseInt(arrayToCalculate[0]) / parseInt(arrayToCalculate[2]) 
      displayArea.innerHTML = result
    }else if (arrayToCalculate[1] === '*') {
      const result = parseInt(arrayToCalculate[0]) * parseInt(arrayToCalculate[2]) 
      displayArea.innerHTML = result
    }else if (arrayToCalculate[1] === 'x') {
      const result = parseInt(arrayToCalculate[0]) * parseInt(arrayToCalculate[2]) 
      displayArea.innerHTML = result
    }

  })

  

//get operation buttons to work
operationButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    displayArea.innerHTML += e.target.innerHTML
  

  })

})

//get delete button to work 

deleteButton.addEventListener('click', (e) => {
   displayArea.innerHTML = ' ';
});



////percent button////
percentButton.addEventListener('click', () => {

})