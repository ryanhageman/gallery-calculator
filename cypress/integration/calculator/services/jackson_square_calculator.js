import JacksonSquareCalculator from '../../../../webpack/javascript/services/jackson_square_calculator'
import RoundToFive from '../../../../webpack/javascript/services/round_to_five'

describe('Jackson Square Calculator', () => {
  it('calculates the Jackson Square Price', () => {
    const length = 36
    const width = 36
    const pricePer = 0.385

    const result = new JacksonSquareCalculator().price(length, width, pricePer)

    expect(result).to.eq(570.96)
  })

  it('calculates a rounded Jackson Square price', () => {
    const length = 36
    const width = 36
    const pricePer = 0.385
    const roundingScheme = RoundToFive

    const result = new JacksonSquareCalculator().roundedPrice(
      length,
      width,
      pricePer,
      roundingScheme
    )

    expect(result).to.eq(570)
  })
})
