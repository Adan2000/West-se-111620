# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Order.destroy_all
Donut.destroy_all
Customer.destroy_all
vanilla_flavor = ['Naked Cake','Cinnamon & Sugar ','Good O’l Glazed', 'Sprinkles','Chocolate Top','Cuckoo for Coconut','Nutty Vanilla','Raspberry Riot']
specialty_donuts = ['Lemon Poppy', 'French Toast']
yeast_raised = ['Twist', 'Bars',"Filled & Jam O’s",'Fritters']


vanilla_flavor.each{|d| Donut.create(flavor:d, price:3, donut_type:'vanilla flavor', nuts:true)}
specialty_donuts.each{|d| Donut.create(flavor:d, price:5, donut_type:'specialty_donuts', nuts:false)}
yeast_raised.each{|d| Donut.create(flavor:d, price:5, donut_type:'yeast_raised', nuts:false)}

Customer.create(name:'ix', budget:50)
Customer.create(name:'rose', budget:50)
Customer.create(name:'emiley', budget:50)
Customer.create(name:'adam', budget:50)

50.times{|o| Order.create(time: "8:50am", customer:Customer.all.sample, donut:Donut.all.sample)}