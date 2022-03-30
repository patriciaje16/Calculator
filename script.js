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

// deleteButton.addEventListener('click', (e) => {
  // const deleted = 

 
 



