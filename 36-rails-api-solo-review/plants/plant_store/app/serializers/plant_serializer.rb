class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :light, :water, :price
  has_many :stores
end
