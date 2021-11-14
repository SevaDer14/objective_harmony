describe('visitor can see greeting', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays greeting on landing page', () => {
    cy.get('[data-cy=greeting-message]').should('have.text', 'Oi Boi');
  });
});
