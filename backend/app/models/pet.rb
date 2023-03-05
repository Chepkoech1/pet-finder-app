class Pet < ActiveRecord::Base
  belongs_to :user

  validates :name, presence: true
  validates :breed, presence: true
  validates :age, presence: true, numericality: { greater_than_or_equal_to: 0 }

end