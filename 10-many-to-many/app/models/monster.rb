class Monster < ActiveRecord::Base
    has_many :encounters 
    has_many :characters, through: :encounters
end 