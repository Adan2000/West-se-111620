class CreateAllergies < ActiveRecord::Migration[6.0]
  def change
    create_table :allergies do |t|
      t.belongs_to :user, null: false, foreign_key: {on_delete: :cascade}
      t.belongs_to :ingredient, null: false, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
