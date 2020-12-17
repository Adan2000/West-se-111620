class Tag < ApplicationRecord
    has_many :painting_tags
    has_many :paintings, through: :painting_tags
end
