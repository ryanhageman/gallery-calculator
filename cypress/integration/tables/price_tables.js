describe('Price Tables', () => {
  beforeEach(() => {
    cy.visit('/tables.html')
  })

  it('shows the relevant table when the category is chosen', () => {
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-paper-button')
      .click()
      .then((categoryButton) => {
        cy.findByTestId(categoryButton.attr('data-category-code')).should(
          'have.class',
          'is-open'
        )
      })
  })

  it('opens the section when the header is clicked', () => {
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-canvas-button').click()
    cy.findAllByTestId('price-list-card-heading')
      .filter(':visible')
      .first()
      .as('heading')
    cy.get('@heading').parent().should('not.have.class', 'is-open')

    cy.get('@heading').click().parent().should('have.class', 'is-open')
  })

  it('changes the heading to the medium when the section is open', () => {
    cy.findByTestId('original-button').click()
    cy.findByTestId('original-canvas-button').click()
    cy.findAllByTestId('price-list-card-heading')
      .filter(':visible')
      .first()
      .click()
      .contains(/canvas original/i)
  })
})
