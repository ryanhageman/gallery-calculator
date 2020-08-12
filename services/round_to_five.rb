# frozen_string_literal: true

require_relative './application_service'

# Rounds a number to the nearest 5
class RoundToFive < ApplicationService
  def initialize(number)
    @number = number
    @rounding_table = {
      '0' => '0', '1' => '0',
      '2' => '0', '3' => '5',
      '4' => '5', '5' => '5',
      '6' => '5', '7' => '5',
      '8' => '9', '9' => '9'
    }
  end

  def call
    return number_rounded_up if rounded_last_digit == '9'

    rounded_number
  end

  private

  def rounded_last_digit
    @rounding_table[@number.round.to_s[-1]]
  end

  def rounded_number
    @number.round.to_s.chars.slice(0...-1).push(rounded_last_digit).join
  end

  def number_rounded_up
    ((@number.to_f / 10).round * 10).to_s
  end
end
