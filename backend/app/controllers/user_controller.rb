class UserController < ApplicationController

    # GET /users
    def index
      users = User.all
      render json: users
    end
  
    # GET /users/:id
    def show
      user = User.find(params[:id])
      render json: user
    end
  
    # POST /users
    def create
      user = User.new(user_params)
      if user.save
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # PATCH /users/:id
    def update
      user = User.find(params[:id])
      if user.update(user_params)
        render json: user
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # DELETE /users/:id
    def destroy
      user = User.find(params[:id])
      user.destroy
      head :no_content
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
  
  end
  