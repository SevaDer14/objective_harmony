describe('Displays Main Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display page header and placeholder content', () => {
    cy.get('[data-cy=page-header]').should('be.visible')
    cy.get('[data-cy=description]').should('be.visible')
    cy.get("[data-cy='/zen_explorer-cta']").should('be.visible')
  })
})
