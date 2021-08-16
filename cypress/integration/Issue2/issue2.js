import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:4200/dashboard'
Given('I navigate to the Create Role page', () => {
  cy.visit(url)
  cy.get('#linkRoles').click()

})

When('I enter all the role information', () => {
  cy.get('#new-role').type("MEAN Engineer")
  cy.get('#add-role-button').click()
})

Then('the role is created', () => {
  cy.contains('MEAN Engineer').should('be.visible')
})

When('When I do not enter the Role Name field', () => {
  cy.get('#add-role-button').click()
})

// When I do not enter the Role Name field
// Then an error message is displayed
// And the role is not created
