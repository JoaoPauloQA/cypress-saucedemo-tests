import { user, invalidLogin, blockedUser } from '../support/factories/login'
import errors from '../support/factories/constants/errors'
import Login from '../support/pages/login/'



context('Realizar Login', function () {


    it(' deve realizar login', function () {


        cy.UILogin(user)

        cy.checkProductsPage()
    })

})

context('Logout', function () {

    it('Deve redirecionar para a tela de Login ao realizar logout', function () {

        cy.UILogin(user)
        Login.MenuButton()
        Login.LogoutButton()
        cy.checkLoginPage()

    })
})

context('Visualizar mensagem de login inválido', function () {


    it('Login com email e senha inválidos', function () {


        cy.UILogin(invalidLogin)

        Login.checkErrorMessage(errors.invalidUser)


    })



    it('Deve exibir mensagem de erro ao deixar campos em branco', function () {

        cy.UILogin({ user: '', password: '' });

        Login.checkErrorMessage(errors.requiredUsername)



    })

    it('Deve exibir mensagem de erro solicitando a senha', function () {


        cy.UILogin({ user: 'standard_user', password: '' })

        Login.checkErrorMessage(errors.requiredPassword)
    })



    it('Deve exibir mensagem de erro ao tentar Logar com usuário bloqueado', function () {

        cy.UILogin(blockedUser)

        Login.checkErrorMessage(errors.blockedUser)


    })

})




