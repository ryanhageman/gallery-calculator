# frozen_string_literal: true

# rubocop:disable Metrics/BlockLength

require 'spec_helper'
require_relative '../../helpers/price_helpers'

RSpec.describe 'PriceHelpers' do
  let(:item) { Class.new { include PriceHelpers }.new }

  context '#price' do
    it 'calculates a rounded price per linear inch' do
      artwork = { length: 3,
                  width: 3,
                  price_per: 3,
                  pricing_scheme: 'linear' }
      result = item.price(artwork)

      expect(result).to eq('20')
    end

    it 'calculates a rounded price per square inch' do
      artwork = { length: 3,
                  width: 3,
                  price_per: 3,
                  pricing_scheme: 'square' }
      result = item.price(artwork)

      expect(result).to eq('25')
    end

    it 'calculates a rounded Jackson Square price' do
      artwork = { length: 3,
                  width: 3,
                  price_per: 3,
                  pricing_scheme: 'jackson_square' }
      result = item.price(artwork)

      expect(result).to eq('35')
    end
  end
end

# rubocop:enable Metrics/BlockLength
