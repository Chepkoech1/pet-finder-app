class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # array to store pets
  PETS = [
    { name: 'Fluffy', species: 'cat', breed: 'Persian', age: 3 },
    { name: 'Max', species: 'dog', breed: 'Golden Retriever', age: 2 },
    { name: 'Lola', species: 'dog', breed: 'Chihuahua', age: 5 },
    { name: 'Simba', species: 'lion', breed: 'African Lion', age: 6 },
    { name: 'Nemo', species: 'fish', breed: 'Clown Fish', age: 1 },
    { name: 'Coco', species: 'bird', breed: 'Parrot', age: 4 }

  ]

  
  # Add your routes here
  # route to retrieve all pets
  get "/" do
    PETS.to_json
  end

  # Route to retrieve a specific pet by name
  get '/pets/:name' do
    pet = PETS.find { |p| p[:name] == params[:name] }
    if pet
      pet.to_json
    else
      { message: "Pet not found" }.to_json
    end
  end
  # route to add new pet
  post '/pets' do
    pet = JSON.parse(request.body.read)
    PETS << pet
    pet.to_json
  end
  # Route to update pet information
  put '/pets/:name' do
    pet = PETS.find { |p| p[:name] == params[:name] }
    if pet
      updated_pet = JSON.parse(request.body.read)
      pet.update(updated_pet)
      pet.to_json
    else
      { message: "Pet not found" }.to_json
    end
  end
  # route to delete a pet
  delete '/pets/:name' do
    pet = PETS.find { |p| p[:name] == params[:name] }
    if pet
      PETS.delete(pet)
      { message: "Pet deleted" }.to_json
    else
      { message: "Pet not found" }.to_json
    end
  end
end


