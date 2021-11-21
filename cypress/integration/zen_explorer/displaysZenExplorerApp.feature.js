describe('Displays "Zen Explorer" App', () => {
  context('if accessed by route', () => {
    beforeEach(() => {
      cy.visit('/zen_explorer')
    })

    it('should display page header', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
    })

    it('should highlight correct navigation tab', () => {
      cy.get('[data-cy=navigation-tabs]').within(() => {
        cy.contains('Zen Explorer').should('have.class', 'Mui-selected')
      })
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
      cy.get('[data-cy=navigation-tabs]').within(() => {
        cy.contains('Zen Explorer').should('have.class', 'Mui-selected')
      })
    })

    it('should display page header', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
    })
  })

  context('if accessed by navigation menu from main page', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('[data-cy=navigation-tabs]').within(() => {
        cy.contains('Zen Explorer').click()
      })
    })

    it('should have correct route', () => {
      cy.url().should('contain', '/zen_explorer')
    })

    it('should highlight correct navigation tab', () => {
      cy.get('[data-cy=navigation-tabs]').within(() => {
        cy.contains('Zen Explorer').should('have.class', 'Mui-selected')
      })
    })

    it('should display page header', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
    })
  })
})
