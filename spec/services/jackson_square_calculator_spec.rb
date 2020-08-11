# frozen_string_literal: true

require 'spec_helper'
require_relative '../../services/jackson_square_calculator.rb'

RSpec.describe 'JacksonSquareCalculator' do
  it 'calculates a price in linear inches' do
    length = 3
    width = 3
    price_per = 3

    result = JacksonSquareCalculator.new(length, width, price_per).call

    expect(result).to be(33)
  end

  it 'instantiates itself and calculates a price in linear inches' do
    length = 6
    width = 6
    price_per = 6

    result = JacksonSquareCalculator.call(length, width, price_per)

    expect(result).to be(228)
  end
end
