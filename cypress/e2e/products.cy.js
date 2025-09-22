import Products from '../support/pages/products'
import { user } from '../support/factories/login'
import Produtos from '../support/factories/constants/Products'
import CartPage from '../support/pages/cartPage'

context('Carrinho de compras', function () {

    beforeEach(function () {

        cy.UILogin(user)
    })


    it('Visualizar produto no carrinho', function () {

        Products.addProduct(Produtos.Backpack)
        Products.clickCart()

        CartPage.validarProdutonoCarrinho(Produtos.Backpack)


    })


    it('Deve adicionar múltiplos produtos e validar', function () {


        Products.addProduct(Produtos.Backpack)
        Products.addProduct(Produtos.BikeLight)
        Products.addProduct(Produtos.fleeceJacket)
        Products.addProduct(Produtos.BoltTShirt)
        Products.addProduct(Produtos.Onesie)

        Products.clickCart()

        const listaProdutos = Object.values(Produtos)

        CartPage.validarProdutosnoCarrinho(listaProdutos)

        CartPage.validarQuantidadeProdutosEsperada(Object.keys(Produtos).length)


    })

    it('Deve visualizar detalhes do produto', function () {

        Products.addProduct(Produtos.Backpack)
        Products.clickCart()

        cy.contains(Produtos.Backpack).click()

         cy.get('div[data-test="inventory-item-name"]')
         .should('be.visible')
         .contains(Produtos.Backpack)
    })  

    it ('Deve remover produto do carrinho', function () {



     Products.addProduct(Produtos.fleeceJacket)
     Products.clickCart()
     cy.get('button[data-test="remove-sauce-labs-fleece-jacket"]').click()

    cy.get('span[data-test="shopping-cart-badge"]').should('not.exist')

    })
})