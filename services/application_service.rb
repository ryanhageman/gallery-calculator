# frozen_string_literal: true

# Parent class for all services
class ApplicationService
  def self.call(*args, &block)
    new(*args, &block).call
  end
end
