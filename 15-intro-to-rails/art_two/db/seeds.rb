# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all
Painting.destroy_all

a1 = Artist.create(name:"Van Gogh", death:"1800", nationality:"Dutch", know_for:"Painting", age:40)
Painting.create(name:"Wheatfield with Crows", artist:a1 )