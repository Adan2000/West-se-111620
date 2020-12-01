class Player  < ActiveRecord::Base
    has_many :characters
    #Create
        #Player.new
        #Player#.save 
        #Player.create 
    #Read
        #Player.all
        #Player.first
        #Player.last
        #Player.find(2)

    #Update
        #Player#save
        #Player#update
        #Player.update

    #Delete/Destroy
        #Player#destroy
        #Player.destroy_all

end 