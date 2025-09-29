# 🧪 Testes Automatizados com Cypress

Este repositório contém uma suíte de testes automatizados para o e-commerce SauceDemo, cobrindo fluxos críticos como login, carrinho e checkout.

Os testes foram desenvolvidos com Cypress seguindo boas práticas de automação, utilizando Page Objects, Cypress Commands e relatórios gerados com Allure.
Além disso, o projeto está configurado em CI/CD para execução automática no GitHub Actions.

## 🚀 Tecnologias e bibliotecas utilizadas
- **Cypress** 13 – Testes E2E 
- **allure** – Relatórios detalhados de execução
- **GitHub Actions** – Integração Contínua (CI/CD)

📌 Cenários de Teste

- ✔️ Login com sucesso
- ✔️ Login inválido
- ✔️ Adicionar produtos ao carrinho
- ✔️ Fluxo completo de Checkout (campos obrigatórios e finalização)
- ✔️ Validação de mensagens de erro (nome, sobrenome, CEP)
- ✔️ Validação do valor total da compra

## 📊 Relatórios com Allure

Os relatórios de execução são gerados automaticamente com o Allure.
Para visualizar localmente:

npm run allure:generate
npm run allure:open


Exemplo de relatório:

## ⚙️ Integração Contínua (CI/CD)

O pipeline está configurado no GitHub Actions, garantindo:

Execução automática a cada push/pull request
Geração dos relatórios de testes
Validação do código antes do merge


## ▶️ Como Executar Localmente
```bash
 Clone o repositório:

git clone https://github.com/JoaoPauloQA/cypress-saucedemo-tests.git
cd cypress-saucedemo-tests


Instale as dependências:

npm install


Execute os testes no modo interativo:

npx cypress open


Ou em modo headless (para CI/CD):

npx cypress run

```
## 📁 Estrutura do projeto

```bash
cypress/
  ├── e2e/                # Cenários de testes
  ├── support/
  │   ├── commands.js     # Cypress Commands customizados
  │   ├── pages/          # Page Objects
  │   └── factories/      # Massa de dados e constantes
.github/
  └── workflows/          # Pipeline de CI/CD


```

👨‍💻 Autor
**João Paulo** 
*QA Automation Engineer | Test Automation Enthusiast*
🔗 [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-paulo-6a1b3a207/)
📧 jopaulomartinsdacostaa@gmail.com


