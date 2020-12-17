class CreateExhibitions < ActiveRecord::Migration[6.0]
  def change
    create_table :exhibitions do |t|
      t.belongs_to :painting, null: false, foreign_key: true
      t.belongs_to :gallery, null: false, foreign_key: true

      t.timestamps
    end
  end
end
