Artist.destroy_all
Gallery.destroy_all
Painting.destroy_all
Exhibition.destroy_all

a1 = Artist.create(name:"Vincent van Gogh", death:1890, nationality:"dutch", known_for:"Post-Impressionism", age:37)
a3 = Artist.create(name:"Frida Kahlo", death:1954, nationality:"Mexican", known_for:"Surrealism",age:46)
a4 = Artist.create(name:"Claude Monet", death:1926, nationality:"Australian Aboriginal", known_for:"Impressionism",age:86)

g1 = Gallery.create(name:"SAM", location:"Seattle Downtown")
g2 = Gallery.create(name:"Van Gogh Museum", location:"Amsterdam")
g3 = Gallery.create(name:"Fry", location:"Seattle")

p2 = Painting.create(name: 'Wheat field with crows', image:"https://www.vincentvangogh.org/images/paintings/wheat-field-with-crows.jpg", artist:a1, date_made:1890)
p3 = Painting.create(name: 'Sunrise', image:"http://1.bp.blogspot.com/-hTNqZh7K9Mk/VMZfMMzemvI/AAAAAAAAEhQ/SBwJkc8JvXE/s1600/sunrise.jpg", artist:a4, date_made:1874)
p4 = Painting.create(name: 'Self Portrait 1940', image:"https://upload.wikimedia.org/wikipedia/en/1/1e/Frida_Kahlo_%28self_portrait%29.jpg", artist:a3, date_made:1940)

