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
    @tags = @painting.tags.new
  end

  def edit
  end

  def create
    @painting = Painting.create(painting_params)
    byebug
    if @painting.valid?
      redirect_to @painting
    else
      flash[:errors] = @painting.errors.full_messages
      redirect_to new_painting_path
    end 
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
    params.require(:painting).permit(:name, :image, :artist_id, :date_made, tags_attributes:[:name])
  end
end
