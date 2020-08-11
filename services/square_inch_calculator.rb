# frozen_string_literal: true

require_relative './application_service.rb'

# Calculates a price per square inch
class SquareInchCalculator < ApplicationService
  def initialize(length, width, price_per)
    @length = length
    @width = width
    @price_per = price_per
  end

  def call
    @length * @width * @price_per
  end
end
