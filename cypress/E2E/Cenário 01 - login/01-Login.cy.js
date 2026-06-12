describe('Efetuar "Login" com Sucesso', () => {
beforeEach(() => {
    // Usando o seu custom command recém-criado
    cy.visit('/')
})

it('Efetuar "Login" com Sucesso', () => {
    cy.get('#main-menu a[href="/"]').click();

})
})  