import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['card', 'heading', 'dropdownArrow']

  toggleDropdownTable() {
    this._toggleVisibility()
    if (this._isVisible()) {
      this._showPriceList()
      return
    }

    this._hidePriceList()
  }

  get visibility() {
    return this.data.get('visibility')
  }

  set visibility(value) {
    this.data.set('visibility', value)
  }

  get title() {
    return this.data.get('title')
  }

  get artworkMedium() {
    return this.data.get('artworkMedium')
  }

  _isVisible() {
    return this.visibility === 'open'
  }

  _toggleVisibility() {
    this.visibility = this._isVisible() ? 'closed' : 'open'
  }

  _showPriceList() {
    this.dropdownArrowTarget.classList.add('is-open')
    this.dropdownArrowTarget.classList.remove('is-closed')
    this.cardTarget.classList.add('is-open')
    this.cardTarget.classList.remove('is-closed')
    this.headingTarget.innerHTML = this.artworkMedium
  }

  _hidePriceList() {
    this.dropdownArrowTarget.classList.add('is-closed')
    this.dropdownArrowTarget.classList.remove('is-open')
    this.cardTarget.classList.add('is-closed')
    this.cardTarget.classList.remove('is-open')
    this.headingTarget.innerHTML = this.title
  }
}
