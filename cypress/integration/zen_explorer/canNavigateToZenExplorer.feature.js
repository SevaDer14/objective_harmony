describe('displays "Zen Explorer" app on dedicated route', () => {
  let pageHeader = undefined

  context('access by route', () => {
    beforeEach(() => {
      cy.visit('/zen_explorer')
      pageHeader = cy.contains('Zen Explorer')
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
