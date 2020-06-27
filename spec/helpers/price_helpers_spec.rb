# frozen_string_literal: true

require 'spec_helper'
require_relative '../../helpers/price_helpers'

RSpec.describe 'PriceHelpers' do
  let(:item) { Class.new { include PriceHelpers }.new }

  context '#price' do
    it 'calculates a rounded price per linear inch' do
      result = item.price('linear', 3, 3, 3)

      expect(result).to eq('20')
    end

    it 'calculates a rounded price per square inch' do
      result = item.price('square', 3, 3, 3)

      expect(result).to eq('25')
    end
  end

  it '#price_per_linear_inch calculates the rounded price' do
    result = item.price_per_linear_inch(7, 7, 7)

    expect(result).to eq('100')
  end

  it '#price_per_square_inch calculates the rounded price' do
    result = item.price_per_square_inch(9, 9, 9)

    expect(result).to eq('730')
  end
end
