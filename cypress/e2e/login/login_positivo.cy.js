import {user} from '../../support/factories/login'

describe(' Login-Sucesso', function () {


    it('deve realizar login', function () {

        cy.setAllure('Login', 'Deve realizar login com sucesso')

        cy.UILogin(user)

        cy.checkProductsPage()
    })
})