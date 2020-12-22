class CreateRecipeIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_ingredients do |t|
      t.string :name
      t.string :amount
      t.belongs_to :recipe, null: false, foreign_key: {on_delete: :cascade}
      t.belongs_to :ingredient, null: false, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
