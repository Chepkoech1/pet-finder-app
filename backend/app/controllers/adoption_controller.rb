class AdoptionController < Sinatra::Base
    set :default_content_type, 'application/json'
  
    # GET /adoptions
    get '/adoptions' do
      adoptions = Adoption.all
      adoptions.to_json
    end
  
    # POST /adoptions
    post '/adoptions' do
      # Create a new adoption with the data sent in the request body
      adoption = Adoption.create(
        pet_id: params[:pet_id],
        user_id: params[:user_id],
        status: params[:status]
      )
  
      # Return the new adoption as JSON
      adoption.to_json
    end
  
    # PATCH /adoptions/:id
    patch '/adoptions/:id' do
      # Find the adoption by id
      adoption = Adoption.find(params[:id])
  
      # Update the adoption with the data sent in the request body
      adoption.update(
        pet_id: params[:pet_id],
        user_id: params[:user_id],
        status: params[:status]
      )
  
      # Return the updated adoption as JSON
      adoption.to_json
    end
  
    # DELETE /adoptions/:id
    delete '/adoptions/:id' do
      # Find the adoption by id
      adoption = Adoption.find(params[:id])
  
      # Delete the adoption
      adoption.destroy
  
      # Return a success message
      { message: "Adoption deleted successfully" }.to_json
    end
  end
  