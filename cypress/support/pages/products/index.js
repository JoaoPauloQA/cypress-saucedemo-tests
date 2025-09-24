import {el} from './elements'

class Products {

addProduct(ProductName) {
        cy.contains(el.carbutton, ProductName)
        .closest('.inventory_item')
        .find('button[data-test^="add-to-cart-"]')
        .click()
       
    }

    clickCart() {

         cy.get(el.carIcon).click()

    }

    RemoverProduto(product) {

        cy.get(el.RemoveButton(product)).click()
    }

    ValidarCarrinhoVazio() {

         cy.get(el.carIcon).should('not.exist')
    }

    ValidarDetalhesProduto() {

        cy.get(el.Detalhes).should('be.visible')
    }

    Detailsbutton(ProductName) { 

        cy.contains(ProductName).click()
    }

    

      

}

export default new Products ()