describe('Answer Card', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Size Heading', () => {
    it('says "ready" when no length or width', () => {
      cy.findByTestId('length').clear()
      cy.findByTestId('width').clear()

      cy.findByTestId('size-in-words').contains(/ready/i)
    })

    it('says "4 x -" when length is 4 but no width', () => {
      cy.findByTestId('length').type('4')
      cy.findByTestId('width').clear()

      cy.findByTestId('size-in-words').contains(/4 x/i)
    })

    it('says "- x 4" when width is 4 but no length', () => {
      cy.findByTestId('length').clear()
      cy.findByTestId('width').type('4')

      cy.findByTestId('size-in-words').contains(/x 4/i)
    })

    it('says "4 x 4" when length and width are 4', () => {
      cy.findByTestId('length').type('4')
      cy.findByTestId('width').type('4')

      cy.findByTestId('size-in-words').contains(/4 x 4/i)
    })
  })

  context('Change the size', () => {
    it('clears the previous price', () => {
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
})
