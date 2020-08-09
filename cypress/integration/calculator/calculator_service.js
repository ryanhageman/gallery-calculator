import Calculator from '../../../webpack/javascript/services/calculator'

describe('Calculator', () => {
  it('calculates the price per square inch', () => {
    const length = 3
    const width = 3
    const pricePer = 3
    const pricingMethod = 'perSquareInch'

    const result = new Calculator(
      length,
      width,
      pricePer,
      pricingMethod
    ).getPrice()

    expect(result).to.eq(27)
  })

  it('calculates the price per linear inch', () => {
    const length = 3
    const width = 3
    const pricePer = 3
    const pricingMethod = 'perLinearInch'

    const result = new Calculator(
      length,
      width,
      pricePer,
      pricingMethod
    ).getPrice()

    expect(result).to.eq(18)
  })
})
