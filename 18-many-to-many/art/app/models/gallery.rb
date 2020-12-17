class Gallery < ApplicationRecord
    has_many :paintings, dependent: :destroy

    has_many :contracts, dependent: :destroy
    has_many :curators, through: :contracts
end
