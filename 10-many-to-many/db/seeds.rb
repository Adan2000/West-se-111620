Character.destroy_all
Campaign.destroy_all
Player.destroy_all

50.times do
    Player.create(name:Faker::Name.name, email:Faker::Internet.email, phone:1231231234)
end

50.times do
    Campaign.create(title:Faker::Game.title, levels: rand(1..20), description:Faker::Movie.quote)
end

80.times do
    Character.create(name:Faker::FunnyName.two_word_name, age:rand(1..600), dnd_class:Faker::Games::DnD.klass, species:Faker::Games::DnD.race, level: rand(1..20), player_id: Player.all.sample.id, campaign_id: Campaign.all.sample.id )
end 

puts 'done'