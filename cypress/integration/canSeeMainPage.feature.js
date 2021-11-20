const pageHeader = cy.contains('Objective Harmony')

describe('User Can See Main Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays page header and content', () => {
    pageHeader.should('be.visible')
    cy.get('[data-cy=description]').should('be.visible')
    cy.get('[data-cy=zen-explorer-cta]').should('be.visible')
  })
})
