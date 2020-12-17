class RemoveGalleryFromPaintings < ActiveRecord::Migration[6.0]
  def change
    remove_reference :paintings, :gallery, index: true
  end
end
