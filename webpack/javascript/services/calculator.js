export default class Calculator {
  constructor(length, width, pricePer, pricingMethod) {
    this.length = length
    this.width = width
    this.pricePer = pricePer
    this.pricingMethod = pricingMethod
  }

  getPrice() {
    const CALCULATE = {
      perSquareInch: this._perSquareInch(),
      perLinearInch: this._perLinearInch(),
    }

    return CALCULATE[this.pricingMethod]
  }

  _perSquareInch() {
    return this.length * this.width * this.pricePer
  }

  _perLinearInch() {
    return (this.length + this.width) * this.pricePer
  }
}
