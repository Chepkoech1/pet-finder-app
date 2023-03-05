class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.integer :age, null: false
      t.string :description
      t.string :image
      t.references :user, foreign_key: true, null: false

      t.timestamps null: false
    end
  end
end
