import Products from '../../support/pages/products'
import { user } from '../../support/factories/login'
import Produtos from '../../support/factories/constants/Products'
import CartPage from '../../support/pages/cartPage'


describe('Carrinho de compras', function () {

    beforeEach(function () {

        cy.UILogin(user)

    })


    it('Visualizar produto no carrinho', function () {

        cy.setAllure('Carrinho', 'Visualizar produto no carrinho')

        Products.addProduct(Produtos.Backpack)
        Products.clickCart()

        CartPage.validarProdutonoCarrinho(Produtos.Backpack)


    })


    it('Deve adicionar múltiplos produtos e validar', function () {

         cy.setAllure('Carrinho', 'Adicionar múltiplos produtos')


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

        cy.setAllure('Carrinho', 'Visualizar detalhes do produto')

        Products.addProduct(Produtos.Backpack)
        Products.clickCart()

        Products.Detailsbutton(Produtos.Backpack)

        Products.ValidarDetalhesProduto(Produtos.Backpack)

    })

    it('Deve remover produto do carrinho', function () {

         cy.setAllure('Carrinho', 'Remover produto do carrinho')

        Products.addProduct(Produtos.fleeceJacket)
        Products.clickCart()
        Products.RemoverProduto('sauce-labs-fleece-jacket')

        Products.ValidarCarrinhoVazio()

    })

    
})