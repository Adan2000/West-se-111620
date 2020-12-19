class PostsController < ApplicationController
    before_action :find_post, only: [:show, :edit, :update, :add_likes]
    def new
        @post = Post.new
        @bloggers = Blogger.all 
        @destinations = Destination.all
    end 

    def show
    end 
    
    def create
        @post = Post.new(post_params)
        @post.likes = 0
        @post.save
        redirect_to @post 
    end 

    def edit
    end 

    def update
    end 

    def add_likes
        # @post.likes += 1
        # @post.save 
        @post.update(likes: @post.likes+1)
        redirect_to @post 
    end 

    private

    def find_post
        @post = Post.find(params[:id])
    end 

    def post_params
        params.require(:post).permit(:title, :content, :blogger_id, :destination_id)
    end 
end
