# 🧪 Testes Automatizados com Cypress

Este repositório contém testes end-to-end (E2E) para aplicações web, desenvolvidos com Cypress, com foco em boas práticas de automação.

## 🚀 Tecnologias e bibliotecas utilizadas
- Cypress 13 – Testes E2E 
- **allure** – Relatórios detalhados de execução

## 🧱 Padrões de projeto utilizados

- **Page Object Model (POM):** Separação das interações de página em arquivos próprios, para facilitar reutilização e manutenção dos testes.
- **Command Pattern:** Ações comuns encapsuladas em comandos customizados do Cypress 

## 📸 Demonstração 


## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js >= 16.14.0 ([site oficial](https://nodejs.org/))  
- Yarn  
 

## Passo a passo
```bash
 1. Clone este repositório 

git clone https://github.com/JoaoPauloQA/testes-automatizados-com-cypress
cd seuprojeto  

2. Instale as dependências do projeto

yarn install 

6. Execute os testes com Cypress
Para abrir a interface visual: 
npx cypress open

```


## ✅  testes implementados

### UI
- **Login** (válido, inválido e via token)
- **Recuperação de senha** (fluxo completo)
- **Registro de usuário** (dados dinâmicos, validações)

### Outros tipos de testes

- **Integração**: Fluxos completos como login → adicionar produto → checkout
- **Regressão**: Executados via CI/CD no GitHub Actions
- **Exploratórios**: Testes negativos, inputs inválidos e cenários de borda


## 📁 Estrutura do projeto

```bash
cypress/
├── fixtures/         
├── e2e/      # Testes (specs)
│   ├── login.cy.js
│   └── Products.cy.js
├── support/
│   ├── commands.js   # Comandos customizados
│   └── index.js      # Configurações globais

```

👨‍💻 Autor
**João Paulo** 
*QA Automation Engineer | Test Automation Enthusiast*
🔗 [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-paulo-6a1b3a207/)
📧 jopaulomartinsdacostaa@gmail.com


