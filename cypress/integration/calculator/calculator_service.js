import Calculator from '../../../webpack/javascript/services/calculator'
import RoundToFive from '../../../webpack/javascript/services/round_to_five'

describe('Calculator', () => {
  it('calculates the price per square inch', () => {
    const length = 3
    const width = 3
    const pricePer = 3
    const pricingMethod = 'perSquareInch'

    const result = new Calculator(pricingMethod).price(length, width, pricePer)

    expect(result).to.eq(27)
  })

  it('calculates the price per linear inch', () => {
    const length = 3
    const width = 3
    const pricePer = 3
    const pricingMethod = 'perLinearInch'

    const result = new Calculator(pricingMethod).price(length, width, pricePer)

    expect(result).to.eq(18)
  })

  it('calculates a rounded price', () => {
    const length = 36
    const width = 36
    const pricePer = 8.5
    const pricingMethod = 'perLinearInch'
    const roundingScheme = RoundToFive

    const result = new Calculator(pricingMethod).roundedPrice(
      length,
      width,
      pricePer,
      roundingScheme
    )

    expect(result).to.eq(610)
  })
})
