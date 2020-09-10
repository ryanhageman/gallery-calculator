import SquareInchCalculator from '../../../../webpack/javascript/services/square_inch_calculator'
import RoundToFive from '../../../../webpack/javascript/services/round_to_five'

describe('Square Inch Calculator', () => {
  it('calculates the price per square inch', () => {
    const length = 3
    const width = 3
    const pricePer = 3

    const result = new SquareInchCalculator().price(length, width, pricePer)

    expect(result).to.eq(27)
  })

  it('calculates a rounded price', () => {
    const length = 36
    const width = 36
    const pricePer = 1.16
    const roundingScheme = RoundToFive

    const result = new SquareInchCalculator().roundedPrice(
      length,
      width,
      pricePer,
      roundingScheme
    )

    expect(result).to.eq(1505)
  })
})
