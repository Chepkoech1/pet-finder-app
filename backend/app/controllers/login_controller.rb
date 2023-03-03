class LoginController < ApplicationController
    # POST '/login' route
    post '/login' do
      user = User.find_by(email: params[:email])
  
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        { message: "You are now logged in!" }.to_json
      else
        { error: "Invalid email or password" }.to_json
      end
    end
  
    # GET '/logout' route
    get '/logout' do
      session.clear
      { message: "You are now logged out" }.to_json
    end
  end
  