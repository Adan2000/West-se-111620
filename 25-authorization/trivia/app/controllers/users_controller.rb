class UsersController < ApplicationController
    skip_before_action :require_login,  :only => [:create, :new]

    def new
        @user = User.new 
    end 

    def create 
        
        @user = User.create(user_params)
        log_in_user(@user.id)

        if @user.valid?
            redirect_to new_response_path
        else
            redirect_to user_new 
        end
    end 

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end 

end
