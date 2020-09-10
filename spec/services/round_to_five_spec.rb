# frozen_string_literal: true

require 'spec_helper'
require_relative '../../services/round_to_five'

RSpec.describe 'RoundToFive' do
  it 'rounds numbers below 3 to 0' do
    result = RoundToFive.call(32)

    expect(result).to eq('30')
  end

  it 'rounds numbers between 3 and 7 to 5' do
    result = RoundToFive.call(846)

    expect(result).to eq('845')
  end

  it 'rounds numbers above 7 up to the next ten' do
    result = RoundToFive.call(1298)

    expect(result).to eq('1300')
  end
end
