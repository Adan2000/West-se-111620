class CreateDonuts < ActiveRecord::Migration[6.0]
  def change
    create_table :donuts do |t|
      t.string :flavor
      t.integer :price
      t.string :donut_type
      t.boolean :nuts

      t.timestamps
    end
  end
end
