import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    console.log('🎵 Gonna get my calculator connected! 🎵')
    this.sizeInWordsTarget.innerHTML = this.data.get('sizeMessage')
    this.chosenTypeTarget.innerHTML = this.data.get('chosenTypeMessage')
  }

  static targets = [
    'length',
    'width',
    'sizeInWords',
    'chosenType'
  ]

  updateCardSize() {
    let message = 'Ready...'

    if (this.lengthTarget.value || this.widthTarget.value) {
      message = `${this.lengthTarget.value || '-'} x ${this.widthTarget.value || '-'}`
    }

    this.data.set('sizeMessage', message)
    this.sizeInWordsTarget.innerHTML = this.data.get('sizeMessage')
  }
}