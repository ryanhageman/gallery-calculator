let Prints = {
  paper_constant: 5,
  canvas_constant: 7
}

let Originals = {
  jackson_square_constant: .385,
  canvas_constant: 1.16
}

let length, width, type, constant, price

let setLength = () => {
  length = Number(document.querySelector('.js-calculator__length').value)
}

let setWidth = () => {
  width = Number(document.querySelector('.js-calculator__width').value)
}

let setType = () => {
  document.querySelectorAll('.js-calculator__type').forEach((button) => {
    if (button.checked) { type = button.value }
  })
}

let calculatePricePerSquareInch = (length, width, price_constant) => {
  return (length * width) * price_constant
}

let calculatePricePerLinearInch = (length, width, price_constant) => {
  return (length + width) * price_constant
}

let roundPrice = (price) => {
  let whole_price = Math.round(price)
  let last_digit = whole_price.toString().slice(-1)
  switch(last_digit) {
  case '1':
    last_digit = '0'
    break
  case '2':
    last_digit = '0'
    break
  case '3':
    last_digit = '5'
    break
  case '4':
    last_digit = '5'
    break
  case '5':
    last_digit = '5'
    break
  case '6':
    last_digit = '5'
    break
  case '7':
    last_digit = '5'
    break
  case '8':
    last_digit = '9'
    break
  case '9':
    last_digit = '9'
    break
  default:
    last_digit = '0'
  }
  let array_price = whole_price.toString().split('')
  array_price.pop()
  array_price.push(last_digit)
  let string_price = array_price.join('')
  let number_price = Number(string_price)

  if (last_digit === '9') {
    number_price = Math.round(number_price / 10) * 10
  }

  return number_price
}

let getPrice = () => {
  if (type === 'original-canvas') {
    constant = Originals.canvas_constant
    price = calculatePricePerSquareInch(length, width, constant)
  } else if (type === 'original-js') {
    constant = Originals.jackson_square_constant
    price = calculatePricePerSquareInch(length, width, constant)
  } else if (type === 'print-paper') {
    constant = Prints.paper_constant
    price = calculatePricePerLinearInch(length, width, constant)
  } else if (type === 'print-canvas') {
    constant = Prints.canvas_constant
    price = calculatePricePerLinearInch(length, width, constant)
  } else {
    price = '??'
  }

  roundPrice(price)
  document.querySelector('.js-calculator__price').innerHTML = `$${roundPrice(price)}`
}

let clearRadioButtons = () => {
  document.querySelectorAll('.js-calculator__type').forEach((button) => {
    if (button.checked) { button.checked = false }
  })
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.js-calculator__print-paper-constant').innerHTML = `Paper: $${Prints.paper_constant} / linear inch`
  document.querySelector('.js-calculator__print-canvas-constant').innerHTML = `Canvas: $${Prints.canvas_constant} / linear inch`
  document.querySelector('.js-calculator__original-jackson-square-constant').innerHTML = `JS: $${Originals.jackson_square_constant} / square inch`
  document.querySelector('.js-calculator__original-canvas-constant').innerHTML = `Canvas: $${Originals.canvas_constant} / square inch`
  document.querySelector('.js-calculator__length').value = ''
  document.querySelector('.js-calculator__width').value = ''
  clearRadioButtons()
  document.querySelector('.js-calculator__get-price-button').addEventListener('click', (event) => {
    event.preventDefault()
    getPrice()
  })
});
