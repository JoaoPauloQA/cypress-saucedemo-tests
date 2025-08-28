Funcionalidade: Visualizar Loja
  Como usuário cadastrado
  Quero realizar login
  Para acessar a lista de produtos disponíveis na loja

Cenário: Acessar lista de produtos
  Dado que o usuário está na página de login do site
  Quando ele preenche o login e a senha corretos
  E clica no botão "Login"
  Então ele é direcionado para a página de produtos
  E a lista de produtos é exibida corretamente


Funcionalidade: Visualizar mensagem de login inválido
  Como usuário
  Quero tentar realizar login com credenciais inválidas
  Para visualizar uma mensagem de erro

Cenário: Login com email e senha inválidos
  Dado que o usuário está na página inicial
  Quando ele preenche um email e senha inválidos
  E clica no botão "Login"
  Então ele vê uma mensagem de erro 



Funcionalidade: Verificar se produto foi adicionado ao carrinho

Cenário: Visualizar produto no carrinho
  Dado que o usuário está na página de produtos
  Quando ele clica em "Add to Cart" de um produto
  E clica no ícone do carrinho
  Então ele vê o produto adicionado no carrinho