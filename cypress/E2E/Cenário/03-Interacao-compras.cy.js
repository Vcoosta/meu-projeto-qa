describe('Efetuar "Login" com Sucesso', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Efetuar "Login" com Sucesso na Plataforma', () => {
        //Validando o conteúdo da página inicial

        cy.get('#product-2 img.product').click();
        cy.get('#product-form h1').should('have.text', 'Noir jacket');
        cy.get('#product-select-option-0').select('L');
        cy.get('#product-select-option-1').select('Red');
        cy.get('#add').click();
        cy.wait(5000)
        cy.get('#minicart a.desktop').should('have.text', 'My Cart (1)');
        cy.get('#minicart a.desktop').click();

    })
})