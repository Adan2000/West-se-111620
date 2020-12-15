class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :death
      t.string :nationality
      t.string :known_for
      t.integer :age

      t.timestamps
    end
  end
end
