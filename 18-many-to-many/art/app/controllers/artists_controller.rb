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

    def create
        @artist = Artist.create(artist_params)
        redirect_to @artist
    end 


    def edit
        @artist = Artist.find(params[:id])
    end 

    def update
        @artist = Artist.find(params[:id])
        # @artist.update(artist_params)
        if @artist.update(artist_params).valid?
            redirect_to @artist
        else 
            flash[:errors] = @artist.errors.full_messages
            redirect_to edit_artist_path
        end 
    end 

    def rose
    end 

    private 

    def artist_params 
        params.require(:artist).permit(:name, :death, :nationality, :known_for, :age)
    end 

end
