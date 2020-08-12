# frozen_string_literal: true

require_relative './application_service.rb'
require_relative './jackson_square_calculator.rb'
require_relative './linear_inch_calculator.rb'
require_relative './square_inch_calculator.rb'

# Factory that instantiates the proper calculator
# and returns the price for the artwork
class Calculator < ApplicationService
  def initialize(artwork)
    @length = artwork[:length]
    @width = artwork[:width]
    @price_per = artwork[:price_per]
    @pricing_scheme = artwork[:pricing_scheme]
  end

  def call
    chosen_calculator.call(@length, @width, @price_per)
  end

  private

  def chosen_calculator
    { 'jackson_square' => JacksonSquareCalculator,
      'linear' => LinearInchCalculator,
      'square' => SquareInchCalculator }[@pricing_scheme]
  end
end
