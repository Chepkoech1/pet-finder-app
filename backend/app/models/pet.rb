class Pet < ActiveRecord::Base
  establish_connection(
    adapter: 'sqlite3',
    database: 'db/development-dev.sqlite3'
   
  )
    has_many :adoptions
    has_many :users, through: :adoptions
    
    validates :name, presence: true
    validates :species, presence: true
    validates :breed, presence: true
  end
  