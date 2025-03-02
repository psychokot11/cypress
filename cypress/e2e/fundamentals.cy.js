describe('fundamentals test', () => {
  it('Contains header test', () => {
    cy.visit('/fundamentals');
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i);
  });
  it('Accordion works correctly', () => {
    cy.visit('/fundamentals');
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
  });
});
