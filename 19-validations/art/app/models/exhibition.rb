class Exhibition < ApplicationRecord
  belongs_to :painting
  belongs_to :gallery
end
