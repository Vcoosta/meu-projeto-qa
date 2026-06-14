// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />



// Criando o comando personalizado
Cypress.Commands.add('adicionarProdutoEIrParaCheckout', (tamanho = 'L', cor = 'Red', quantidade = '2') => {
    
    // 1. Selecionando o produto
    cy.get('#product-2 img.product').click();
    cy.get('#product-form h1').should('have.text', 'Noir jacket');
    
    // 2. Usando os parâmetros para tamanho e cor
    cy.get('#product-select-option-0').select(tamanho);
    cy.get('#product-select-option-1').select(cor);
    
    // 3. Adicionando ao carrinho
    cy.get('#add').click();
    
    // 4. Validação do carrinho 
    // (O Cypress já espera automaticamente o elemento aparecer, mas se a sua 
    // loja for muito lenta, aumentamos o timeout apenas nesta linha)
    cy.get('#minicart a.desktop', { timeout: 10000 }).should('have.text', 'My Cart (1)');
    
    // 5. Contorno de rota e acesso ao carrinho
    cy.get('#main-menu a[href="/"]').click();
    cy.get('#minicart a.desktop').click();
    cy.get('#drawer input[type="submit"]').click();
    
    // 6. Preenchimento do Checkout
    cy.get('#page-content h1').should('have.text', 'My Cart').and('be.visible');
    
    cy.get('[name="note"]').click().clear().type('teste de descrição'); 
    
    // 7. Usando o parâmetro de quantidade
    cy.get('div.tr [name="updates[]"]').click().clear().type(quantidade); 
    
    cy.get('[name="checkout"]').click();
});