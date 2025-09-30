Funcionalidade: Página de checkout
 Cenário: Usuário preenche checkout e visualiza informações do pedido
  Dado que o usuário está na página do Carrinho
  Quando ele clica no botão "Checkout"
  Então ele é direcionado para a página do formulário de checkout
  Quando ele preenche os campos obrigatórios do formulário 
  Então ele visualiza o resumo do pedido (checkout overview)
  

Funcionalidade: Página de checkout

 Cenário: usuário preenche checkout  e finaliza compra
 Dado que o usuário está na página do Carrinho
 Quando ele clica no botão "Checkout"
 Então ele é direcionado para a página do formulário de checkout
  Quando ele preenche os campos obrigatórios do formulário
 Então ele preenche o forms 
 E clica em "Continue"
 Então ele visualiza o preço total
 Quando ele clica em "Finish"
 Então a compra é finalizada com sucesso
