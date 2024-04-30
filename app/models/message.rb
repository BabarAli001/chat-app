class Message < ApplicationRecord
  belongs_to :room
  # Message sender
  belongs_to :user
  # Broadcast a model rendering over ActionCable after create/update/destroy.
  broadcasts_to :room 

  validates :content, presence: true
end
