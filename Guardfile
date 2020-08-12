# frozen_string_literal: true

guard :rspec, cmd: 'bundle exec rspec',
              cmd_additional_args: '--format doc',
              run_all: { cmd_additional_args: '' } do
  require 'guard/rspec/dsl'
  dsl = Guard::RSpec::Dsl.new(self)

  # RSpec files
  rspec = dsl.rspec
  watch(rspec.spec_helper) { rspec.spec_dir }
  watch(rspec.spec_support) { rspec.spec_dir }
  watch(rspec.spec_files)

  # Watch the helpers directory and run the corresponding spec
  helpers_directory = %r{^helpers/(?<helper>.+)\.rb$}
  watch(helpers_directory) { |m| "spec/helpers/#{m[:helper]}_spec.rb" }

  services_directory = %r{^services/(?<service>.+)\.rb$}
  watch(services_directory) { |m| "spec/services/#{m[:service]}_spec.rb" }
end
