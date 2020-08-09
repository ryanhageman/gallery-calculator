describe('Calculator Answer Card - Medium', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('initially shows the default chosen medium message', () => {
    cy.findByTestId('calculator').then((calculator) => {
      cy.findByTestId('art-medium-heading').contains(
        calculator.attr('data-calculator-chosen-medium-message')
      )
    })
  })

  it('shows the medium when one is chosen', () => {
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-paper-button').click()

    cy.findByTestId('calculator').then((calculator) => {
      cy.findByTestId('art-medium-heading').contains(
        calculator.attr('data-calculator-chosen-medium-message')
      )
    })
  })
})
