import Calculator from '../../../webpack/javascript/services/calculator'
import PerSquareInchCalculator from '../../../webpack/javascript/services/per_square_inch_calculator'
import PerLinearInchCalculator from '../../../webpack/javascript/services/per_linear_inch_calculator'

describe('Calculator', () => {
  it('creates an instance of perSquareInchCalculator', () => {
    const result = Calculator.for('perSquareInch')

    expect(result).to.be.instanceOf(PerSquareInchCalculator)
  })

  it('creates an instance of perLinearInchCalculator', () => {
    const result = Calculator.for('perLinearInch')

    expect(result).to.be.instanceOf(PerLinearInchCalculator)
  })
})
