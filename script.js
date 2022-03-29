///number buttons
const numberButton = document.querySelectorAll('[data-number]')

//operation buttons
const operationButtons = document.querySelectorAll('[data-operation]')

//equals button
const equalsButton = document.querySelector('[data-equals]')

//delete button
const deleteButton = document.querySelector('[data-delete]')

///display area
const displayArea = document.querySelector('calcDisplay')



//to get the number keys to add onto display
numberButton.forEach(button => {
  button.addEventListener('click', () => {
    console.log("it works")

  })
})

//get equals button to work
equalsButton.addEventListener('click', () => {
    console.log("it works")

  })

//get operation buttons to work
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log("it works")

  })

})

//get delete button to work

deleteButton.addEventListener('click', () => {
  console.log("it works")

})



