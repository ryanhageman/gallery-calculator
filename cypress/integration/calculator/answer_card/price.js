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
    cy.findByTestId('original-jackson-square-button').click()
    cy.findByTestId('get-price-button').click()

    cy.findByTestId('price').contains(/\d/)

    cy.findByTestId('length').type('5')

    cy.findByTestId('price').contains('$ -')
  })

  it('properly calculates price per linear inch', () => {
    cy.findByTestId('length').type('36')
    cy.findByTestId('width').type('36')
    cy.findByTestId('print-button').click()
    cy.findByTestId('print-canvas-button').click()
    cy.findByTestId('calculator').then((calculator) => {
      calculator
        .attr('data-calculator-price-per', '6.94')
        .attr('data-calculator-pricing', 'linear')
    })
    cy.findByTestId('get-price-button').click()
    cy.findByTestId('price').contains(/500/)
  })

  it('properly calculates price per square inch', () => {
    cy.findByTestId('length').type('36')
    cy.findByTestId('width').type('36')
    cy.findByTestId('print-button').click()
    cy.findByTestId('print-paper-button').click()
    cy.findByTestId('calculator').then((calculator) => {
      calculator
        .attr('data-calculator-price-per', '1.16')
        .attr('data-calculator-pricing', 'square')
    })
    cy.findByTestId('get-price-button').click()
    cy.findByTestId('price').contains(/1505/)
  })

  it('properly calculates a Jackson Square price', () => {
    cy.findByTestId('length').type('24')
    cy.findByTestId('width').type('24')
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-canvas-button').click()
    cy.findByTestId('calculator').then((calculator) => {
      calculator
        .attr('data-calculator-price-per', '0.385')
        .attr('data-calculator-pricing', 'jackson_square')
    })
    cy.findByTestId('get-price-button').click()
    cy.findByTestId('price').contains(/270/)
  })
})
