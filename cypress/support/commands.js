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
import { faker } from '@faker-js/faker';



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

});
// Criando o comando personalizado para preencher as informações de pagamento

Cypress.Commands.add('preencherInformacoesDePagamento', () => {
    // Interceptação de rede
    cy.intercept('GET', '**/shipping_rates*').as('getShippingRates');

    // Geração de massa de dados dinâmica
    const enderecoDinamico = faker.location.streetAddress();
    const complementoDinamico = faker.location.secondaryAddress();
    const cidadeDinamica = faker.location.city();
    const cepDinamico = faker.location.zipCode();
    const telefoneDinamico = faker.phone.number();

    // Fluxo de ações
    cy.adicionarProdutoEIrParaCheckout();

    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('teste@gmail.com');
    cy.get('[name="countryCode"]').select('BR').trigger('change', { force: true });

    cy.get('#TextFieldP0-38').click().type('Vitor');
    cy.get('#TextFieldP0-39').click().type('Costa');

    // Preencher os campos de endereço
    cy.get('#TextFieldP0-41').click().type('QA Automation');
    cy.get('#TextFieldP0-44').click().type(enderecoDinamico);
    cy.get('#TextFieldP0-46').click().type(complementoDinamico);
    cy.get('#TextFieldP0-48').click().type(cidadeDinamica);
    cy.get('#TextFieldP0-51').click().type(telefoneDinamico);

    cy.get('[name="save_shipping_information"]').check();
    cy.get('#FormP0-15 p._1fragemtb').click();
    cy.get('#TextFieldP0-49').click().type(cepDinamico).blur();
});