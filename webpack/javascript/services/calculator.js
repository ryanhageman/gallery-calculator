export default class Calculator {
  constructor(pricingMethod) {
    this.pricingMethod = pricingMethod
  }

  price(length, width, pricePer) {
    this.length = length
    this.width = width
    this.pricePer = pricePer

    const CALCULATE = {
      perSquareInch: this._perSquareInch(),
      perLinearInch: this._perLinearInch(),
    }

    return CALCULATE[this.pricingMethod]
  }

  roundedPrice(length, width, pricePer, roundingScheme) {
    let price = this.price(length, width, pricePer)

    return new roundingScheme().round(price)
  }

  _perSquareInch() {
    return this.length * this.width * this.pricePer
  }

  _perLinearInch() {
    return (this.length + this.width) * this.pricePer
  }
}
