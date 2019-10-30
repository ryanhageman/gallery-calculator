class Calculator {
  constructor() {
    this.Prints = {
      paper: 5,
      canvas: 7
    }
    this.Originals = {
      jackson_square: .385,
      canvas: 1.16
    }
    this.length = ''
    this.width = ''
    this.type = ''
    this.price_constant
    this.price = ''
  }

  setLength(length) {
    this.length = Number(length)
  }

  setWidth(width) {
    this.width = Number(width)
  }

  setType(artwork_type) {
    this.type = artwork_type
    this._setPriceConstant(artwork_type)
  }

  getPrice() {
    switch (this.type) {
    case 'original-canvas':
    case 'original-js':
      return this._roundPrice(this._calculatePricePerSquareInch())
    case 'print-paper':
    case 'print-canvas':
      return this._roundPrice(this._calculatePricePerLinearInch())
    default:
      return this._roundPrice('')
    }
  }

  _setPriceConstant(artwork_type) {
    switch (artwork_type) {
    case 'original-canvas':
      this.price_constant = this.Originals.canvas
      break
    case 'original-js':
      this.price_constant = this.Originals.jackson_square
      break
    case 'print-paper':
      this.price_constant = this.Prints.paper
      break
    case 'print-canvas':
      this.price_constant = this.Prints.canvas
      break
    default:
      this.price_constant = 0
    }
  }

  _roundPrice(price) {
    if (price === '') return '??'

    let new_last_digit = this._lastDigitRounded(price)
    let array_price = Math.round(price).toString().split('')
    array_price.splice(array_price.length - 1, 1, new_last_digit)
    let new_price = Number(array_price.join(''))

    if (new_last_digit === '9') new_price = Math.round(new_price / 10) * 10

    return new_price
  }

  _lastDigitRounded(number) {
    switch (Math.round(number).toString().slice(-1)) {
    case '1':
    case '2':
      return '0'

    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
      return '5'

    case '8':
    case '9':
      return '9'

    default:
      return '0'
    }
  }

  _calculatePricePerSquareInch() {
    return (this.length * this.width) * this.price_constant
  }

  _calculatePricePerLinearInch() {
    return (this.length + this.width) * this.price_constant
  }
}

let showPaperPrintPrice = () => {
  document.querySelector('.js-calculator__print-paper').innerHTML = `Paper: $${calculator.Prints.paper} / linear inch`
}

let showCanvasPrintPrice = () => {
  document.querySelector('.js-calculator__print-canvas').innerHTML = `Canvas: $${calculator.Prints.canvas} / linear inch`
}

let showJacksonSquareCanvasPrice = () => {
  document.querySelector('.js-calculator__original-jackson-square').innerHTML = `JS: $${calculator.Originals.jackson_square} / square inch`
}

let showCanvasOriginalPrice = () => {
  document.querySelector('.js-calculator__original-canvas').innerHTML = `Canvas: $${calculator.Originals.canvas} / square inch`
}

let activateCalculatorButton = () => {
  document.querySelector('.js-calculator__get-price-button').addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('.js-calculator__price').innerHTML = `$${calculator.getPrice()}`
  })
}

let showPrices = () => {
  showPaperPrintPrice()
  showCanvasPrintPrice()
  showJacksonSquareCanvasPrice()
  showCanvasOriginalPrice()
}

let calculator = new Calculator

document.addEventListener('DOMContentLoaded', function () {
  showPrices()
  activateCalculatorButton()
});
