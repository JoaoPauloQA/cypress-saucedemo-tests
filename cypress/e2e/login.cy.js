import { user, invalidLogin, blockedUser } from '../support/factories/login'
import Login from '../support/pages/login/'



context('Realizar Login', function () {


    it(' deve realizar login', function () {


        cy.UILogin(user)


        cy.get('span[data-test="title"]')
            .should('have.text', 'Products')
    })

})

context('Visualizar mensagem de login inválido', function () {


    it('Login com email e senha inválidos', function () {


        cy.UILogin(invalidLogin)

        Login.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')


    })



    it('Deve exibir mensagem de erro ao deixar campos em branco', function () {

        cy.UILogin({ user: '', password: '' });

        Login.checkErrorMessage('Epic sadface: Username is required')



    })

    it('Deve exibir mensagem de erro solicitando a senha', function () {


        cy.UILogin({ user: 'standard_user', password: '' })

        Login.checkErrorMessage('Epic sadface: Password is required')
    })

    

    it ('Deve exibir mensagem de erro ao tentar Logar com usuário bloqueado', function () {
        
        cy.UILogin(blockedUser)

        Login.checkErrorMessage('Epic sadface: Sorry, this user has been locked out.')

         
    })

})





