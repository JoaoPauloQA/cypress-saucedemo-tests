import { user } from '../../factories/login'
import { el } from './elements'

class Login {

    go() {

        cy.visit('https://www.saucedemo.com/')

    }

    fillCredentials(userData) {

        cy.get(el.user).type(userData.user)
        cy.get(el.password).type(userData.password)

    }

    submit() {

        cy.contains(el.button).click()

    }

    

}

export default new Login() 