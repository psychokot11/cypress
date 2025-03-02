describe('forms tests', () => {
    beforeEach(() => {
        cy.visit('/forms');
    });
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i);
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
        cy.get('@subscribe-input').type('test@gmail.com');
        cy.contains(/successfully subbed: test@gmail.com/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/successfully subbed: test@gmail.com/i).should('exist');
        cy.wait(3000);
        cy.contains(/successfully subbed: test@gmail.com/i).should('not.exist');

        cy.contains(/invalid email: test@gmail.io/i).should('not.exist');
        cy.get('@subscribe-input').type('test@gmail.io');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/invalid email: test@gmail.io/i).should('exist');
        cy.wait(3000);
        cy.contains(/invalid email: test@gmail.io/i).should('not.exist');

        cy.contains(/fail!/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/fail!/i).should('exist');
        cy.wait(3000);
        cy.contains(/fail!/i).should('not.exist');
    });
});