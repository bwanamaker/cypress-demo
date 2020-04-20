/// <reference types="cypress" />

context('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('should fail login without credentials', () => {
        cy.get('[class*=fa-sign-in]').click();
        expect('[class="flash error"]').to.exist;
    });

    it('should log in & out successfully', () => {
        cy.get('[id="username"]').type('tomsmith');
        cy.get('[id="password"]').type('SuperSecretPassword!');
        cy.get('[class*=fa-sign-in]').click();
        expect('[class*=icon-signout]');
        cy.get('[class*=icon-signout]').click();
        expect('[class*=fa-sign-in]');
    });
});
