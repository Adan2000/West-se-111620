class PlantStoreLocationSerializer < ActiveModel::Serializer
  attributes :id, :store
  has_one :plant
end
