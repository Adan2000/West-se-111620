class PaintingsController < ApplicationController
  before_action :set_painting, only: [:show, :edit, :update, :destroy]

  def index
    @paintings = Painting.all
  end
 
  def show
  end

  def new
    @painting = Painting.new
    @artists = Artist.all
    @galleries = Gallery.all
  end

  def edit
  end

  def create
    byebug
    @painting = Painting.create(painting_params)
    redirect_to @painting
  end

  def update
    @artists = Artist.all
  end


  def destroy
 
    @painting.destroy
    redirect_to paintings_path
  end

  private

  def set_painting
    @painting = Painting.find(params[:id])
  end 
 
  def painting_params
    params.require(:painting).permit(:name, :image, :artist_id, :gallery_id)
  end
end
