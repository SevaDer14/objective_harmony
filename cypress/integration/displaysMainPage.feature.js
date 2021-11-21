describe('Displays Main Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=navigation-tabs]').within(() => {
      cy.contains('Home').as('homeTab')
    })
  })

  context('if accessed by route', () => {
    it('should display logo in the app header', () => {
      cy.get('[data-cy=header-logo]').should('be.visible')
    })

    it('should highlight correct navigation tab', () => {
      cy.get('@homeTab').should('have.class', 'Mui-selected')
    })

    it('should display placeholder content', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
      cy.get('[data-cy=description]').should('be.visible')
      cy.get("[data-cy='/zen_explorer-cta']").should('be.visible')
    })
  })

  context('if accessed by navigation menu from zen explorer page', () => {
    beforeEach(() => {
      cy.visit('/zen_explorer')
      cy.get('@homeTab').click()
    })

    it('should have correct route', () => {
      cy.url().should('contain', '/')
    })

    it('should highlight correct navigation tab', () => {
      cy.get('@homeTab').should('have.class', 'Mui-selected')
    })
  })
})
