import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    this.sizeInWordsTarget.innerHTML = this.data.get('sizeMessage')
    this.chosenTypeTarget.innerHTML = this.data.get('chosenTypeMessage')
  }

  static targets = [
    'length',
    'width',
    'sizeInWords',
    'chosenType',
    'categoryButton',
    'originalsDropdown',
    'printsDropdown'
  ]

  answerCardSizeHeading() {
    let message = 'Ready...'

    if (this.lengthTarget.value || this.widthTarget.value) {
      message = `${this.lengthTarget.value || '-'} x ${this.widthTarget.value || '-'}`
    }

    this.data.set('sizeMessage', message)
    this.sizeInWordsTarget.innerHTML = this.data.get('sizeMessage')
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
}