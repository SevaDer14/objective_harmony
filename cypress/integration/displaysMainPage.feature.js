describe('Displays Main Page', () => {
  context('if accessed by route', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('should highlight correct navigation tab', () => {
      cy.get('[data-cy=navigation-tabs]').within(() => {
        cy.contains('Home').should('have.class', 'Mui-selected')
      })
    })

    it('should display page header and placeholder content', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
      cy.get('[data-cy=description]').should('be.visible')
      cy.get("[data-cy='/zen_explorer-cta']").should('be.visible')
    })
  })

  context('if accessed by navigation menu from zen explorer page', () => {
    beforeEach(() => {
      cy.visit('/zen_explorer')
      cy.get('[data-cy=navigation-tabs]').within(() => {
        cy.contains('Home').click()
      })
    })

    it('should have correct route', () => {
      cy.url().should('contain', '/')
    })

    it('should highlight correct navigation tab', () => {
      cy.get('[data-cy=navigation-tabs]').within(() => {
        cy.contains('Home').should('have.class', 'Mui-selected')
      })
    })

    it('should display page header and placeholder content', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
      cy.get('[data-cy=description]').should('be.visible')
      cy.get("[data-cy='/zen_explorer-cta']").should('be.visible')
    })
  })
})
