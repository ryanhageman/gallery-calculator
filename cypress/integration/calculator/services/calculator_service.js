import Calculator from '../../../../webpack/javascript/services/calculator'
import PerSquareInchCalculator from '../../../../webpack/javascript/services/per_square_inch_calculator'
import PerLinearInchCalculator from '../../../../webpack/javascript/services/per_linear_inch_calculator'
import JacksonSquareCalculator from '../../../../webpack/javascript/services/jackson_square_calculator'

describe('Calculator', () => {
  it('creates an instance of PerSquareInchCalculator', () => {
    const result = Calculator.for('perSquareInch')

    expect(result).to.be.instanceOf(PerSquareInchCalculator)
  })

  it('creates an instance of PerLinearInchCalculator', () => {
    const result = Calculator.for('perLinearInch')

    expect(result).to.be.instanceOf(PerLinearInchCalculator)
  })

  it('creates an instance of JacksonSquareCalculator', () => {
    const result = Calculator.for('jacksonSquare')

    expect(result).to.be.instanceOf(JacksonSquareCalculator)
  })
})
