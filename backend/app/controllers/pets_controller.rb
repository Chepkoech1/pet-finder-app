class PetsController < ApplicationController
  
    # GET /pets
    def index
      pets = Pet.all
      render json: pets
    end
    
    # GET /pets/:id
    def show
      pet = Pet.find_by(id: params[:id])
      if pet
        render json: pet
      else
        render json: { error: "Pet not found" }, status: 404
      end
    end
    
    # POST /pets
    def create
      pet = Pet.new(pet_params)
      if pet.save
        render json: pet, status: 201
      else
        render json: { error: pet.errors.full_messages }, status: 422
      end
    end
    
    # PATCH /pets/:id
    def update
      pet = Pet.find_by(id: params[:id])
      if pet
        pet.update(pet_params)
        render json: pet
      else
        render json: { error: "Pet not found" }, status: 404
      end
    end
    
    # DELETE /pets/:id
    def destroy
      pet = Pet.find_by(id: params[:id])
      if pet
        pet.destroy
        head :no_content
      else
        render json: { error: "Pet not found" }, status: 404
      end
    end
    
    private
    
    def pet_params
      params.require(:pet).permit(:name, :species, :breed, :age)
    end
  
  end
  