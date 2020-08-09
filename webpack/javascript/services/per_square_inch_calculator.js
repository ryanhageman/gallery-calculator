export default class PerSquareInchCalculator {
  price(length, width, pricePer) {
    return length * width * pricePer
  }

  roundedPrice(length, width, pricePer, roundingScheme) {
    let price = this.price(length, width, pricePer)

    return new roundingScheme().round(price)
  }
}
