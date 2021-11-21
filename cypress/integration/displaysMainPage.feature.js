describe('Displays Main Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=navigation-tabs]').within(() => {
      cy.contains('Home').as('homeTab')
    })
  })

  context('correctly', () => {
    it('displays logo in the app header', () => {
      cy.get('[data-cy=header-logo]').should('be.visible')
    })

    it('highlights correct navigation tab', () => {
      cy.get('@homeTab').should('have.class', 'Mui-selected')
    })

    it('displays placeholder content', () => {
      cy.get('[data-cy=page-header]').should('be.visible')
      cy.get('[data-cy=description]').should('be.visible')
      cy.get("[data-cy='/zen_explorer-cta']").should('be.visible')
    })
  })

  context('by accessing with navigation menu', () => {
    beforeEach(() => {
      cy.visit('/zen_explorer')
      cy.get('@homeTab').click()
    })

    it('has correct route', () => {
      cy.url().should('contain', '/')
    })

    it('highlights correct navigation tab', () => {
      cy.get('@homeTab').should('have.class', 'Mui-selected')
    })
  })

  context('by accessing with header logo', () => {
    beforeEach(() => {
      cy.visit('/zen_explorer')
      cy.get('[data-cy=header-logo]').click()
    })

    it('has correct route', () => {
      cy.url().should('contain', '/')
    })

    it('highlights correct navigation tab', () => {
      cy.get('@homeTab').should('have.class', 'Mui-selected')
    })
  })
})
