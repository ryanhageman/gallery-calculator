import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['card', 'heading']

  toggleDropdownTable() {
    this._toggleVisibility()
    if (this._isVisible()) {
      this._showPriceList()
      return
    }

    this._hidePriceList()
  }

  get title() {
    return this.data.get('title')
  }

  get artMedium() {
    return this.data.get('artMedium')
  }

  get visibility() {
    return this.data.get('visibility')
  }

  set visibility(value) {
    this.data.set('visibility', value)
  }

  _isVisible() {
    return this.visibility === 'open'
  }

  _toggleVisibility() {
    this.visibility = this._isVisible() ? 'closed' : 'open'
  }

  _showPriceList() {
    this.cardTarget.classList.add('is-open')
    this.headingTarget.innerHTML = this.artMedium
  }

  _hidePriceList() {
    this.cardTarget.classList.remove('is-open')
    this.headingTarget.innerHTML = this.title
  }
}
