import { Controller } from 'stimulus'
import Calculator from '../services/calculator'
import RoundToFive from '../services/round_to_five'

export default class extends Controller {
  static targets = [
    'length',
    'width',
    'price',
    'sizeMessage',
    'artMediumHeading',
    'categoryButton',
    'artMediumButton',
    'getPriceButton',
    'originalsDropdown',
    'printsDropdown',
  ]

  connect() {
    this._resetAnswerCard()
  }

  showSizeOnAnswerCard() {
    let sizeMessage = 'Ready...'

    if (this.lengthTarget.value || this.widthTarget.value) {
      sizeMessage = `${this.lengthTarget.value || '-'} x ${
        this.widthTarget.value || '-'
      }`
    }

    this.data.set('sizeMessage', sizeMessage)
    this.sizeMessageTarget.innerHTML = this.data.get('sizeMessage')
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
    let button = event.target
    this.data.set('artMedium', button.value)
    this._updatePricingInfo(button.dataset)
    this._updateArtMediumHeading(button.dataset.heading)
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

  _updateArtMediumHeading(heading = '(◕‿◕)') {
    this.data.set('chosenMediumMessage', heading)
    this.artMediumHeadingTarget.innerHTML = this.data.get('chosenMediumMessage')
  }

  _updatePricingInfo(info) {
    this.data.set('pricing', info.pricing || '')
    this.data.set('pricePer', info.pricePer || 0)
  }

  _resetAnswerCard() {
    this.sizeMessageTarget.innerHTML = this.data.get('sizeMessage')
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
