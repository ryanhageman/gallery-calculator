describe('Calculator Answer Card - Price', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows a number when price is calculated', () => {
    cy.findByTestId('length').type('4')
    cy.findByTestId('width').type('4')
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-paper-button').click()
    cy.findByTestId('get-price-button').click()

    cy.findByTestId('price').contains(/\d/)
  })

  it('is cleared when the size changes', () => {
    cy.findByTestId('length').type('4')
    cy.findByTestId('width').type('4')
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-paper-button').click()
    cy.findByTestId('get-price-button').click()

    cy.findByTestId('price').contains(/\d/)

    cy.findByTestId('length').type('5')

    cy.findByTestId('price').contains('$ -')
  })
})
