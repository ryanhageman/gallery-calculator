import Calculator from '../../../../webpack/javascript/services/calculator'
import SquareInchCalculator from '../../../../webpack/javascript/services/square_inch_calculator'
import LinearInchCalculator from '../../../../webpack/javascript/services/linear_inch_calculator'
import JacksonSquareCalculator from '../../../../webpack/javascript/services/jackson_square_calculator'

describe('Calculator', () => {
  it('creates an instance of SquareInchCalculator', () => {
    const result = Calculator.for('square')

    expect(result).to.be.instanceOf(SquareInchCalculator)
  })

  it('creates an instance of LinearInchCalculator', () => {
    const result = Calculator.for('linear')

    expect(result).to.be.instanceOf(LinearInchCalculator)
  })

  it('creates an instance of JacksonSquareCalculator', () => {
    const result = Calculator.for('jackson_square')

    expect(result).to.be.instanceOf(JacksonSquareCalculator)
  })
})
