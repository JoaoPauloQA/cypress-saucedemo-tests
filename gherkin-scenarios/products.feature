Funcionalidade: Verificar se produto foi adicionado ao carrinho

    Cenário: Visualizar produto no carrinho
    Dado que o usuário está na página de produtos
    Quando ele clica em "Add to Cart" de um produto
    E clica no ícone do carrinho
    Então ele vê o produto adicionado no carrinho

  Funcionalidade: Adicionar multiplos produtos. 

    Cenário: Usuário adiciona múltiplos produtos e valida a quantidade no carrinho
     Dado que o usuário está na página de produtos
     Quando ele adiciona os produtos "Produto A,B,C,D,E" ao carrinho
     E clica no ícone do carrinho
     Então ele vê que a quantidade de produtos no carrinho é 5 

  Funcionalidade: Verificar os detalhes do produto 
     Cenário: Usuário visualiza os detalhes de um produto adicionado ao carrinho
      Dado que o usuário esta na página de produtos
      Quando ele adiciona o "produto A"  ao carrinho
      E clica no ícone do carrinho
      Então ele vê o produto adicionado no carrinho 
      Quando ele clica no produto 
       Então são exibidos os detalhes do produto 

  Funcionalidade: Remover produto do carrinho

     Cenário: Usuário remove produto do carrinho e valida que está vazio
      Dado que o usuário esta na página de produtos
      Quando ele adiciona o "Produto A" ao carrinho 
      E clica no ícone do carrinho
      Então ele vê o produto adicionado no carrinho
      Quando ele clica em remover produto
      Então ele vê o carrinho vazio
    
  Funcionalidade: Ordenar Produtos por Preço 

       Cenário: Usuário ordena produtos do menor para o maior preço
      Dado que o usuário está na página de produtos
      Quando ele clica no filtro para ordenar produtos
      E seleciona "Price(Low to High)"
      Então ele vê os produtos ordenados do menor para o maior preço

  Funcionalidade: Ordenar produtos por preço

    Cenário: Usuário ordena produtos do maior para o menor preço
    Dado que o usuário está na página de produtos
    Quando ele clica no filtro de ordenação
    E seleciona "Price (High to Low)"
    Então ele vê os produtos ordenados do maior para o menor preço

  Funcionalidade: Ordenar produtos por nome

    Cenário: Usuário ordena produtos do A ao Z
    Dado que o usuário está na página de produtos
    Quando ele clica no filtro de ordenação
    E seleciona "Name (A-Z)"
    Então ele vê os produtos ordenados do A ao Z

  Funcionalidade: Ordenar produtos por nome

    Cenário: Usuário ordena produtos do Z ao A
    Dado que o usuário está na página de produtos
    Quando ele clica no filtro de ordenação
    E seleciona "Name (Z-A)"
    Então ele vê os produtos ordenados do Z ao A