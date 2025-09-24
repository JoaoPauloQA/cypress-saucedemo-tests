import {user} from '../support/factories/login/index'
import Produtos from '../support/factories/constants/Products'
import Products from '../support/pages/products'
import CartPage from '../support/pages/cartPage'

context('checkoutPage', function () {

  
    beforeEach(function () { 

        cy.UILogin(user)

        cy.checkProductsPage()
        Products.addProduct(Produtos.Backpack)


    })

    it ('Deve ir para a página de checkout', function () {

         Products.clickCart()
         cy.get('button[data-test="checkout"]').click()

    })
  

})