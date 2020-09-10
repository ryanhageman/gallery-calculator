import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['homeLink']

  root() {
    event.preventDefault()
    top.location.href = './'
    return false
  }

  tables() {
    event.preventDefault()
    top.location.href = 'tables.html'
    return false
  }
}