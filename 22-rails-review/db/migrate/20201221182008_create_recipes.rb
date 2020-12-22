class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :steps
      t.belongs_to :user, null: false, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
