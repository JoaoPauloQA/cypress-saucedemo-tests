🧪 Testes Automatizados com Cypress

Este repositório contém testes end-to-end (E2E) para aplicações web, desenvolvidos com Cypress, focando em UI e boas práticas de automação. O projeto também integra relatórios Allure e CI/CD para garantir que os testes rodem automaticamente a cada commit.

🚀 Tecnologias e bibliotecas utilizadas

Cypress 12+ – Testes E2E de interface (UI)

@shelex/cypress-allure-plugin – Geração de relatórios Allure

🧱 Padrões de projeto utilizados

Page Object Model (POM): Organização das interações de página em arquivos próprios para facilitar manutenção.

Command Pattern: Ações comuns encapsuladas em comandos customizados do Cypress (cy.login, cy.addProduct, etc).


✅ Testes implementados
UI

Login: válido, inválido e via token

Cadastro/Registro de usuário: dados dinâmicos e validações

Produtos: seleção, adição ao carrinho, detalhes

Checkout: fluxo completo de compra, pagamento e confirmação
