# frozen_string_literal: true

require 'slim'

activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

activate :livereload

activate  :external_pipeline,
          name: :webpack,
          command: build? ? 'yarn run build' : 'yarn run start',
          source: 'source',
          latency: 1

config[:js_dir] = 'javascript'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  set :build_dir, 'docs'
  activate :relative_assets
  set :relative_links, true
  activate :minify_css
  activate :minify_javascript
end
