import { user , invalidLogin} from '../support/factories/login'
import Login from '../support/pages/login'
import Products from '../support/pages/products'

context('Visualizar Loja', function () {


    it('Acessar lista de produtos', function () {


        Login.go()
        Login.fillCredentials(user)
        Login.submit()


        cy.get('span[data-test="title"]')
            .should('have.text', 'Products')
    })

}) 

context ('Visualizar mensagem de login inválido', function() {


    it ('Login com email e senha inválidos', function () {


        Login.go()
        Login.fillCredentials(invalidLogin)
        Login.submit() 

        cy.contains('Epic sadface: Username and password do not match any user in this service')
            .should('be.visible')

    }) 
})

context ('Verificar se produto foi adicionado ao carrinho', function () {


    it('Visualizar produto no carrinho' , function () {

        Login.go()
        Login.fillCredentials(user)
        Login.submit()

        Products.addtoCart()
        Products.clickCart()

        cy.contains('div[data-test="inventory-item-name"]','Sauce Labs Backpack')
               .should('be.visible')


    })
})


