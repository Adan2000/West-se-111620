class Contract < ApplicationRecord
  belongs_to :curator
  belongs_to :gallery
end
