class IngredientsController < ApplicationController
    def index
        @ingredients = Ingredient.all.sort_by{|ingredient| ingredient.users.length}.reverse
    end 
end
