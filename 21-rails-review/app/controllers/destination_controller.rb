class DestinationController < ApplicationController
    def show
        @destination = Destination.find(params[:id])
        @posts = @destination.posts.last(5)
        @featured = @destination.posts.max{|p| p.likes }
        @ave_age = @destination.bloggers.sum{|b| b.age}/@destination.bloggers.length
    end 
end
