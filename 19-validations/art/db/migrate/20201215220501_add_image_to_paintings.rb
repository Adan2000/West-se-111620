class AddImageToPaintings < ActiveRecord::Migration[6.0]
  def change
    add_column :paintings, :image, :string
  end
end
