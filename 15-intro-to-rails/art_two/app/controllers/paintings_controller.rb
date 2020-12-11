class PaintingsController < ApplicationController
    # get '/paintings' do
    #     @paintings = Paintings.all 
    #     erb :"paintings/index"
    # end
    def index
        @paintings = Painting.all
    end 

    def show
        @painting = Painting.find(params[:id])
    end 

    def login
        
    end 
end
