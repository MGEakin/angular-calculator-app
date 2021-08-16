import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:4200/'
Given('a calculator', () => {
  cy.visit(url)
})

// And('I start with a 2', (key) => {
//   let newString = '#btn-key-' + key
And('I start with a 2', () => {
  let newString = '#btn-key-2'
  cy.get(newString).click()
})

When('I add a value of 2', () => {
  let actionString = '#btn-key-add'
  cy.get(actionString).click()
  let newString = '#btn-key-2'
  cy.get(newString).click()
})

Then('I will have a total of 4', () => {
  let newString = '#btn-key-equals'
  cy.get(newString).click()
  cy.get('#maindisplay').contains('4').should('be.visible')
})
