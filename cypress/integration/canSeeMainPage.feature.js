describe('User Can See Main Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays page header and content', () => {
    cy.get('[data-cy=page-header]').should('be.visible')
    cy.get('[data-cy=description]').should('be.visible')
    cy.get('[data-cy=zen-explorer-cta]').should('be.visible')
  })
})
