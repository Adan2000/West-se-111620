class Player  < ActiveRecord::Base
    has_many :characters
    has_many :campaigns, through: :characters
end