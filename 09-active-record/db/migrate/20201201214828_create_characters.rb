class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :age
      t.string :dnd_class
      t.string :species
      t.integer :level
      t.integer :player_id

      t.timestamps
    end 
  end
end
