import PerSquareInchCalculator from './per_square_inch_calculator'
import PerLinearInchCalculator from './per_linear_inch_calculator'
import JacksonSquareCalculator from './jackson_square_calculator'

export default class Calculator {
  static for(pricingMethod) {
    let calculatorClass = {
      perSquareInch: PerSquareInchCalculator,
      perLinearInch: PerLinearInchCalculator,
      jacksonSquare: JacksonSquareCalculator,
    }[pricingMethod]

    return new calculatorClass()
  }
}
