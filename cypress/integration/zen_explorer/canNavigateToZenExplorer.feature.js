const pageHeader = cy.contains('Zen Explorer')

describe('displays "Zen Explorer" app on dedicated route', () => {
  context('access by route', () => {
    beforeEach(() => {
      cy.visit('/zen_explorer')
    })

    it('displays page header', () => {
      pageHeader.should('be.visible')
    })
  })

  context('access by cta on main page', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('[data-cy=zen-explorer-cta]').click()
    })

    it('displays page header', () => {
      pageHeader.should('be.visible')
    })
  })
})
