class Artist < ApplicationRecord
    has_many :paintings, dependent: :destroy
end
