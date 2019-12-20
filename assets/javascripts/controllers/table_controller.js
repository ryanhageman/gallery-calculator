import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [
    'categoryButton',
    'originalsDropdown',
    'printsDropdown',
    'artworkMediumButton',
  ]
  connect() {

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
  }

}