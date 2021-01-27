# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
PlantStoreLocation.destroy_all
Plant.destroy_all
Store.destroy_all
light = ['low', 'medium', 'high']
water = ['let dry out', 'keep damp']
price = [1,2,3,4,5]

10.times do 
    Store.create(name:Faker::Company.name, location:Faker::Nation.capital_city)
end 

50.times do 
    Plant.create(name:Faker::Food.fruits, light: light.sample, water: water.sample, price:price.sample)
end 

100.times do 
    PlantStoreLocation.create(store_id:Store.all.sample.id ,plant_id:Plant.all.sample.id)
end 