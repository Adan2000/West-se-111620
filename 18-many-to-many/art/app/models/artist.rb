class Artist < ApplicationRecord
    has_many :paintings, dependent: :destroy
    
    validates_presence_of :name
    validates_uniqueness_of :name

    validates :age, numericality: { greater_than: 0 }


end
