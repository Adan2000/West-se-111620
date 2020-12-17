class CuratorsController < ApplicationController
    def new
        @curator = Curator.new
        @galleries = Gallery.all
    end 
    
    def create
        byebug
        @curator = Curator.create(name:curator_params[:name])
        curator_params[:galleries].each{|gallery_id| Contract.create(curator_id: @curator.id, gallery_id: gallery_id,  pay:curator_params[:pay])}
        redirect_to galleries_path
    end 

    private 

    def curator_params
        params.require(:curator).permit(:name, :pay, galleries:[] )
    end 

end