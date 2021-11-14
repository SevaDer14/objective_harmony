describe('displays "Hello World" on root route', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays greeting', () => {
    cy.contains('Hello World').should('be.visible')
  })
})
