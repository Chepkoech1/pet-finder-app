class CreateAdoption < ActiveRecord::Migration[6.1]
  def change
    create_table :adoptions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :pet, null: false, foreign_key: true
      t.date :adoption_date
      
      t.timestamps
    end
  end
end
