class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  enable :sessions

  # Register
  post '/register' do
    user = User.new(username: params[:username], email: params[:email], password: params[:password])
    if user.save
      session[:user_id] = user.id
      { message: "You are now registered and logged in" }.to_json
    else
      { error: "Registration failed" }.to_json
    end
  end

  # Login
  post '/login' do
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      { message: "You are now logged in" }.to_json
    else
      { error: "Invalid email or password" }.to_json
    end
  end

  # Logout
  get '/logout' do
    session.clear
    { message: "You are now logged out" }.to_json
  end

  # Add a new pet
  post '/pets' do
    user = User.find(session[:user_id])
    pet = user.pets.build(name: params[:name], breed: params[:breed], age: params[:age])
    if pet.save
      { message: "Pet added successfully" }.to_json
    else
      { error: "Failed to add pet" }.to_json
    end
  end

  # View all pets added by the user
  get '/mypets' do
    user = User.find(session[:user_id])
    pets = user.pets.all
    if pets.any?
      pets.to_json
    else
      { message: "You have no pets" }.to_json
    end
  end

  # View all available pets
  get '/pets' do
    pets = Pet.all
    pets.to_json
  end
  get '/user' do
   user = User.all
   user.to_json
  end
  # Search for a pet through name
  get '/pets/search/name/:name' do
    pets = Pet.where('name LIKE ?', "#{params[:name]}%")
    pets.to_json
  end

  # Search for a pet through breed
  get '/pets/search/breed/:breed' do
    pets = Pet.where('breed LIKE ?', "#{params[:breed]}%")
    pets.to_json
  end

  # Update details of pets added by the user
  put '/mypets/:id' do
    pet = Pet.find(params[:id])
    if pet.user_id == session[:user_id]
      if pet.update(name: params[:name], breed: params[:breed], age: params[:age])
        { message: "Pet updated successfully" }.to_json
      else
        { error: "Failed to update pet" }.to_json
      end
    else
      { error: "You are not authorized to update this pet" }.to_json
    end
  end
  
  # Remove details of pets added by the user
  delete '/mypets/:id' do
    pet = Pet.find(params[:id])
    if pet.user_id == session[:user_id]
      if pet.destroy
        { message: "Pet removed successfully" }.to_json
      else
        { error: "Failed to remove pet" }.to_json
      end
    else
      { error: "You are not authorized to remove this pet" }.to_json
    end
  end
end
