describe('Displays "Zen Explorer" App', () => {
  context('if accessed by route', () => {
    beforeEach(() => {
      cy.visit('/zen_explorer')
    })

    it('should display page header', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
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

    it('should display page header', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
    })
  })
})
