import { user } from '../../support/factories/login/index'
import Produtos from '../../support/factories/constants/Products'
import Products from '../../support/pages/products'
import CartPage from '../../support/pages/cartPage'
import checkoutPage from '../../support/pages/checkoutPage'
import { checkoutCredentials} from '../../support/factories/checkout/index'


describe('checkoutPage', function () {


    beforeEach(function () {

        cy.UILogin(user)

        cy.checkProductsPage()
        Products.addProduct(Produtos.Backpack)

        Products.clickCart()
        CartPage.CheckOutButton()


    })

    it('Deve ir para a página de checkout', function () {
        cy.setAllure('CheckOut', 'Deve ir para a página de checkout')


        cy.ValidarPagina('Checkout: Your Information')

    })

    it('Deve preencher campos do checkout e finalizar', function () {

        cy.setAllure('CheckOut', 'Deve preencher campos do checkout e finalizar')

        checkoutPage.fillCheckoutForm(checkoutCredentials)
        checkoutPage.ContinueButton()

        cy.ValidarPagina('Checkout: Overview')

        checkoutPage.FinishButton()

        cy.validarCheckoutcompleto()

       



    })

    it('Deve validar preço total da compra', function () {

        cy.setAllure('CheckOut', 'Deve validar preço total da compra')
        checkoutPage.fillCheckoutForm(checkoutCredentials)
        checkoutPage.ContinueButton()

        cy.ValidarPagina('Checkout: Overview')

        cy.validarTotalCompra(32.29)

    })

    

})