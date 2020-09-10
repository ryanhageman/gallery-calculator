# frozen_string_literal: true

require 'slim'

activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

activate :livereload

config[:js_dir] = 'javascript'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :external_pipeline,
           name: :webpack,
           command: 'yarn run develop',
           source: 'source',
           latency: 1
end

configure :test do
  activate :external_pipeline,
           name: :webpack,
           command: 'yarn run test',
           source: 'source',
           latency: 1
end

configure :build do
  activate :external_pipeline,
           name: :webpack,
           command: 'yarn run build',
           source: 'source',
           latency: 1

  set :build_dir, 'docs'
  activate :relative_assets
  set :relative_links, true
  activate :minify_css
  activate :minify_javascript
end
