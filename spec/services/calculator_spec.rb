# frozen_string_literal: true

require 'spec_helper'
require_relative '../../services/calculator'

RSpec.describe 'Calculator' do
  it 'instantiates a Jackson Square Calculator and returns the proper price' do
    artwork = {
      length: 3,
      width: 3,
      price_per: 3,
      pricing_scheme: 'jackson_square'
    }

    result = Calculator.call(artwork)

    expect(result).to be(33)
  end

  it 'instantiates a linear inch calculator and returns the proper price' do
    artwork = {
      length: 6,
      width: 6,
      price_per: 6,
      pricing_scheme: 'linear'
    }

    result = Calculator.call(artwork)

    expect(result).to be(72)
  end

  it 'instantiates a linear inch calculator and returns the proper price' do
    artwork = {
      length: 8,
      width: 8,
      price_per: 8,
      pricing_scheme: 'square'
    }

    result = Calculator.call(artwork)

    expect(result).to be(512)
  end
end
