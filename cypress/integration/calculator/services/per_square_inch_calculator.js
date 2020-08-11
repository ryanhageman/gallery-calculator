import PerSquareInchCalculator from '../../../../webpack/javascript/services/per_square_inch_calculator'
import RoundToFive from '../../../../webpack/javascript/services/round_to_five'

describe('Per Square Inch Calculator', () => {
  it('calculates the price per square inch', () => {
    const length = 3
    const width = 3
    const pricePer = 3

    const result = new PerSquareInchCalculator().price(length, width, pricePer)

    expect(result).to.eq(27)
  })

  it('calculates a rounded price', () => {
    const length = 36
    const width = 36
    const pricePer = 1.16
    const roundingScheme = RoundToFive

    const result = new PerSquareInchCalculator().roundedPrice(
      length,
      width,
      pricePer,
      roundingScheme
    )

    expect(result).to.eq(1505)
  })
})
