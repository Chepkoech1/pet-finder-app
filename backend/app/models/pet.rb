class Pet < ActiveRecord::Base
    has_many :adoptions
    has_many :users, through: :adoptions
    
    validates :name, presence: true
    validates :species, presence: true
    validates :breed, presence: true
  end
  