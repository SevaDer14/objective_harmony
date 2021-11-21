describe('Displays "Zen Explorer" App', () => {
  beforeEach(() => {
    cy.visit('/zen_explorer')
    cy.get('[data-cy=navigation-tabs]').within(() => {
      cy.contains('Zen Explorer').as('zenExplorerTab')
    })
  })

  context('if accessed by route', () => {
    it('should display page header', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
    })

    it('should highlight correct navigation tab', () => {
      cy.get('@zenExplorerTab').should('have.class', 'Mui-selected')
    })
  })

  context('if accessed by cta on main page', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get("[data-cy='/zen_explorer-cta']").click()
    })

    it('should have correct route', () => {
      cy.url().should('contain', '/zen_explorer')
    })

    it('should highlight correct navigation tab', () => {
      cy.get('@zenExplorerTab').should('have.class', 'Mui-selected')
    })
  })

  context('if accessed by navigation menu from main page', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('@zenExplorerTab').click()
    })

    it('should have correct route', () => {
      cy.url().should('contain', '/zen_explorer')
    })

    it('should highlight correct navigation tab', () => {
      cy.get('@zenExplorerTab').should('have.class', 'Mui-selected')
    })
  })
})
