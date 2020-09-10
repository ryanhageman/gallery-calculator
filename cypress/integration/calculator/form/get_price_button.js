describe('Calculator Form - Get Price Button', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is activated with length, width, and valid category', () => {
    cy.findByTestId('length').type('4')
    cy.findByTestId('width').type('4')
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-paper-button').click()

    cy.findByTestId('get-price-button').should('not.be.disabled')
  })

  it('is disabled without length', () => {
    cy.findByTestId('length').clear()
    cy.findByTestId('width').type('4')
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-paper-button').click()

    cy.findByTestId('get-price-button').should('be.disabled')
  })

  it('is disabled without width', () => {
    cy.findByTestId('length').type('4')
    cy.findByTestId('width').clear()
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-paper-button').click()

    cy.findByTestId('get-price-button').should('be.disabled')
  })

  it('is disabled without a category', () => {
    cy.findByTestId('length').type('4')
    cy.findByTestId('width').clear()
    cy.findByTestId('original-button').click()

    cy.findByTestId('get-price-button').should('be.disabled')
  })
})
