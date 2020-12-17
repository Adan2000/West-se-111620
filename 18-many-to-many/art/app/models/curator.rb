class Curator < ApplicationRecord
    has_many :contracts, dependent: :destroy
    has_many :galleries, through: :contracts
  end
  