class CandiesController < ApplicationController

get "/candies" do
    @candies = Candy.all
    erb :"/candy/index"
end

get "/candies/new" do
    erb :"/candy/new"
end

get "/candies/:id" do 
    @candy = Candy.find(params["id"])
    erb :"/candy/show"
end 

get "/candies/edit/:id" do 
   @candy = Candy.find(params["id"])
   erb :"candy/edit"
end 

post "/candies" do
    binding.pry
    # candy = Candy.create(params)
    # redirect to "/candies/#{candy.id}"
end 

patch "/candies/:id" do 
    binding.pry
end 




  
end 