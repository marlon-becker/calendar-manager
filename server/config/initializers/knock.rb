Knock.setup do |config|
  puts Rails.application
  # Set how long a login token is valid.
  config.token_lifetime = 1.week
  config.token_signature_algorithm = 'HS256'
  config.token_secret_signature_key = -> { Rails.application.secret_key_base }
  config.not_found_exception_class_name = 'ActiveRecord::RecordNotFound'

end
