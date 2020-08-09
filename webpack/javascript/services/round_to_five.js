export default class RoundToFive {
  constructor(number) {
    this.number = number
  }

  round() {
    if (this.number === '') return '??'

    let new_last_digit = this._lastDigitRounded()
    let array_number = Math.round(this.number).toString().split('')
    array_number.splice(array_number.length - 1, 1, new_last_digit)
    let new_number = Number(array_number.join(''))

    if (new_last_digit === '9') new_number = Math.round(new_number / 10) * 10

    return new_number
  }

  _lastDigitRounded() {
    return this._roundToFive(Math.round(this.number).toString().slice(-1)) || 0
  }

  _roundToFive(stringNumber) {
    const ROUND_TO_FIVE = {
      '0': '0',
      '1': '0',
      '2': '0',
      '3': '5',
      '4': '5',
      '5': '5',
      '6': '5',
      '7': '5',
      '8': '9',
      '9': '9',
    }
    return ROUND_TO_FIVE[stringNumber]
  }
}
