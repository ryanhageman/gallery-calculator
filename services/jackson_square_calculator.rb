# frozen_string_literal: true

require_relative './application_service'

# Calculates a price per square inch
class JacksonSquareCalculator < ApplicationService
  def initialize(length, width, price_per)
    @length = length
    @width = width
    @price_per = price_per
  end

  def call
    (@length * @width * @price_per) + (@length + @width)
  end
end
