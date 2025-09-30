import { el } from './elements'

class checkoutPage {


    fillCheckoutForm(userData) {

        if (userData.FirstName) {
            cy.get(el.FirstName).type(userData.FirstName)
        }
            if (userData.lastName) {
                cy.get(el.lastName).type(userData.lastName)
            }
            if (userData.zipCode) {
            cy.get(el.zipCode).type(userData.zipCode)
            }

        }
    



        checkErrorMessage(expectedMessage) {

            cy.get('h3[data-test="error"]').should('contain', expectedMessage)
        }

        ContinueButton() {

            cy.get(el.continueButton).click()
        }

        FinishButton() {

            cy.get('button[data-test="finish"]').click()
        }
    
}


export default new checkoutPage()