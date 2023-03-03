class CreatePet < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.integer :age
      t.string :gender
      t.string :color
      t.text :description
      
      t.timestamps
    end
  end
end
