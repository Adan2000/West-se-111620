class CreateContracts < ActiveRecord::Migration[6.0]
  def change
    create_table :contracts do |t|
      t.belongs_to :curator, null: false, foreign_key: true
      t.belongs_to :gallery, null: false, foreign_key: true
      t.integer :pay

      t.timestamps
    end
  end
end
