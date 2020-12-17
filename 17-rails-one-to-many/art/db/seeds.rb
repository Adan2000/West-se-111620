Artist.destroy_all
Gallery.destroy_all
Painting.destroy_all
Exhibition.destroy_all

a1 = Artist.create(name:"Vincent van Gogh", death:"	29 July 1890", nationality:"dutch", known_for:"	Post-Impressionism",age:37)
a2 = Artist.create(name:"Mawukura Jimmy Nerrimah", death:"N/A", nationality:"Australian Aboriginal", known_for:"Landscapes",age:98)
a3 = Artist.create(name:"Frida Kahlo", death:"July 13, 1954", nationality:"Mexican", known_for:"Surrealism",age:46)
a4 = Artist.create(name:"Claude Monet", death:"5 December 1926 ", nationality:"Australian Aboriginal", known_for:"Impressionism",age:86)

g1 = Gallery.create(name:"SAM", location:"Seattle Downtown")
g2 = Gallery.create(name:"Van Gogh Museum", location:"Amsterdam")
g3 = Gallery.create(name:"Fry", location:"Seattle")

p1 = Painting.create(name: 'Wayampajarti', image:"https://www.seattlemonorail.com/wp-content/uploads/2017/07/IMG_3597-1024x749.jpg", artist:a2)
p2 = Painting.create(name: 'Wheat field with crows', image:"https://www.vincentvangogh.org/images/paintings/wheat-field-with-crows.jpg", artist:a1)
p3 = Painting.create(name: 'Sunrise', image:"http://1.bp.blogspot.com/-hTNqZh7K9Mk/VMZfMMzemvI/AAAAAAAAEhQ/SBwJkc8JvXE/s1600/sunrise.jpg", artist:a4)
p4 = Painting.create(name: 'Self Portrait 1940', image:"https://upload.wikimedia.org/wikipedia/en/1/1e/Frida_Kahlo_%28self_portrait%29.jpg", artist:a3)

Exhibition.create(painting:p1, gallery:g1)
Exhibition.create(painting:p2, gallery:g2)
Exhibition.create(painting:p2, gallery:g1)
Exhibition.create(painting:p3, gallery:g1)
Exhibition.create(painting:p3, gallery:g2)
Exhibition.create(painting:p4, gallery:g3)

c1 = Curator.create(name:"ix")
c2 = Curator.create(name:"rose")
c3 = Curator.create(name:"Emiley")
c4 = Curator.create(name:"Adam")

Contract.create(curator:c1, gallery:g1, pay:1000)
Contract.create(curator:c1, gallery:g2, pay:1500)
Contract.create(curator:c1, gallery:g3, pay:2000)


Contract.create(curator:c2, gallery:g1, pay:1000)
Contract.create(curator:c2, gallery:g3, pay:2000)

Contract.create(curator:c3, gallery:g1, pay:1000)
Contract.create(curator:c4, gallery:g3, pay:2000)