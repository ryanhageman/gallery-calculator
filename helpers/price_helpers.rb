# frozen_string_literal: true

# Calculate prices
module PriceHelpers
  def price(scheme, length, width, price_constant)
    if scheme == 'linear'
      return price_per_linear_inch(length, width, price_constant)
    end

    price_per_square_inch(length, width, price_constant)
  end

  def price_per_linear_inch(length, width, price_constant)
    initial_price = (length + width) * price_constant
    rounded_price(initial_price, ROUND_TO_FIVE)
  end

  def price_per_square_inch(length, width, price_constant)
    initial_price = (length * width) * price_constant
    rounded_price(initial_price, ROUND_TO_FIVE)
  end

  private

  def rounded_price(price, rounding_scheme)
    new_last_digit = rounded_last_digit(price, rounding_scheme)
    new_price = price.round.to_s.chars.slice(0...-1).push(new_last_digit).join

    new_last_digit == '9' ? rounded_up(new_price) : new_price
  end

  def rounded_last_digit(number, rounding_scheme)
    rounding_scheme[number.round.to_s[-1]]
  end

  def rounded_up(price)
    ((price.to_f / 10).round * 10).to_s
  end
end

ROUND_TO_FIVE = {
  '0' => '0',
  '1' => '0',
  '2' => '0',
  '3' => '5',
  '4' => '5',
  '5' => '5',
  '6' => '5',
  '7' => '5',
  '8' => '9',
  '9' => '9'
}.freeze
