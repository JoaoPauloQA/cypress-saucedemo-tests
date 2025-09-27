import { el } from './elements'

class checkoutPage {


    fillCheckoutForm() {
         
        cy.get(el.FirstName).type('John')
        cy.get(el.lastName).type('Krauser')
        cy.get(el.zipCode).type('12345')

    }

    ContinueButton() {

        cy.get(el.continueButton).click()
    }
}

export default new checkoutPage()