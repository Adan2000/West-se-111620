class Plant < ApplicationRecord
    has_many :plant_store_locations
    has_many :stores, through: :plant_store_locations, :dependent => :delete_all
end
