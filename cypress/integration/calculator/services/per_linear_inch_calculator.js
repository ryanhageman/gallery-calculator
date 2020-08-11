import PerLinearInchCalculator from '../../../../webpack/javascript/services/per_linear_inch_calculator'
import RoundToFive from '../../../../webpack/javascript/services/round_to_five'

describe('Per Square Inch Calculator', () => {
  it('calculates the price per square inch', () => {
    const length = 3
    const width = 3
    const pricePer = 3

    const result = new PerLinearInchCalculator().price(length, width, pricePer)

    expect(result).to.eq(18)
  })

  it('calculates a rounded price', () => {
    const length = 36
    const width = 36
    const pricePer = 6.93
    const roundingScheme = RoundToFive

    const result = new PerLinearInchCalculator().roundedPrice(
      length,
      width,
      pricePer,
      roundingScheme
    )

    expect(result).to.eq(500)
  })
})
