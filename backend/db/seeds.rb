puts "🌱 Seeding spices..."

# Seed your database here
# create some pets
require 'faker'


# Create 10 users
10.times do
  User.create!(
    username: Faker::Internet.username(specifier: 5..10),
    email: Faker::Internet.email,
    password: 'password'
  )
end

# Create 20 pets belonging to the first 5 users
users = User.first(5)
20.times do
  breed = Faker::Creature::Dog.breed
  Pet.create!(
    name: Faker::Creature::Dog.name,
    breed: breed,
    age: Faker::Number.between(from: 1, to: 15),
    description: Faker::Lorem.paragraph(sentence_count: 2),
    image: Faker::LoremFlickr.image(size: "400x400", search_terms: [breed]),
    user: users.sample
  )
end

puts "✅ Done seeding!"
