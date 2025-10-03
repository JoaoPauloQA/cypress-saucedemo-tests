import { user } from '../../support/factories/login'

describe('Ordenar Produtos', function () {


    beforeEach(function () {

        cy.UILogin(user)

    })


    it('Deve ordenar os produtos por preço (baixo-alto)', function () {

        cy.setAllure('Produtos', 'Ordenar produtos por preço (baixo-alto)')

        cy.FiltroButton('Price (low to high)')

        cy.ValidarOrdemPorPreço('asc')



    })

    it(' Deve ordenar os produtos por preço (alto-baixo', function () {

        cy.setAllure('Produtos', 'Ordenar produtos por preço (alto-baixo)')

        cy.FiltroButton('Price (high to low)')

        cy.ValidarOrdemPorPreço('desc')


    })

    it(" Deve ordenar os produtos por nome (A-Z)", function () {

        cy.setAllure('Produtos', 'Ordenar produtos por nome (A-Z)')


        cy.FiltroButton('Name (A to Z)')

        cy.ValidarOrdemPorNome('asc')

    })

    it(" Deve ordenar os produtos por nome (Z-A)", function () {

        cy.setAllure('Produtos', 'Ordenar produtos por nome (Z-A)')
        cy.FiltroButton('Name (Z to A)')

        cy.ValidarOrdemPorNome('desc')
    })

})
