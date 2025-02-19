redis: redis-server
web: bundle exec puma -C config/puma.rb -p 3002
worker: bundle exec sidekiq -C config/sidekiq.yml
vite: npx vite