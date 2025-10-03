import { invalidLogin, blockedUser , WithoutUser, noPassword} from '../../support/factories/login'
import errors from '../../support/factories/constants/errors'
import Login from '../../support/pages/login'



describe(' Login - Fluxo Negativo', function () {



it('Login com email e senha inválidos', function () {

    cy.setAllure('Login', 'Login com email e senha inválidos')

    cy.UILogin(invalidLogin)

    Login.checkErrorMessage(errors.invalidUser)


})



it('Deve exibir mensagem de erro ao deixar campos em branco', function () {

    cy.setAllure('Login', 'Deve exibir mensagem de erro ao deixar campos em branco')

    cy.UILogin(WithoutUser);

    Login.checkErrorMessage(errors.requiredUsername)



})

it('Deve exibir mensagem de erro solicitando a senha', function () {

    cy.setAllure('Login', 'Deve exibir mensagem de erro solicitando a senha')

    cy.UILogin(noPassword)

    Login.checkErrorMessage(errors.requiredPassword)
})



it('Deve exibir mensagem de erro ao tentar Logar com usuário bloqueado', function () {

    cy.setAllure('Login', 'Deve exibir mensagem de erro ao tentar Logar com usuário bloqueado')

    cy.UILogin(blockedUser)

    Login.checkErrorMessage(errors.blockedUser)


})


})



