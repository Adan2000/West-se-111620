class Gallery < ApplicationRecord
   has_many :exhibitions, dependent: :destroy
   has_many :paintings, through: :exhibitions

   has_many :contracts
   has_many :curators, through: :contracts
end
