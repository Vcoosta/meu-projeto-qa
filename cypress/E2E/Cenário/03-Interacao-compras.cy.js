import { faker } from '@faker-js/faker';
describe('Cenários de Interação com Compras', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Efetuar interação com o carrinho de compras', () => {
        //Validando o conteúdo da página inicial
        cy.get('#product-2 img.product').click();
        cy.get('#product-form h1').should('have.text', 'Noir jacket');
        cy.get('#product-select-option-0').select('L');
        cy.get('#product-select-option-1').select('Red');
        cy.get('#add', { timeout: 10000 }).click();

        cy.get('#minicart a.desktop').should('have.text', 'My Cart (1)');
    })

    it('Efetuar interação com o carrinho de compras - Check Out', () => {
        cy.adicionarProdutoEIrParaCheckout();
    })

    it.only('Efetuar interação com o carrinho de compras - Informações de pagamento', () => {
        cy.intercept('GET', '**/shipping_rates*').as('getShippingRates');

        const enderecoDinamico = faker.location.streetAddress(); // Ex: 123 Main St
        const complementoDinamico = faker.location.secondaryAddress(); // Ex: Apt 4B
        const cidadeDinamica = faker.location.city();            // Ex: Springfield
        const cepDinamico = faker.location.zipCode();            // Ex: 12345-678
        const telefoneDinamico = faker.phone.number();           // Ex: 555-1234


        cy.adicionarProdutoEIrParaCheckout();
        cy.get('[name="email"]').click();
        cy.get('[name="email"]').type('teste@gmail.com');
        cy.get('[name="countryCode"]').select('BR').trigger('change', { force: true });
        cy.get('#TextFieldP0-38').click().type('Vitor');
        cy.get('#TextFieldP0-39').click().type('Costa');
        // preencher os campos de endereço usando dados dinâmicos do Faker
        cy.get('#TextFieldP0-41').click().type('QA Automation');
        cy.get('#TextFieldP0-44').click().type(enderecoDinamico);
        cy.get('#TextFieldP0-46').click().type(complementoDinamico);
        cy.get('#TextFieldP0-48').click().type(cidadeDinamica);
        cy.get('#TextFieldP0-51').click().type(telefoneDinamico);
        cy.get('[name="save_shipping_information"]').check();
        cy.get('#FormP0-15 p._1fragemtb').click();
        cy.get('#TextFieldP0-49').click().type(cepDinamico).blur();
        

    })
})