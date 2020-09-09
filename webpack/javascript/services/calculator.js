import SquareInchCalculator from './square_inch_calculator'
import LinearInchCalculator from './linear_inch_calculator'
import JacksonSquareCalculator from './jackson_square_calculator'

export default class Calculator {
  static for(pricingMethod) {
    let calculatorClass = {
      square: SquareInchCalculator,
      linear: LinearInchCalculator,
      jackson_square: JacksonSquareCalculator,
    }[pricingMethod]

    return new calculatorClass()
  }
}
