import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:4200/'
Given('a calculator', () => {
  cy.visit(url)
})

And('I start with a {string}', (key) => {
  let newString = '#btn-key-' + key
// And('I start with a 2', () => {
//   let newString = '#btn-key-2'
  cy.get(newString).click()
})

When('I {string} a value of {string}', (action, key) => {
  let actionString = '#btn-key-' + action
  cy.get(actionString).click()
  let newString = '#btn-key-' + key
  cy.get(newString).click()
})

Then('I will have a total of {string}', (value) => {
  let newString = '#btn-key-equals'
  cy.get(newString).click()
  cy.get('#maindisplay').contains(value).should('be.visible')
})
