describe('Displays "Zen Explorer" App', () => {
  beforeEach(() => {
    cy.visit('/zen_explorer')
    cy.get('[data-cy=navigation-tabs]').within(() => {
      cy.contains('Zen Explorer').as('zenExplorerTab')
    })
  })

  context('correctly', () => {
    it('displays page header', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
    })

    it('highlights correct navigation tab', () => {
      cy.get('@zenExplorerTab').should('have.class', 'Mui-selected')
    })
  })

  context('by accessing with cta on main page', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get("[data-cy='/zen_explorer-cta']").click()
    })

    it('has correct route', () => {
      cy.url().should('contain', '/zen_explorer')
    })

    it('highlights correct navigation tab', () => {
      cy.get('@zenExplorerTab').should('have.class', 'Mui-selected')
    })
  })

  context('by accessing with navigation menu', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('@zenExplorerTab').click()
    })

    it('has correct route', () => {
      cy.url().should('contain', '/zen_explorer')
    })

    it('highlights correct navigation tab', () => {
      cy.get('@zenExplorerTab').should('have.class', 'Mui-selected')
    })
  })
})
