# frozen_string_literal: true

require 'spec_helper'
require_relative '../../services/linear_inch_calculator.rb'

RSpec.describe 'LinearInchCalculator' do
  it 'calculates a price in linear inches' do
    length = 3
    width = 3
    price_per = 3

    result = LinearInchCalculator.new(length, width, price_per).call

    expect(result).to be(18)
  end

  it 'instantiates itself and calculates a price in linear inches' do
    length = 6
    width = 6
    price_per = 6

    result = LinearInchCalculator.call(length, width, price_per)

    expect(result).to be(72)
  end
end
