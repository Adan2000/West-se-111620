require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    binding.pry
    erb :welcome
  end

  get "/candy" do
    @candies = Candy.all.map do |candy|
      candy.name
    end 
    
    erb :candy
  end

end
