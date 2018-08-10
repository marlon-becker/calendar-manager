class Event < ApplicationRecord
  belongs_to :user
  validates :title, presence: true
  validates :event_time, presence: true
end
