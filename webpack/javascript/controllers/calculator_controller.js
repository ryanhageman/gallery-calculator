import { Controller } from 'stimulus'
import Calculator from '../services/calculator'
import RoundToFive from '../services/round_to_five'

export default class extends Controller {
  static targets = [
    'length',
    'width',
    'price',
    'sizeInWords',
    'artMediumHeading',
    'categoryButton',
    'artMediumButton',
    'getPriceButton',
    'originalsDropdown',
    'printsDropdown',
  ]

  connect() {
    this._resetPriceCard()
  }

  showSizeOnAnswerCard() {
    let message = 'Ready...'

    if (this.lengthTarget.value || this.widthTarget.value) {
      message = `${this.lengthTarget.value || '-'} x ${
        this.widthTarget.value || '-'
      }`
    }

    this.data.set('sizeMessage', message)
    this.sizeInWordsTarget.innerHTML = this.data.get('sizeMessage')
    this._clearPrice()
    this._activateGetPriceButton()
  }

  toggleCategoryDropdown() {
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

  chooseArtMedium() {
    this.data.set('artMedium', event.target.value)
    this.data.set('priceConstant', this._setPriceConstant())
    this._updateArtMediumHeading()
    this._clearPrice()
    this._activateGetPriceButton()
  }

  getPrice() {
    event.preventDefault()
    this.priceTarget.innerHTML = `$${this._price()}`
  }

  _clearPrice() {
    this.priceTarget.innerHTML = '$ -'
  }

  _updateArtMediumHeading() {
    const ART_MEDIUM_HEADING = {
      'original--paper': 'Paper Original',
      'original--canvas': 'Canvas Original',
      'original--jackson-square': 'Canvas for J. Square',
      'print--paper': 'Paper Print',
      'print--canvas': 'Canvas Print',
    }

    let message = ART_MEDIUM_HEADING[this.data.get('artMedium')] || '(◕‿◕)'

    this.data.set('chosenMediumMessage', message)
    this.artMediumHeadingTarget.innerHTML = this.data.get('chosenMediumMessage')
  }

  _pricingMethod() {
    const PRICING_METHOD = {
      'original--jackson-square': 'perSquareInch',
      'original--canvas': 'perSquareInch',
      'original--paper': 'perLinearInch',
      'print--canvas': 'perLinearInch',
      'print--paper': 'perLinearInch',
      'linear-inch': 'perLinearInch',
      'square-inch': 'perSquareInch',
    }

    return PRICING_METHOD[this.data.get('artMedium')]
  }

  _price() {
    return new Calculator.for(this._pricingMethod()).roundedPrice(
      Number(this.lengthTarget.value),
      Number(this.widthTarget.value),
      Number(this.data.get('priceConstant')),
      RoundToFive
    )
  }

  _setPriceConstant() {
    const PRICE_PER = {
      'original--paper': this.data.get('originalPaper'),
      'original--canvas': this.data.get('originalCanvas'),
      'original--jackson-square': this.data.get('originalJs'),
      'print--paper': this.data.get('printPaper'),
      'print--canvas': this.data.get('printCanvas'),
    }
    return PRICE_PER[this.data.get('artMedium')] || 0
  }

  _resetPriceCard() {
    this.sizeInWordsTarget.innerHTML = this.data.get('sizeMessage')
    this.artMediumHeadingTarget.innerHTML = this.data.get('chosenMediumMessage')
    this._clearPrice()
  }

  _activateGetPriceButton() {
    if (
      this.lengthTarget.value &&
      this.widthTarget.value &&
      this.data.get('artMedium')
    ) {
      this.getPriceButtonTarget.classList.remove('is-disabled')
      this.getPriceButtonTarget.disabled = false
    } else {
      this.getPriceButtonTarget.classList.add('is-disabled')
      this.getPriceButtonTarget.disabled = true
    }
  }
}
