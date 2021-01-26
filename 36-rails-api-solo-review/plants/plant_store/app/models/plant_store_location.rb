class PlantStoreLocation < ApplicationRecord
  belongs_to :plant
  belongs_to :store
end
