import { user } from '../support/factories/login/index'
import Produtos from '../support/factories/constants/Products'
import Products from '../support/pages/products'
import CartPage from '../support/pages/cartPage'
import checkoutPage from '../support/pages/checkoutPage'


context('checkoutPage', function () {


    beforeEach(function () {

        cy.UILogin(user)

        cy.checkProductsPage()
        Products.addProduct(Produtos.Backpack)

        Products.clickCart()
        CartPage.CheckOutButton()


    })

    it('Deve ir para a página de checkout', function () {
        cy.setAllure('CheckOut', 'Deve ir para a página de checkout')


        cy.ValidarProductsPage('Checkout: Your Information')

    })

    it('Deve preencher campos do checkout', function () {

        cy.setAllure('CheckOut', 'Deve preencher campos do checkout')

        checkoutPage.fillCheckoutForm()
        checkoutPage.ContinueButton()

        cy.ValidarProductsPage('Checkout: Overview')



    })

})