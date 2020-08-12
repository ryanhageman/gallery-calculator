# frozen_string_literal: true

require_relative '../services/calculator'
require_relative '../services/round_to_five'

# Calculate prices
module PriceHelpers
  def price(artwork)
    price = Calculator.call(artwork)
    RoundToFive.call(price)
  end
end
