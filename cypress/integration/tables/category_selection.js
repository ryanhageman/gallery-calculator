describe('Tables - Category Selection', () => {
  beforeEach(() => {
    cy.visit('/tables.html')
  })

  it('shows options for originals', () => {
    cy.findByTestId('original-button').click()
    cy.findByTestId('originals-dropdown').should('not.have.class', 'is-hidden')
    cy.findByTestId('prints-dropdown').should('have.class', 'is-hidden')
  })

  it('shows options for prints', () => {
    cy.findByTestId('print-button').click()
    cy.findByTestId('prints-dropdown').should('not.have.class', 'is-hidden')
    cy.findByTestId('originals-dropdown').should('have.class', 'is-hidden')
  })
})
