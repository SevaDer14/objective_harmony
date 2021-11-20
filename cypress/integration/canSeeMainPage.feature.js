describe('User Can See Main Page', () => {
  let pageHeader = undefined

  beforeEach(() => {
    cy.visit('/')
    pageHeader = cy.contains('Objective Harmony')
  })

  it('displays page header and content', () => {
    pageHeader.should('be.visible')
    cy.get('[data-cy=description]').should('be.visible')
    cy.get('[data-cy=zen-explorer-cta]').should('be.visible')
  })
})
