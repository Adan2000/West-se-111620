class CreateCurators < ActiveRecord::Migration[6.0]
  def change
    create_table :curators do |t|
      t.string :name
    end
  end
end
