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

}

export default new Products ()