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


Cypress.Commands.add('FiltroButton', function (filtro) { 

        cy.get('select[data-test="product-sort-container"]').select(filtro)


}) 

Cypress.Commands.add('ValidarOrdemPorPreço', function ( ordem = 'asc') {

          cy.get('.inventory_item_price')
             .then(($Prices) => {

                let pricesText =  [...$Prices].map((el => el.innerText.replace('$', ''))
             )

             let ordenado = [...pricesText].sort((a, b) => a - b)

             if (ordem === 'desc') { 

                ordenado = ordenado.reverse()
             }

             expect(pricesText).to.deep.equal(ordenado)
             
             })
    })

    Cypress.Commands.add('ValidarOrdemPorNome', function ( ordem = 'asc') {


        cy.get('.inventory_item_name')
            .then(($Names) => {

                let namesText = [...$Names].map((el => el.innerText))

                let ordenado = [...namesText].sort((a, b) => a.localeCompare(b))

                if ( ordem === 'desc') {

                        ordenado = ordenado.reverse()
                }

                expect(namesText).to.deep.equal(ordenado)
            })
    }) 


    Cypress.Commands.add('CheckProductsPage', function () {

           cy.get('span[data-test="title"]').should('have.text', 'Products')

    })


