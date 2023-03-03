class User < ActiveRecord::Base
    has_many :adoptions
    has_many :pets, through: :adoptions
    
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 8 }
  end
  