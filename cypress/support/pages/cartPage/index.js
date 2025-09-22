
class CartPage {

 getProduct(nomeProduto){

    return  cy.contains('div[data-test="inventory-item-name"]', nomeProduto)


 }

  validarProdutonoCarrinho(nomeProduto){

    this.getProduct(nomeProduto).should('be.visible')

}

  validarProdutosnoCarrinho(listaProdutos){
    listaProdutos.forEach(produto => this.validarProdutonoCarrinho(produto))


  }

  validarQuantidadeProdutosEsperada(quantidade){

    cy.get('span[data-test="shopping-cart-badge"]').should('have.text', quantidade)
  }

}

export default new CartPage