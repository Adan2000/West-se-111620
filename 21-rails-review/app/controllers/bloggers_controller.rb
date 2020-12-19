class BloggersController < ApplicationController
    def show
        @blogger = Blogger.find(params[:id])
        @likes = @blogger.posts.sum{|post|post.likes}
        @featured = @blogger.posts.max{|p| p.likes }
        
        #@likes = @blogger.posts.sum(:likes)
    end 
end
