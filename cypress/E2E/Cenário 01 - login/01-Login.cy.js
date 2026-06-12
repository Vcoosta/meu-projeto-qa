describe('Efetuar "Login" com Sucesso', () => {
beforeEach(() => {
    // Usando o seu custom command recém-criado
    cy.visit('/')
})

it('Efetuar "Login" com Sucesso na Plataforma', () => {
    
    
    cy.get('#logo img').should('have.attr', 'alt', 'Sauce Demo');
    cy.get('#logo img').should('be.visible');
    cy.get('#tagline h3').should('have.text', '\n                \n                Just a demo site showing off what Sauce can do.\n                \n              ');
})
})  