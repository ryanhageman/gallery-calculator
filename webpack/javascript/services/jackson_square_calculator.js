export default class JacksonSquareCalculator {
  price(length, width, pricePer) {
    return length * width * pricePer + (length + width)
  }

  roundedPrice(length, width, pricePer, roundingScheme) {
    let price = this.price(length, width, pricePer)

    return new roundingScheme().round(price)
  }
}
