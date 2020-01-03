import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['homeLink']

  root() {
    event.preventDefault()
    document.location.href = './'
    return false
  }

  tables() {
    event.preventDefault()
    document.location.href = 'tables.html'
    return false
  }
}