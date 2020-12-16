# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all
Gallery.destroy_all

Painting.destroy_all


a1 = Artist.create(name:"Vincent van Gogh", death:"	29 July 1890", nationality:"dutch", known_for:"Landscapes",age:96)
a2 = Artist.create(name:"Mawukura Jimmy Nerrimah", death:"N/A", nationality:"Australian Aboriginal", known_for:"Painting, drawing still life, portraits and landscapes",age:37)

g1 = Gallery.create(name:"SAM", location:"Seattle Downtown")
g2 = Gallery.create(name:"Van Gogh Museum", location:"Amsterdam")

Painting.create(name: 'Wayampajarti', image:"https://www.seattlemonorail.com/wp-content/uploads/2017/07/IMG_3597-1024x749.jpg", artist:a2, gallery:g1)
Painting.create(name: 'wheat field with crows', image:"https://www.vincentvangogh.org/images/paintings/wheat-field-with-crows.jpg", artist:a1, gallery:g2)