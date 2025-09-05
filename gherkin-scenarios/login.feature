 Funcionalidade: Realizar Login
  Cenário: deve realizar login
  Dado que o usuário está na página de login do site
  Quando ele preenche o login e a senha corretos
  E clica no botão "Login"
  Então ele é direcionado para a página de produtos
  


 Funcionalidade: Visualizar mensagem de login inválido
  Cenário: Login com email e senha inválidos
  Dado que o usuário está na página inicial
  Quando ele preenche um email e senha inválidos
  E clica no botão "Login"
  Então ele vê uma mensagem de erro  

  Funcionalidade: visualizar mensagem de erro ao deixar campos em branco
    Cenário: Login com campo em branco 
      Dado que o usuário está ná página inicial
      Quando ele não preenche o login
      E clica no botão "Login"
      Então ele vê uma mensagem de erro

  Funcionalidade: Verificar mensagem de erro ao tentar logar sem senha 
     Cénario: Login sem senha 
     Dado que o usuário está ná página inicial 
     Quando ele preenche o Login 
     E coloca somente o usuário
     E clica no botão "Login" 
     Então ele vê uma mensagem de erro 

     Funcionalidade: exibir mensagem de erro ao tentar logar com usuário bloqueado
     Cénario: Login com usuário bloqueado
      Dado que o usuário está ná página inicial
      Quando ele preenche o Login 
      E clica no botão "Login" 
      Então ele vê uma mensagem de erro
