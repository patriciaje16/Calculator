describe("The Main page loads", () => {
  it("Loads succesfully", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
  })
})

describe("Basic Calculations", () => {
  it("Can perform basic addition", () => {
    //arrange
    cy.visit("http://127.0.0.1:5502/index.html")
    //act
    //click 9
    cy.get("[data-cy=nine]").click()
    ///click +
    cy.get("[data-cy=plus]").click()
    //click 2
    cy.get("[data-cy=two]").click()
    //click =
    cy.get("[data-cy=equals]").click()
    //assert
    cy.get("[data-cy=calcScreen]").should("have.text", "11");;
  })
  it("Can perform basic division", () => {
    //arrange
    cy.visit("http://127.0.0.1:5502/index.html")
    //act
    //click 7
    cy.get("[data-cy=seven]").click()
    ///click ÷
    cy.get("[data-cy=divide]").click()
    //click 2
    cy.get("[data-cy=two]").click()
    //click =
    cy.get("[data-cy=equals]").click()
    //assert
    cy.get("[data-cy=calcScreen]").should("have.text", "3.5");
  })
  it("Can perform basic subtraction", () => {
    //arrange
    cy.visit("http://127.0.0.1:5502/index.html")
    //act
    //click 7
    cy.get("[data-cy=seven]").click()
    ///click -
    cy.get("[data-cy=minus]").click()
    //click 4
    cy.get("[data-cy=four]").click()
    //click =
    cy.get("[data-cy=equals]").click()
    //assert
    cy.get("[data-cy=calcScreen]").should("have.text", "3");
  })
  it("Can perform basic multiplication", () => {
    //arrange
    cy.visit("http://127.0.0.1:5502/index.html")
    //act
    //click 5
    cy.get("[data-cy=five]").click()
    ///click x
    cy.get("[data-cy=multiply]").click()
    //click 6
    cy.get("[data-cy=six]").click()
    //click =
    cy.get("[data-cy=equals]").click()
    //assert
    cy.get("[data-cy=calcScreen]").should("have.text", "30");
  })
})
describe("Basic Calculations with more than one digit", () => {
  it("Can perform addition with more than two numbers in each input", () => {
    //arrange
    cy.visit("http://127.0.0.1:5502/index.html")
    //act
    //click 9
    cy.get("[data-cy=nine]").click()
    //click 0
    cy.get("[data-cy=zero]").click()
    ///click +
    cy.get("[data-cy=plus]").click()
    //click 2
    cy.get("[data-cy=two]").click()
    //click 1
    cy.get("[data-cy=one]").click()
    //click =
    cy.get("[data-cy=equals]").click()
    //assert
    cy.get("[data-cy=calcScreen]").should("have.text", "111");;
  })
  it("Can perform subtraction with more than two numbers in each input", () => {
    //arrange
    cy.visit("http://127.0.0.1:5502/index.html")
    //act
    //click 8
    cy.get("[data-cy=eight]").click()
    //click 5
    cy.get("[data-cy=five]").click()
    ///click -
    cy.get("[data-cy=minus]").click()
    //click 1
    cy.get("[data-cy=one]").click()
    //click 8
    cy.get("[data-cy=eight]").click()
    //click =
    cy.get("[data-cy=equals]").click()
    //assert
    cy.get("[data-cy=calcScreen]").should("have.text", "67");;
  })
  it("Can perform multiplication with more than two numbers in each input", () => {
    //arrange
    cy.visit("http://127.0.0.1:5502/index.html")
    //act
    //click 3
    cy.get("[data-cy=three]").click()
    //click 4
    cy.get("[data-cy=four]").click()
    ///click x
    cy.get("[data-cy=multiply]").click()
    //click 6
    cy.get("[data-cy=six]").click()
    //click 5
    cy.get("[data-cy=five]").click()
    //click =
    cy.get("[data-cy=equals]").click()
    //assert
    cy.get("[data-cy=calcScreen]").should("have.text", "2210");;
  })
  it("Can perform division with more than two numbers in each input", () => {
    //arrange
    cy.visit("http://127.0.0.1:5502/index.html")
    //act
    //click 8
    cy.get("[data-cy=eight]").click()
    //click 0
    cy.get("[data-cy=zero]").click()
    ///click ÷
    cy.get("[data-cy=divide]").click()
    //click 2
    cy.get("[data-cy=two]").click()
    //click 0
    cy.get("[data-cy=zero]").click()
    //click =
    cy.get("[data-cy=equals]").click()
    //assert
    cy.get("[data-cy=calcScreen]").should("have.text", "4");;
  })

})
describe("Application of other operator keys", () => {
  it("Can change a number into it's percentage value", () => {
    //arrange
    cy.visit("http://127.0.0.1:5502/index.html")
    //act
    //click 9
    cy.get("[data-cy=nine]").click()
    //click %
    cy.get("[data-cy=percent]").click()
    
    //assert
    cy.get("[data-cy=calcScreen]").should("have.text", "0.09");
    ;
  })
})