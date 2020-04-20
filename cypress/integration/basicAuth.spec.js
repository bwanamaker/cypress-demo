/// <reference types="cypress" />

context('Basic Auth', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
    });

    it('should log in', () => {
        cy.get('h3').should('contain', 'Basic Auth');
    });
});
