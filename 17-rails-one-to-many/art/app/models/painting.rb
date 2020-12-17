class Painting < ApplicationRecord
  belongs_to :artist

  has_many :exhibitions, dependent: :destroy
  has_many :galleries, through: :exhibitions
end
