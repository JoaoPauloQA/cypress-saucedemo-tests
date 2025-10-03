import {user} from '../../support/factories/login'
import checkoutPage from '../../support/pages/checkoutPage'
import Produtos from '../../support/factories/constants/Products'
import errors from '../../support/factories/constants/errors'
import Products from '../../support/pages/products'
import CartPage from '../../support/pages/cartPage'
import { checkoutCredentials, checkoutCredentialsIncomplet, checkoutCredentialsWithoutFirstName, checkoutCredentialsWithoutlastName } from '../../support/factories/checkout/index'


describe('Checkout - Negativo', function () {

    beforeEach(function () {

        cy.UILogin(user)

        cy.checkProductsPage()
        Products.addProduct(Produtos.Backpack)

        Products.clickCart()
        CartPage.CheckOutButton()


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