describe('Calculator Answer Card - Size', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('says "ready" when no length or width', () => {
    cy.findByTestId('length').clear()
    cy.findByTestId('width').clear()

    cy.findByTestId('size-heading').contains(/ready/i)
  })

  it('says "4 x -" when length is 4 but no width', () => {
    cy.findByTestId('length').type('4')
    cy.findByTestId('width').clear()

    cy.findByTestId('size-heading').contains(/4 x/i)
  })

  it('says "- x 4" when width is 4 but no length', () => {
    cy.findByTestId('length').clear()
    cy.findByTestId('width').type('4')

    cy.findByTestId('size-heading').contains(/x 4/i)
  })

  it('says "4 x 4" when length and width are 4', () => {
    cy.findByTestId('length').type('4')
    cy.findByTestId('width').type('4')

    cy.findByTestId('size-heading').contains(/4 x 4/i)
  })
})
