import { user, invalidLogin, blockedUser } from '../support/factories/login'
import errors from '../support/factories/constants/errors'
import Login from '../support/pages/login/'



context(' Login', function () {


    it('deve realizar login', function () {

        cy.setAllure('Login', 'Deve realizar login com sucesso')

        cy.UILogin(user)

        cy.checkProductsPage()
    })

})


it('Deve redirecionar para a tela de Login ao realizar logout', function () {

    cy.setAllure('Login', 'Deve redirecionar para a tela de Login ao realizar Logout')

    cy.UILogin(user)
    Login.MenuButton()
    Login.LogoutButton()
    cy.checkLoginPage()

})

it('Login com email e senha inválidos', function () {

    cy.setAllure('Login', 'Login com email e senha inválidos')

    cy.UILogin(invalidLogin)

    Login.checkErrorMessage(errors.invalidUser)


})



it('Deve exibir mensagem de erro ao deixar campos em branco', function () {

    cy.setAllure('Login', 'Deve exibir mensagem de erro ao deixar campos em branco')

    cy.UILogin({ user: '', password: '' });

    Login.checkErrorMessage(errors.requiredUsername)



})

it('Deve exibir mensagem de erro solicitando a senha', function () {

    cy.setAllure('Login', 'Deve exibir mensagem de erro solicitando a senha')

    cy.UILogin({ user: 'standard_user', password: '' })

    Login.checkErrorMessage(errors.requiredPassword)
})



it('Deve exibir mensagem de erro ao tentar Logar com usuário bloqueado', function () {

    cy.setAllure('Login', 'Deve exibir mensagem de erro ao tentar Logar com usuário bloqueado')

    cy.UILogin(blockedUser)

    Login.checkErrorMessage(errors.blockedUser)


})






