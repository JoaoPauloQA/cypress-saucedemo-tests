import {el} from './elements'

class Products {

addtoCart() {
        cy.contains(el.carbutton).click()
       
    }

    clickCart() {

         cy.get(el.carIcon).click()

    }

}

export default new Products ()