import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    this.sizeInWordsTarget.innerHTML = this.data.get('sizeMessage')
    this.artworkMediumHeadingTarget.innerHTML = this.data.get('chosenMediumMessage')
  }

  static targets = [
    'length',
    'width',
    'sizeInWords',
    'artworkMediumHeading',
    'categoryButton',
    'artworkMediumButton',
    'originalsDropdown',
    'printsDropdown'
  ]

  answerCardSizeHeading() {
    let message = 'Ready...'

    if (this.lengthTarget.value || this.widthTarget.value) {
      message = `${this.lengthTarget.value || '-'} x ${this.widthTarget.value ||
        '-'}`
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

  artworkMediumSelect() {
    this.data.set('artworkMedium', event.target.value)
    this._updateAnswerCardArtworkMediumHeading()
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
    this.artworkMediumHeadingTarget.innerHTML = this.data.get('chosenMediumMessage')
  }
}
