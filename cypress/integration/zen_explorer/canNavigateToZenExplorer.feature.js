describe('displays "Zen Explorer" app on dedicated route', () => {
  context('access by route', () => {
    beforeEach(() => {
      cy.visit('/zen_explorer')
    })
  
    it('displays page header', () => {
      cy.contains('Zen Explorer').should('be.visible')
    })  
  })  
})
