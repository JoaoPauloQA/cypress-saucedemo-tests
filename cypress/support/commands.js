// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Login from '../support/pages/login/'


Cypress.Commands.add('UILogin', function(userData){

        Login.go()
        Login.fillCredentials(userData)
        Login.submit() 
    
})

Cypress.Commands.add('checkLoginPage', function () {

   
        cy.get('input[data-test="username"]').should('be.visible')
})

Cypress.Commands.add('checkProductsPage', function () {


         cy.get('span[data-test="title"]')
            .should('have.text', 'Products')
})