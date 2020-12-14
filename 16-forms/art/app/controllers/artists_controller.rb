class ArtistsController < ApplicationController
    def index 
        @artists = Artist.all
    end 

    def show
        @artist = Artist.find(params[:id])
    end 

    def new
        @artist = Artist.new
    end 

    def edit
        @artist = Artist.find(params[:id])
    end 

    def update
        @artist = Artist.find(params[:id])
        @artist.update(artist_params)
        redirect_to @artist
    end 

    def rose
    end 

    private 

    def artist_params 
        params.require(:artist).permit(:name, :death, :nationality, :known_for, :age)
    end 

end
