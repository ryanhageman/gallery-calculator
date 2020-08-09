import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [
    'categoryButton',
    'originalsDropdown',
    'printsDropdown',
    'artMediumButton',
    'originalPaper',
    'originalCanvas',
    'originalJacksonSquare',
    'printPaper',
    'printCanvas',
  ]

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
    this.artworkMedium = event.target.value
    this._closeAllPriceListGroups()

    switch (this.artworkMedium) {
      case 'original--paper':
        this.originalPaperTarget.classList.add('is-open')
        break
      case 'original--canvas':
        this.originalCanvasTarget.classList.add('is-open')
        break
      case 'original--jackson-square':
        this.originalJacksonSquareTarget.classList.add('is-open')
        break
      case 'print--paper':
        this.printPaperTarget.classList.add('is-open')
        break
      case 'print--canvas':
        this.printCanvasTarget.classList.add('is-open')
        break
      default:
        this._closeAllPriceListGroups()
    }
  }

  get artworkMedium() {
    return this.data.get('artworkMedium')
  }

  set artworkMedium(value) {
    this.data.set('artworkMedium', value)
  }

  _closeAllPriceListGroups() {
    this._closeOriginalPaperPriceList()
    this._closeOriginalCanvasPriceList()
    this._closeOriginalJacksonSquarePriceList()
    this._closePrintPaperPriceList()
    this._closePrintCanvasPriceList()
  }

  _closeOriginalPaperPriceList() {
    if (this.hasOriginalPaperTarget) {
      this.originalPaperTarget.classList.remove('is-open')
    }
  }

  _closeOriginalCanvasPriceList() {
    if (this.hasOriginalCanvasTarget) {
      this.originalCanvasTarget.classList.remove('is-open')
    }
  }

  _closeOriginalJacksonSquarePriceList() {
    if (this.hasOriginalJacksonSquareTarget) {
      this.originalJacksonSquareTarget.classList.remove('is-open')
    }
  }

  _closePrintPaperPriceList() {
    if (this.hasPrintPaperTarget) {
      this.printPaperTarget.classList.remove('is-open')
    }
  }

  _closePrintCanvasPriceList() {
    if (this.hasPrintCanvasTarget) {
      this.printCanvasTarget.classList.remove('is-open')
    }
  }
}
