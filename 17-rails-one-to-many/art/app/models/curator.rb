class Curator < ApplicationRecord
    has_many :contracts
    has_many :galleries, through: :contracts
end
