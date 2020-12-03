class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|
      t.string :title
      t.integer :levels
      t.text :description
  
    end 
  end
end
