describe('Efetuar interação com todos os menuss', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.saveHtml('pagina-inicial')
    })

    it('Efetuar interação com todos os menus', () => {
        //Validando o conteúdo da página inicial
        cy.get('#main-menu a[href="/"]').should('have.text', 'Home');
        cy.get('#main-menu a[href="/"]').should('be.visible');

        //Acessano menu "Products" e validando o conteúdo da página
        cy.get('#main-menu a[href="/collections/all"]').click();
        cy.get('#page-content h1').should('have.text', 'Products');
        cy.get('#page-content h1').should('be.visible');

        //Acessano menu "Blogs" e validando o conteúdo da página
        cy.get('#main-menu a[href="/blogs/news"]').click();
        cy.get('#page-content a[href="/blogs/news/12832805-first-post"]').should('have.text', 'First Post');
        cy.get('#page-content a[href="/blogs/news/12832805-first-post"]').should('be.visible');
    
        //Acessano menu "About Us" e validando o conteúdo da página
        cy.get('#main-menu a[href="/pages/about-us"]').click();
        cy.get('#page-content h1').should('have.text', 'About Us');
        cy.get('#page-content p').should('have.text', 'This is a demo site created for Sauce, an awesome new way to make your Shopify site social. Sauce allows you to let customers to share what they purchase to their friends, and see what their friends have purchased or "wanted" on your store.');
        
    })
})  