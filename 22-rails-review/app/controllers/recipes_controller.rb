class RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
    end 

    def show
        @recipe = Recipe.find(params[:id])
    end 

    def new
        @recipe = Recipe.new
        @users = User.all
        @ingredients = Ingredient.all
    end

    def create 
        byebug
        @recipe = Recipe.create(recipe_params)
        if @recipe.valid?
            redirect_to @recipe
        else 
            flash[:errors] = @recipe.errors.full_messages
            redirect_to new_recipe_path
        end 
    end 

    def edit
        byebug
    end 

    def sort_low_high
        @recipes = Recipe.all.sort_by{|recipe| recipe.ingredients.length}
        render "index"
    end 

    private
    def recipe_params
        params.require(:recipe).permit(:name, :user_id, ingredients:[])
    end 

end
