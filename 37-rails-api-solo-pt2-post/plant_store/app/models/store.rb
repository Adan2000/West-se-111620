class Store < ApplicationRecord
    has_many :plant_store_locations
    has_many :plants, through: :plant_store_locations, :dependent => :delete_all
end
