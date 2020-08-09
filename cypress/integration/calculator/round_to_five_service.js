import RoundToFive from '../../../webpack/javascript/services/round_to_five'

describe('RoundToFive', () => {
  it('rounds numbers below 3 down to 0', () => {
    let result = new RoundToFive(2332).round()
    expect(result).to.eq(2330)
  })

  it('rounds numbers between 3 and 7 to 5', () => {
    let result = new RoundToFive(234).round()
    expect(result).to.eq(235)
  })

  it('rounds numbers above 7 to the next 10', () => {
    let result = new RoundToFive(8218).round()
    expect(result).to.eq(8220)
  })
})
