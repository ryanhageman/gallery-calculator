import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [
    'length',
    'width',
    'typeSelector',
    'price',
    'printPaper',
    'printCanvas',
    'originalJs',
    'originalCanvas'
  ]

  connect() {
    this._clearForm()
    this._showPrices()
  }

  artworkType() {
    this.data.set('artworkType', event.target.value)
    this.data.set('priceConstant', this._setPriceConstant())
  }

  price() {
    event.preventDefault()
    this.priceTarget.innerHTML = `$${this._calculatePrice()}`
  }

  _calculatePrice() {
    let artwork_type = this.data.get('artworkType')
    switch (artwork_type) {
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

  _roundPrice(price) {
    if (price === '') return '??'

    let new_last_digit = this._lastDigitRounded(price)
    let array_price = Math.round(price)
      .toString()
      .split('')
    array_price.splice(array_price.length - 1, 1, new_last_digit)
    let new_price = Number(array_price.join(''))

    if (new_last_digit === '9') new_price = Math.round(new_price / 10) * 10

    return new_price
  }

  _lastDigitRounded(number) {
    switch (
      Math.round(number)
        .toString()
        .slice(-1)
    ) {
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

  _setPriceConstant() {
    let artwork_type = this.data.get('artworkType')
    switch (artwork_type) {
      case 'original-canvas':
        return this.data.get('originalCanvas')
      case 'original-js':
        return this.data.get('originalJs')
      case 'print-paper':
        return this.data.get('printPaper')
      case 'print-canvas':
        return this.data.get('printCanvas')
      default:
        return 0
    }
  }
  _calculatePricePerSquareInch() {
    return (
      Number(this.lengthTarget.value) *
      Number(this.widthTarget.value) *
      Number(this.data.get('priceConstant'))
    )
  }

  _calculatePricePerLinearInch() {
    return (
      (Number(this.lengthTarget.value) + Number(this.widthTarget.value)) *
      Number(this.data.get('priceConstant'))
    )
  }

  _clearArtworkTypeSelectors() {
    this.typeSelectorTargets.forEach(item => (item.checked = false))
  }

  _clearForm() {
    this.lengthTarget.value = ''
    this.widthTarget.value = ''
    this._clearArtworkTypeSelectors()
    this.data.set('artworkType', '')
  }

  _showPaperPrintPrice() {
    this.printPaperTarget.innerHTML = `Paper: $${this.data.get(
      'printPaper'
    )} / linear inch`
  }

  _showCanvasPrintPrice() {
    this.printCanvasTarget.innerHTML = `Canvas: $${this.data.get(
      'printCanvas'
    )} / linear inch`
  }

  _showJacksonSquareCanvasPrice() {
    this.originalJsTarget.innerHTML = `JS: $${this.data.get(
      'originalJs'
    )} / square inch`
  }

  _showCanvasOriginalPrice() {
    this.originalCanvasTarget.innerHTML = `Canvas: $${this.data.get(
      'originalCanvas'
    )} / square inch`
  }

  _showPrices() {
    this._showPaperPrintPrice()
    this._showCanvasPrintPrice()
    this._showJacksonSquareCanvasPrice()
    this._showCanvasOriginalPrice()
  }
}
