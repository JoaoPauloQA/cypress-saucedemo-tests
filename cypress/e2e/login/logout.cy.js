import { user} from '../../support/factories/login'
import Login from '../../support/pages/login'

describe(' Logout-Sucesso', function () {

    it('Deve redirecionar para a tela de Login ao realizar logout', function () {

        cy.setAllure('Login', 'Deve redirecionar para a tela de Login ao realizar Logout')

        cy.UILogin(user)
        Login.MenuButton()
        Login.LogoutButton()
        cy.checkLoginPage()

    })

})