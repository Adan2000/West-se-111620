class CreatePlantStoreLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :plant_store_locations do |t|
      t.belongs_to :store, null: false, foreign_key: true
      t.belongs_to :plant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
