import { Controller } from 'stimulus'
import Calculator from '../services/calculator'
import RoundToFive from '../services/round_to_five'

export default class extends Controller {
  static targets = [
    'length',
    'width',
    'price',
    'sizeHeading',
    'pricingMethodHeading',
    'categoryButton',
    'pricingMethodButton',
    'getPriceButton',
    'originalsDropdown',
    'printsDropdown',
  ]

  connect() {
    this._resetAnswerCard()
  }

  showSizeOnAnswerCard() {
    let sizeHeading = 'Ready...'

    if (this.lengthTarget.value || this.widthTarget.value) {
      sizeHeading = `${this.lengthTarget.value || '-'} x ${
        this.widthTarget.value || '-'
      }`
    }

    this.data.set('sizeHeading', sizeHeading)
    this.sizeHeadingTarget.innerHTML = this.data.get('sizeHeading')
    this._clearPrice()
    this._activateGetPriceButton()
  }

  toggleCategoryDropdown() {
    this.data.set('category', event.target.value)

    switch (this.data.get('category')) {
      case 'original':
        this._showOriginalsDropdown()
        break
      case 'print':
        this._showPrintsDropdown()
        break
    }
  }

  setPricingMethod() {
    let button = event.target
    this.data.set('pricingMethod', button.value)
    this._updatePricingInfo(button.dataset)
    this._updatePricingMethodHeading(button.dataset.heading)
    this._clearPrice()
    this._activateGetPriceButton()
  }

  getPrice() {
    event.preventDefault()
    this.priceTarget.innerHTML = `$${this._price()}`
  }

  _price() {
    return new Calculator.for(this.data.get('pricing')).roundedPrice(
      Number(this.lengthTarget.value),
      Number(this.widthTarget.value),
      Number(this.data.get('pricePer')),
      RoundToFive
    )
  }

  _clearPrice() {
    this.priceTarget.innerHTML = '$ -'
  }

  _updatePricingMethodHeading(heading = '(◕‿◕)') {
    this.data.set('pricingMethodHeading', heading)
    this.pricingMethodHeadingTarget.innerHTML = this.data.get(
      'pricingMethodHeading'
    )
  }

  _updatePricingInfo(info) {
    this.data.set('pricing', info.pricing || '')
    this.data.set('pricePer', info.pricePer || 0)
  }

  _resetAnswerCard() {
    this.sizeHeadingTarget.innerHTML = this.data.get('sizeHeading')
    this.pricingMethodHeadingTarget.innerHTML = this.data.get(
      'pricingMethodHeading'
    )
    this._clearPrice()
  }

  _activateGetPriceButton() {
    if (
      this.lengthTarget.value &&
      this.widthTarget.value &&
      this.data.get('pricingMethod')
    ) {
      this._enablePriceButton()
    } else {
      this._disablePriceButton()
    }
  }

  _enablePriceButton() {
    this.getPriceButtonTarget.classList.remove('is-disabled')
    this.getPriceButtonTarget.disabled = false
  }

  _disablePriceButton() {
    this.getPriceButtonTarget.classList.add('is-disabled')
    this.getPriceButtonTarget.disabled = true
  }

  _showOriginalsDropdown() {
    this.originalsDropdownTarget.classList.remove('is-hidden')
    this.printsDropdownTarget.classList.add('is-hidden')
  }

  _showPrintsDropdown() {
    this.printsDropdownTarget.classList.remove('is-hidden')
    this.originalsDropdownTarget.classList.add('is-hidden')
  }
}
