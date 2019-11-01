# frozen_string_literal: true

# Calculate prices
module PriceHelpers
  def price_per_linear_inch(length, width, constant)
    round_price((length + width) * constant)
  end

  def price_per_square_inch(length, width, constant)
    round_price((length * width) * constant)
  end

  private

  def round_price(price)
    new_last_digit = last_digit_rounded(price)
    rounded_price = price.round.to_s.chars.slice(0...-1).push(new_last_digit).join

    rounded_price = ((rounded_price.to_f / 10).round * 10).to_s if new_last_digit == '9'

    rounded_price
  end

  def last_digit_rounded(number)
    last_digit = number.round.to_s[-1]

    case last_digit
    when '0', '1', '2' then '0'
    when '3', '4', '5', '6', '7' then '5'
    when '8', '9' then '9'
    end
  end
end
