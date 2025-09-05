import { user } from '../../factories/login'
import { el } from './elements'

class Login {

    go() {

        cy.visit('https://www.saucedemo.com/')

    }

    fillCredentials(userData) {

        if (userData?.user) {
            cy.get(el.user).type(userData.user)

        }
        if (userData?.password) {
            cy.get(el.password).type(userData.password)

        }

    }

    submit() {

        cy.contains(el.button).click()

    }

    checkErrorMessage(expectedMessage){

        cy.get('h3[data-test="error"]').should('contain', expectedMessage)
    }

    LogoutButton(){


        cy.contains(el.LogoutButton).click()
    }

    MenuButton() {

        cy.contains(el.menuButton).click()
    }



}

export default new Login() 