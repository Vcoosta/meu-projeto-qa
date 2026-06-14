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

     it.only('Efetuar interação com o carrinho de compras - Check Out - Desistência', () => {
        cy.adicionarProdutoEIrParaCheckout();
        cy.get('#cart a[href="/cart/change?line=1&quantity=0"]').click();
        cy.get('#cart p').should('have.text', 'It appears that your cart is currently empty! Continue Shopping.');
        cy.get('#page-content h1').should('have.text', 'My Cart');
    })

    it('Efetuar interação com o carrinho de compras - Informações de pagamento', () => {
        cy.preencherInformacoesDePagamento();
    })
})