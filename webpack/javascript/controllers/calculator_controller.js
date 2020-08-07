import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [
    'length',
    'width',
    'price',
    'sizeInWords',
    'artworkMediumHeading',
    'categoryButton',
    'artworkMediumButton',
    'getPriceButton',
    'originalsDropdown',
    'printsDropdown'
  ]

  connect() {
    this._resetPriceCard()
  }

  answerCardSizeHeading() {
    let message = 'Ready...'

    if (this.lengthTarget.value || this.widthTarget.value) {
      message = `${this.lengthTarget.value || '-'} x ${this.widthTarget.value ||
        '-'}`
    }

    this.data.set('sizeMessage', message)
    this.sizeInWordsTarget.innerHTML = this.data.get('sizeMessage')
    this._clearPrice()
    this._activateGetPriceButton()
  }

  categorySelect() {
    this.data.set('category', event.target.value)

    switch (this.data.get('category')) {
      case 'original':
        this.originalsDropdownTarget.classList.remove('is-hidden')
        this.printsDropdownTarget.classList.add('is-hidden')
        break
      case 'print':
        this.printsDropdownTarget.classList.remove('is-hidden')
        this.originalsDropdownTarget.classList.add('is-hidden')
        break
    }
  }

  artworkMediumSelect() {
    this.data.set('artworkMedium', event.target.value)
    this.data.set('priceConstant', this._setPriceConstant())
    this._updateAnswerCardArtworkMediumHeading()
    this._clearPrice()
    this._activateGetPriceButton()
  }

  getPrice() {
    event.preventDefault()
    this.priceTarget.innerHTML = `$${this._calculatePrice()}`
  }

  _clearPrice() {
    this.priceTarget.innerHTML = '$ -'
  }

  _updateAnswerCardArtworkMediumHeading() {
    let message = '(◕‿◕)'

    switch (this.data.get('artworkMedium')) {
      case 'original--paper':
        message = 'Paper Original'
        break
      case 'original--canvas':
        message = 'Canvas Original'
        break
      case 'original--jackson-square':
        message = 'Canvas for J. Square'
        break
      case 'print--paper':
        message = 'Paper Print'
        break
      case 'print--canvas':
        message = 'Canvas Print'
        break
      default:
        message = '(◕‿◕)'
    }

    this.data.set('chosenMediumMessage', message)
    this.artworkMediumHeadingTarget.innerHTML = this.data.get(
      'chosenMediumMessage'
    )
  }

  _calculatePrice() {
    let artwork_type = this.data.get('artworkMedium')
    switch (artwork_type) {
      case 'original--jackson-square':
      case 'original--canvas':
        return this._roundPrice(this._calculatePricePerSquareInch())
      case 'original--paper':
      case 'print--canvas':
      case 'print--paper':
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
    let artwork_type = this.data.get('artworkMedium')
    switch (artwork_type) {
      case 'original--paper':
        return this.data.get('originalPaper')
      case 'original--canvas':
        return this.data.get('originalCanvas')
      case 'original--jackson-square':
        return this.data.get('originalJs')
      case 'print--paper':
        return this.data.get('printPaper')
      case 'print--canvas':
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

  _resetPriceCard() {
    this.sizeInWordsTarget.innerHTML = this.data.get('sizeMessage')
    this.artworkMediumHeadingTarget.innerHTML = this.data.get(
      'chosenMediumMessage'
    )
    this._clearPrice()
  }

  _activateGetPriceButton() {
    if (
      this.lengthTarget.value &&
      this.widthTarget.value &&
      this.data.get('artworkMedium')
    ) {
      this.getPriceButtonTarget.classList.remove('is-disabled')
      this.getPriceButtonTarget.disabled = false
    } else {
      this.getPriceButtonTarget.classList.add('is-disabled')
      this.getPriceButtonTarget.disabled = true
    }
  }
}
