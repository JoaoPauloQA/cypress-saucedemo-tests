import { user } from '../support/factories/login/index'
import Produtos from '../support/factories/constants/Products'
import Products from '../support/pages/products'
import CartPage from '../support/pages/cartPage'
import checkoutPage from '../support/pages/checkoutPage'
import { checkoutCredentials, checkoutCredentialsIncomplet, checkoutCredentialsWithoutFirstName, checkoutCredentialsWithoutlastName } from '../support/factories/checkout/index'
import errors from '../support/factories/constants/errors'

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


        cy.ValidarPagina('Checkout: Your Information')

    })

    it('Deve preencher campos do checkout e finalizar', function () {

        cy.setAllure('CheckOut', 'Deve preencher campos do checkout e finalizar')

        checkoutPage.fillCheckoutForm(checkoutCredentials)
        checkoutPage.ContinueButton()

        cy.ValidarPagina('Checkout: Overview')



    })

    it.only('Deve validar preço total da compra', function () {

        cy.setAllure('CheckOut', 'Deve validar preço total da compra')
        checkoutPage.fillCheckoutForm(checkoutCredentials)
        checkoutPage.ContinueButton()

        cy.ValidarPagina('Checkout: Overview')

        cy.validarTotalCompra(32.29)

    })

    it('Deve mostrar mensagem de erro solicitando o zip code', function () {


        cy.setAllure('CheckOut', 'Deve mostrar mensagem de erro solicitando o zip code')

        checkoutPage.fillCheckoutForm(checkoutCredentialsIncomplet)
        checkoutPage.ContinueButton()

        checkoutPage.checkErrorMessage(errors.requiredZip)




    })

    it('Deve mostrar mensagem de erro solicitando primeiro nome', function () {


        cy.setAllure('CheckOut', 'Deve mostrar mensagem de erro solicitando primeiro nome')

        checkoutPage.fillCheckoutForm(checkoutCredentialsWithoutFirstName)
        checkoutPage.ContinueButton()

        checkoutPage.checkErrorMessage(errors.firstNameRequired)


    })

    it('Deve mostrar mensagem de erro solicitando sobrenome', function () {


        cy.setAllure('CheckOut', 'Deve mostrar mensagem de erro solicitando sobrenome')

        checkoutPage.fillCheckoutForm(checkoutCredentialsWithoutlastName)
        checkoutPage.ContinueButton()

        checkoutPage.checkErrorMessage(errors.lastNameRequired)

    })

})