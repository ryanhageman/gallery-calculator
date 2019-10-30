import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ 'length', 'width', 'type' ]

  connect() {
    this._clearForm()
  }

  _clearForm() {
    this.lengthTarget.value = ''
    this.widthTarget.value = ''
    this.typeTargets.forEach((target) => target.checked = false)
  }
}