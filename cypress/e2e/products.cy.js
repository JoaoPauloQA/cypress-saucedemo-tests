import Products from '../support/pages/products'
import {user} from '../support/factories/login'

context ('Verificar se produto foi adicionado ao carrinho', function () {


    it('Visualizar produto no carrinho' , function () {

        cy.UILogin(user)

        Products.addtoCart()
        Products.clickCart()

        cy.contains('div[data-test="inventory-item-name"]','Sauce Labs Backpack')
               .should('be.visible')


    })
})