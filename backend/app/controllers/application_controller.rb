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
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

end
