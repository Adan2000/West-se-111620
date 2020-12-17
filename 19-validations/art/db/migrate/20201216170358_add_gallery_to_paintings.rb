class AddGalleryToPaintings < ActiveRecord::Migration[6.0]
  def change
    add_reference :paintings, :gallery, index:true
  end
end
