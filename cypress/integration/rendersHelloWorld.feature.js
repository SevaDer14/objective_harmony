describe('displays "Hello World" on root route', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays greeting', () => {
    cy.contains('Oi Boi').should('be.visible')
  })
})
